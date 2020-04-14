	"use strict";
	/*var Pa=prompt("What is you name?", "Pavel");
	alert("Вас" +Pa+ "зовут");
	var name=confirm("What is you name?");
	alert(name);
	var years=prompt("Сколько вам лет?",100);
	alert("ВАМ" +years+ "ЛЕТ!");*/
	/*var year=prompt("какой это был год COVD19???","");
	if(year !=2019) {alert("а вот..... " );
	alert("неправильно!");}*/
	/*var year=prompt("В каком году была вторая мировая война?","");
	if(year <1937){
		alert("Это не слишком ли рано по вашему?");
	} else if (year>1937) {
		alert("Вообщето уже слишком поздно");
	}else{
		alert("А вообще то вы правы!");
	}*/
	/*if("0"){
	alert("привет");
	}*/
	/*let question=prompt("What's the official name of Javascript?","");
	if( question =="EcmaScript"){
		alert("ВЕРНО");
	}// else /*(question!="EcmaScript")*/
	/*{
	alert("Didn't Know? EcmaScript");
	}*/
	/*var перваяЧастьПриветствия = "Привет,";
	let втораяЧастьПриветствия ="Мир";
	let одиночныйПробел = "";
	let полноеПриветствие = перваяЧастьПриветствия + одиночныйПробел + втораяЧастьПриветствия;
	полноеПриветствие = полноеПриветствие +"!!";
	let komboA=6.75;
	let komboB=7.50;
	let komboC=5.75;
	let komboD=8;
	let суммаВсехКомбо=komboA+komboB+komboC+komboD;
	let колличествоКомбо=4;
	let средеяяЦена=суммаВсехКомбо/колличествоКомбо;
	средеяяЦена;*/
	/*let medianAgeMama=54;
	let medianAgePavel=35;
	let medianAgeJulia=33;
	let medianAgeGenia=30;
	let medianAgeVika=27;
	let medianAgeIra=25;
	let sumAge=medianAgeMama+medianAgePavel+medianAgeJulia+medianAgeGenia+medianAgeVika+medianAgeIra;
	let sumName=6;
	let result=sumAge/sumName;
	alert (result);*/// здесь мой калькулятор среднего возраста.(всё вышло отлично.)

/*let sumTeams=3;
let namberId=1;
namberId % sumTeams;
namberId=2;
namberId % sumTeams;

console.log(4/0);
console.log("string"*9);
let something;
console.log(something);

let persone = {
	name: "Jone",
	age: 25,
	isMarried: false
};
console.log(persone["name"]);

let arr = ["plum.png","orange.jpg","apple.bmp"];

console.log(arr[0]);*/

//alert("hello World!");

/*let answer = confirm("Are you here?");

console.log(answer); */

/*let incr = 10,
	decr = 10;
	
	console.log(incr++);	
	console.log(decr--);
	 
	console.log("2" === 2);

	let isChecked = true,
	    isClose = false;
		console.log(! isChecked || !isClose );*/
		//console.log(4*3**2);
		
	
/*let num = 20;
function showFirstMessage(text) {
	alert(text);
	num = 10;
}

showFirstMessage("Hello World");
console.log(num);*/

function calc(a,b) {
	return (a + b);
}

console.log(calc(3,4));

console.log(calc(8,4));


function retVar() {
let num = 50;
return num;
}
 
let anotherNum = retVar();
console.log(anotherNum);