// Array of objects that holds the the denominations and their values
var denomArr = [
    {name: 'ONE HUNDRED', value: 100.00},
    {name: 'TWENTY', value: 20.00},
    {name: 'TEN', value: 10.00},
    {name: 'FIVE', value: 5.00},
    {name: 'ONE', value: 1.00},
    {name: 'QUARTER', value: 0.25},
    {name: 'DIME', value: 0.10},
    {name: 'NICKEL', value: 0.05},
    {name: 'PENNY', value: 0.01}
  ];

// Cash register function
function checkCashRegister(price, cash, cid) { // `cid` is cash-in-drawer 2D array
  var result = {status: null, change: []}; // `result` is final function output
  var change = cash - price;

  // Transforning `cid` array into object
  var register = cid.reduce(function(accumulator, currentValue) { // `accumulator` holds the result of function call, `currentValue` is a cid array value taken in each iteration ["PENNY", 1.01] -> ["NICKEL", 2.05] -> and so on
      accumulator.total += currentValue[1];
      accumulator[currentValue[0]] = currentValue[1];
      return accumulator;
  }, {total: 0}); // `{total: 0}` is the initial value of the `accumulator`

  if (register.total === change) {
      result.status = 'CLOSED';
      result.change = cid;
      return result;
  }

  if (register.total < change) {
      result.status = 'INSUFFICIENT_FUNDS';
      return result;
  }

  var changeArr = denomArr.reduce(function(accumulator, currentValue) {
      var newValue = 0;
      while (register[currentValue.name] > 0 && change >= currentValue.value) {
          change -= currentValue.value;
          register[currentValue.name] -= currentValue.value;
          newValue += currentValue.value;

          change = Math.round(change * 100) / 100;
      }

      if (newValue > 0) {
          accumulator.push([currentValue.name, newValue]);
      }
      return accumulator;
  }, []);

  if (changeArr.length < 1 || change > 0) {
      result.status = 'INSUFFICIENT_FUNDS';
      return result;
  }

  result.status = 'OPEN';
  result.change = changeArr;
  return result;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
