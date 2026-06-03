const inputFiled = document.querySelector("#inputFiled");
const addBtn = document.querySelector("#btn");
const taskLists = document.querySelector(".taskLists");

// load task from localstorage
const loadTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(createTask);
};

// save task in localstorage
const saveTask = () => {
    const tasks = [];
    taskLists
        .querySelectorAll("li")
        .forEach((item) =>
            tasks.push(item.querySelector("span").textContent.trim()),
        );

    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// create task
const createTask = (task) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const dltBtn = document.createElement("button");

    span.textContent = task;
    dltBtn.textContent = "Delete";
    dltBtn.className = "dltBtn";

    li.appendChild(span);
    li.appendChild(dltBtn);
    taskLists.appendChild(li);

    dltBtn.addEventListener("click", () => {
        li.remove();
        saveTask();
    });
};

// add task
const addTask = () => {
    const task = inputFiled.value.trim();

    if (!task) {
        alert("please enter a task...");
        return;
    }

    createTask(task);

    inputFiled.value = "";

    saveTask();
};

loadTask();

addBtn.addEventListener("click", addTask);
