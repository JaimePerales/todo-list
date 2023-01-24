/* eslint-disable no-param-reassign */
import { initializeDisplay, displayLists, displayList } from './displayHandler';

import Model from './model';

import TodoItem from './todoItem';

const attachEventListener = (model) => {
    const listButtons = document.querySelectorAll('#list-list button');
    for (let i = 0, l = listButtons.length; i < l; i += 1) {
        listButtons[i].addEventListener('click', () => {
            model.currentList = model.allLists[i];
            displayList(model.currentList);
        })
    }
}

const initializeController = () => {
    const model = new Model();
    initializeDisplay();
    displayLists(model.allLists);
    displayList(model.currentList);
    attachEventListener(model);

    const taskTitleInput = document.querySelector('#task-input');

    taskTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            const item = new TodoItem();
            item.title = taskTitleInput.value;
            model.currentList.push(item);
            displayList(model.currentList);
            taskTitleInput.value = null;

        }
    });

    const listTitleInput = document.querySelector('#list-input');

    listTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            const item = [];
            item.name = listTitleInput.value;
            model.allLists.push(item);
            displayLists(model.allLists);
            listTitleInput.value = null;
            attachEventListener(model);

        }
    });


}

export default initializeController;