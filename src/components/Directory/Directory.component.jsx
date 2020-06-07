import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../Menu-item/Menu-item.component';
import { connect } from "react-redux";
import SelectSections from '../../redux/directory/directory.selector';

const Directory = ({sections}) => (
            <div className="directory-menu">
                {sections.map((section) => (
                    <MenuItem link={section.link} key={section.id} title={section.title} ImgUrl={section.ImgUrl} size={section.size}/>
                ))}
            </div>
);


const mapStateToProps = state => ({
    sections: SelectSections(state)
})

export default connect(mapStateToProps)(Directory);
