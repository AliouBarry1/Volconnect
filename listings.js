
function getListingsByBorough(Borough) {
  let boroughData = JSON.parse(localStorage.getItem(Borough));

  return boroughData;
} //returns array of listings in borough
