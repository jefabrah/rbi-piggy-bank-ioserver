 const axios = require('axios');
 const username = 'username'; // change 'username' to your username

 module.exports = {
   postCoinInput: function (pulseCount) {
      console.log('Pulse Count:',pulseCount);
      // get coin value from pulse count
      let coinValue;
      let coinType;
      switch (pulseCount) {
         case 1:
            console.log('penny');
            coinValue = 1;
	    coinType = 'pennies';
            break;
         case 2:
            console.log('nickel');
            coinValue = 5;
	    coinType = 'nickels';
            break;
         case 3:
            console.log('dime');
            coinValue = 10;
            coinType = 'dimes';
            break;
         case 4:
            console.log('quarter');
            coinValue = 25;
            coinType = 'quarters';
            break;
         default:
            console.log('Invalid pulse');
            return;
      }

      // send coin to API server
      let url = 'http://cash-cache.herokuapp.com/coin';

      axios.post(url, {
       coinValue: coinValue,
       coinType: coinType,
       username: username
     })
     .then(function (response) {
       console.log(response.data);
     })
     .catch(function (error) {
       console.log('POST error: ', error);
     });

   }
 };
