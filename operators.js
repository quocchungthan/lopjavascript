// một biến trong javascript có thể chứa nhiều kiểu dữ liệu, và đối với mỗi kiểu dữ liệu thì có tập toán tử riêng:
// phép gán
// var c;
// var a = b;
// var x = 1;
// var y = null;
// phep so sanh -> tra ve boolean:
    // bằng: ==
    // khác: !=
    // lớn hơn: >
    // bé hơn: <
    // lớn hơn hoặc bằng: >=
    // bé hơn hoặc bằng: <=
// Numbers:
//   + - * / % ** 
// Boolean:
//   || && !
// String
//   +

// String & number & boolean:
//   casting


// lệnh điều kiện:
/**
 * cú pháp
 * 
 * if (<điều kiện>){
 *  // thực hiện tập lệnh khi thoả mãn điều kiện
 * }
 * https://github.com/quocchungthan/lopjavascript
 * 
 * if (<điều kiện>){
 *  // thực hiện tập lệnh khi thoả mãn điều kiện
 * } else {
 *  // thực hiện tập lệnh khi điều kiện không thoả mãn
 * }
 * điều kiện có thể là một biến Boolean, hoặc một phép toán trả về giá trị Boolean, ví dụ:
 * var a;
 * var b;
 * var boolean01 = true;
 * 
 * if (true) {
 * 
 * }
 * 
 * if (boolean01) {
 * 
 * }
 * 
 * if (a == b) {
 * 
 * }
 * 
 */
var theKy = 1; // phép gán
var soNamNhapvao = 1980;
var batDauCuaTheky = theKy * 100; // 100 -> phép nhân
var ketThuc = theKy * 100 + 99; // 199 -> nhân và cộng 
// dùng biến để lưu trữ giá trị của biểu thức.
if (soNamNhapvao >= batDauCuaTheky &&  soNamNhapvao <= ketThuc) { 
    // phép so sánh + toán tử Và
    // kết hơp với câu lệnh điều kiện.
    console.log("nam " + soNamNhapvao + " thuoc the ky " + theKy);
}

for (var demTheKy = 0; demTheKy < 22; demTheKy = demTheKy + 1) {
    theKy = theKy + 1; // phép gán // theKy = 2
    batDauCuaTheky = theKy * 100; // 100 -> phép nhân
    ketThuc = theKy * 100 + 99; // 199 -> nhân và cộng 
    // dùng biến để lưu trữ giá trị của biểu thức.
    if (soNamNhapvao >= batDauCuaTheky &&  soNamNhapvao <= ketThuc) { 
        // phép so sánh + toán tử Và
        // kết hơp với câu lệnh điều kiện.
        console.log("nam " + soNamNhapvao + " thuoc the ky " + theKy);
    }
}
/**
 * 
 * Bài tập, 
 * 0. Nhập vào một số nguyên = số năm. ví dụ: 1999, 2005, 2015 -> tính toán thế kỷ của năm đó và in ra. ví dụ: năm 1950 thuộc thế kể 20.
 * p/s: thể kỷ 01 gồm các năm từ 0 -> 99. Thế kỷ 2 từ 100 -> 199 và tương tự...
 * 
 /**
  * Huy Trần18:36
<body>
    <input id="sonam" type="text">
    <input onclick="tinhtheky()" type="button" value="kiểm tra">
    <script>
        function tinhtheky(){
            var input = document.getElementById("sonam").value
            var output = (Math.floor((input/100)))+1
            document.writeln(
                "Năm sinh của bạn là: " + input + " thuộc thế kỉ: " + output
            )
        }
    </script>
</body>
  */
 /*
 * 
 * 1. Khai báo một biến có kiểu dữ liệu là number, kiểm tra số đã cho là số chẵn hay số lẽ, và in ra kết quả.
 */




// vị trí sử dụng để truy xuất phần tử của array có thể là một biến, ví dụ
/**
 * var index = 0;
 * console.log(array01[index]);
 * index = 1;
 * console.log(array01[index]);
 */

/**
 * loop:
 */
// array: khai báo, truy xuất phần tử.
// var array01 = [];
// để truy xuất phần tử -> sử dụng cú pháp [], ví dụ
var diemSo = [2 , 3]; // 0 -> 1

console.log(diemSo[1]); // -> 3;
console.log(diemSo[0]); // -> 2;
diemSo[0] = 10;
var diemSoCuoiCung = diemSo[1];
var tong = diemSo[1] + diemSo[2];
console.log(diemSo.length);
// console.log(array01[0]); console.log(array01[1]); 
/*
 * 
 * 1.1 Khai báo môt mảng các số nguyên, tính tổng. 
 * // vong lap + truy xuat phan tu mang
 * */
var mang = [1, 5, 10, 20, 30];
var tong = mang[0] + mang[1] + mang[2] //+//...;

for (var i = 0; i < 5; ++i) {
    var tong2 = tong2 + mang[i];
}

console.log(tong2);

 /*
 * 1.2 Khai báo một số nguyên, tính toán giai thừa.

 * 
 * 2. Khai báo một array số nguyên, viết code javascript tìm số lớn nhất. Sử dụng vòng lặp, câu lệnh điều kiện, lệnh gán và lệnh so sánh.
 *
 */
 var mangSosanh = [2, 4, 1, 5, 6, 5];
 var soLonNhat = 0;
 for(;;) { // duyet tat ca cac phan tu
    // so sanh -> neu phan tu hien tai lon hon so lon nhat, thi phan tu hien tai la so lon nhat.
    if (/** phan tu hien tai lon hon soLonNhat */) {
        // soLonNhat = phan tu hien tai;
    }
 }
 console.log(soLonNhat);
 /*
 * 
 * 3. Tìm số chẵn lớn nhất trong một array số nguyên.
 * 3.1 Cho một array các số nguyên, tính tổng tất cả các số lẻ.
 * 4. Cho một số nguyên, đếm số chữ số của số đó. 1000 -> 4. 200 -> 3
 * 5. kiểm tra xem một dãy số nguyên có phải là một dãy đối xứng.
 * vi du: [2, 1, 1, 2] hoac [2 , 3 ,1 , 3 ,2 ]
 * 
 */


// buổi 2 objects, function / arugment / returns / paramenters
/**
 *
 * các phần tử của một object có thể là number, string, boolean, function hoặc là một object khác.
 * 
 * cú pháp khai báo một biến object
 * 
 * var person = {
 *  "tuoi": 1,
 *  "ten": "name",
 *  "diemSo": [1, 2],
 *  "function1": function () {
 *   }
 * }
 * 
 * array cũng là object, nên nó cũng có thể chứa dữ liệu và function..
 * 
 * để thực thi một function bên trong array
 * -> ta sử dụng cú pháp <tên biến array>.<tên function>();
 */
// buổi 3 DOM - user interactions

// buổi 4 jQuery