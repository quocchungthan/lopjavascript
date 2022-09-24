function Start()
{
    if (h === null)
    {
        h = parseInt(document.getElementById('h_val').value);
        m = parseInt(document.getElementById('m_val').value);
        s = parseInt(document.getElementById('s_val').value);
    }
 
    if (s === -1){
        m -= 1;
        s = 59;
    }
 

    if (m === -1){
        h -= 1;
        m = 59;
    }
 
    if (h == -1){
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }
 

    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();
 
    timeout = setTimeout(function(){
        s--;
        Start();
    }, 1000);
}
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