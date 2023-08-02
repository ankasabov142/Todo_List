$(document).ready(function () {
  //Recieve main div container and main addTask button.
  const mainButton = document.querySelector(".buttonAdd");
  const taskList = document.querySelector(".taskList");
  //addTask button functionality.
  $(mainButton).on("click", function (e) {
    $(taskList).append(`<div class="task sortable">
    <div class="liHeader">
      <h1 class="headingText">Task List</h1>
      <div class="butDiv">
        <button class="headerButtons editUnit">
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button class="headerButtons deleteUnit">
          <span class="material-symbols-outlined"> delete </span>
        </button>
        <button class="headerButtons addUnit">
          <span class="material-symbols-outlined "> add </span>
        </button>
      </div>
    </div>
    
  </div>`);
    //Giving each task list its own identification through a time stamp placed in the id of the list.
    let currTime = e.timeStamp;
    let currentTask = taskList.lastChild;
    $(currentTask).attr("id", `${currTime}`);
    //Pass functionality to each button attached to the individual task list.
    $(`#${currTime} .addUnit`).on("click", function (e) {
      //AddTask Unit button functionality
      $(`#${currTime}`).append(`<div class="taskUnit">
      <div class="left">
      <div class="checkbox">
      <label>
      <input class="taskUnitCheckbox" type="checkbox" />
      <span class="checkbox"></span>
      </label>
      </div>
      <b class="taskTextWrapper"><p class='taskText'>Task</p></b>
      </div>
      <button class="taskInsideButton headerButtons">
      <span class="material-symbols-outlined"> delete </span>
    </button>
    </div>`);
      $(`input.taskUnitCheckbox`).on("click", function (e) {
        const textEl = $(e.currentTarget)
          .parent()
          .parent()
          .siblings(".taskTextWrapper")[0];
        //checked button, line-through style
        if (e.currentTarget.checked) {
          $(textEl).css({
            "text-decoration": "line-through",
            "text-decoration-thickness": "2px",
            "text-decoration-color": "grey",
          });
        } else {
          $(textEl).css("text-decoration", "none");
        }
      });
      //Delete functionality by the "Delete button" inside of every task unit
      $(`.taskInsideButton`).on("click", function (e) {
        let parent = $(e.currentTarget).parent();
        parent.remove();
      });
      //Delete functionality by the "Delete button" inside of every task list
    });
    $(`#${currTime} .deleteUnit`).on("click", function (e) {
      $(`#${currTime}`).remove();
    });
    //Add containers to save buttons, while the task list is in Edit mode
    const butDiv = $(`#${currTime} .butDiv`);
    const editBtn = $(`#${currTime} .editUnit`);
    //Add 'tick' button , to save the changes while Edit mode
    const doneEditBtn = $(document.createElement("div"))
      .html(`<button class="headerButtons finishAll">
<span class="material-symbols-outlined">
done_all
</span>
</button>`);
    //Assigning functionality to the "Edit Button", by creating separate containers in which the information previously set is saved.

    editBtn.on("click", function editFunc(e) {
      let taskValues = [];
      for (const task of $(`#${currTime} .taskUnit`)) {
        const textElement = task.querySelector(".taskText");
        const wrapperElement = task.querySelector(".taskTextWrapper");

        const text = textElement.textContent;
        taskValues.push({ text, wrapper: wrapperElement });
        textElement.remove();
        $(task.querySelector(".taskUnit .left")).append(
          `<input type="text" class='taskEditInput' value="${text}">`
        );
      }
      // Тhrough this method the application manages to keep the unchanged elements and save the changes made during the "Edit Mode"
      const headingWrapperElement = $(`#${currTime} .liHeader`);

      const headingElement = $(`#${currTime} .headingText`)[0];
      let headingText = headingElement.textContent;

      headingElement.remove();
      $(headingWrapperElement).prepend(
        `<input type="text" value="${headingText}">`
      );
      //Replacing edit button while "Edit mode" is on
      editBtn.remove();
      $(butDiv).prepend(doneEditBtn);

      $(doneEditBtn).on("click", function () {
        let taskIndex = 0;
        for (const input of $(`#${currTime} .taskUnit .taskEditInput`)) {
          //   taskValues[taskIndex].text=input.value;
          const newTaskText = `<p class='taskText'>${
            input.value || taskValues[taskIndex].text
          }</p>`;

          input.remove();
          $(taskValues[taskIndex].wrapper).append(newTaskText);

          taskIndex++;
        }

        let headingTextInput = $(`#${currTime} .liHeader input`)[0];
        headingElement.textContent = headingTextInput.value || headingText;
        headingTextInput.remove();

        $(headingWrapperElement).prepend(headingElement);
        //Adding edit button while "Edit mode" is done

        doneEditBtn.remove();

        $(butDiv).prepend(editBtn);

        editBtn.on("click", editFunc);
      });
    });
  });
});
