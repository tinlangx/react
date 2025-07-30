// // Bài 1: In ra chuỗi sử dụng Template Literals, kết hợp Function như sau:
// Input:
// productInfo("Sách", 20000);
// Output:
// "Sản phẩm: Sách, Giá: 20,000 VNĐ"


const printLiteralTemplate = (product, price) => {
    console.log(`Sản phẩm: ${product}, Giá: ${price} VNĐ`);
};

printLiteralTemplate("Sách", 50000)

// Bài 2: Viết hàm chào người dùng theo tên
// Input:
// greet("An");
// Output:
// "Xin chào, An!"

const greet = (name) => console.log(`Xin Chào: ${name}!`);
greet("Lang Duong Tin");


// Bài 3: Tính tổng các số từ 1 đến n
// Input:
// sumUpTo(5);
// Output:
// 15

const sumUpToNumber = (n) => {
    const result = (n *(n+1))/2;
    console.log (`Tổng từ 1 đến ${n} là: ${result}`);
};
sumUpToNumber(110);

// Bài 4; Tính bình phương một số
// Input:
// square(6);
// Output:
// 36

const square = (n) => {
  return n * n;
};
console.log(square(5)); 