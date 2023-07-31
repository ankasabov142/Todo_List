$(document).ready(function () {
  const mainButton = document.querySelector(".buttonAdd");
  const taskList = document.querySelector(".taskList");
  $(mainButton).on("click", function (e) {
    $(taskList).append(`<div class="task ">
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
    let currTime = e.timeStamp;
    let currentTask = taskList.lastChild;
    $(currentTask).attr("id", `${currTime}`);
    $(`#${currTime} .addUnit`).on("click", function (e) {
      $(`#${currTime}`).append(`<div class="taskUnit">
    <div class="checkbox">
      <label>
        <input type="checkbox" />
        <span class="checkbox"></span>
      </label>
    </div>
    <b class="taskTextWrapper"><p class='taskText'>Hello!</p></b>
    <button class="taskInsideButton headerButtons">
      <span class="material-symbols-outlined"> delete </span>
    </button>
    </div>`);
    });
    $(`#${currTime} .deleteUnit`).on("click", function (e) {
      $(`#${currTime}`).remove();
    });
    const butDiv = $(`#${currTime} .butDiv`);
    const editBtn = $(`#${currTime} .editUnit`);

    const doneEditBtn = $(document.createElement("div"))
      .html(`<button class="headerButtons finishAll">
<span class="material-symbols-outlined">
done_all
</span>
</button>`);

    editBtn.on("click", function editFunc (e) {
      console.log("Denka obicham te");
      let taskValues = [];
      for (const task of $(`#${currTime} .taskUnit`)) {
        const textElement = task.querySelector(".taskText");
        const wrapperElement = task.querySelector(".taskTextWrapper");

        const text = textElement.textContent;
        taskValues.push({ text, wrapper: wrapperElement });
        textElement.remove();
        $(wrapperElement).append(
          `<input type="text" class='taskEditInput' value="${text}">`
        );
      }

      const headingWrapperElement = $(`#${currTime} .liHeader`);

      const headingElement = $(`#${currTime} .headingText`)[0];
      let headingText = headingElement.textContent;

      headingElement.remove();
      $(headingWrapperElement).prepend(
        `<input type="text" value="${headingText}">`
      );

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

        doneEditBtn.remove();

        $(butDiv).prepend(editBtn);
      });
    });
  });
});
