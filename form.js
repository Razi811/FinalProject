class taskManagerItems {
    constructor (ID, taskName, description, assignedTo, dueDate, status) {
        this._ID= taskManagerItems.incrementID();
        this._Name= taskName;
        this._description= description;
        this._AssignedTo= assignedTo;
        this._DueDate = dueDate;
        this._taskStatusArray =['ToDo', 'In Progress', 'Review', 'Done'];
        this._addTaskItems()
    }
    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1;
        } else {
            this.latestId++;
        }
        return this.latestId;
    }
    window.addEventListener('load', () => {
        taskItems= JSON.parse(localStorage.getItem('taskItems')) || [];
        const nameInput = document.querySelector('#name');
        const username= localStorage,getItem('username') || '';
        nameInput.value = username;
        nameInput.addEventListener('change', e => {
            localStorage.setItem('username', e.target.value);
        })
    })

    newTaskItemForm.addEventListener('submit' e => {
        e.preventDefault();
        const taskItem = {
            content: e.target.elements.content
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }
    })

    addTask(){
        this._taskArray.push(this)
    }
    get taskManagerItems() {
        return this._Name
    }

    get taskManagerItemsWithStatus() {

    }
}


function displayTaskItems() {
const taskItems= document.querySelector('#task-items');
taskItems.innerHTML = '';
taskItems.forEach(taskItem => {
    const taskItemCard= document.createElement('div');
    taskItemCard.classList.add('taskItemCard');

const form = document.getElementById('form');
const name = document.createElement('name');
const input = document.createElement('input');
const span = document.createElement('span');
const content = document.createElement('div')
const actions = document.getElementById(this._taskStatusArray)
const description = document.getElementById('description');
const assignTo = document.createElement('assignTo');
const dueDate = document.createElement('dueDate');
const editButton = document.createElement('button');
const deleteButton = document.createElement('button');

input.type = 'checkbox';
input.checked = taskItem.done;
span.classList.add('bubble');
content.classList.add('taskItem-content');
actions.classList.add('actions');
editButton.classList.add('edit');
deleteButton.classList.add('delete');

content.innerHTML = `< input type="text" value = "${taskItem.content} readonly>`;
editButton.innerHTML = 'Edit';
deleteButton.innerHTML= 'Delete';

label.appendChild(name);
label.appendChild(input);
label.appendChild(span);
actions.appendChild(editButton);
actions.appendChild(deleteButton);
taskItemCard.appendChild(label);
taskItemCard.appendChild(content);
taskItemCard.appendChild(actions);

taskItems.appendChild(taskItemCard);
if (taskItem.done) {
    taskItemCard.classList.add('done');
}

input.addEventListener('change', (e) => {
    taskItem.done = e.target.checked;
    localStorage.setItem('taskItems', JSON.stringify(taskItems));

    if taskItem.done {
        taskItemCard.classList.add('done');
    } else {
        taskItemCard.classList.remove('done');
    }

    DisplayTaskItems()
})

form.addEventListener('click', e => {
    const input = content.querySelector('input');
    input.removeAttribute('readonly');
    input.focus();
    input.addEventListener('blur', (e) => {
        input.setAttribute('readonly', true);
        taskItem.content = e.target.value;
        localStorage.setItem('taskItems', JSON.stringify(taskItems));
        DisplayTaskItems()
    });
});

deleteButton.addEventListener('click', (e) => {
    taskItems = taskItems.filter(t => t !=taskItem);
    localStorage.setItem('taskItems', JSON.stringify(taskItems));
    DisplayTaskItems()
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const nameValue = name.value.trim();
    const descriptionValue = description.value.trim();
    const assignToValue = assignTo.value.trim();
    const dueDateValue = dueDate.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    } else if (nameValue.length < 8 ) {
        setError(name, 'Please Provide Full Name');
    } else {
        setSuccess(name);
    }

    if(descriptionValue === '') {
        setError(description, 'Description is required');
    } else if (descriptionValue.length < 15 ) {
        setError(description, 'Please Provide a Description');
    } else {
        setSuccess(description);
    }

    if(assignToValue === '') {
        setError(assignTo, 'Is required');
    } else if (assignToValue.length < 8 ) {
        setError(assignTo, 'Please Provide full Name')
    } else {
        setSuccess(assignTo);
    }

    if(dueDateValue === '') {
        setError(dueDate, 'Please Provide Valid Date');
    } else if (dueDateValue !== dueDateValue) {
        setError(dueDate, "Invalid Date!");
    } else {
        setSuccess(dueDate);
    }

};

}