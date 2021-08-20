import React, { useState, useEffect } from 'react';
import "../css/QuizSection.css";
import { db } from '../firebaseinit';
import { Confirm } from 'react-st-modal';
import { useHistory } from 'react-router';



//create functions 
var array = [];
var opt = 'f';


const QuizUI = ({ match }) => {
    const history = useHistory();
    let [currentQuestion, setCurrentQuestions] = useState(1);
    const [data, setData] = useState([]);
    let [page, setPage] = useState(0);
    const [btnText, seBtnText] = useState('Next');
    const [btnVisibility, setBtnVisibility] = useState(false);



    useEffect(() => {

        const getData = (path) => {
            const arr = [];
            db.collection("Quiz").doc(`${path}_Quiz`).collection("Questions").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    arr.push(doc.data());
                });

                setTimeout(() => {
                    setData(arr);
                }, 1000);
            });
        }


        getData(match.params.type);
    }, [match.params.type])


    const dialog = async () => {
        if (opt === "t") {
            array.push(opt);
        }
        const result = await Confirm(`Your Scroe are ${array.length * 10}/100`,
            'Result');

        if (result) {
            // Сonfirmation confirmed
            array = [];
            setCurrentQuestions("1");
            history.push("/");
        } else {
            // Сonfirmation not confirmed
            // array = [];
            opt = '';
        }
    }



    const storeAnswer = (event) => {
        const ans = event.target.value;
        //console.log(ans);
        opt = ans;
    }



    const nxtButton = () => {
        if (opt === "t") {
            array.push(opt);
        }
        //console.log(array);
        //console.log(page);
        if (currentQuestion >= 9) {
            seBtnText("Finish");
            setPage(Math.floor(Math.random() * 60));
            setCurrentQuestions(currentQuestion += 1);
        } else {
            setPage(Math.floor(Math.random() * 60));
            setCurrentQuestions(currentQuestion += 1);
            opt = "";
        }

        //countDown(30);
    }

    const RadioButton = (props) => {
        return (
            <div className="root_option">

                {<div className="option_design">
                    <input type="radio" name="ic" value={props.ans} onChange={storeAnswer} />
                    <label style={{ fontSize: "2.8vh", fontWeight: "normal" }} className="label_radio_btn">
                        {
                            ` ${props.op}`
                        }
                    </label>

                </div>

                }
                <br></br>
            </div>

        )
    }




    return (
        <div className="root">

            {/* header section */}

            <div className="header_section">
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>{match.params.type + " Quiz"}</h2>
            </div>

            {/* quiz section and questions */}

            <div className="Quiz_Section">

                <h2>{match.params.type + " Quiz"}</h2>

                <div>
                    <div className="Counter_div">
                        <p>{`${currentQuestion}/10`}</p>
                    </div>
                </div>

                <div className="inner_layer_Quiz_Section">
                    {(data.length > 0) ? <h3 style={{ paddingLeft: "2vw", paddingRight: "2vw", fontSize: "3.8vh" }}>{data[page].questions}</h3> : null}
                    <div className="Options_Answer">
                        <div className="options_inner_div">
                            {
                                (data.length > 0) ?
                                    data[page].options.map((item, key) => {
                                        return (
                                            <RadioButton key={key} op={item.options} ans={item.answer} />
                                        )
                                    })

                                    : null
                            }
                        </div>
                    </div>

                    {<button className="next_btn" onClick={() => {
                        if (btnText === "Finish") {
                            dialog();
                        } else {
                            nxtButton();
                        }

                    }}>{btnText}</button>}
                </div>
            </div>
        </div>
    )
}

export default QuizUI;