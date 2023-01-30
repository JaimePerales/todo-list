/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

import { displayList, displayLists } from "./displayHandler";
import TodoItem from "./todoItem";


export const attachExpandTaskEventListener = (model) => {
    const todoItems = document.querySelectorAll('.todo-item h1');
    const expandedScreen = document.querySelector('#expanded-task');
    const expandedScreenButton = document.querySelector('#expanded-task-button');


    for (let i = 0, l = todoItems.length; i < l; i += 1) {
        todoItems[i].addEventListener('click', (e) => {
            const newEle = expandedScreenButton.cloneNode(true);
            newEle.addEventListener('click', (event) => {
                event.preventDefault();
                const tempTodo = new TodoItem(title, description, dueDate, priority, notes);
                testTest(e, model, i, tempTodo, expandedScreen)
            });
            expandedScreenButton.parentNode.replaceChild(newEle, expandedScreenButton);
            expandedScreen.classList.remove('hidden');

            const title = document.querySelector('#name');
            title.value = model.currentList[i].title;

            const description = document.querySelector('#description');
            description.value = model.currentList[i].description;

            const dueDate = document.querySelector('#dueDate');
            dueDate.value = model.currentList[i].dueDate;


            const priority = document.querySelector('#priority');
            priority.value = model.currentList[i].priority;

            const notes = document.querySelector('#notes');
            notes.value = model.currentList[i].notes;





        });


    }

}

const testTest = (event, model, i, tempTodo, expandedScreen) => {

    model.currentList[i].title = tempTodo.title.value;
    model.currentList[i].description = tempTodo.description.value;
    model.currentList[i].dueDate = tempTodo.dueDate.value;
    model.currentList[i].priority = tempTodo.priority.value;
    model.currentList[i].notes = tempTodo.notes.value;
    expandedScreen.classList.add('hidden');
    displayList(model);


}



export const attachDeleteTaskEventListener = (model) => {
    const listButtons = document.querySelectorAll('.todo-item button');
    for (let i = 0, l = listButtons.length; i < l; i += 1) {
        listButtons[i].addEventListener('click', () => {
            model.currentList.splice(i, 1);

            displayList(model);

        })
    }
}

export const attachChangeListEventListener = (model) => {
    const listButtons = document.querySelectorAll('.list-select-button');
    for (let i = 0, l = listButtons.length; i < l; i += 1) {
        listButtons[i].addEventListener('click', () => {
            model.currentList = model.allLists[i];

            displayList(model);

        })
    }
}

export const attachDeleteListEventListener = (model) => {
    const listButtons = document.querySelectorAll('.list-delete-button');
    for (let i = 0, l = listButtons.length; i < l; i += 1) {
        listButtons[i].addEventListener('click', () => {
            model.allLists.splice(i, 1);
            displayLists(model);
            if (model.currentList === undefined) {
                // eslint-disable-next-line prefer-destructuring
                model.currentList = model.allLists[0];
                displayList(model);
            }

        })
    }
}