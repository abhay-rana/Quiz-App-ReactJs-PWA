import React from 'react';
import '../css/selectorCard.css'
import { useHistory } from 'react-router';

const LangSelectCard = (props) => {
    const history = useHistory();
    return (
        <div className="root_card">
            <div className="upper_side">
                <img width="80%" height="40%" src={props.img} alt="images"></img>
            </div>
            <div className="lower_side">
                <h3 style={{ fontFamily: "'Playfair Display', serif" }}>{props.title}</h3>
                <p>{props.msg}</p>
                <button style={{ fontFamily: "'Style Script', cursive", fontSize: "4vh" }} onClick={() => {
                    history.push("./" + props.keyword)
                    console.log("click");
                }}>Start Quiz</button>
            </div>
        </div >
    )
}

export default LangSelectCard;