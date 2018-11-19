// Write your cade below:
function caclRemaindar(x,y) {return x%y};

function caclSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += (array[i]);
    }
    return sum;
};

function caclSumInConditon(array, y) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i] < y){
            sum += (array[i]);
        }
    }
    return sum;
};


module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}