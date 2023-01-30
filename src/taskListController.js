/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */

import { format } from 'date-fns';

import { initializeDisplay, displayLists, displayList } from './displayHandler';

import Model from './model';

import TodoItem from './todoItem';



const initializeController = () => {
    const model = new Model();
    const lame = new TodoItem();
    lame.title = 'Test';
    const lame2 = new TodoItem();
    lame2.title = 'Test2';
    const lame3 = new TodoItem();
    lame3.title = 'Test3';
    model.defaultList.push(lame);
    model.defaultList.push(lame2);
    model.defaultList.push(lame3);
    initializeDisplay();
    displayLists(model);
    displayList(model);


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
            listTitleInput.value = null;


        }
    });



}

export default initializeController;