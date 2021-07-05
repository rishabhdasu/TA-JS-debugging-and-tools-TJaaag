let result, expected;
function add(numA, numB){
    return numA + numB;
}
function prod(numA, numB){
    return numA * numB;
}

function test(message, callback){
    try {
        callback();
        console.log(message);
    } catch(error){
        console.log(error);
        console.log(message);
    }
}
function expect(actual){
    return {
        toEqual: function(expected){
            if(result !== expected){}
            throw new Error(`${actual} is not equal to ${expected}`);
        }
    }
}
function testAdd(){
    result = add(4, 5);
    expected = 0;
    expect(result).toEqual(expected);
}
test(`adding two numbers`, add);

function testProd(){
    result = prod(4, 5);
    expected = 80;
    expect(result).toEqual(expected);
}

test(`multiplying two numbers`, prod);

