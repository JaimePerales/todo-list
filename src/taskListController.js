/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */

import { format } from 'date-fns';

import { initializeDisplay, displayLists, displayList } from './displayHandler';

import Model from './model';

import TodoItem from './todoItem';

import List from "./list";



const initializeController = () => {
    // const model = new Model();
    let model = new Model();

    if (localStorage.getItem('data') !== null) {

        model = JSON.parse(window.localStorage.getItem('data'));
    } else {
        model = new Model();
    }




    initializeDisplay();
    displayLists(model);
    displayList(model);
    const currentList = document.querySelector('.list');
    currentList.classList.add('current-list');


    const taskTitleInput = document.querySelector('#task-input');

    taskTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            const item = new TodoItem(taskTitleInput.value, "Task Description", format(new Date(), 'yyyy-MM-dd'), 'HIGH', '');

            model.currentList.list.push(item);
            displayList(model);

            taskTitleInput.value = null;

        }
    });

    const listTitleInput = document.querySelector('#list-input');

    listTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            const newList = new List(listTitleInput.value);

            model.allLists.push(newList);
            displayLists(model);
            model.currentList = newList;
            displayList(model)
            const lists = document.getElementById('list-list').lastChild;
            lists.classList.add('current-list');
            listTitleInput.value = null;


        }
    });



}

export default initializeController;