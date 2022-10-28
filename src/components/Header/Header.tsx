import React from "react";
import classes from "./Header.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShip} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

// let test1 = "header";
// let test2 = "active";
// let classNew = `${classes.header} ${classes.active}`;это двойной класс его можно использовать

const Header = (props: any) => {

    return (
        <header className={classes.header}>
            <FontAwesomeIcon icon={faShip} className={classes.icon}/>
            {/*<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sOdNTUYrgWYsUwe8LF1FJ4-XXbBp9lLlfzKppSe2oOFumoLz&usqp=CAU"></img>*/}
            {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbcaKdblglmQe9isNHnTB-6YwznE-rKTELEcyGQom6pck_eHpV&usqp=CAU"></img>*/}
            <div className={classes.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.loginOutTC}>LogOut</button> </div> : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    );
};

export default Header;
