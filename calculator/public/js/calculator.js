// Get ElementById dùng để lấy phần tử từ html 
const result = document.getElementById('result');
// Hàm dùng để thực hiện cộng trừ nhân chia
// Khai báo 1 cái value để gán giá trị khi nhập từ màn hình
function addPT(value) {
  result.value += value; // value là giá trị được gán 
}
// Hàm dùng để thực hiện phượng thức xóa 
function clearALL() {
  result.value = '';
}
// Eval hàm trả về giá trị của biểu thức trong nó
function calculate() {
  result.value = eval(result.value); 
}