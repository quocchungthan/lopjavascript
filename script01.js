// // document.getElementById('button').click();

// // function tinhTuoi(){
// //     console.log('ban thanh cong mot su kien');
// // }

// // var isStudent = true;

// // console.log(!isStudent);

// // var toanHang1 = 1;
// // var toanHang2 = 2;

// // console.log(toanHang2 + toanHang1);

// // console.log(isStudent ? 'dung' : 'sai');

// // // number
// // // + - * / %
// // // string
// // // +
// // // boolean
// // // ! && ||

// // // assessment:
// // /*

// // - khai bao mot array.
// // - viet function sap xep array theo thu tu tang dan.
// // - su dung console de in ra.

// // */

// // var input = [2, 1, 6, 10, 8, 4, 5];

// // // for
// // // while
// // // do while

// // for (var i = 0; i < 6; ++ i ) {
// //     console.log(`vong lap thu ${i}`);
// // }



// // function sapXep() {
// //     for (var i = 0; i < 7; ++i) {
// //         for (var j = 0; j < 7; ++j) {
// //             if (input[i] > input[1]) {
// //                 var tam = input[i];
// //                 input[i] = input[1];
// //                 input[1] = tam;
// //             }
// //         }
        
// //         if (input[i] > input[2]) {
// //             var tam = input[i];
// //             input[i] = input[2];
// //             input[2] = tam;
// //         }
// //     }
    
// // }

// // sapXep();

// // console.log(input);

// // /**
// //  * if
// //  * switch
// //  */
// // //
// // if (true) {
// //     console.log('vao block true');
// // }

// // toanHang1 = 0;

// // if (toanHang1) {
// //     console.log('vao block false');
// // } else {
// //     console.log('toan hang bang falsy')
// // }

// // switch (toanHang1) {
// //     case 0:
// //         console.log('access case 1');
// //         break;
// //     case 1:
// //         console.log('access case 2');
// //         break;
// // }

// // // gia tri falsy, truthy

// // // -> bien kieu la number truthy != 0 != undefined
// //document.getElementById('button').click();

// function tinhTuoi(){
//     console.log('ban thanh cong mot su kien');
// }

// var isStudent = true;

// console.log(!isStudent);

// var toanHang1 = 1;
// var toanHang2 = 2;

// console.log(toanHang2 + toanHang1);

// console.log(isStudent ? 'dung' : 'sai');

// // number
// // + - * / %
// // string
// // +
// // boolean
// // ! && ||

// // assessment:
// /*

// - khai bao mot array.
// - viet function sap xep array theo thu tu tang dan.
// - su dung console de in ra.

// */

// var input = [2, 1, 6, 10, 8, 4, 5];

// // for
// // while
// // do while

// for (var i = 0; i < 6; ++ i ) {
//     console.log(`vong lap thu ${i}`);
// }

// https://meet.google.com/dvb-zysv-rkp


// function sapXep() {
//     for (var i = 0; i < input.length; ++i) {
//         for (var j = i + 1; j < input.length; ++j) {
//             if (input[i] > input[j]) {
//                 var tam = input[i];
//                 input[i] = input[j];
//                 input[j] = tam;
//             }
//         }
//     }
// }

// // truy xuat phan tu trong array -> []
// // khai bao va thuc thi function -> ()
// // mở và đóng code block -> { }

// sapXep();

// console.log(input);

// function sapXepVaInRa() {
//     var inputElement = document.getElementById('vector');
//     var vector = inputElement.value.split(' ');
//     console.log('input la: ');
//     console.log(vector);

//     input = vector.map(function(phanTu) {
//         return parseInt(phanTu);
//     });

//     console.log(input);
//     sapXep();
//     inputElement.value = input.join(' ');
// }

// /**
//  * if
//  * switch
//  */
// //
// if (true) {
//     console.log('vao block true');
// }

// toanHang1 = 0;

// if (toanHang1) {
//     //console.log('vao block false');
// } else {
//     //console.log('toan hang bang falsy')
// }

// switch (toanHang1) {
//     case 0:
//         //console.log('access case 1');
//         break;
//     case 1:
//         //console.log('access case 2');
//         break;
// }

// // gia tri falsy, truthy

// // -> bien kieu la number truthy != 0 != undefined

// /**
//  * Viet mot trang html template gom co cac san pham: tenSanPham, giaTien, checkbox
//  * Tinh tien tat ca san pham da duoc check boi user.
//  */
// // https://meet.google.com/dvb-zysv-rkp
// function chao(ten) {
//     console.log('chao ' + ten);
// }

// var array = [1, 2 ,3 ,4];

// function sapXepN() {
//     var array = [2, 3];

//     if (true) {
//         let age = 15;
//         console.log(array);
//     }

//     console.log(age);
// }

// sapXepN();
// console.log(array);

// /**
//  * - bien, hang so
//  * - kieu du lieu
//  * - su kien html co ban
//  * - function
//  * - cau lenh dieu kien
//  * - toan tu
//  * - vong lap
//  * - nhung javascript vao html
//  */
//https://github.com/quocchungthan/lopjavascript
// https://meet.google.com/dvb-zysv-rkp
function tinhTien() {
    // doc gia tri cua 4 input
    var giaTien = []; // 4 numbers
    var thegiaTien1 = document.getElementById('giaTien1');
    var giaTriGiaTien1 = thegiaTien1.value;

    giaTien[0] = parseInt(giaTriGiaTien1);
    // parseInt(document.getElementById('giaTien1').value)
    // tuong tu cac san pham khac...
    var checkbox = []; // 4 booleans

    for (var i = 1; i < 5; ++i) {
        var checkboxId = 'thanhToan' + i;
        var theCheckbox = document.getElementById(checkboxId).checked;
        checkbox.push(theCheckbox);
    }

    var tongTien = 0;
    for (var i = 0; i < 4; ++ i) {
        // neu nhu checkBox o vi tri i == true thi cong gia tien tai vi tri I vao tong.
        // if (checkbox[i])
    }

    alert(tongTien);
}