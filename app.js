/*Create a function with a function name printSum( ) and print the sum of an array.*/

let arr = [2, 1, 3];

function printSum() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        document.write(sum);
        document.write('</br>');
        document.write('</br>');
    }
}
printSum(arr)


/*Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.*/

function getAliceAndBobPoints(aliceRating, bobRating) {
    let alicePoints = 0;
    let bobPoints = 0;
    for (let i = 0; i < aliceRating.length; i++) {
        let currentAliceValue = aliceRating[i];
        let currentBobValue = bobRating[i];
        if (currentAliceValue > currentBobValue) {
            alicePoints = alicePoints + 1;
        } else if (currentAliceValue < currentBobValue) {
            bobPoints = bobPoints + 1;
        }

    }
    return [alicePoints, bobPoints];
}
let records = getAliceAndBobPoints([20, 30, 50], [54, 76, 85]);
document.write('Alice Total Points   ' + records[0]);
document.write('</br>');

document.write('Bob Total Points ' + records[1]);

/*Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. 
Print the decimal value of each fraction on a new line with places after the decimal.*/
let lists = [1, 1, 0, -1, -1];
let positive = 0;
let negative = 0;
let not = 0;
lists.forEach(nums => {

    if (nums === 0) {
        not++
    } else if (nums > 0) {
        positive++
    } else if (nums < 0) {
        negative++
    }
});
nums = lists.length;
document.write(positive / nums);
document.write('</br>');
document.write(negative / nums);
document.write('</br>');
document.write(not / nums);

/* Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)*/

function firstFunction(a, b) {
    let c = a + b;
    document.write('</br>');
    document.write(c);
}
firstFunction(1, 2)