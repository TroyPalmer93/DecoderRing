// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let realMessage = "";
    let shiftingArray = [];
    let encoded = [];
    const newInput = input.toLowerCase();
    trueShift = newInput.split("");
    if (!encode) {
      var str = newInput;
      encoded = str.match(/([1-5]{2})|(\s){1}/g);
      for (i = 0; i < encoded.length; i++) {
        switch (encoded[i]) {
          case "11":
            message = "a";
            shiftingArray.push(message);
            break;
          case "21":
            message = "b";
            shiftingArray.push(message);
            break;
          case "31":
            message = "c";
            shiftingArray.push(message);
            break;
          case "41":
            message = "d";
            shiftingArray.push(message);
            break;
          case "51":
            message = "e";
            shiftingArray.push(message);
            break;
          case "12":
            message = "f";
            shiftingArray.push(message);
            break;
          case "22":
            message = "g";
            shiftingArray.push(message);
            break;
          case "32":
            message = "h";
            shiftingArray.push(message);
            break;
          case "42":
            message = "i/j";
            shiftingArray.push(message);
            break;
          case "52":
            message = "k";
            shiftingArray.push(message);
            break;
          case "13":
            message = "l";
            shiftingArray.push(message);
            break;
          case "23":
            message = "m";
            shiftingArray.push(message);
            break;
          case "33":
            message = "n";
            shiftingArray.push(message);
            break;
          case "43":
            message = "o";
            shiftingArray.push(message);
            break;
          case "53":
            message = "p";
            shiftingArray.push(message);
            break;
          case "14":
            message = "q";
            shiftingArray.push(message);
            break;
          case "24":
            message = "r";
            shiftingArray.push(message);
            break;
          case "34":
            message = "s";
            shiftingArray.push(message);
            break;
          case "44":
            message = "t";
            shiftingArray.push(message);
            break;
          case "54":
            message = "u";
            shiftingArray.push(message);
            break;
          case "15":
            message = "v";
            shiftingArray.push(message);
            break;
          case "25":
            message = "w";
            shiftingArray.push(message);
            break;
          case "35":
            message = "x";
            shiftingArray.push(message);
            break;
          case "45":
            message = "y";
            shiftingArray.push(message);
            break;
          case "55":
            message = "z";
            shiftingArray.push(message);
            break;
          default:
            shiftingArray.push(encoded[i]);
        }
      }
    }
    if (encode) {
      for (i = 0; i < newInput.length; i++) {
        switch (trueShift[i]) {
          case "a":
            message = 11;
            shiftingArray.push(message);
            break;
          case "b":
            message = 21;
            shiftingArray.push(message);
            break;
          case "c":
            message = 31;
            shiftingArray.push(message);
            break;
          case "d":
            message = 41;
            shiftingArray.push(message);
            break;
          case "e":
            message = 51;
            shiftingArray.push(message);
            break;
          case "f":
            message = 12;
            shiftingArray.push(message);
            break;
          case "g":
            message = 22;
            shiftingArray.push(message);
            break;
          case "h":
            message = 32;
            shiftingArray.push(message);
            break;
          case "i":
            message = 42;
            shiftingArray.push(message);
            break;
          case "j":
            message = 42;
            shiftingArray.push(message);
            break;
          case "k":
            message = 52;
            shiftingArray.push(message);
            break;
          case "l":
            message = 13;
            shiftingArray.push(message);
            break;
          case "m":
            message = 23;
            shiftingArray.push(message);
            break;
          case "n":
            message = 33;
            shiftingArray.push(message);
            break;
          case "o":
            message = 43;
            shiftingArray.push(message);
            break;
          case "p":
            message = 53;
            shiftingArray.push(message);
            break;
          case "q":
            message = 14;
            shiftingArray.push(message);
            break;
          case "r":
            message = 24;
            shiftingArray.push(message);
            break;
          case "s":
            message = 34;
            shiftingArray.push(message);
            break;
          case "t":
            message = 44;
            shiftingArray.push(message);
            break;
          case "u":
            message = 54;
            shiftingArray.push(message);
            break;
          case "v":
            message = 15;
            shiftingArray.push(message);
            break;
          case "w":
            message = 25;
            shiftingArray.push(message);
            break;
          case "x":
            message = 35;
            shiftingArray.push(message);
            break;
          case "y":
            message = 45;
            shiftingArray.push(message);
            break;
          case "z":
            message = 55;
            shiftingArray.push(message);
            break;
          default:
            shiftingArray.push(trueShift[i]);
        }
      }
    }
    realMessage = shiftingArray.join("");
    let nott = realMessage;
    if (nott.match((/[^ ]/g) % 2 === 1)) {
      return false;
    }
    return realMessage;
  }

  return {
    polybius,
  };
})();
*/
const polybiusModule = (() => {
  const DECODE_KEY = {
    11: 'a',
    21: 'b',
    31: 'c',
    41: 'd',
    51: 'e',
    12: 'f',
    22: 'g',
    32: 'h',
    42: 'i/j',
    52: 'k',
    13: 'l',
    23: 'm',
    33: 'n',
    43: 'o',
    53: 'p',
    14: 'q',
    24: 'r',
    34: 's',
    44: 't',
    54: 'u',
    15: 'v',
    25: 'w',
    35: 'x',
    45: 'y',
    55: 'z'
  };
  const ENCODE_KEY = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55
  };
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let split;
    let KEY = ENCODE_KEY;
    if (encode) {
      split = input.split('');
    } else {
      KEY = DECODE_KEY;
      split = input.split(' ');
      const isOdd = split.reduce((acc, arr) => acc + arr.length, 0) % 2;
      if (isOdd) return false;
      split = split
        .map((section) => {
          return section.split('').reduce((acc, char, index, collection) => {
            if (char === ' ') {
              acc.push(' ');
            } else if (!(index % 2)) {
              acc.push(char + collection[index + 1]);
            }
            return acc;
          }, []);
        })
        .reduce((a, b) => a.concat(' ', b));
    }
    return split.map((char) => KEY[char] || ' ').join('');
  }
  return {
    polybius
  };
})();

module.exports = polybiusModule.polybius;
