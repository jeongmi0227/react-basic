import { Component } from "react";

class CardList extends Component{
    
    render() {
        // components will re-render based on two conditions
        // 1. when setState gets called. 
        // 2. when props are updated.
        console.log(this.props);
        const { monsters } = this.props;
        return (
            <div >
                {monsters.map((monster) => (
                    <h1 key={ monster.id}>{ monster.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;