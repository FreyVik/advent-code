const fs = require('fs');
const { get } = require('http');

function testReading() {
    let data = fs.readFileSync('./01-CalorieCounting/readFileTesting.txt', 'utf8');
    return data;
}

function testGroupReading() {
    let data = fs.readFileSync('./01-CalorieCounting/readGroupTesting.txt', 'utf8');

    let groups = data.toString().split("\n\n");
    
    let sumGroups = sumGroupsToArray(groups);

    return sumGroups;
}

function getHigher() {
    let realInput = fs.readFileSync('./01-CalorieCounting/realInput.txt', 'utf8');

    let realGroups = realInput.toString().split("\n\n");

    let realSumGroups = sumGroupsToArray(realGroups);

    return getHigherSum(realSumGroups);
    
}

function getThreeHighers() {
    let realInput = fs.readFileSync('./01-CalorieCounting/realInput.txt', 'utf8');

    let realGroups = realInput.toString().split("\n\n");

    let realSumGroups = sumGroupsToArray(realGroups);

    let treeBestSumsArray = bestThreeSums(realSumGroups);

    return treeBestSumsArray;
    
}

function sumGroupsToArray(splittedList) {
    let sumArray = new Array();
    splittedList.forEach((val, index) => {
        let numbersInGroup = val.split("\n")
        sumArray.push(numbersInGroup.reduce((a, b) => parseInt(a) + parseInt(b), 0));
    })

    return sumArray;
}

function getHigherSum(summedArray) {
    let higherOne = 0;

    summedArray.forEach((sum, index) => {
        let integerSum = parseInt(sum);
        if (integerSum > higherOne) {
            higherOne = integerSum;
        }
    })

    return higherOne;
}

function bestThreeSums(summedArray) {
    let bestThreeSums = [0, 0, 0]

    summedArray.forEach((sum, index) => {
        let integerSum = parseInt(sum);

        bestThreeSums.forEach((highSum, indexOfThree) => {
            if(integerSum >= highSum && !bestThreeSums.includes(integerSum)) {
                bestThreeSums.splice(indexOfThree, 0, integerSum);
                bestThreeSums.pop();
            }
        })

    })

    return bestThreeSums;
}

module.exports = {
    testReading,
    testGroupReading,
    getHigher,
    getThreeHighers
};