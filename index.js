'use strict'

let musicImages = [
  `./images/createmusic.jpg`,
  `./images/reacttwo.jpg`,
  `./images/reactthree.jpg`,
  `./images/searchmusic.jpg`
]

let calorieImages = [
  `./images/calorie.jpg`,
  `./images/nutritionapi.jpg`,
  `./images/totals.jpg`,
  `./images/logged.jpg`,
  `./images/custom.jpg`
]

function arrows() {
  changeMusicImageRight();
  changeMusicImageLeft();
  changeCalorieImageRight();
  changeCalorieImageLeft();
}

$(arrows)

function changeMusicImageRight() {
 $('#arrow-one').click(event => {
      event.preventDefault();
      $('#mm-images').html(newMusicImageReturned(musicImages))
  });
}


function changeMusicImageLeft() {
 $('#arrow-two').click(event => {
      event.preventDefault();
      $('#mm-images').html(newMusicImageReturnedLeft(musicImages))
  });
}

let a=-1;

function newMusicImageReturned(musicImages) {
	if (a >= -1 && a < 3) {
		a++;
	return `<img id="first-images" src="${musicImages[a]}">`;
	}
  else {
     location.reload();
  }
}


function newMusicImageReturnedLeft(musicImages) {
  if (a === -1) {
    a=a+4;
  return `<img id="first-images" src="${musicImages[a]}">`;
  }
  else if (a == 0) {
     location.reload();
  }
  else if (a <= 3) {
    a=a-1;
    return `<img id="first-images" src="${musicImages[a]}">`
  }
}









function changeCalorieImageRight() {
 $('#arrow-one-b').click(event => {
      event.preventDefault();
      $('#cc-images').html(newCalorieImageReturned(calorieImages))
  });
}


function changeCalorieImageLeft() {
 $('#arrow-two-b').click(event => {
      event.preventDefault();
      $('#cc-images').html(newCalorieImageReturnedLeft(calorieImages))
  });
}

let b=-1;

function newCalorieImageReturned(calorieImages) {
  if (b >= -1 && b < 4) {
    b++;
  return `<img id="first-images" src="${calorieImages[b]}">`;
  }
  else {
     location.reload();
  }
}


function newCalorieImageReturnedLeft(calorieImages) {
  if (b === -1) {
    b=b+5;
  return `<img id="first-images" src="${calorieImages[b]}">`;
  }
  else if (b == 0) {
     location.reload();
  }
  else if (b <= 4) {
    b=b-1;
    return `<img id="first-images" src="${calorieImages[b]}">`
  }
}