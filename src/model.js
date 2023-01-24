class Model {
    allLists = [];

    defaultList = [];

    currentList = this.defaultList;

    constructor() {
        this.defaultList.name = 'Default List';
        this.allLists.push(this.defaultList);

    }

};


export default Model