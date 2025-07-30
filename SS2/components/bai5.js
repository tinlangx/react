const isSymetric = (arr) => {
    const isFlagSymetric = JSON.stringify(arr) == JSON.stringify
    (arr.reverse())
    console.log(`Mảng ${isFlagSymetric ? 'Đối xứng' : 'Không đối xứng'}`);
}

export default isSymetric;