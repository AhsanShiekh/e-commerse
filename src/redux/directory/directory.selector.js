import { createSelector } from "reselect";

const SelectDirectory = state => state.directory;

const SelectSections = createSelector(
    [SelectDirectory],
    directory => directory.sections
)

export default SelectSections;