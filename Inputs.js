import React from 'react';
import './inputs.css';
import Icons from './Icon';
import './icons.css';

function Inputs(props) {
    let classes;
    if(props.error) {
        classes =`${props.error}`;
    }
    if (props.value) {
        classes= `${props.value}`;
    }
    else if(props.disabled) {
        classes=`input--disabled`;
    }
    else if (props.size) {
        classes= `input--${props.size}`
    }
    else if (props.fullWidth) {
        classes=`fullwidth`;
    }

    else if(props.multiLine) {
        classes=`multiline`;
    }
        return (
            <div className="parent">
                <label className={props.helperTexts ? `helpertext` : ''}>
                    <p className={ props.error ? `label-error` : ''}>Label</p>
                    <span className={props.startIcon ? `icon--left` : `icon--right`}>
                        {props.startIcon ? <Icons name={props.startIcon} align="icon--left"/> : ''}
                        {props.endIcon ? <Icons name={props.endIcon} align="icon--right"/> : ''}
                    </span>
                    <input 
                    className={classes} 
                    disabled={props.disabled} 
                    type="text" 
                    value={props.value ? `${props.value}` : ''}
                    placeholder={props.children}
                    />
                    { props.helperTexts ? <span>{props.helperTexts ? `${props.helperTexts}` : ''}</span> : ''}
                    {props.multiLine ? <textarea name="text" rows="4" ></textarea> : ''}
                </label>
            </div>
        )
}

export default Inputs;