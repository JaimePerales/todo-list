import List from "./list";

class Model {
    allLists = [];

    defaultList = new List('Default');

    currentList = this.defaultList;

    constructor() {
        this.defaultList.name = 'Default List';
        this.allLists.push(this.defaultList);

    }

};


export default Model