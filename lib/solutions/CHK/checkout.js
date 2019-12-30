'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function checkout (skus) {
    let total= 0;
    let quantity= {A:0, B:0, C:0, D:0, E:0};
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
          case "E":
            total += 40;
            quantity.E += 1;
            break;
          default:
            return -1;
        }

      }

      let discountA5= Math.floor(quantity.A / 5) * 50;
      let discountA3= Math.floor((quantity.A%5) / 3) * 20;
      let discountB2= 0;
      let discountE= Math.floor(quantity.E / 2) ;

      if((quantity.B - discountE) >= 0) {
        discountB2=Math.floor(quantity.B / 2) * 15;
        total -= 30*discountE;
      } else {
        discountB2= quantity.B2*30;
      }


      total = total - discountA5- discountA3 - discountB2;


      return total;
    }
   else {
       return 0;
    }


};