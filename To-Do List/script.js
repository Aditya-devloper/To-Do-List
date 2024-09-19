const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
const listContainer = document.querySelector('#list-container');

let taskData = JSON.parse(localStorage.getItem('Task')) || [];

addBtn.addEventListener('click', (e) => {
    // console.log(taskInput.value);
    e.preventDefault();
    let newTask = taskInput.value.trim();
    if (newTask === '') {
        return;
    }

    const userTasks = {
        task: newTask
    }


    taskData.push(userTasks);

    localStorage.setItem('Task', JSON.stringify(taskData));

    taskInput.value = '';

    showListData();
});

showListData();

function showListData() {
    let showHtml = '';
    taskData.forEach((item, index) => {
        showHtml += `
     <div class="task-item">
        <input type="checkbox" class="check">
        <p class="user-task">${item.task}</p>
        <button type="button" class="delete-btn" onclick="deleteListData(${index});">Delete</button>
     </div>`
    })

    listContainer.innerHTML = showHtml;

}

function deleteListData(index) {
    taskData.splice(index, 1);
    localStorage.setItem('Task', JSON.stringify(taskData));
    showListData();
}