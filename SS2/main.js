import { clickMe } from "./components/demo.js";
import sumArray from "./components/bai1.js";
import countOccurrences from "./components/bai2.js";
import removeDuplicates from "./components/bai3.js";
import flattenArray from "./components/bai4.js";
import isSymetric from "./components/bai5.js";

document.querySelector(`.bai1`).addEventListener(`click`, () => {
    sumArray([1, 2, 3, 4, 5])
});

document.querySelector('.bai2').addEventListener('click', () => {
    countOccurrences([1, 2, 2, 3, 2, 4], 2);
});

document.querySelector('.bai3').addEventListener('click', () => {
    removeDuplicates([1, 2, 2, 3, 2, 4]);
})

document.querySelector('.bai4').addEventListener('click', () => {
    flattenArray([1, 2][3, 4]);
})

document.querySelector('.bai5').addEventListener('click', () => {
    isSymetric([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
})
