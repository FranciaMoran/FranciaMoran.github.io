'use strict'

const musicImages = [
  `./images/createmusic.jpg`,
  `./images/reacttwo.jpg`,
  `./images/reactthree.jpg`,
  `./images/searchmusic.jpg`
]

const calorieImages = [
  `./images/calorie.jpg`,
  `./images/nutritionapi.jpg`,
  `./images/totals.jpg`,
  `./images/logged.jpg`,
  `./images/custom.jpg`
]

const petImages = [
  `./images/petmap.jpg`,
  `./images/pets.jpg`
]

function arrows() {
  changeMusicImageRight();
  changeMusicImageLeft();
  changeCalorieImageRight();
  changeCalorieImageLeft();
  changePetImageRight();
  changePetImageLeft();
}

$(arrows)

function scroll() {
  personalInfo();
  music();
  calorie();
  pets();
}

$(scroll)

function personalInfo() {
    $('#nav-bar-personal-info').click(event => {
      window.scrollTo(0,0);
  })
}

function music() {
    $('#nav-music').click(event => {
      window.scrollTo(0,645);
  })
}

function calorie() {
    $('#nav-calorie').click(event => {
      window.scrollTo(0,1490);
  })
}

function pets() {
    $('#nav-pet').click(event => {
      window.scrollTo(0,2500);
  })
}

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



function changePetImageRight() {
 $('#arrow-one-c').click(event => {
      event.preventDefault();
      $('#pm-images').html(newPetImageReturned(petImages))
  });
}


function changePetImageLeft() {
 $('#arrow-two-c').click(event => {
      event.preventDefault();
      $('#pm-images').html(newPetImageReturnedLeft(petImages))
  });
}

let c=-1;

function newPetImageReturned(petImages) {
  if (c >= -1 && c < 1) {
    c++;
  return `<img id="first-images" src="${petImages[c]}">`;
  }
  else {
     location.reload();
  }
}


function newPetImageReturnedLeft(petImages) {
  if (c === -1) {
    c=c+2;
  return `<img id="first-images" src="${petImages[c]}">`;
  }
  else if (c == 0) {
     location.reload();
  }
  else if (a <= 1) {
    c=c-1;
    return `<img id="first-images" src="${petImages[c]}">`
  }
}