function add(numString) {
    if(numString === '') return 0;
    const numArray = numString.split(/,|\n/); // saperating vaalues by both , and \n
    return numArray.map((num) => parseInt(num)).reduce((acc, val) => {
        return acc+val
    }, 0);
}

const sum = add('5,6\n8');
console.log(":: sum", sum)

module.exports = add;