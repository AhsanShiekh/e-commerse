import React from 'react';
import { SelectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from '../../components/collection-item/Collection-item.component';
import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    return(
        <div className="collection-page">
            <h2 className='title'>{collection.title}</h2>
            <div className="items">
            {
                collection.items.map(item => 
                    <CollectionItem className='collection-item' key={item.id} item={item}/>
                )
            }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: SelectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);