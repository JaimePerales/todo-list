/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

import { displayList, displayLists, clearList } from "./displayHandler";
import TodoItem from "./todoItem";





export const attachExpandTaskEventListener = (model) => {
    const todoItems = document.querySelectorAll('.todo-item p');
    const expandedScreen = document.querySelector('#expanded-task');
    const expandedScreenButton = document.querySelector('#expanded-task-button');
    window.addEventListener('click', (e) => {
        if (e.target === expandedScreen) {

            expandedScreen.classList.add('hidden');
            displayList(model)

        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {

            expandedScreen.classList.add('hidden');
            displayList(model)

        }
    })

    for (let i = 0, l = todoItems.length; i < l; i += 1) {
        todoItems[i].addEventListener('click', (e) => {
            const newEle = expandedScreenButton.cloneNode(true);
            newEle.addEventListener('click', (event) => {
                event.preventDefault();
                const tempTodo = new TodoItem(title, description, dueDate, priority, notes);
                updateCurrentTask(e, model, i, tempTodo, expandedScreen)
            });
            if (expandedScreenButton.parentNode !== null) {
                expandedScreenButton.parentNode.replaceChild(newEle, expandedScreenButton);
            }

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

const updateCurrentTask = (event, model, i, tempTodo, expandedScreen) => {

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

export const attachCompleteTaskEventListener = (model) => {
    const listCheckboxes = document.querySelectorAll('.todo-item input');
    const list = document.querySelectorAll('.todo-item p');
    for (let i = 0, l = listCheckboxes.length; i < l; i += 1) {
        listCheckboxes[i].addEventListener('change', () => {

            if (listCheckboxes[i].checked) {
                list[i].classList.add('checked');
                model.currentList[i].completed = true;
            } else {
                list[i].classList.remove('checked');
                model.currentList[i].completed = false;
            }
        })
    }
}

export const attachChangeListEventListener = (model) => {
    const listButtons = document.querySelectorAll('.list-select-button');
    for (let i = 0, l = listButtons.length; i < l; i += 1) {
        listButtons[i].addEventListener('click', () => {
            displayLists(model);
            model.currentList = model.allLists[i];
            const lists = document.getElementById('list-list').children;
            lists.item(i).classList.add('current-list');
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
            if (model.currentList.value === undefined) {
                // eslint-disable-next-line prefer-destructuring
                model.currentList = model.allLists[0];
                if (document.querySelector('#list-list').firstChild != null) {
                    document.querySelector('#list-list').firstChild.classList.add('current-list');
                    displayList(model);
                } else {
                    clearList()
                }
            }

        })
    }
}