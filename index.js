var num = 0

function takeANumber(line) {
  num++
  
  line.push(num)
  return  `Welcome, you are number ${num}.`
}

const line = []
console.log(takeANumber(line)) // 1
console.log(takeANumber(line)) // 2
console.log(takeANumber(line)) // 3

function nowServing(line){
  if (line.length <= 0 ) {
    return "There is nobody waiting to be served!"; 
  } 
  
  return `Currently serving ${line.shift()}.`
  
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var arr = [];
    for (let i = 0; i < line.length; i++ )
      arr.push(`${i + 1}. ${line[i]}`);
  
  }  
  return `The line is currently: ${arr.join(', ')}`
}
