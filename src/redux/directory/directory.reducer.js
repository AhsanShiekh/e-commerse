const INITIAL_STATE = {
    sections: [
        {
            title: 'Hats',
            ImgUrl: 'https://images.unsplash.com/photo-1565465295423-68c959a599ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
            id: 1,
            link: 'shop/hats'
        },
        {
            title: 'Jackets',
            ImgUrl: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            link: 'shop/jackets',
            id: 2
        },
        {
            title: 'Sneakers',
            ImgUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            link: 'shop/sneakers',
            id: 3
        },
        {
            title: 'Men',
            ImgUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            size: 'large',
            link: 'shop/men',
            id: 4
        },
        {
            title: 'Women',
            ImgUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            link: 'shop/women',
            size: 'large',
            id: 5
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;