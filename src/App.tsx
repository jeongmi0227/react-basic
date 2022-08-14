// import { Component } from 'react';
import { useState,useEffect,ChangeEvent } from 'react';
// useState essentially gives us a ability to encapsulate local state in a functional component.
import { getData } from './utils/data.utils';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export type Monster = {
  id: string;
  name: string;
  email: string;
}
// What is component?
// A component is a self-contained piece of code that returns some visual UI representation of HTML,CSS,JS
const App = () => {
  const [searchField, setSearchField] = useState(''); //[value,setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [title, setTitle] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');
  // side effects can be generated from functional components using the use effect hook
  // side effect is some behavior that we trigger from our functions that affects something that exists outside of the scope of the function.

  // first is going to be a callback function, second is going to be an array of dependencies.
  // call back is going to be the code or the fact that we want to happend inside of our functional component.
  // second array contains different dependencies and most likely going to be state of values or prop values
  // whenver any of the values inside of this dependency change run he useEffect function and its callback function.
  useEffect(() => { 
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange=(event:ChangeEvent<HTMLInputElement>):void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange=(event:ChangeEvent<HTMLInputElement>):void => {
    const titleString = event.target.value.toLocaleLowerCase();
    setTitle(titleString);
  }
  return (
    <div className="App">
      <h1 className='app-title'>{ title}</h1>
      <SearchBox onChageHanlder={onSearchChange} placeholder='search monsters' className='search-box' />
      <br />
      <SearchBox onChageHanlder={onTitleChange} placeholder='set title' className='title search-box' />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

// pure function 
// take some arguments and return exact same thing, no matter how many times it gets called.
// A function is considered pure when everything that dictates what it returns is completely isolated from what gets passed into it.
// return should solely be dependent on the props being passed in.

// impure function 
// if it is to modify or rely on something outside of its scope and beyone the parameters being passed into it
// side effect is when a function creates some kind of effect outside of its scope.
// Use hooks to create impure functions.

// rendering concept
// Developer really understands when React is rendering and re-rendering the website.
// class App extends Component{
//   // constructor will be invovled first
//   constructor() {
//     super();

//     // local state
//     this.state = {
//       monsters: [],
//       searchField:''
//     };

//   }
//   // will run whenever the component mounts
//   // Mounting is the first time a component gets placed onto the top
//   // First time React renders a component onto the page that is mounting.
//   // It only happens once througout the components life.
//   // The only time when a coponent might re mount is if it's been unmounted it, 
//   // meaning it's been completely removed form the DOM.
//   componentDidMount() { 
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       }, () => { 
//         // console.log(this.state);
//       }));
//   }
//   // Optimization2
//   // declare a function (once it is initialized when class component initializes, it will not re-render)
//   // anonymous functions will be re-render whenever call is being called.
//   onSearchChange=(event) => {
//     // console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//     // this.state.monsters.filter((monster) => event.target.value == monster);
//   }
//   // The way that react to text it that there's a change is that uses 
//   // JavaScript underlying reference by memeory for an object.
//   // In memeory, whenever we instantiate a variable
//   // state is diffent is if there is a comopletely different object in memeory.
  
//   render() {
//     // Optimization1 readable
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     // Filtering down a list, always want a filter from the full list.
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster</h1>
//         <SearchBox onChageHanlder={onSearchChange} placeholder='search monsters'className='search-box'/>
//         {/* {
//           // callback function 
//           filteredMonsters.map((monster) => { 
//             return <div key={monster.id}><h1>{monster.name}</h1></div>;
//             // why do we need key? 
//             // optimizing purpose when it comes to re rendering or updating components
//             // using this key is able to be much more performant and efficient when it
//             // comes to differentiating these components from each other and then figuring out 
//             // which ones to render appropriately when their value update.
//           })} */}
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }

// }


export default App;
