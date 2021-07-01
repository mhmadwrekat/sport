/*var name = prompt("whats your name ?")
alert("Welcome to my page " + name)
*/


var favSport = prompt("Choose Number => 1. football ? 2. body building ? 3. basketball ? 4. Walking ?")

if (favSport == "1")
{
  alert("Read paragraph in [ RED COLOR ] :)")
}
else if (favSport == "2")
{
  alert("Read paragraph in [ DARKEN COLOR ] :)")
}
else if (favSport == "3")
{
  alert("Read paragraph in [ ORANGE COLOR ] :)")
}
else if (favSport == "4")
{
  alert("Read paragraph in [ Green COLOR ] :)")
}
else {
  alert("  Sorry , But You Can Read About Other Sports Here :) ")
}


if (favSport == "1")
{
  document.write("<p>"+"  ( The Football ) It is A Family Of Team Sports And It fun"+"</p>")
}else if (favSport == "2")
{
  document.write("<p>"+"  ( The Body Builders ) It is A Helpful Sports And For Strong People"+"</p>")
}else if (favSport == "3")
{
  document.write("<p>"+"  ( The Basketball ) It is A fun Sportes And For Talled People"+"</p>")
}else {
  document.write("<p>"+"  I Think The Football Is A Very Peautiful Sports TRY IT :) "+"</p>")
}


var random = Math.floor(Math.random() * 10) + 1;
console.log(random)
var input = prompt("Train Your Mind => Guess Number In My mind Between 0 and 10 ?")
var counter = 1
if (input != null) {
  while (input !== random) {
    if (input < random) {
      input = prompt("Bigger ): try another number")
      if (input == null) {
        alert("Thats Ok Maybe Later  :)")
        break;
      }
    }

    else if (input > random) {
      input = prompt("Smaller ): Try another number")
      if (input == null) {
        alert("Thats Ok Maybe Later  :)")
        break;
      }
    }
    else if (input == random) {
      alert("thats Right " + random + " | Number Of Your Trying : " + counter + " Times :)")
      break;
    }
    else {
      break
    }

    counter += 1
  }
} else { alert("Thats Ok Maybe Later  :)") }





