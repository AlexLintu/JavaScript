// Calculating the number of the monitors we need to purchase:
function monitorCount(rows, columns) {
  return rows * columns;
}
// Calculating the total price:
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
// Printing the price to the console:
const totalCost = costOfMonitors(5, 4);
console.log(totalCost); // Prints: 4000