import React from 'react';
import './inputs.css';
import Icons from './Icon';

function Inputs(props) {
    let classes= props.error ? `error` : 'input'; 
        return (
            <div>
                <label className={props.helperTexts ? `helpertext` : ''}>
                    <p className={ props.error ? `label-error` : ''}>Label</p>
                    <input 
                    className={classes} 
                    disabled={props.disabled} 
                    type="text" 
                    placeholder={props.children}
                    />
                    <span>{props.helperTexts ? `${props.helperTexts}` : ''}</span>
                    <span>
                        {props.startIcon ? <Icons name={props.startIcon} /> : ''}
                        {props.endIcon ? <Icons name={props.endIcon} align="right" /> : ''}
                    </span>
                </label>
            </div>
        )
}

export default Inputs;