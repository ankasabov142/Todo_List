$(document).ready(function () {
  const mainButton = document.querySelector(".buttonAdd");
  const taskList = document.querySelector(".taskList");
  $(mainButton).on("click", function (e) {
    console.log(
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
    
  </div>`)
    );
    $(taskList.lastChild).addClass(`${e.timeStamp}`);
  

});
});
