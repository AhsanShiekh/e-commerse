import React from 'react';
import './Menu-item.styles.scss';

const MenuItem = ({ title, ImgUrl, key, size }) => (
    <div 
    className={`${size} menu-item`}
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

export default MenuItem;