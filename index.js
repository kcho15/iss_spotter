// index.js

const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
} = require('./iss');


//Test 1
fetchCoordsByIP("23.16.103.186", (error, data) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(data);
  }
});

// Test 2
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

// Test 3
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});