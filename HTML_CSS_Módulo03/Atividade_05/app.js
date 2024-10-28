class Task {
    constructor(year, month, day, type, description) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
    }

    validateData() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === "") {
                alert(`O campo ${key} deve ser preenchido!`);
                return false;
            }
            if (this.month <= 0 || this.month > 12){
                alert(`Não existe possibilidade de mês com ${this.month} meses!`)
                return false;
            }
            if (this.day <= 0 || this.day > 31){
                alert(`Não existe possibilidade de mês com ${this.day} dias!`)
                return false;
            }
        }
        return true;
    }
}

class Database {
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        const id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', '0');
        }
    }

    getNextId() {
        let currentId = localStorage.getItem('id');
        return parseInt(currentId) + 1;
    }

    loadTasks() {
        let tasks = [];
        let id = localStorage.getItem('id');
        for (let i = 1; i <= id; i++) {
            let taskData = localStorage.getItem(i);
            if (taskData) {
                let task = JSON.parse(taskData);
                task.id = i; 
                tasks.push(task);
            }
        }
        return tasks;
    }

    createTask(task) {
        let id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(task));
        localStorage.setItem('id', id.toString());
    }

    removeTask(id) {
        localStorage.removeItem(id);
    }

    searchTasks(searchText) {
        let tasks = this.loadTasks();

        let filteredTasks = tasks.filter(task => {
            return task.type.toLowerCase().includes(searchText.toLowerCase()) ||
                   task.description.toLowerCase().includes(searchText.toLowerCase());
        });

        return filteredTasks;
    }
}

const database = new Database();

function registerTask() {
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let type = document.getElementById('type').value;
    let description = document.getElementById('description').value;

    let task = new Task(year, month, day, type, description);
    if (task.validateData()) {
        database.createTask(task);
        alert('Tarefa criada com sucesso!');
        loadTasks();
    } 
}

function loadTasks(tasks = database.loadTasks()) {
    let listTask = document.getElementById('tasks');
    listTask.innerHTML = '';

    tasks.forEach(task => {
        let taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        
        taskItem.innerHTML = `
            <div>
                <h5 class="mb-1">( ${task.type} )</h5>
                <p class="mb-0">${task.description}</p>
                <small class="text-muted">Data: ${task.day}/${task.month}/${task.year}</small>
            </div>
            <button class="btn btn-danger btn-sm" onclick="removeTask(${task.id})">Excluir</button>
        `;

        listTask.appendChild(taskItem);
    });
}

function searchAndDisplayTasks() {
    let searchText = document.getElementById('searchText').value;
    let tasks = database.searchTasks(searchText);
    loadTasks(tasks);
}

function removeTask(id) {
    database.removeTask(id);
    loadTasks();
}
