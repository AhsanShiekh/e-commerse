import React from 'react';
import './Menu-item.styles.scss';
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, ImgUrl, history, size, link, match }) => (
    <div 
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${link}`)}
    >
        <div 
        className='background-image' 
        style={{
            backgroundImage: `url(${ImgUrl})`
        }}/
        >
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);