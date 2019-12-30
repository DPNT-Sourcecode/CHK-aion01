'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function checkout (skus) {
    let total= 0;
    let quantity= {A:0, B:0, C:0, D:0};
    if(skus != '') {
      for (var i = 0; i < skus.length; i++) {
        switch (skus.charAt(i)) {
          case "A":
            total += 50;
            quantity.A += 1;
            break;
          case "B":
            total += 30;
            quantity.B += 1;
            break;
          case "C":
            total += 20;
            quantity.C += 1;
            break;
          case "D":
            total += 15;
            quantity.D += 1;
            break;
          default:
            return -1;
        }

      }

      let discountA5= Math.floor(quantity.A / 5) * 50;
      let discountA3= Math.floor((quantity.A%5) / 3) * 20;


      total = total - (Math.floor(quantity.A / 3) * 20) - (Math.floor(quantity.B / 2) * 15);


      return total;
    }
   else {
       return 0;
    }


};


