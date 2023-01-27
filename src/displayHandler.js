/* eslint-disable import/no-cycle */
import { attachChangeListEventListener, attachDeleteTaskEventListener, attachDeleteListEventListener, attachExpandTaskEventListener } from './eventListenrHandler';

const initializeDisplay = () => {

    const content = document.querySelector('#content');

    const listWrapper = document.createElement('div');
    listWrapper.id = 'list-wrapper';
    const listOfTaskLists = document.createElement('div');
    content.appendChild(listWrapper);
    listWrapper.appendChild(listOfTaskLists);
    listOfTaskLists.id = 'list-list';

    const listInputDiv = document.createElement('div');
    const listTitleInput = document.createElement('input');
    listInputDiv.appendChild(listTitleInput);
    listWrapper.appendChild(listInputDiv);
    listTitleInput.id = 'list-input'


    const taskWrapper = document.createElement('div');
    taskWrapper.id = 'task-wrapper';
    const taskListDiv = document.createElement('div');
    taskListDiv.id = 'task-list';
    taskWrapper.appendChild(taskListDiv);

    const taskTitleInputDiv = document.createElement('div');
    taskTitleInputDiv.id = 'task-input-div';
    taskWrapper.appendChild(taskTitleInputDiv);

    content.appendChild(taskWrapper);

    const taskTitleInput = document.createElement('input');
    taskTitleInputDiv.appendChild(taskTitleInput);
    taskTitleInput.id = 'task-input'


}

const clearLists = () => {
    const listsDiv = document.querySelector('#list-list');
    let listItem = listsDiv.lastElementChild;
    while (listItem) {
        if (listItem.id === 'list-input') {
            break;
        } else {
            listsDiv.removeChild(listItem);
            listItem = listsDiv.lastElementChild;
        }
    }
}

const displayLists = (model) => {
    clearLists();
    const listListDiv = document.querySelector('#list-list');
    for (let i = 0, l = model.allLists.length; i < l; i += 1) {
        const listItemDiv = document.createElement('div');
        const list = document.createElement('button');
        list.classList.add('list-select-button');
        listItemDiv.classList.add('list');
        const listTitle = document.createElement('h1');
        listTitle.textContent = model.allLists[i].name;
        list.appendChild(listTitle);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('list-delete-button');
        listItemDiv.appendChild(list);
        listItemDiv.appendChild(deleteButton);
        listListDiv.appendChild(listItemDiv);
    }
    attachChangeListEventListener(model);
    attachDeleteListEventListener(model);

}

const clearList = () => {
    const listDiv = document.querySelector('#task-list');
    let listItem = listDiv.lastElementChild;
    while (listItem) {
        listDiv.removeChild(listItem);
        listItem = listDiv.lastElementChild;
    }
}
const displayList = (model) => {
    clearList();
    const listDiv = document.querySelector('#task-list');
    for (let i = 0, l = model.currentList.length; i < l; i += 1) {
        const task = document.createElement('div');
        const taskTitle = document.createElement('h1');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        task.classList.add('todo-item');
        task.id = i;
        taskTitle.textContent = model.currentList[i].title;
        task.appendChild(taskTitle);
        task.appendChild(deleteButton);
        listDiv.appendChild(task);
    }

    attachDeleteTaskEventListener(model);
    attachExpandTaskEventListener(model);


}


export {
    initializeDisplay,
    displayLists,
    displayList
};