/* Assignment: 
Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the 
single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding 
color from the other array.

For example:

Blue Dasher
Red Dancer
etc...
*/




var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

//loop through reindeer array
for (var i = 0; i < reindeer.length; i++)
{
	hohohoElement.innerHTML  += "<p>"+colors[i]+" "+reindeer[i]+"</p>";
	//add name of reindeer to div
	//hohohoElement.innerHTML = content;

}




//loop through colors array




//prepend corresponding color to div