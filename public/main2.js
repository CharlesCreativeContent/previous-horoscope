const buttons = document.getElementsByTagName("button");

let house = [
  "Welcome, RavenClaw",
  "Welcome, HufflePuff",
  "Welcome, Gryffindor",
  "Welcome, Slytherin"
];

let currentHouse = 0;
let sort = () => {
  document.getElementById("house").innerHTML = house[currentHouse];
};

let ravenClaw = () => {
  currentHouse = 0;
  sort();
};

let hufflePuff = () => {
  currentHouse = 1;
  sort();
};

let gryffindor = () => {
  currentHouse = 2;
  sort();
};

let slytherin = () => {
  currentHouse = 3;
  sort();
};

let getHoroscope = () => {
  let month = +document.getElementById("date").value.slice(5, 7);
  let day = +document.getElementById("date").value.slice(8, 10);
  let sign = 0;

  let signFinder = () => {
    switch (month) {
      case 2:
        return day < 20 ? (sign = 1) : (sign = 2);
      case 3:
        return day < 21 ? (sign = 2) : (sign = 3);
      case 4:
        return day < 21 ? (sign = 3) : (sign = 4);
      case 5:
        return day < 21 ? (sign = 4) : (sign = 5);
      case 6:
        return day < 21 ? (sign = 5) : (sign = 6);
      case 7:
        return day < 23 ? (sign = 6) : (sign = 7);
      case 8:
        return day < 23 ? (sign = 7) : (sign = 8);
      case 9:
        return day < 23 ? (sign = 8) : (sign = 9);
      case 10:
        return day < 23 ? (sign = 9) : (sign = 10);
      case 11:
        return day < 23 ? (sign = 10) : (sign = 11);
      case 12:
        return day < 22 ? (sign = 11) : (sign = 0);
      default:
        return day < 20 ? (sign = 0) : (sign = 1);
    }
  };

  signFinder();

  console.log(month, day, sign);

    fetch('horoscope', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'house': currentHouse,
        'sign': sign,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
console.log (data)
    })
  };

/********Event Listeners*********/

buttons[0].addEventListener("mouseover", (e) => {
  e.target.classList.toggle("hover");
});

buttons[0].addEventListener("mouseout", (e) => {
  e.target.classList.toggle("hover");
});

buttons[1].addEventListener("mouseover", (e) => {
  e.target.classList.toggle("hover");
});

buttons[1].addEventListener("mouseout", (e) => {
  e.target.classList.toggle("hover");
});

buttons[2].addEventListener("mouseover", (e) => {
  e.target.classList.toggle("hover");
});

buttons[2].addEventListener("mouseout", (e) => {
  e.target.classList.toggle("hover");
});

buttons[3].addEventListener("mouseover", (e) => {
  e.target.classList.toggle("hover");
});

buttons[3].addEventListener("mouseout", (e) => {
  e.target.classList.toggle("hover");
});

/**********Horoscopes from http://spenecial.com/birdsofafeather/astrology.htm**************/
/*Typeface from nathanerd - https://www.deviantart.com/nathanthenerd/art/Mugglenews-244787497*/
