{
  const tasks = [
    {
      content: "zjeść pierogi",
      done: false,
    },
    {
      content: "wkurzyć Stasiaka",
    },
  ];

  const addNewTask = (newTaskContent) => {
    const newTask = {
      content: newTaskContent,
      done: false,
    }

    tasks.push(newTask)
    render()
  }

  const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
  }

  const toggleTaskDone = (index) => {

    tasks[index].done = !tasks[index].done
    render()
  }

  const addRemoveButtonListeners = () => {
    const removeButtons = document.querySelectorAll(".js-remove")

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index)
      })
    });
  }

  const addToggleDoneButtonListeners = () => {
    const toggleTaskButtons = document.querySelectorAll(".js-done")

    toggleTaskButtons.forEach((toggleTaskButton, index) => {
      toggleTaskButton.addEventListener("click", () => {
        toggleTaskDone(index)
      })
    });
  }

  const render = () => {

    let htmlString = ""

    for (const task of tasks) {
      htmlString += `
                <li ${task.done ? "class=\"list__item list__item--done\"" : "class=\"list__item\""}>
                    <button class="js-done">ok</button>
                    ${task.content}
                    <button class="js-remove">Usuń</button>
                </li>
            `
    }

    document.querySelector(".js-task").innerHTML = htmlString

    addRemoveButtonListeners()
    addToggleDoneButtonListeners()
  }

  const resetInput = (inputElement) => {
    inputElement.value = ""
    inputElement.focus()
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const inputElement = document.querySelector(".js-new-task")

    const newTaskContent = inputElement.value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
    resetInput(inputElement)
  }

  const init = () => {
    render()
    const form = document.querySelector(".js-form")
    form.addEventListener("submit", onFormSubmit)
  }

  init()

}