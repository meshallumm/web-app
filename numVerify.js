let num = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
const checkNum=prompt("Please enter a vaild Israeli mobile number")
const isRight=num.test(checkNum); // false
alert(`The number you've entered is ${isRight}`)