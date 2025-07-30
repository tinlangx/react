const removeDuplicates = (arr) => {
    const uniqueArr = arr.filter((item, index) => arr.indexOf(item) == index);
    console.log(`Mảng sau khi loại bỏ trùng lặp: ${uniqueArr}`)
    // const uniqueArr [... new Set(arr)];
    // console.log(`Mangr sau khi loại bỏ phần tử trùng lặp: ${uniqueArr}`);
}

export default removeDuplicates;