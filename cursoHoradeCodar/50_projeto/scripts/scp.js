function addTask() {

    // Titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

        // clonar template
        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true);

        // Adicionar Titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionar tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // adicinar evento de remover
        const removeBtn = newTask.querySelector("#remove-btn").addEventListener("click", function() {
            removeTask(this)
        })

        // adicinoar evente de tarefa confirmada
        const doneBtn = newTask.querySelector("#done-btn").addEventListener("click", function() {
            completeTask(this)
        })

        //limpar texto
        document.querySelector("#task-title").value = "";

    }

}

// função de remover tarefa
function removeTask(remover) {
    remover.parentNode.remove(true);
}

// função de tarefa cumprida
function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}


// evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    addTask();

});

