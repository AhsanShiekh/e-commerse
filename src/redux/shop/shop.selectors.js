import { createSelector } from "reselect";


const SelectShop = state => state.shop;

const SelectCollections = createSelector(
    [SelectShop],
    shop => shop.collections
)

export const SelectCollectionsAsPreview = createSelector(
    [SelectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const SelectCollection = collectionUrlParam => createSelector(
    [SelectCollections],
    collections => collections[collectionUrlParam]
);

export default SelectCollections;