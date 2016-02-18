console.log('yar! js working.');

// Your code here!

// //declare variables
var answer;
var operation;
var number1;
var number2;

operation = prompt("Choose a mathematical operator: addition, subtraction, multiplication, division, modulo, or exponent.");
number1 = parseInt(prompt("Type in a number")); //parseInt(): turn string input into an integer
number2 = parseInt(prompt("Type in another number."));

//control flow to determine how to handle the inputted operation and numbers
if(operation == "addition"){
	answer = number1 + number2; 
	alert(number1 + " + " + number2 + " = " + answer);
}else if(operation == "subtraction"){
	if(number1 > number2){
		answer = (number1) - (number2);
		alert(number1 + " - " + number2 + " = " + answer);
	}else{
		answer = (number2) - (number1);
		alert(number1 + " - " + number2 + " = -" + answer);
	}
}else if(operation == "multiplication"){
	answer = number1 * number2;
	alert(number1 + " * " + number2 + " = " + answer);
}else if(operation == "division"){
	if(number1 > number2){
		answer = number1 / number2;
		alert(number1 + " / " + number2 + " = " + answer);
	}else{
		parseFloat(answer = number1 / number2); //parseFloat() turns input into float
		alert(number1 + " / " + number2 + " = " + answer);
	}
}else if(operation=="modulo"){
	answer = number1 % number2;
	alert("The remainder of " + number1 + " and " + number2 + " is " + answer);
}else if(operation=="exponent"){
	answer = Math.pow(number1, number2); //Math.pow() calculates exponents
	alert(number1 + " ^ " + number2 + " = " + answer);
}else{
	alert("Enter an operation and try again!")
}



