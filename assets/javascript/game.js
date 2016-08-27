//variables: HP, attack power, enemies left
var myCharacter;
var myHP;
var myAttackPower;
var enemy;
var enemyHP;
var enemyAttackPower;
var enemiesLeft;
var numberOfEnemies = 2;
var clonedDiv = $(".frame").clone(true,true);
$(document).ready(function(){

$(".frame").on( "mouseover", function() {
 		 $( ".heroes",this ).css( "background-color", "green");
});
$(".frame").on( "mouseout", function() {
 		 $( ".heroes",this ).css( "background-color", "white");
});

//onlick 1: your character, animate, the rest go to ememies, change background color, set HP
//and attack power
$(".frame").on('click', function() {
	if(myHP === undefined) {
		myCharacter = $(".name",this).text();
		myHP = parseInt($(".HP",this).text());
		switch(myCharacter){
			case "Obi-Wan Kenobi":
			myAttackPower = 9;
			break;
			case "Luke Skywalker":
			myAttackPower = 10;
			break;
			case "Darth Sidious":
			myAttackPower = 8;
			break;
			case "Darth Maul":
			myAttackPower = 5;
		}
		$(this).appendTo(".yourCharacter");
		$(".enemiesAvailable").show();
		$(".characters").appendTo(".enemiesAvailable");
		$(".enemiesAvailable").on( "mouseover", function() {
 			$(".heroes",this).css( "background-color", "red");
		});
		$(".enemiesAvailable").on( "mouseout", function() {
 			 $(".heroes",this).css( "background-color", "white");
		});
		$(".frame").unbind("mouseover mouseout");
	} else {
		enemy = $(".name",this).text();
		enemyHP = parseInt($(".HP",this).text());
		$(".stats").empty();
		switch(enemy){
			case "Obi-Wan Kenobi":
			enemyAttackPower = 20;
			break;
			case "Luke Skywalker":
			enemyAttackPower = 25;
			break;
			case "Darth Sidious":
			enemyAttackPower = 15;
			break;
			case "Darth Maul":
			enemyAttackPower = 10;
		}
		$(this).prependTo(".defender");
		$(".enemiesAvailable").css("display","none");
		$(".characters").appendTo(".container");
		$(".heroes").css("background-color","white");
		$("#attack").show();
	}
console.log("my character is: "+myCharacter+", and my enemy is: " + enemy);
console.log("my HP is: " + myHP+", and my attack power is " + myAttackPower);
console.log("enemy HP is: "+enemyHP+", and enemy attack power is "+ enemyAttackPower);
console.log(enemiesLeft+" enemies remaining");
});

//Attack button: on click, calculate HP with attack power until one HP gets to or below 0

	$("#attack").on('click', function() {
			enemiesLeft = numberOfEnemies
			myHP = myHP - enemyAttackPower;
			enemyHP = enemyHP - myAttackPower;
			myAttackPower = myAttackPower+10;
			switch(myCharacter){
			case "Obi-Wan Kenobi":
			$(".first").html(myHP);;
			break;
			case "Luke Skywalker":
			$(".second").html(myHP);
			break;
			case "Darth Sidious":
			$(".third").html(myHP);
			break;
			case "Darth Maul":
			$(".fourth").html(myHP);
			}
			switch(enemy){
			case "Obi-Wan Kenobi":
			$(".first").html(enemyHP);;
			break;
			case "Luke Skywalker":
			$(".second").html(enemyHP);
			break;
			case "Darth Sidious":
			$(".third").html(enemyHP);
			break;
			case "Darth Maul":
			$(".fourth").html(enemyHP);
			}
			console.log("my attack power is: "+myAttackPower+" and my enemy attack power is: "+enemyAttackPower);
			console.log("my HP is: "+ myHP+" and the enemy HP is: "+enemyHP);
			console.log(enemiesLeft+" enemies remaining");

	
	if (myHP<0) {
			$(".stats").html("You lost!")
			$("#restart").show();
			$("#attack").hide();
	}
	 else if (enemyHP<=0 && enemiesLeft>0) {
			$(".stats").html("Choose your next enemy.")
			$(".enemiesAvailable").show();
			$(".characters").appendTo(".enemiesAvailable");
			
			numberOfEnemies--;
			$("#attack").hide();
		}
	else if (enemiesLeft<=0 && enemyHP<0)  {
			$(".stats").html("You won!");
			$("#restart").show();
			$("#attack").hide();
		} 
	
});		
	

//if you die, game over and restart button appear
//if you win, choose between the rest 2 enemies, animate, set HP and attach power, repeat
//if you win all three, display message and restart button
	
//restart button
$("#restart").on('click', function() {
myCharacter = undefined;
myHP = undefined;
myAttackPower = undefined;
enemy = undefined;
enemyHP = undefined;
enemyAttackPower = undefined;
enemiesLeft = undefined;
numberOfEnemies = 2;

$(".first").html(120);
$(".second").html(100);
$(".third").html(150);
$(".fourth").html(180);
$(".frame").appendTo(".characters");
$(".yourCharacter").empty();
$(".defender").empty();
$("#restart").hide();
$(".attack").hide();
$(".frame").on( "mouseover", function() {
 		 $( ".heroes",this ).css( "background-color", "green");
});
$(".frame").on( "mouseout", function() {
 		 $( ".heroes",this ).css( "background-color", "white");
});
$(".stats").html("Open console to see stats of battle.");
});


});