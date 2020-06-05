var katzDeliLine=[];                   //Current Guests already waiting in line
var number = 0;

function takeANumber(katzDeliLine,name = "Guest")
    katzDeliLine.push(name)
    console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
function takeANumber(katzDeliLine){
    number = number +1;
    katzDeliLine.push(number);
    console.log(`Welcome, ${number}. You are number ${katzDeliLine.length} in line.`);
    //return `Welcome, ${number}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line)
    console.log("Line is currently empty")
    var newLine = [],i;
    var newLine = [];
    //line.forEach(function(item,index){newLine.push(` ${index+1}. ${item}`)} )
    for(i=0; i<line.length;i++){
    for(var i=0; i<line.length;i++){
      newLine.push(` ${i+1}. ${line[i]}`);
    }
    console.log(`The line is currently:${newLine}`);
    //console.log(`The line is currently:${newLine}`)
    return `The line is currently:${newLine}`;
  }
}


takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."