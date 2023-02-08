/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */

import { format } from 'date-fns';

import { initializeDisplay, displayLists, displayList } from './displayHandler';

import Model from './model';

import TodoItem from './todoItem';



const initializeController = () => {
    const model = new Model();
    const lame = new TodoItem('Test', 'First Test', format(new Date(), 'yyyy-MM-dd'), 'high', '');
    const lame2 = new TodoItem('Test2', 'Second Test', format(new Date(), 'yyyy-MM-dd'), 'medium', '');
    const lame3 = new TodoItem('Test3', 'Third Test', format(new Date(), 'yyyy-MM-dd'), 'low', '');
    model.currentList.push(lame);
    model.currentList.push(lame2);
    model.currentList.push(lame3);


    initializeDisplay();
    displayLists(model);
    displayList(model);
    const currentList = document.querySelector('.list');
    currentList.classList.add('current-list');


    const taskTitleInput = document.querySelector('#task-input');

    taskTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            const item = new TodoItem(taskTitleInput.value, "Task Description", format(new Date(), 'yyyy-MM-dd'), 'HIGH', '');

            model.currentList.push(item);
            displayList(model);

            taskTitleInput.value = null;

        }
    });

    const listTitleInput = document.querySelector('#list-input');

    listTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            const item = [];
            item.name = listTitleInput.value;
            model.allLists.push(item);
            displayLists(model);
            model.currentList = item;
            displayList(model)
            const lists = document.getElementById('list-list').lastChild;
            lists.classList.add('current-list');
            listTitleInput.value = null;


        }
    });



}

export default initializeController;