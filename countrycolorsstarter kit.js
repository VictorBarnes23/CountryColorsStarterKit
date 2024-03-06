class Country {
    constructor(name, language, HelloWorld, colors, flagUrl) {
      this.name = name;
      this.language = language;
      this.HelloWorld = HelloWorld;
      this.colors = colors;
      this.flagURL = flagUrl;
    }
  
    displayColors() {
      document.getElementById("Color1").style.backgroundColor = this.colors[0];
      document.getElementById("Color2").style.backgroundColor = this.colors[1];
      document.getElementById("Color3").style.backgroundColor = this.colors[2];
      document.getElementById("countryName").innerText = this.name;
      document.getElementById("officialLanguage").innerText =
        "Official Language: " + this.language;
      document.getElementById("HelloWorld").innerText = this.HelloWorld;
      document.getElementById("countryFlag").src = this.flagURL;
    }
  }

let usa = new Country(
  "USA",
  "Murican",
  "Why Hello there world! Have some McDonalds",
  ["red", "white", "blue"]
);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", [
  "red",
  "white",
  "green",
]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", [
  "blue",
  "yellow",
  "red",
]);
let France = new Country(
  "France",
  "French",
  "Bonjour le monde!",
  ["#0055a4", "#ffffff", "#ef4135"],
  "https://flagcdn.com/w640/fr.png"
);
let Germany = new Country(
  "Germany",
  "German",
  "Hallo Welt!",
  ["#000000", "#ffce00", "#d00"],
  "https://flagcdn.com/w640/de.png"
);
let Japan = new Country(
  "Japan",
  "Japanese",
  "こんにちは世界！",
  ["#bc002d", "#ffffff"],
  "https://flagcdn.com/w640/jp.png"
);
let Brazil = new Country(
  "Brazil",
  "Portuguese",
  "Olá Mundo!",
  ["#009b3a", "#ffcc29", "#002776"],
  "https://flagcdn.com/w640/br.png"
);

function SwitchCountry() {
  let input = document.querySelector("#CountryList").value;
  let country;

  if (input === "USA") {
    //     set country to usa
    country = usa;
  } else if (input === "Mexico") {
    country = mexico;
  } else if (input === "Algeria") {
    country = algeria;
  } else if (input === "France") {
    country = France;
  } else if (input === "Germany") {
    country = Germany;
  } else if (input === "Japan") {
    country = Japan;
  } else if (input === "Brazil") {
    country = Brazil;
  } 
  console.log(country);
  country.displayColors();
}
// At end of If statement replace html with country properties
