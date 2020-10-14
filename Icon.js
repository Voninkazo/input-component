import React from 'react';
import IconMobile from './icons/mobile.svg';
import LockClosed from './icons/lock-closed.svg';
import PhoneOutgoing from './icons/phone-outgoing.svg';
import ThumbUp from './icons/thumb-up.svg';
import Mail from './icons/mail.svg';
import './inputs.css';

function Icons(props) {
    let icon;
    const style = props.align === "icon--right" ? `icon--right` : `icon--left`
    switch (props.name) {
        case 'mobile':
            icon = < img src = { IconMobile } className={style}
            />
            break;
        case 'lock-closed':
            icon = < img src = { LockClosed } className={style}
            />
            break;
        case 'phoneuotgoing':
            icon = < img src = { PhoneOutgoing } className={style}
            />
            break;
        case 'thumbup':
            icon = < img src = { ThumbUp } className={style}
            />
            break;
        case 'mail':
            icon = < img src = { Mail } className={style}
            />
            break;
    }
    return icon;
}

export default Icons;