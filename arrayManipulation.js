// A function with an array  as argument
function processArray(number){
    // A new array
    let newNumber=[];

for(let x=0; x<number.length; x++){
    
    // if number at index "x" in array is even, square number & store in newNumber
    if (number[x]%2===0){
        newNumber.push(number[x]**2)
    }

    //if number at index "x" in array is odd, triple number & store in newNumber
    else{
        newNumber.push(number[x]*3)
    }
    
}
       return newNumber;
}

 

function formatArrayStrings(processedNumber,word){
  let newWord=[]
  for(let i=0; i<word.length ; i++){
    if(processedNumber[i]%2===0){
         newWord.push(word[i].toUpperCase())
    }
    else{
        newWord.push(word[i].toLowerCase())
    }
  }
        return newWord;
}

