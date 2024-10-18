import React from 'react';
import {AiOutlineClose,  AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import "./notification.css";

const icons = {
    success: <AiOutlineCheckCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
    error:<AiOutlineCloseCircle />
}
const Notification = ({ type = "info", message, onClose = () => { } }) => {
    return (
        <div className={`notification ${type}`}>
            {/*icon*/}
            {icons[type]}
            {/*message*/}
            {message}
            {/*close*/}
            <AiOutlineClose color='white' className="closeBtn" onClick={()=>onClose() } />
        </div>
    );
};

export default Notification;