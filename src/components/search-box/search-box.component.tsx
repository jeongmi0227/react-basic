import { ChangeEvent,ChangeEventHandler } from "react";
// CSS file will apply entire website not only specific to this component.
// Other components are not protected from the styling, even though importing styling
// One CSS is actually bundled and then put onto a website that's just as is applicable to every single components.

// putting import statement is for our sytling that is related to the specific components, we want to put it where that components live
// as well as to target access so only relevant to the components code inside.
import './search-box.styles.css';
// ts can be converted into js 
// not all js can be converted into ts
// any is special keyword inside of TypeScript any means that any possible type can be passed as an argument
// "never want to use any type"
// any defeats the purpose of using TypeScript we want to implicitly or explicitly know what types are being passed

// type for object use 'type' or 'interface'
// These two used to be more different when Typecript first came out, but over time their overlap is significantly greater now
// key rules 
// type vs interface
// interfaces are extendable very similar to class components
// types do not have the ability to overload and extend

// type : Functional programming style of code 
// interface: object oriented style


// All interfaces start will I 
// I to designate that they are a interface 
// can extend or overloading (using same interface name)
// interface ISearchBoxProps{
//     className: string;
//     placeholder?: string; // ? same as | null
// }

// interface ISearchBoxProps{
//     onChageHanlder:(a:string)=>void
// }
// type allow us to do 'union'
// union is a combination of types
type SearchBoxProps={
    className: string;
    placeholder?: string;
    // func: ChangeEventHandler;
    onChageHanlder: (event: ChangeEvent<HTMLInputElement>) => void;
}
// React has a lot of types by default inside of all of these components that they've given us
// The reason why React has typed all of these HTML by React define js components is so that we can actually use TypeScript with them
const SearchBox=({className,placeholder,onChageHanlder}:SearchBoxProps)=>(
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChageHanlder}
    />
);
// React is typed by default
// typed means that all of these components have these type definitions and what they expected on their methods themselves.
export default SearchBox;