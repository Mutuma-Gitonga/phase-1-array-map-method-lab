const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  const result = tutorials.map((sentence) => {
    
      const wordsArray = sentence.split(" ");
      
      const titleCasedWord = wordsArray.map((word) => {
        
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        // RETURN STRINGS WITH NON-CAPITALIZED FIRST CHAR AFTER CAPITALIZING THEM 
        if(!(word.charAt(0).toUpperCase() === word.charAt(0)) && !(word.charAt(0) !== word.charAt(0).toLowerCase())){
          return `${word.charAt(0).toUpperCase()}${word.substring(1,word.length)}`;
        }  
          // USING REGEX, RETURN NON-ALPHANUMERIC STRINGS AND EXCLUDE THOSE WITH ALPHANUMERIC CHARACTERS. OFCOURSE TITLE CASE UNNECESSARY
          else if(specialChars.test(word) && !/[a-zA-Z]/.test(word)) {
            return `${word}`;
          }
            // RETURN WORDS WITH CAPITALIZED FIRST CHAR (CAPITALIZATION UNNECESSARY) 
            else {
              return `${word}`;
          }
        
      });
    
      return titleCasedWord.join(" ");
     
  });

  return result;
}

// console.log(titleCased());

