
var name = prompt("whats your name ?")
alert("Welcome to my page " + name)

var favSport = prompt("whats Your favorite sport ? foot ball ?basketball ? body building ?")

if (favSport == "football")
{
  alert("You Can Find About Football In First Paragraph :)")
}else if (favSport == "body building")
{
  alert("You Can Find About body building In Second Paragraph :)")
}else if (favSport == "basketball")
{
  alert("   You Can Find About basketball In Third Paragraph :)")
}else {
  alert("  Sorry , You Can Read About Other Sports Here :) ")
}


if (favSport == "football")
{
  document.write("<p>"+"   It is A Family Of Team Sports And It fun"+"</p>")
}else if (favSport == "body building")
{
  document.write("<p>"+"   It is A Helpful Sports And For Strong People"+"</p>")
}else if (favSport == "basketball")
{
  document.write("<p>"+"   It is A fun Sportes And For Talled People"+"</p>")
}else {
  document.write("<p>"+"  Choose A Favorite Sport you Lovved :) "+"</p>")
}