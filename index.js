const add = (num1, ...values) => {
    let ans = num1;
    for(num of values) {
        ans += num;
    }
    return ans;
}

const subract = (fromnum, num) => {
    let ans = fromnum - num;
    return ans;
}

const multiply = (num1, ...values) => {
    let ans = num1;
    for(num of values) {
        ans *= num;
    }
    return ans;
}


const divide = (divident, divider) => {
    let ans = divident / divider;
    return ans;
}


const mod = (divident, divider) => {
    let ans = divident - divider;
    return ans;
}

module.exports = {add, subract, multiply, divide, mod};
