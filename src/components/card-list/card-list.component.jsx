import './card-list.style.css';
import {Card} from '../card/card.component'
export const CardList = (props)=>{
    return (
        <div className="card-list">
                {props.monster.map((el) => {
            return <Card monster={el} key={el.id}/>
          })}
        </div>
    );
}