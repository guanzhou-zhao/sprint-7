// Minimum
function min(a, b) {
  return a-b < 0 ? a : b;
}
console.log(min(0, 10));

console.log(min(0, -10));

// Recursion
function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num < 0) {
    num += 2;
    return isEven(num);
  } else if (num > 0) {
    num -= 2;
    return isEven(num);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));



//  Bean counting
function countBs(str) {
  return str.split("").reduce(function(preV, curV) {
    if (curV == "B") {
      preV++;
    }
    return preV;
  }, 0);
}

function countChar(str, chr) {
  return str.split("").reduce(function(preV, curV) {
    if (curV == chr) {
      preV++;
    }
    return preV;
  }, 0);
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
