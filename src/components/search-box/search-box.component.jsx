import { Component } from "react";
// CSS file will apply entire website not only specific to this component.
// Other components are not protected from the styling, even though importing styling
// One CSS is actually bundled and then put onto a website that's just as is applicable to every single components.

// putting import statement is for our sytling that is related to the specific components, we want to put it where that components live
// as well as to target access so only relevant to the components code inside.
import './search-box.styles.css';
const SearchBox=({className,placeholder,onChageHanlder})=>(
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChageHanlder}
    />
);

export default SearchBox;