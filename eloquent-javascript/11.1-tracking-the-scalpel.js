function anyStorage(nest, source, name) {
  if (source == nest.name) return storage(nest, name);
  else return routeRequest(nest, source, "storage", name);
}

async function locateScalpel(nest) {
  let current = nest.name;
  for (; ;) {
    let next = await anyStorage(nest, current, "scalpel");
    if (next == current) return current;
    current = next;
  }
}

function locateScalpel2(nest) {
  function loop(current) {
    return anyStorage(nest, current, "scalpel").then(next => {
      if (next == current) return current;
      else return loop(next);
    });
  }
  return loop(nest.name);
}
// bigOak code: https://eloquentjavascript.net/code/crow-tech.js

locateScalpel(bigOak).then(console.log);
// → Butcher's Shop
locateScalpel2(bigOak).then(console.log);
// → Butcher's Shop