function add(numString) {
    if(numString === '') return 0;
    let delimiter = /,|\n/;
    let numSet = numString;
    if(numString.includes('//')) { // checking of delimited is there
        const splitValues = numString.split('//')[1].split('\n') // getting the saperator
        delimiter = splitValues[0]; // delimiter
        numSet = splitValues[1]; // value set
    }
    const numArray = numSet.split(delimiter); 
    return numArray.map((num) => parseInt(num)).reduce((acc, val) => {
        return acc+val
    }, 0);
}

const sum = add('//test\n1test2test3');
console.log(":: sum", sum)

module.exports = add;