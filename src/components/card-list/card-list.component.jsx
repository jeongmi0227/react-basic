import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component{
    
    render() {
        // components will re-render based on two conditions
        // 1. when setState gets called. 
        // 2. when props are updated.
        console.log(this.props);
        const { monsters } = this.props;
        return (
            <div className="card-list" key={monsters.id}>
                {monsters.map((monster) => {
                    // const { name, email, id } = monster;
                    return (
                        <Card monster={ monster}/>
                    );
                })};
            </div>
        );
    }
}

export default CardList;