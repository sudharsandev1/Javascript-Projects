const button = document.querySelector("button");
let resultdiv=document.createElement('div')
resultdiv.id='result';
document.getElementById('content-box').appendChild(resultdiv)
button.addEventListener("click", displaystats);

function displaystats() {
  const input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;
  let population = 0,
    literacyrate = 0,
    language = "";
  switch (city) {
    case "Chennai":
      population = 84488899;
      literacyrate = 89.09;
      language = "Tamil";
      break;
    case "Delhi":
      population = 89000990;
      literacyrate = 79.09;
      language = "Marathi";
      break;
    case "Mumbai":
      population = 1234488899;
      literacyrate = 80.09;
      language = "Marathi";
      break;
    case "Bengaluru":
      population = 8748789;
      literacyrate = 88.72;
      language = "kanada";
      break;
  }

  let text = `The Indian city of ${city} has a population of ${population}.language spoken is${language}and literacy is ${literacyrate}`;
  console.log(text)
 
  document.getElementById('result').innerHTML=text
}
