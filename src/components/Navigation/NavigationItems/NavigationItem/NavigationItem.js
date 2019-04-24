import React from 'react'
import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    // console.log('this is the children: ', prop.children);
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            className={props.active}   
            // className={`Button ${props.btnType}`} 
        > 
            {props.children}  
        </a>
    </li>
);

export default navigationItem;