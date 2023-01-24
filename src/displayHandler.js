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

   const displayLists = (listOfLists) => {
       clearLists();
       const listListDiv = document.querySelector('#list-list');
       for (let i = 0, l = listOfLists.length; i < l; i += 1) {
           const list = document.createElement('button');
           list.id = i;
           const listTitle = document.createElement('h1');
           listTitle.textContent = listOfLists[i].name;
           list.appendChild(listTitle);
           listListDiv.appendChild(list);
       }
   }

   const clearList = () => {
       const listDiv = document.querySelector('#task-list');
       let listItem = listDiv.lastElementChild;
       while (listItem) {
           listDiv.removeChild(listItem);
           listItem = listDiv.lastElementChild;
       }
   }
   const displayList = (list) => {
       clearList();
       const listDiv = document.querySelector('#task-list');
       for (let i = 0, l = list.length; i < l; i += 1) {
           const task = document.createElement('div');
           const taskTitle = document.createElement('h1');
           const deleteButton = document.createElement('button');
           deleteButton.textContent = 'X';
           task.classList.add('todo-item');
           taskTitle.textContent = list[i].title;
           task.appendChild(taskTitle);
           task.appendChild(deleteButton);
           listDiv.appendChild(task);
       }

   }


   export {
       initializeDisplay,
       displayLists,
       displayList
   };