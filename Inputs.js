import React from 'react';
import './inputs.css';
import './icons.css';

function Inputs(props) {
    let classes = props.error ? `${props.error}` : 'input';
    if (props.value) {
        classes= `${props.value}`;
    }
    else if (props.error) {
        classes = `error`
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
    else if (props.startIcon) {
        classes=`startIcon ${props.startIcon}`
    }
    else if (props.endIcon) {
        classes=`endIcon ${props.endIcon}`
    }

        return (
            <div className="parent">
                <label className={props.helperTexts ? `helpertext` : ''}>
                    <p className={ props.error ? `label-error` : ''}>Label</p>
                    <input 
                    className={classes}
                    disabled={props.disabled} 
                    type="text" 
                    value={props.value ? `${props.value}` : ''}
                    placeholder={props.children}
                    />
                    { props.helperTexts ? <span className={props.error ? `text-error` : ''}>{props.helperTexts ? `${props.helperTexts}` : ''}</span> : ''}
                </label>
            </div>
        )
}

export default Inputs;