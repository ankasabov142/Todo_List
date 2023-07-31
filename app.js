$(document).ready(function () {
  const mainButton = document.querySelector(".buttonAdd");
  const taskList = document.querySelector(".taskList");
  $(mainButton).on("click", function (e) {
    $(taskList).append(`<div class="task ">
    <div class="liHeader">
      <h1>Task List</h1>
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
    $(currentTask).addClass(`${currTime}`);
    console.log(`.${currentTask.childNodes.firstChild}`)

    // $(".addUnit."+currTime).on("click", function (e) {

    //       $('task.'+currTime).append(`<div class="taskUnit">
    // <div class="checkbox">
    //   <label>
    //     <input type="checkbox" />
    //     <span class="checkbox"></span>
    //   </label>
    // </div>
    // <b><p>Hello!</p></b>
    // <button class="taskInsideButton headerButtons">
    //   <span class="material-symbols-outlined"> delete </span>
    // </button>
    // </div>`);
  });

  currTime = "";
  currentTask = "";
});
