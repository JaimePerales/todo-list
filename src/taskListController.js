/* eslint-disable no-param-reassign */
import { initializeDisplay, displayLists, displayList } from './displayHandler';

import Model from './model';

import TodoItem from './todoItem';



const attachDeleteTaskEventListener = (model) => {
    const listButtons = document.querySelectorAll('.todo-item button');
    for (let i = 0, l = listButtons.length; i < l; i += 1) {
        listButtons[i].addEventListener('click', () => {
            model.currentList.splice(i, 1);
            displayList(model.currentList);
            attachDeleteTaskEventListener(model);
        })
    }
}

const attachChangeListEventListener = (model) => {
    const listButtons = document.querySelectorAll('#list-list button');
    for (let i = 0, l = listButtons.length; i < l; i += 1) {
        listButtons[i].addEventListener('click', () => {
            model.currentList = model.allLists[i];
            displayList(model.currentList);
            attachDeleteTaskEventListener(model);
        })
    }
}

const initializeController = () => {
    const model = new Model();
    const lame = new TodoItem();
    lame.title = 'Test';
    model.defaultList.push(lame);
    initializeDisplay();
    displayLists(model.allLists);
    displayList(model.currentList);
    attachChangeListEventListener(model);
    attachDeleteTaskEventListener(model);

    const taskTitleInput = document.querySelector('#task-input');

    taskTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            const item = new TodoItem();
            item.title = taskTitleInput.value;
            model.currentList.push(item);
            displayList(model.currentList);
            attachDeleteTaskEventListener(model);
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
            model.currentList = item;
            displayList(model.currentList)
            listTitleInput.value = null;
            attachChangeListEventListener(model);

        }
    });


}

export default initializeController;