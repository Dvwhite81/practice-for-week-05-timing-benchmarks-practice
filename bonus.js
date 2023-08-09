const [addNums, addManyNums] = require("./phase-1");

function addNums100Timing(increment) {
  console.time("addNums100");
  let total = [];
  for (let i = increment; i <= (increment * 100); i += increment) {
    let start = Date.now();
    total.push(addNums(i));
    let end = Date.now();
    console.log(`${end - start}`);
  }
  console.timeEnd("addNums100");
  return total;
}


function addManyNums100Timing(increment) {
  console.time("addManyNums100");
  let total = [];
  for (let i = increment; i <= (increment * 100); i += increment) {
    let start = Date.now();
    total.push(addManyNums(i));
    let end = Date.now();
    console.log(`${end - start}`);
  }
  console.timeEnd("addManyNums100");
  return total;

}

/*
n = 1000000
console.log(`addNums(${n}): `);
addNums100Timing(1000000);

console.log("\n***********\n");
*/
n = 5000
console.log(`addManyNums100(${n}): `);
addManyNums100Timing(5000);
