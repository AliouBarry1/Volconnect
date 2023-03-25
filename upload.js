let locationEnums = ["queens","brooklyn","manhattan","bronx"];

function addListing(Borough,Listing) {
  let listingData = localStorage.getItem(Borough.toLowerCase()) || "[]";
  //if (!ListingData) {
  //  console.warn(`${Borough} is not a valid borough`);
  //}
  
  let listingArray = JSON.parse(listingData);
  listingArray.push(Listing);
  localStorage.setItem(Borough,JSON.stringify(listingArray));
}
//
function getListingsByBorough(Borough) {
  let boroughData = JSON.parse(localStorage.getItem(Borough));

  return boroughData;
}

function errorLabel(Text,Color) {
  let errorText = document.querySelector(".ErrorText");
  errorText.innerHTML = Text;
  errorText.style.color = Color;

  setTimeout(()=>{errorText.innerHTML = "";},3000);
}

console.log(getListingsByBorough("Queens"));

//form data below
let Name = document.querySelector("#Name");
let loc = document.querySelector("#Location");
let passion = document.querySelector("#Passion");
let description = document.querySelector("#Description");
let submitButton = document.querySelector("#submit");
let clearListings = document.querySelector(".clearListings");
let logListings = document.querySelector(".logListings");

submitButton.onclick = function() {
  console.log("1");
  let formData = {
    name: Name.value,
    location: loc.value,
    passion: passion.value,
    description: description.value,
  }
   console.log("2");
  for (key in formData) {
     console.log("3");
    let value = formData[key];
    console.log(value);
    if (!value) {
      console.log(`no value for ${key}`);
      errorLabel(`Fill out all forms!`,"red");
      return;
    }

     console.log("4");
    let isValidEnum = locationEnums.includes(formData.location.toLowerCase());

  //  console.log(isValidEnum);
    if (!locationEnums.includes(formData.location.toLowerCase())) {
      console.log(`${formData.location} is not a valid location`);
      errorLabel(`${formData.location} is not a valid location`,"red");
      return;
    };
  }

  console.log('5');
  addListing(formData.location,formData);
  console.log("Success");
  errorLabel("Success","green");
  console.log('6');
};