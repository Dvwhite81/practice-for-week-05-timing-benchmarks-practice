const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.time("addNums10");
  let total = [];
  for (let i = increment; i <= (increment * 10); i += increment) {
    let start = Date.now();
    total.push(addNums(i));
    let end = Date.now();
    console.log(`${end - start}`);
  }
  console.timeEnd("addNums10");
  return total;
}


function addManyNums10Timing(increment) {
  console.time("addManyNums10");
  let total = [];
  for (let i = increment; i <= (increment * 10); i += increment) {
    let start = Date.now();
    total.push(addManyNums(i));
    let end = Date.now();
    console.log(`${end - start}`);
  }
  console.timeEnd("addManyNums10");
  return total;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
