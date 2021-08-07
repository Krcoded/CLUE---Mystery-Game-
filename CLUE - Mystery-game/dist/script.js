//Suspects

let mrGreen = {
  name: "Jacob Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image: "https://i.postimg.cc/wv2HMptD/mrgreen3.jpg",
  color: "green "
};

let drOrchid = {
  name: "Doctor Orchid",
  occupation: "Scientist",
  age: 56,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "https://i.postimg.cc/yYkB127S/586055-hasbro.jpg",
  color: "white"
};

let profPlum = {
  name: "Victor Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image: "https://i.postimg.cc/DZnn7Zz2/2016-C6-plum.jpg",
  color: "purple"
};

let missScarlet = {
  name: "Kasandra Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://i.postimg.cc/L50pk33X/scar.jpg",
  color: "red"
};

let mrsPeacock = {
  name: "Eleanor Peacock",
  occupation: "Socialité",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://i.postimg.cc/nrLxQP7g/peakcock.jpg",
  color: "blue"
};

let mrMustard = {
  name: "Jack Mustard",
  occupation: "Retired Football player",
  age: 62,
  description:
    "He is a former football player who tries to get by on his former glory",
  image: "https://i.postimg.cc/tRrpH9Gj/mustard.jpg",
  color: "yellow"
};

// ### Weapons

let rope = {
  name: "rope",
  weight: 10
};

let knife = {
  name: "knife",
  weight: 8
};

let candlestick = {
  name: "candlestick",
  weight: 2
};

let dumbbell = {
  name: "dumbbell",
  weight: 30
};

let poison = {
  name: "poison",
  weight: 2
};

let axe = {
  name: "axe",
  weight: 15
};

let bat = {
  name: "bat",
  weight: 13
};

let trophy = {
  name: "trophy",
  weight: 25
};

let pistol = {
  name: "pistol",
  weight: 20
};

// ### Rooms

let diningRoom = {
  name: "Dining Room"
};
let conservatory = {
  name: "Conservatory"
};
let kitchen = {
  name: "Kitchen"
};
let study = {
  name: "Study"
};
let library = {
  name: "Library"
};
let billiardRoom = {
  name: "Billiard Room"
};
let lounge = {
  name: "Lounge"
};
let ballroom = {
  name: "Ballroom"
};
let hall = {
  name: "Hall"
};
let spa = {
  name: "Spa"
};
let livingRoom = {
  name: "Living Room"
};
let observatory = {
  name: "Observatory"
};
let theater = {
  name: "Theater"
};
let guestHouse = {
  name: "Guest House"
};
let patio = {
  name: "Patio"
};

let suspectsArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
];

let weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

let roomsArray = [
  patio,
  guestHouse,
  theater,
  observatory,
  livingRoom,
  spa,
  hall,
  ballroom,
  lounge,
  billiardRoom,
  library,
  study,
  kitchen,
  conservatory,
  diningRoom
];

//Gets random item form each Array and consturcts the mystery
function pickMystery() {
  let room = roomsArray[Math.floor(Math.random() * roomsArray.length)];
  let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];

  return { suspect, weapon, room };
}

let mystery = pickMystery(); // who killed Mr.Boddy with what in which room...

showArrays(suspectsArray);
showArrays(weaponsArray);
showArrays(roomsArray);

//loops through all of our arrays and shows each

function showArrays(arr) {
  arr.forEach(function (eachItem) {
    document.body.innerHTML += `<br> <li> <span>${eachItem.name} </li>`;
  });
}

document.querySelector("button").onclick = guess;
function guess() {
  let guessedsuspect = document.querySelector("#suspect").value;
  let guessedweapon = document.querySelector("#weapon").value;
  let guessedroom = document.querySelector("#room").value;

  if (
    guessedsuspect === mystery.suspect.name &&
    guessedweapon === mystery.weapon.name &&
    guessedroom === mystery.room.name
  ) {
    alert("You guessed right! You Win!!!");
  } else {
    alert("You guessed Wrong!");
    alert(
      mystery.suspect.name +
        " killed Mr.Boddy in the " +
        mystery.room.name +
        " with the " +
        mystery.weapon.name
    );
  }
  document.body.innerHTML = `<img src=${mystery.suspect.image} />`;
}