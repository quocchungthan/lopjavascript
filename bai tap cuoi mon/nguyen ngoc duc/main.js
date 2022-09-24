//Begin List Work--------------------------------------------------
let listTask = [];

var listTask_String = sessionStorage.getItem("Task");
if (listTask_String != null) {
  listTask = JSON.parse(listTask_String);
}

function AddTask() {
  let nameTask = document.querySelector("#inputTask").value;
  listTask.push(nameTask);
  //   console.log(listTask);

  var newListTaskString = JSON.stringify(listTask); // chuyen array thanh string
  sessionStorage.setItem("Task", newListTaskString);
  printListWorks(nameTask);
}

function printListWorks(tenNhiemVu) {
  let divTask = document.querySelector(".taskItem");
  let printTask = document.createElement("p");
  printTask.innerHTML = tenNhiemVu; // -> DOM chỉnh sửa thẻ.
  divTask.append(printTask); // -> DOM chỉnh sửa thẻ.
}

function ClearList() {
  sessionStorage.clear();
  let divTask = document.querySelector(".taskItem");
  divTask.innerHTML = "";
}

function CancelText() {
  let nameTask = document.querySelector("#inputTask");
  nameTask.value = "";
}
//End List Work--------------------------------------------------------

//
//Begin Count Down Clock ----------------------------------------------

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function Start() {
  var fiveMinutes = 60 * 5,
    display = document.querySelector(".timer-string");
  startTimer(fiveMinutes, display);
}

//End Cont Down Clock -------------------------------------------------
