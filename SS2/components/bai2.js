
const countOccurrences = (arr, value) => {
const arrReplacement = arr.filter(item => item == value);
console.log(`Số lần xuát hiện của ${value} trong mảng là: ${arrReplacement.length}`);
}

export default countOccurrences;