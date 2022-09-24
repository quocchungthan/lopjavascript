//Them tác vụ

function themTask() {
  var add = document.getElementById("session__add");
  console.log(add);
  if (add) {
    var addTask = document.createElement("div");
    addTask.classList.add("session__active");
    addTask.innerHTML = `
    <input class="" type="text" placeholder="What are your working on?" autofocus>
      <div class="session__button">
      <button class="session__delete" type="submit" value="Cancel">Xóa</button>
      <button type="submit" value="Save">Lưu</button>
    </div>
    `;
    add.append(addTask);
    const input = document.getElementById("addTask");
    input.style.display = "none";
    //Auto remove
    // const autoRemove = setTimeout(() => {
    //   add.removeChild(addTask);
    // }, 5000);
    //Kiểm tra timg kiếm có class đúng class session__delete hay không trong cái addTask vừa thêm
    //remove when click
    add.onclick = function (e) {
      if (e.target.closest(".session__delete")) {
        add.removeChild(addTask);
        input.style.display = "block";
        //clearTimeout(autoRemove);
      }
    };
  }
}

function batDau() {
  var hour = document.getElementById("hour").value;
  var minute = document.getElementById("minute").value;
  const so = Number(minute);
  console.log(so);
  // var batDau = (document.getElementById("input").innerHTML = "Kết thúc");
  if (so === 00) {
    hour = hour - 1;
    so = 59;
  }
  // if(hour < )
}
setInterval(() => {}, 1000);
