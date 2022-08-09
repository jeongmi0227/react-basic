import { type } from "@testing-library/user-event/dist/type";
import { Component } from "react";
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

// All interfaces start will I 
// I to designate that they are a interface 
// can extend or overloading (using same interface name)
interface ISearchBoxProps{
    className: string;
    placeholder?: string; // ? same as | null
}

interface ISearchBoxProps{
    onChageHanlder:(a:string)=>void
}


const SearchBox=({className,placeholder,onChageHanlder}:ISearchBoxProps)=>(
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChageHanlder}
    />
);

export default SearchBox;