// f(x) = 2x + 1;
// dùng để thực hiện một tập các lệnh cùng nhau, hoặc tính toán một biểu thức phức tạp, kết hợp nhiều dòng lệnh đơn.
// khai báo

// f -> từ khoá function
// x -> tham số x, đặt trong ngoặc tròn -> (x)
// phép nhân -> 2 * 1
// 2x + 1; nội dung -> var ketQua = 2 * x + 1;
// mọi biến trong lập trình đều cần một cái tên
// dấu = trong hàm số -> từ khoá return (nghĩa là trả về).

/**
 * function <tên hàm>(<tham số, cách nhau bởi dấu phẩy>) {
 *  // nội dung
 *  // <return - phần không bắt buộc>
 * }
 */
// https://github.com/quocchungthan/lopjavascript
/**

// f(x) = 2x + 1;
var ham = function (x) {
    var ketQua = 2 * x + 1;

    return ketQua;
}

một số cách khai báo khác

function ham(x) {
    var ketQua = 2 * x + 1;

    return ketQua;
}

var ham = (x) => {
    var ketQua = 2 * x + 1;
    return ketQua;
}
 
 */
alert();//
/**
 * để thực thi một hàm -> sử dụng cú pháp <tên hàm>(<đối số, cách nhau bới dấu phẩy - thành phần không bắt buộc>);
 * ví dụ:
 
 */
ham(x); // đối với những hàm không có return
var ketQuaTinhToan = ham(x); // đối với những hàm có return
ham(); // không cần phải truyền đối số nếu như hàm không định nghĩa tham số

// một số hàm được định nghĩa sẵn ở trong javasript:
alert('Thông báo với user'); // đối số ở đây có thể là một biến string hoặc một giá trị string
var thongbao = "thong bao";
alert(thongbao);
var x = prompt("nhập X: "); // vì function này có dữ liệu trả về
var castToNumber = parseInt("12"); // -> chuyển kiểu dữ liệu từ string sang number: "12" -> 12
// vi du
// f(x) = 2x + 1;
var ham = function (x) { // ~ var x;
    var ketQua = 2 * x + 1;

    return ketQua;
    console.log('ketthuc function'); // <- khong the thuc thi lenh sau return
    // 
}
// function ~ biến -> không được đặt trùng tên.

function hamCoNhieuThamSo(a, b) {

}
// https://github.com/quocchungthan/lopjavascript
/**
 * 
 * Bài tập:
 * 0. Viết hàm và gọi hàm để tính toán biểu thức sau
 * f(x) = 2x + 1;
 * f(a, b) = 2a + b;
 * f(n) = 1 + 2 + 3 + 4 + ... + n;
 */
// khai báo một hàm
// var tong = 0;
// // lặp từ 1 -> n
// tong = tong + i;
// if (/*dieu kien*/) { // -> {}

// }
// function tenHam() {// -> {}

// }
// for(;;) { // -> { }

// }

// return tong sau vòng lặp
/*
 
 * 1. Viết một hàm yêu cầu người dùng nhập một số nguyên (sử dụng prompt). yêu cầu người dùng nhập lại nếu số vừa nhập không phải là số chẵn.
 * 2. Viết một hàm và gọi hàm để kiểm tra xem một số nguyên có phải là số nguyên tố.
 * 2.2 viết hàm đếm số ước của một số nguyên, 
 * giải thích: nếu (a % b == 0) -> a là bội số của b, b là ước của a
 */
function demUocSo(n) {
    var dem = 0;
    // đếm ...
    // duyệt qua tất cả các số từ 1 -> n 
    for (var i = 1; i <= n; i++) {
        // nếu như n chia hết cho một số i bất kì -> tăng đếm lên
        if (n % i == 0) {
            dem = dem + 1;
        }
    }
    return dem;
}
console.log(demUocSo(2));
var soUoc = demUocSo(10);
console.log(soUoc);

function kiemTraNguyenTo(n) {
    if (demUocSo(n) == 2) {// sử dụng lại hàm
        // số nguyên tố là số chỉ có 2 ước.
        console.log('la so nguyen To');
    } else {
        console.log('khong phai nguyen to');
    }
}
/*
 * 3. Khai báo một array các số nguyên, gọi hàm kiểm tra số nguyên tố, in ra các số nguyên tố ở trong array.
 * 4. Viết hàm với tham số là một mảng và một số nguyên N. trả về số lần lặp lại của số N.
 * function ham01(array1, n) {
 *  
 * } 
 * var solanLaplai = ham01([1, 2, 3 ,4, 5, 2, 4], 2);
 * console.log(solanLaplai);
 */



/** Object - khi function là một tổ hợp của các lệnh thì object là tổ hợp của các thuộc tính, mỗi thuộc tính gồm có: Tên, giá trị, và kiểu dữ liệu (giống như biến) */
// cú pháp:
/**
 * {
 *  <tên thuộc tính>: <gía trị của thuộc tính>,
 * }
 * Ví dụ để khai báo một biến object:
 * var <tên biến object> = {
 *  <tên thuộc tính 1> = <giá trị thuộc tính 1>,
 *  <tên thuộc tính 2> = <giá trị thuộc tính 2>
 * };
 */

var hocSinh = {
    ten: "Truong", // kiểu string
    tuoi: 20, // kiểu number
    docThan: true, // kiểu boolean
    luongThang: function() {
        var luongMotNam = 2000;
        var ketQua = 2000 / 12;

        return ketQua;
    }, // kiểu function
    diemSo: [10, 9, 2, 3] // kiểu array
}

// để truy xuất các phần từ của object: sử dụng cú pháp <tên biến object>.<tên thuộc tính>
console.log(hocSinh.ten);
console.log(hocSinh.tuoi);
// với các thuộc tính của một object, có thể kết hợp với các toán tử như với biến.
// ví dụ: phép gán, phép cộng
hocSinh.ten = "Chung";
var muoiNamSau = hocSinh.tuoi + 10;
// để thực thi các thuộc tính thuộc kiểu hàm, sử dụng cú pháp  
// <tên biến>.<tên thuộc tính hàm>();
var luong = hocSinh.luongThang(); // vi co return
console.log("lương tháng của " + hocSinh.ten + "  " + luong)
// bài tập
// 0. khai báo một object smartphone với thuộc tính ví dụ: kích thước, lượng ram,... danh sách ứng dụng,... chức năng.

// ví dụ
var iphoneXr = {
    moKhoa: function() {
        console.log('faceid');
        console.log('mo khoa');
    }
};

// 1.