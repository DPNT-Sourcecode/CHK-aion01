'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function checkout (skus) {
    let total= 0;
    let quantity= {A:0, B:0, C:0, D:0, E:0, F:0, G:0, H:0, I:0, J:0, K:0, L:0, M:0, N:0, O:0, P:0, Q:0, R:0, S:0, T:0, U:0, V:0, W:0, X:0, Y:0, Z:0 };
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
          case "F":
            total += 10;
            quantity.F += 1;
            break;
          case "G":
            total += 20;
            quantity.G += 1;
            break;
          case "H":
            total += 10;
            quantity.H += 1;
            break;
          case "I":
            total += 35;
            quantity.I += 1;
            break;
          case "J":
            total += 60;
            quantity.J += 1;
            break;
          case "K":
            total += 80;
            quantity.K += 1;
            break;
          case "L":
            total += 90;
            quantity.L += 1;
            break;
          case "M":
            total += 15;
            quantity.M += 1;
            break;
          case "N":
            total += 40;
            quantity.N += 1;
            break;
          case "O":
            total += 10;
            quantity.O += 1;
            break;
          case "P":
            total += 50;
            quantity.P += 1;
            break;
          case "Q":
            total += 30;
            quantity.Q += 1;
            break;
          case "R":
            total += 50;
            quantity.R += 1;
            break;
          case "S":
            quantity.S += 1;
            break;
          case "T":
            quantity.T += 1;
            break;
          case "U":
            total += 40;
            quantity.U += 1;
            break;
          case "V":
            total += 50;
            quantity.V += 1;
            break;
          case "W":
            total += 20;
            quantity.W += 1;
            break;
          case "X":
            quantity.X += 1;
            break;
          case "Y":
            quantity.Y += 1;
            break;
          case "Z":
            quantity.Z += 1;
            break;
          default:
            return -1;
        }

      }

      let discountA5= Math.floor(quantity.A / 5) * 50;
      let discountA3= Math.floor((quantity.A%5) / 3) * 20;
      let discountB2= 0;
      let discountE= Math.floor(quantity.E / 2) ;
      let discountF= Math.floor(quantity.F / 3) * 10;
      let discountH5= Math.floor((quantity.H % 10)/5)*5 ;
      let discountH10= Math.floor(quantity.H / 10)*20 ;
      let discountK= Math.floor(quantity.K / 2)*10 ;
      let discountN= Math.floor(quantity.N / 3);
      let discountP= Math.floor(quantity.P / 5)* 50;
      let discountQ= Math.floor(quantity.Q / 3)* 10;
      let discountR= Math.floor(quantity.R / 3);
      let discountU= Math.floor(quantity.U / 4)* 40;
      let discountV2= Math.floor(quantity.V / 3)* 20;
      let discountV3= Math.floor((quantity.V%3) / 2)* 10;

      if((quantity.B - discountE) >= 0) {
        discountB2=Math.floor((quantity.B - discountE)/ 2) * 15;
        total -= 30*discountE;
      } else {
        discountB2= Math.floor(quantity.B/2)*15;
      }

      if((quantity.Q - discountR) >= 0) {
        quantity.Q-=discountR;
        discountQ= Math.floor(quantity.Q / 3)* 10;
        total -= 30*discountR;
      } else {
        total -= 30*quantity.Q;
      }

      if((quantity.M - discountN) >= 0) {
        total -= 15*discountN;
      } else {
        total -= 15*quantity.M;
      }


      let groupOffer= quantity.S + quantity.T + quantity.X + quantity.Y + quantity.Z;

      let priceGroup= Math.floor(groupOffer / 3)* 45;
      total += priceGroup;

      let remainingGroup= groupOffer%3;

      while(remainingGroup>0) {
        if(quantity.X>0){
          quantity.X -=1;
          remainingGroup -=1;
          total+= 17;
        } else if(quantity.S>0) {
          quantity.S -=1;
          remainingGroup -=1;
          total+= 20;
        }else if(quantity.T>0) {
          quantity.T -=1;
          remainingGroup -=1;
          total+= 20;
        }else if(quantity.Y>0) {
          quantity.Y -=1;
          remainingGroup -=1;
          total+= 20;
        }else if(quantity.Z>0) {
          quantity.Z -=1;
          remainingGroup -=1;
          total+= 21;
        }
      }


      total = total - discountA5 - discountA3 - discountB2 - discountF - discountH5 - discountH10 - discountK - discountP - discountQ - discountU- discountV2- discountV3 ;


      return total;
    }
   else {
       return 0;
    }


};