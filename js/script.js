let numberSeconds = +prompt('How many seconds is it?');
let numberHours = parseInt(numberSeconds/3600);
let numberMinutes = parseInt(numberSeconds/60) - numberHours*60
if(numberHours==1 && numberMinutes==1){
	alert('It is ' + numberHours + ' hour and ' + numberMinutes + ' minute');
}
else if(numberHours!=1 && numberMinutes!=1){
	alert('It is ' + numberHours + ' hours and ' + numberMinutes + ' minutes');
}
else if(numberHours==1 && numberMinutes!=1){
	alert('It is ' + numberHours + ' hour and ' + numberMinutes + ' minutes');
}
else alert('It is ' + numberHours + ' hours and ' + numberMinutes + ' minute');

let roomWide = +prompt('Enter wide of room');
let roomLength = +prompt('Enter length of room');
let roomHeight = +prompt('Enter height of room');
let windowWide = +prompt('Enter wide of window');
let windowHeight = +prompt('Enter height of window');
let doorWide = +prompt('Enter wide of door');
let doorHeight = +prompt('Enter height of door');
let numberWindows = parseInt(+prompt('Enter number of windows'));
let windowesSquare=(windowHeight*windowWide)*numberWindows;
let roomSquare=2*(roomHeight*roomWide)+2*(roomHeight+roomLength);
let doorSquare=doorHeight*doorWide;
let finalSquare=roomSquare-(windowesSquare+doorSquare);
const ROLL_SQUARE=25;
let numberRolls=Math.round(finalSquare/ROLL_SQUARE);
alert('You need '+numberRolls+ ' rolls');

let firstNumber= +prompt('Enter 1 number');
let secondNumber= +prompt('Enter 2 number');
let thirdNumber= +prompt('Enter 3 number');
let forthNumber= +prompt('Enter 4 number');
let fifthNumber= +prompt('Enter 5 number');
let highestNumber=Math.max(firstNumber, secondNumber, thirdNumber, forthNumber, fifthNumber);
alert('The highest number is ' + highestNumber);

let sum=0;
let firstQuestion= +prompt('Сколько будет 2+2? \n\ 1-4 \n\ 2-3 \n\ 3-3');
if(firstQuestion===1){
	sum+=1;
}
let secondQuestion= +prompt('Столица Украины? \n\ 1-Харьков \n\ 2-Днепр \n\ 3-Киев');
if(secondQuestion===3){
	sum+=1;
}
let thirdQuestion= +prompt('Самое большое море Украины? \n\ 1-Азовское \n\ 2-Черное \n\ 3-Средиземноморское');
if(thirdQuestion===2){
	sum+=1;
}
let forthQuestion= +prompt('Какое дерево украшают на Новый год? \n\ 1-Елка \n\ 2-Береза \n\ 3-Липа');
if(forthQuestion===1){
	sum+=1;
}
let fifthQuestion= +prompt('table - это ? \n\ 1-стол \n\ 2-стул \n\ 3-кровать');
if(fifthQuestion===1){
	sum+=1;
}
let sixthQuestion= +prompt('Что наступает после лета? \n\ 1-весна \n\ 2-осень \n\ 3-зима');
if(sixthQuestion===2){
	sum+=1;
}
let seventhQuestion= +prompt('Сколько будет 3*3? \n\ 1-3 \n\ 2-9 \n\ 3-5');
if(seventhQuestion===2){
	sum+=1;
}
let eighthQuestion= +prompt('Самый короткий месяц в году? \n\ 1-март \n\ 2-июнь \n\ 3-февраль');
if(eighthQuestion===3){
	sum+=1;
}
let ninthQuestion= +prompt('Столица США? \n\ 1-Нью-Йорк \n\ 2-Сан-Франциско \n\ 3-Вашингтон');
if(ninthQuestion===3){
	sum+=1;
}
let tenthQuestion= +prompt('Самое маленькое государство? \n\ 1-Ватикан \n\ 2-ЮАР \n\ 3-Италия');
if(tenthQuestion===1){
	sum+=1;
}

finalResult=Math.round(sum*12/10);
alert ('Твой результат '+ finalResult +' баллов');


let day = +prompt('Введите день');
if(day<1) alert ('Ваша дата не верна');
let month = +prompt('Введите номер месяца');
if (month<1 || month>12) alert ('Ваша дата не верна');
let year = +prompt('Введите год');
if (year<1) alert ('Ваша дата не верна');

if((month===1||month===3||month===5||month===7||month===8||month===10||month===12) && day>31){
	alert ('1 Ваша дата не верна');
}
else if ((month===4||month===6||month===9||month===11) && day>30){
	alert ('2 Ваша дата не верна');
}
else if (((year%4===0 && year%100 !==0) || (year%4===0 && year%100 ===0 && year%400===0)) && month===2 && day>29 ){
	alert ('Ваша дата не верна');
}
else if (month===2 && ((year%4 !==0) || (year%4===0 && year%100 ===0 && year%400 !==0)) && day>28){
	alert ('Ваша дата не верна');
}
else alert ('Ваша дата верна');

let a = +prompt('Введите а');
let b = +prompt('Введите б');
if (b===0 && a!==0){
	alert ('x=0');
} 
else if(a===0 && b===0){
	alert('x - любое число');
}
else if (a===0 && b!==0){
	alert('Уравнение не имеет решения');
}
else{
	let x=(0-b)/a;
	alert('x='+x);
}

let aNumber = +prompt('Введите а');
let bNumber = +prompt('Введите б');
let cNumber = +prompt('Введите c');
let xNumber1;
let xNumber2;

let discriminant=Math.pow(bNumber,2)-4*aNumber*cNumber;
if(discriminant<0){
	alert('Уравнение не имеет решения');
}
else if (discriminant=0){
	xNumber1=((-(bNumber)+Math.sqrt(discriminant))/2*aNumber);
	alert('x='+xNumber1);
}
else{
	xNumber1=((-(bNumber)+Math.sqrt(discriminant))/2*aNumber);
	xNumber2=((-(bNumber)-Math.sqrt(discriminant))/2*aNumber);
		alert('x1='+ xNumber1+', x2='+xNumber2)
}




let blindWidth= +prompt('Введите ширину жалюзи в см');
let blindHeight= +prompt('Введите высоту жалюзи в см');
let materialName;
let materialPrice;
let material= +prompt('Выберете материал \n\ 1-пластик \n\ 2-текстиль\n\ 3-алюминий');
if (material===1){
	materialName='Пластик';
	materialPrice=200;
}
else if(material===2){
	materialName='Текстиль';
	materialPrice=250
}
else if (material===3) {
	materialName='Алюминий';
	materialPrice=350;
}
else ('Неверные данные');
let blindSquare=blindHeight/100*blindWidth/100;
blindSquare=blindSquare.toFixed(2);

let totalPrice=blindSquare*materialPrice;
totalPrice=totalPrice.toFixed(2);
alert('Цена за кв.м: '+ materialPrice + ' грн\n Площадь: '+ blindSquare + ' кв.м \n К оплате: '+ totalPrice + ' грн' );






















