{
    const tasks = [
        {
            content: "zjeść pierogi",
            done: false,
        },
        {
            content: "wkurzyć Stasiaka",
            done: true,
        },
    ]

    const render = () => {

        let htmlString = ""

        for (const task of tasks) {
            htmlString += `
                <li ${task.done ? "class=\"list__item list__item--done\"" : "class=\"list__item\""}>
                    ${task.content}
                </li>
            `
        }

        document.querySelector(".js-task").innerHTML = htmlString
    }

    const addNewTask = (newTaskContent) => {
        const newTask = {
            content: newTaskContent,
            done: false,
        }

        tasks.push(newTask)
        render()
    }

    const resetInput = (inputElement) => {
        inputElement.value = ""
        inputElement.focus()
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const  inputElement = document.querySelector(".js-new-task")

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