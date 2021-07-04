
var counter = 1 ;

// Called Function 

stars() ;
game(counter) ;

//
//
//
//
// Function #1 Stars Rate =>
function stars()
{
var stars = prompt("How many Stars you will Rate Us ? ")

while (stars < 0 || stars > 5 || stars == null || stars == "") { stars = prompt("Must Between 0 And 5 ") }

for (i = 0; i < stars; i++) {
  if (stars <= 5 && stars >= 0) { document.write('<img src="https://www.pngkit.com/png/full/201-2013815_estrella-amarilla-rate-star-icon.png" class="center" alt="Stars" width="75" height="75">') }
}
}
//
// Function #2 Small Game :)  =>
function game (counter)
{
var random = Math.floor(Math.random() * 10) + 1;
var input = prompt("Train Your Mind => Guess Number In My mind Between 0 and 10 ?")
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
      alert("thats Right " + random + " => Number Of Your Trying : " + counter + " Times :)")
      break;
    }
    else {
      break
    }

    counter += 1
  }
} else { alert("Thats Ok Maybe Later  :)") }

return counter ;
}



