let arrDaySo = [];
//nhập mảng tuỳu ý
function nhapMang() {
  let nhapMangSoNguyen = document.getElementById("nhapMang").value;
  arrDaySo = nhapMangSoNguyen.split(",").map(Number);
  document.getElementById("ketQuaMangSoNguyen").innerText =
    "1. Mảng đã nhập: " + arrDaySo;
}
//1. tính tổng số dương
function tongSoDuong() {
  let tinhTongSoDuong = arrDaySo
    .filter((x) => x > 0)
    .reduce((a, b) => a + b, 0);
  document.getElementById("ketQua2").innerText =
    "2. Tổng số dương : " + tinhTongSoDuong;
}
//2. đếm số dương
function demSoDuong() {
  let count = arrDaySo.filter((x) => x > 0).length;
  document.getElementById("ketQua3").innerText =
    "3. Số lượng số dương: " + count;
}
//3. tìm số nhỏ nhất
function soNhoNhat() {
  let min = Math.min(...arrDaySo);
  document.getElementById("ketQua4").innerText = "4. Số nhỏ nhất: " + min;
}

function soDuongNhoNhat() {
  let posarrDaySo = arrDaySo.filter((x) => x > 0);
  let min = posarrDaySo.length ? Math.min(...posarrDaySo) : "Không có số dương";
  document.getElementById("ketQua5").innerText = "5. Số dương nhỏ nhất: " + min;
}

function soChanCuoiCung() {
  let soChan = arrDaySo.filter((x) => x % 2 === 0).pop() || -1;
  document.getElementById("ketQua6").innerText =
    "6. Số chẵn cuối cùng: " + soChan;
}

function doiViTri() {
  let viTri1 = parseInt(prompt("Nhập vị trí muốn đổi thứ nhất:"));
  let viTri2 = parseInt(prompt("Nhập vị trí muốn đổi thứ hai:"));
  if (
    viTri1 >= 0 &&
    viTri1 < arrDaySo.length &&
    viTri2 >= 0 &&
    viTri2 < arrDaySo.length
  ) {
    //đổi chỗ
    [arrDaySo[viTri1], arrDaySo[viTri2]] = [arrDaySo[viTri2], arrDaySo[viTri1]];
    document.getElementById("ketQua7").innerText =
      "7. Mảng sau khi đổi chỗ: " + arrDaySo;
  } else {
    alert("Nhập vị trí đúng!");
  }
}

function sapXepTangDan() {
  document.getElementById("ketQua8").innerText =
    "8. Mảng sắp xếp tăng dần: " + arrDaySo.sort((a, b) => a - b);
}
let arrDaySoThuc = [];
function nhapMangSoThuc() {
  let nhapMangSoThuc = document.getElementById("nhapSoThuc").value;
  arrDaySoThuc = nhapMangSoThuc.split(",").map(Number);
  document.getElementById("ketQuaMangSoThuc").innerText =
    "Mảng số thực đã nhập: " + arrDaySoThuc;
}
function tinhTongCacSoNguyen() {
  let soNguyenCanTim = +arrDaySoThuc.filter((x) => Number.isInteger(x)).length;
  document.getElementById("ketQua9").innerText =
    "Số lượng số nguyên trong mảng số thực: " + soNguyenCanTim;
}
function soSanhSoDuongVaAm() {
  let soDuong = arrDaySo.filter((x) => x > 0).length;
  let soAm = arrDaySo.filter((x) => x < 0).length;
  let ketQua =
    soDuong > soAm
      ? "10. Trong mảng có số dương nhiều hơn"
      : soDuong < soAm
      ? "10. Trong mảng có số âm nhiều hơn"
      : "10. Trong mảng có số dương và số âm bằng nhau";
  document.getElementById("ketQua10").innerText = ketQua;
}
