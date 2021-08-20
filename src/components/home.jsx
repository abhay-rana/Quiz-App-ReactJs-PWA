import React, { useState } from 'react';
import '../css/home.css';
import { useHistory } from 'react-router';
import { genrateMessage } from './cardString';
import loadable from '@loadable/component';
import icon from '../images/code.png';

//icons 
import MenuIcon from '@material-ui/icons/Menu';

const Card = loadable(() => import('./LangCardView'));



const HomeUI = () => {
    const history = useHistory();
    const [menu, setMenu] = useState(false);


    return (
        //root Element 
        <div>
            {/*navigation section*/}
            <nav className="nav_bar_root">
                <div className="nav_left_area">
                    <div></div>
                    <h2 style={{ fontFamily: "'Style Script', cursive" }}>PQuiz</h2>
                </div>
                <div className="nav_right_area">
                    <MenuIcon onClick={() => { setMenu(!menu) }} style={{ marginTop: "1vh" }} />
                </div>
            </nav>

            {/* Drop Down Menu*/}

            {(menu) ? <div className="nav_drop_down_section">
                <p style={{ fontFamily: "'Style Script', cursive", fontSize: "4vh" }} onClick={() => {
                    history.push("/aboutme");
                }}>About Me</p>
            </div> : null}

            {/* Body */}

            <div className="body_root">
                <div className="body_intro">
                    <div className="intro">
                        <div className="intro_img">
                            <img style={{
                                height: "40%", width: "40%", marginTop: "20%"
                            }} src={icon}></img>
                        </div>

                        <div className="intro_details">
                            <h2 style={{ fontFamily: "'Style Script', cursive", fontSize: "8vh", marginTop: "4vh" }}>Welcome To all Programmer's</h2>
                            <br></br>
                            <p style={{ fontFamily: "'Style Script', cursive", fontSize: "4vh" }}>This web app is specially made for programmers to test their programming knowledge.</p>
                            <br></br>
                            <p style={{ fontFamily: "'Style Script', cursive", fontSize: "4vh" }}>This is a Quiz platform. Where You can try your knowledge about programming language here are some most popular language quiz for programmers.</p>
                        </div>
                    </div>

                    <div className="body_section">
                        <h2 style={{ width: "100vw", height: "auto", fontFamily: "'Style Script', cursive", fontSize: "8vh" }}>Quizs</h2>
                        <div className="card_section">
                            <Card title={"Java Quiz"} msg={genrateMessage("Java")} img={"https://th.bing.com/th/id/R.325731898416cd08042a1c4e8e884506?rik=ptMvN%2fJEe3ZlNQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpapirus-team%2fpapirus-apps%2f256%2fjava-icon.png&ehk=ubS5JNZqcf8rPoO0yVXorcJjcFln20K6QWwfI5e5nss%3d&risl=&pid=ImgRaw&r=0"} keyword={"Java"} />
                            <Card title={"HTML Quiz"} msg={genrateMessage("Html")} img={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"} keyword={"Html"} />
                            <Card title={"CSS Quiz"} msg={genrateMessage("Css")} img={"https://www.armortechs.com/upload/image/blog/css-variables-css-3-logo.png"} keyword={"Css"} />
                            <Card title={"JavaScript Quiz"} msg={genrateMessage("Javascript")} img={"https://www.shareicon.net/data/512x512/2016/07/06/106573_software_512x512.png"} keyword={"Javascript"} />
                            {/*<Card title={"Python Quiz"} msg={genrateMessage("Python")} img={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"} keyword={"Python"} />
                        <Card title={"c++ Quiz"} msg={genrateMessage("C++")} img={"https://i1.wp.com/filipjaniszewski.com/wp-content/uploads/2016/12/C-PNG-Clipart.png?fit=550%2C380"} keyword={"Cpp"} />
                        <Card title={"C Quiz"} msg={genrateMessage("C")} img={"https://th.bing.com/th/id/OIP.MZihUxcdtjmD9TU3Tt6IDAHaHa?pid=ImgDet&rs=1"} keyword={"C"} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeUI;