// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // Do a check on all your variables. Do console logs after doing a variable.
  function substitution(input, alphabet='', encode = true) {
    const regularAlpha = ("abcdefghijklmnopqrstuvwxyz").split("");
    const alphabetSplit = alphabet.split("");
    let realMessage;
    let encoded = [];
    const newInput = input.toLowerCase();
    trueShift = newInput.split("");
    if (alphabet.length !== 26 || alphabet === undefined) {
      return false;
    }
    for (i = 1; i < alphabet.length; i++) {
      if (alphabetSplit[0] === alphabetSplit[i]) {
        return false;
      }
    }
    if (!encode) {
      for (m = 0; m < newInput.length; m++) {
        switch (trueShift[m]) {
          case alphabetSplit[0]:
            message = "a";
            encoded.push(message);
            break;
          case alphabetSplit[1]:
            message = "b";
            encoded.push(message);
            break;
          case alphabetSplit[2]:
            message = "c";
            encoded.push(message);
            break;
          case alphabetSplit[3]:
            message = "d";
            encoded.push(message);
            break;
          case alphabetSplit[4]:
            message = "e";
            encoded.push(message);
            break;
          case alphabetSplit[5]:
            message = "f";
            encoded.push(message);
            break;
          case alphabetSplit[6]:
            message = "g";
            encoded.push(message);
            break;
          case alphabetSplit[7]:
            message = "h";
            encoded.push(message);
            break;
          case alphabetSplit[8]:
            message = "i";
            encoded.push(message);
            break;
          case alphabetSplit[9]:
            message = "j";
            encoded.push(message);
            break;
          case alphabetSplit[10]:
            message = "k";
            encoded.push(message);
            break;
          case alphabetSplit[11]:
            message = "l";
            encoded.push(message);
            break;
          case alphabetSplit[12]:
            message = "m";
            encoded.push(message);
            break;
          case alphabetSplit[13]:
            message = "n";
            encoded.push(message);
            break;
          case alphabetSplit[14]:
            message = "o";
            encoded.push(message);
            break;
          case alphabetSplit[15]:
            message = "p";
            encoded.push(message);
            break;
          case alphabetSplit[16]:
            message = "q";
            encoded.push(message);
            break;
          case alphabetSplit[17]:
            message = "r";
            encoded.push(message);
            break;
          case alphabetSplit[18]:
            message = "s";
            encoded.push(message);
            break;
          case alphabetSplit[19]:
            message = "t";
            encoded.push(message);
            break;
          case alphabetSplit[20]:
            message = "u";
            encoded.push(message);
            break;
          case alphabetSplit[21]:
            message = "v";
            encoded.push(message);
            break;
          case alphabetSplit[22]:
            message = "w";
            encoded.push(message);
            break;
          case alphabetSplit[23]:
            message = "x";
            encoded.push(message);
            break;
          case alphabetSplit[24]:
            message = "y";
            encoded.push(message);
            break;
          case alphabetSplit[25]:
            message = "z";
            encoded.push(message);
            break;
          default:
            encoded.push(trueShift[m]);
        }
      }
    }
    if (encode) {

      for (i = 0; i < newInput.length; i++) {
        switch (trueShift[i]) {
          case "a":
            message = alphabetSplit[0];
            encoded.push(message);
            break;
          case "b":
            message = alphabetSplit[1];
            encoded.push(message);
            break;
          case "c":
            message = alphabetSplit[2];
            encoded.push(message);
            break;
          case "d":
            message = alphabetSplit[3];
            encoded.push(message);
            break;
          case "e":
            message = alphabetSplit[4];
            encoded.push(message);
            break;
          case "f":
            message = alphabetSplit[5];
            encoded.push(message);
            break;
          case "g":
            message = alphabetSplit[6];
            encoded.push(message);
            break;
          case "h":
            message = alphabetSplit[7];
            encoded.push(message);
            break;
          case "i":
            message = alphabetSplit[8];
            encoded.push(message);
            break;
          case "j":
            message = alphabetSplit[9];
            encoded.push(message);
            break;
          case "k":
            message = alphabetSplit[10];
            encoded.push(message);
            break;
          case "l":
            message = alphabetSplit[11];
            encoded.push(message);
            break;
          case "m":
            message = alphabetSplit[12];
            encoded.push(message);
            break;
          case "n":
            message = alphabetSplit[13];
            encoded.push(message);
            break;
          case "o":
            message = alphabetSplit[14];
            encoded.push(message);
            break;
          case "p":
            message = alphabetSplit[15];
            encoded.push(message);
            break;
          case "q":
            message = alphabetSplit[16];
            encoded.push(message);
            break;
          case "r":
            message = alphabetSplit[17];
            encoded.push(message);
            break;
          case "s":
            message = alphabetSplit[18];
            encoded.push(message);
            break;
          case "t":
            message = alphabetSplit[19];
            encoded.push(message);
            break;
          case "u":
            message = alphabetSplit[20];
            encoded.push(message);
            break;
          case "v":
            message = alphabetSplit[21];
            encoded.push(message);
            break;
          case "w":
            message = alphabetSplit[22];
            encoded.push(message);
            break;
          case "x":
            message = alphabetSplit[23];
            encoded.push(message);
            break;
          case "y":
            message = alphabetSplit[24];
            encoded.push(message);
            break;
          case "z":
            message = alphabetSplit[25];
            encoded.push(message);
            break;
          default:
            encoded.push(trueShift[i]);
        }
      }
   }
    realMessage = encoded.join("");
    return realMessage;
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
