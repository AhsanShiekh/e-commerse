import React from 'react';
import {connect} from 'react-redux';
import PreviewCollection from '../PreviewCollection/preview-collection.component';
import SelectCollections from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    collections: SelectCollections(state)
})

export default connect(mapStateToProps)(CollectionsOverview)