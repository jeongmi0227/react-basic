// import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";
import { Monster } from '../../App';

type CardListProps = {
    monsters: Monster[];
}
const CardList = ({monsters}:CardListProps) => (
    // console.log(id);
    // components will re-render based on two conditions
    // 1. when setState gets called.
    // 2. when props are updated.
        <div className="card-list">
            {monsters.map((monster) => {
            return <Card monster={monster} key={monster.id} />;
        })};
        </div>
);

export default CardList;