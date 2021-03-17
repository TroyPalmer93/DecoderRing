const decodeLetters = separatedWords.map (numberKey =>
  numberKey.map (letter =>
    Object.keys (alphabet).find (key => alphabet[key] == letter)
  )
);