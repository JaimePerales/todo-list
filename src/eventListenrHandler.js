/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

import { displayList, displayLists } from "./displayHandler";


export const attachExpandTaskEventListener = (model) => {
    const todoItems = document.querySelectorAll('.todo-item h1');
    const expandedScreen = document.querySelector('#expanded-task');
    const expandedScreenButton = document.querySelector('#expanded-task-button');


    for (let i = 0, l = todoItems.length; i < l; i += 1) {
        todoItems[i].addEventListener('click', (e) => {
            const newEle = expandedScreenButton.cloneNode(true);
            newEle.addEventListener('click', (event) => {
                event.preventDefault();
                testTest(e, model, i, title, expandedScreen)
            });
            expandedScreenButton.parentNode.replaceChild(newEle, expandedScreenButton);
            expandedScreen.classList.remove('hidden');
            const title = document.querySelector('#fname');
            title.value = model.currentList[i].title;





        });


    }

}

const testTest = (event, model, i, title, expandedScreen) => {

    model.currentList[i].title = title.value;
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