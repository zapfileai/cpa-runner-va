const virginiaCities = [
  "Mcgaheysville", "Poquoson", "Onancock", "Gainesville", "Front Royal",
  "Williamsburg", "Monroe", "Forest", "Newport News", "Midlothian",
  "Yorktown", "Locust Grove", "Suffolk", "Madison Heights", "Lexington",
  "Lovettsville", "Oakton", "Emory", "Haymarket", "Pound",
  "New Kent", "Ninde", "Nellysford", "Isle Of Wight", "Newbern",
  "Hurt", "Luray", "Ivy", "Harrisonburg", "Narrows",
  "Keysville", "Norwood", "Locust Dale", "Lanexa", "Mount Jackson",
  "Fort Monroe", "Dillwyn", "Glade Hill", "Evington", "Hamilton",
  "Dublin", "Ferrum", "Gate City", "Gum Spring", "Floyd",
  "Goode", "Whitetop", "Wicomico", "Willis", "Palmyra",
  "Vansant", "Washington", "Victoria", "Waterford", "Wardtown",
  "Wirtz", "Wallops Island", "Woolwine", "Wise", "Stafford",
  "Stephens City", "Manakin Sabot", "Powhatan", "Petersburg", "Rocky Mount",
  "Staunton", "Spotsylvania", "Purcellville", "Waynesboro", "Martinsville",
  "Radford", "Smithfield", "Dumfries", "Culpeper", "Montpelier",
  "Middleburg", "Troutville", "King George", "Wytheville", "Na",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
