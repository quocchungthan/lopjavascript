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


/**
 * 
 * Bài tập, 
 * 0. Nhập vào một số nguyên = số năm. ví dụ: 1999, 2005, 2015 -> tính toán thế kỷ của năm đó và in ra. ví dụ: năm 1950 thuộc thế kể 20.
 * p/s: thể kỷ 01 gồm các năm từ 0 -> 99. Thế kỷ 2 từ 100 -> 199 và tương tự...
 * 
 * 1. Khai báo một biến có kiểu dữ liệu là number, kiểm tra số đã cho là số chẵn hay số lẽ, và in ra kết quả.
 */


// array: khai báo, truy xuất phần tử.
// var array01 = [];
// để truy xuất phần tử -> sử dụng cú pháp [], ví dụ

// console.log(array01[0]); console.log(array01[1]); 

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

/*
 * 
 * 1.1 Given an array, calculate the sum of every element.
 * 1.2 Khai báo một số nguyên, tính toán giai thừa.
 * 
 * 2. Khai báo một array số nguyên, viết code javascript tìm số lớn nhất. Sử dụng vòng lặp, câu lệnh điều kiện, lệnh gán và lệnh so sánh.
 * 
 * 3. Tìm số chẵn lớn nhất trong một array số nguyên.
 * 
 * 3.1 Cho một array các số nguyên, tính tổng tất cả các số lẻ.
 * 
 * 4. Cho một số nguyên, in ra số chữ số của số đó.
 * 
 * 5. kiểm tra xem một dãy số nguyên có phải là một dãy đối xứng.
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