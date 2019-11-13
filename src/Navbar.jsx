import React from 'react';
import './styles.css';
export default function Navbar(props) {
    return (
        <div className="header-content">
            <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="docplanner logo"/>
            <ul className="main-nav">
                {props.myList.map((el)=>
                    <a href=""><li className="main-nav-list">{el}</li></a>
                )}
            </ul>
        </div>
    )
}
