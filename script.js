const inputTag = document.getElementById("input");
const buttonTag = document.getElementById("btn");
const containerList = document.querySelector(".containerList");
const deleteAllBtn = document.getElementById("deleteBtn");

deleteAllBtn.addEventListener("click", function () {
  containerList.innerHTML = "";
});
function createTicketAndAddToUI() {
  const task = inputTag.value;
  if(task.trim().length == 0){
    alert("Task cannot be empty");
    return;
  }
  inputTag.value = "";
  //   console.log(task);
  const taskBox = document.createElement("div");
  taskBox.classList.add("task");
  taskBox.innerHTML = `
   <p contentEditable="false" >${task}</p>
   <svg id="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg>
        <svg
        id = "delete"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
          ></path>
        </svg>`;

  const deleteButton = taskBox.querySelector("#delete");
  const editButton = taskBox.querySelector("#edit");
  const pTag = taskBox.querySelector("p");
  let editFlag = false;
  function editTask() {
    if (editFlag == false) {
      editButton.setAttribute("fill", "red");
      pTag.setAttribute("contentEditable", "true");
      pTag.style.textDecoration = "underline";
      pTag.style.textDecorationColor = "red";
    } else {
      editButton.setAttribute("fill", "black");
      pTag.setAttribute("contentEditable", "false");
      pTag.style.textDecoration = "none";
    }
    editFlag = !editFlag;
  }
  pTag.addEventListener("dblclick", editTask);
  editButton.addEventListener("click", editTask);
  deleteButton.addEventListener("click", function () {
    containerList.removeChild(taskBox);
  });
  containerList.appendChild(taskBox);
}
buttonTag.addEventListener("click", createTicketAndAddToUI);
inputTag.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key == "Enter") {
    createTicketAndAddToUI();
  }
});