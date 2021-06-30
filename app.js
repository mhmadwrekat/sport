
var name = prompt("whats your name ?")
alert("Welcome to my page " + name)

var favSport = prompt("please Type Number Of Your Favorite sport ? 1. football ? 2. basketball ? 3. body building ?")

if (favSport == "1")
{
  alert("You Can Find About Football In First Paragraph :)")
}else if (favSport == "2")
{
  alert("You Can Find About body building In Second Paragraph :)")
}else if (favSport == "3")
{
  alert("   You Can Find About basketball In Third Paragraph :)")
}else {
  alert("  Sorry , You Can Read About Other Sports Here :) ")
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