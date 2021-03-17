// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let realMessage = "";
    let shiftingArray = [];
    let encoded = [];
    const newInput = input.toLowerCase();
    trueShift = newInput.split("");
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    if (!encode) {
      shift *= -1;
    }
    for (i = 0; i < newInput.length; i++) {
      switch (trueShift[i]) {
        case "a":
          message = 0 + shift;
          shiftingArray.push(message);
          break;
        case "b":
          message = 1 + shift;
          shiftingArray.push(message);
          break;
        case "c":
          message = 2 + shift;
          shiftingArray.push(message);
          break;
        case "d":
          message = 3 + shift;
          shiftingArray.push(message);
          break;
        case "e":
          message = 4 + shift;
          shiftingArray.push(message);
          break;
        case "f":
          message = 5 + shift;
          shiftingArray.push(message);
          break;
        case "g":
          message = 6 + shift;
          shiftingArray.push(message);
          break;
        case "h":
          message = 7 + shift;
          shiftingArray.push(message);
          break;
        case "i":
          message = 8 + shift;
          shiftingArray.push(message);
          break;
        case "j":
          message = 9 + shift;
          shiftingArray.push(message);
          break;
        case "k":
          message = 10 + shift;
          shiftingArray.push(message);
          break;
        case "l":
          message = 11 + shift;
          shiftingArray.push(message);
          break;
        case "m":
          message = 12 + shift;
          shiftingArray.push(message);
          break;
        case "n":
          message = 13 + shift;
          shiftingArray.push(message);
          break;
        case "o":
          message = 14 + shift;
          shiftingArray.push(message);
          break;
        case "p":
          message = 15 + shift;
          shiftingArray.push(message);
          break;
        case "q":
          message = 16 + shift;
          shiftingArray.push(message);
          break;
        case "r":
          message = 17 + shift;
          shiftingArray.push(message);
          break;
        case "s":
          message = 18 + shift;
          shiftingArray.push(message);
          break;
        case "t":
          message = 19 + shift;
          shiftingArray.push(message);
          break;
        case "u":
          message = 20 + shift;
          shiftingArray.push(message);
          break;
        case "v":
          message = 21 + shift;
          shiftingArray.push(message);
          break;
        case "w":
          message = 22 + shift;
          shiftingArray.push(message);
          break;
        case "x":
          message = 23 + shift;
          shiftingArray.push(message);
          break;
        case "y":
          message = 24 + shift;
          shiftingArray.push(message);
          break;
        case "z":
          message = 25 + shift;
          shiftingArray.push(message);
          break;
        default:
          shiftingArray.push(trueShift[i]);
      }
    }
    for (n = 0; n < newInput.length; n++) {
      if (shiftingArray[n] > 25) {
        shiftingArray[n] = shiftingArray[n] - 26;
      }
      if (shiftingArray[n] < 0) {
        shiftingArray[n] = shiftingArray[n] + 26;
      }
    }
    for (m = 0; m < newInput.length; m++) {
      switch (shiftingArray[m]) {
        case 0:
          message = "a";
          encoded.push(message);
          break;
        case 1:
          message = "b";
          encoded.push(message);
          break;
        case 2:
          message = "c";
          encoded.push(message);
          break;
        case 3:
          message = "d";
          encoded.push(message);
          break;
        case 4:
          message = "e";
          encoded.push(message);
          break;
        case 5:
          message = "f";
          encoded.push(message);
          break;
        case 6:
          message = "g";
          encoded.push(message);
          break;
        case 7:
          message = "h";
          encoded.push(message);
          break;
        case 8:
          message = "i";
          encoded.push(message);
          break;
        case 9:
          message = "j";
          encoded.push(message);
          break;
        case 10:
          message = "k";
          encoded.push(message);
          break;
        case 11:
          message = "l";
          encoded.push(message);
          break;
        case 12:
          message = "m";
          encoded.push(message);
          break;
        case 13:
          message = "n";
          encoded.push(message);
          break;
        case 14:
          message = "o";
          encoded.push(message);
          break;
        case 15:
          message = "p";
          encoded.push(message);
          break;
        case 16:
          message = "q";
          encoded.push(message);
          break;
        case 17:
          message = "r";
          encoded.push(message);
          break;
        case 18:
          message = "s";
          encoded.push(message);
          break;
        case 19:
          message = "t";
          encoded.push(message);
          break;
        case 20:
          message = "u";
          encoded.push(message);
          break;
        case 21:
          message = "v";
          encoded.push(message);
          break;
        case 22:
          message = "w";
          encoded.push(message);
          break;
        case 23:
          message = "x";
          encoded.push(message);
          break;
        case 24:
          message = "y";
          encoded.push(message);
          break;
        case 25:
          message = "z";
          encoded.push(message);
          break;
        default:
         encoded.push(shiftingArray[m]);
      }
    }
    realMessage = encoded.join("");
    return realMessage;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
