// In a seperate file because it would need to be linked to every html file
let boroughOpportunities = {
  bronx: [
    {
    name: "Cooking", 
    location: "Bronx",
    passion: "Fun",
    description:"Non-profit cooking opportunity",
    image: ""
    },
    {
      name: "Tutoring",
      location: "Bronx",
      passion: "Teaching",
      descripition: "Help kids from the ages of 6 - 15 with any homework",
      image: ""
    }],
  
  brooklyn: [
  {
    name: "Grass watching",
    location: "Brooklyn",
    passion: "Adventure",
    description: "Explore nature and watch grass grow.", 
    image: ""
  }],
  queens: [
  {
    name: "Birds",
    location: "Queens",
    passion: "Adventure",
    description: "Sightseeing and finding the birds.", 
    image: ""
  }],
  manhattan: [
  {
    name: "Video Game Club",
    location: "Manhattan",
    passion: "Video Games",
    description: "Help facilitate video game tournament",    
    image: ""
  }],
  statenIsland: [
  {
    name: "Lego Building",
    location: "Staten Island",
    passion: "Legos",
    description: "Get together to build legos with kids", //description.value,    
    image: ""
  }],
} 

function addListing(Borough,Listing) {
  let listingData = localStorage.getItem(Borough) || "[]";
  //if (!ListingData) {
  //  console.warn(`${Borough} is not a valid borough`);
  //}
  
  let listingArray = JSON.parse(listingData);
  listingArray.push(Listing);
  localStorage.setItem(Borough,JSON.stringify(listingArray));
}

let locationEnums = ["queens","brooklyn","manhattan","bronx"];

function addListing(Borough,Listing) {
  let listingData = localStorage.getItem(Borough) || "[]";
  //if (!ListingData) {
  //  console.warn(`${Borough} is not a valid borough`);
  //}
  
  let listingArray = JSON.parse(listingData);
  listingArray.push(Listing);
  localStorage.setItem(Borough,JSON.stringify(listingArray));
}

function hasVisited() {
  let visited = localStorage.getItem("hasVisited");

  if (!visited) {
    localStorage.setItem("hasVisited");
    return false;
  } else {
    return true;
  }
} //if the user previously visited the website then return true

if (!hasVisited()) {
  c
  for (borough in boroughOpportunities) {
    let boroughData = boroughOpportunities[borough];

    boroughData.forEach((Listing)=> {
      addListing(borough,Listing);
    });
  }
}