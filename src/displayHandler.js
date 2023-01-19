  const initializeDisplay = () => {

      const content = document.querySelector('#content');
      const taskTitleInputDiv = document.createElement('div');
      taskTitleInputDiv.id = 'task-title-input-div';
      content.appendChild(taskTitleInputDiv);

      const taskTitleInput = document.createElement('input');
      taskTitleInputDiv.appendChild(taskTitleInput);

      taskTitleInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              alert(taskTitleInput.value)
              taskTitleInput.value = null;
          }
      });



  }

  export default initializeDisplay;