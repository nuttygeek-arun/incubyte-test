 function add(numString) {
    if(numString === '') return 0;
    const numArray = numString.split(',');
    return numArray.map((num) => parseInt(num)).reduce((acc, val) => {
        return acc+val
    }, 0);
}

const sum = add('5,6');
console.log(":: sum", sum)

module.exports = add;