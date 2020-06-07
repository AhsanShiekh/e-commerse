import { createSelector } from "reselect";


const SelectShop = state => state.shop;

const SelectCollections = createSelector(
    [SelectShop],
    shop => shop.collections
)

export const SelectCollection = collectionUrlParam => createSelector(
    [SelectCollections],
    collections => collections[collectionUrlParam]
);

export default SelectCollections;