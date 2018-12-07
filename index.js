function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    const dist = Math.abs(parseInt(block1) - parseInt(block2));
    return (blockRange >= dist) ? `within range by ${blockRange - dist}` : `${dist - blockRange} blocks out of range`;
  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return amount * percent;
  }
}

function createDriver() {
  
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }

  }
}



  

