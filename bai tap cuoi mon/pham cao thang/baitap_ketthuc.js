
const text_enter = document.querySelector(".input_task input");
const button_enter = document.querySelector(".input_task button");
const deleteAllBtn = document.querySelector(".D_A");
const hour_enter = document.querySelector(".pomodoro_timing input hour");
const minute_enter = document.querySelector(".pomodoro_timing input minute");
const list = document.querySelector(".list_task")
text_enter.onkeyup = ()=>{
    var userValue = text_enter.value;
    
    if(userValue.trim() != 0){
        //  Thì nút add của ta sẽ sáng lên
        // Trường hợp mình nhập toàn khoảng trắng ( space ) thì sẽ không sáng lên nhé 
        button_enter.classList.add("active");
    } else {
        // Ngược lại thì không sáng nè
        button_enter.classList.remove("active");
    }
}

show_task();
button_enter.onclick = () => {
    var userValue = text_enter.value;
    console.log(userValue);
    var getLocalStorageData = localStorage.getItem("Data");
    if(getLocalStorageData == null){
         listArray = [];
    }
    else{
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userValue);
    localStorage.setItem("Data", JSON.stringify(listArray));
    show_task();
    button_enter.classList.remove("active");
}

function show_task(){
    let getLocalStorageData = localStorage.getItem("Data");
    if(getLocalStorageData == null){
        var listArray = [];
    }
    else{
        listArray = JSON.parse(getLocalStorageData);
    }
    var newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
      });
      list.innerHTML = newLiTag; 
      text_enter.value = ""; 
}

function deleteTask(index){
    var getLocalStorageData = localStorage.getItem("Data");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); 
    localStorage.setItem("Data", JSON.stringify(listArray));
    show_task();
  }

  deleteAllBtn.onclick = ()=>{
    listArray = []; 
    localStorage.setItem("Data", JSON.stringify(listArray)); 
    show_task(); 
  }

  setInterval(() =>{
 
  }
  )
