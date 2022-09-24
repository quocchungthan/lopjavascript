// Hiển thị công việc và lưu vào localstorage
var listTask = [];

var listTask_String = localStorage.getItem("Task");
if (listTask_String != null) {
  listTask = JSON.parse(listTask_String);
}

for (var i = 0; i < listTask.length; i++) {
  inRaDanhSach(listTask[i]);
}

function Them() {
  var TenCongViec = document.querySelector("#inputTask").value;
  listTask.push(TenCongViec);
  console.log(listTask);

  var congViecString = JSON.stringify(listTask);
  localStorage.setItem("Task", congViecString);
  inRaDanhSach(TenCongViec);
}

function inRaDanhSach(tenNhiemVu) {
  var congViec = document.querySelector(".taskItem");
  var inCongViec = document.createElement("p");
  inCongViec.innerHTML = tenNhiemVu;
  congViec.append(inCongViec);
}

// clear công việc
function clear() {
  let nameTask = document.querySelector("#inputTask");
  nameTask.value = "";
}
clear();

// xóa công việc
function remove_Work() {
  sessionStorage.clear();
  let divTask = document.querySelector(".taskItem");
  divTask.innerHTML = "";
}
remove_Work();

// đồng hồ đếm ngược
function start(duration, display) {
  var timer = duration, minutes, seconds;
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
window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('.timer-string');
  startTimer(fiveMinutes, display);
};