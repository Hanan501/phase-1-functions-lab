function distanceFromHqInBlocks(blockNumber) {
    let distance = Math.abs(blockNumber - 42);
    return distance;
  }
  
  function distanceFromHqInFeet(blockNumber) {
    let distanceInFeet = distanceFromHqInBlocks(blockNumber) * 264;
    return distanceInFeet;
  }
  
  function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = Math.abs(destination - start) * 264;
    return distanceTravelled;
  }
  
  function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
      return 0;
    } else if (feet <= 2000) {
      return (feet - 400) * 0.02;
    } else if (feet <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
