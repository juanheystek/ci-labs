const { add, subtract } = require('./index');

function assert(name, actual, expected) {
 if (actual === expected) { 
    console.log('PASS: ' + name); 
 } else { 
    console.log('FAIL: ' + name + ' (got ' + actual + ', expected ' + expected + ')'); 
    process.exit(1);
 }
}

assert('add 2+3', add(2, 3), 5);
assert('subtract 5-3', subtract(5, 3), 2);