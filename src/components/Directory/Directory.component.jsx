import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../Menu-item/Menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: 
            [
                {
                    title: 'Hats',
                    ImgUrl: 'https://images.unsplash.com/photo-1565465295423-68c959a599ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
                    id: 1,
                    link: 'hats'
                },
                {
                    title: 'Jackets',
                    ImgUrl: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    link: 'hats',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    ImgUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    link: 'hats',
                    id: 3
                },
                {
                    title: 'Men',
                    ImgUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                    size: 'large',
                    link: 'hats',
                    id: 4
                },
                {
                    title: 'Women',
                    ImgUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                    link: 'hats',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {this.state.sections.map((section) => (
                    <MenuItem link={section.link} key={section.id} title={section.title} ImgUrl={section.ImgUrl} size={section.size}/>
                ))}
            </div>
        );
    }
}

export default Directory;
