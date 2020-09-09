import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxi'
const modal=(props) => (
    <div
     className={classes.Modal}
     
     style={{
        transform: props.show ? 'show':'hidden',
        opacity:props.show ? '1':'0'
     }}>
     {props.children}
     </div>
 );
export default modal;
