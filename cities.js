const virginiaCities = [
  "Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News",
  "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Suffolk",
  "Lynchburg", "Harrisonburg", "Charlottesville", "Fredericksburg", "Danville",
  "Springfield", "Manassas", "Falls Church", "Petersburg", "Winchester",
  "Herndon", "Leesburg", "Reston", "Sterling", "Centreville",
  "Woodbridge", "Dale City", "Ashburn", "Blacksburg", "Christiansburg",
  "Radford", "Salem", "Staunton", "Waynesboro", "Culpeper",
  "Warrenton", "Front Royal", "Purcellville", "Chantilly", "Burke",
  "Fairfax", "Annandale", "McLean", "Vienna", "Tysons",
  "Great Falls", "Oakton", "Lorton", "Dumfries", "Triangle",
  "Stafford", "Spotsylvania", "Mechanicsville", "Glen Allen", "Midlothian",
  "Chester", "Colonial Heights", "Hopewell", "Prince George", "Emporia",
  "Martinsville", "Galax", "Bristol", "Abingdon", "Wytheville",
  "Bluefield", "Covington", "Lexington", "Buena Vista", "Luray",
  "Woodstock", "Strasburg", "Elkton", "Gordonsville", "Orange",
  "Madison", "Haymarket", "Gainesville", "Manassas Park", "Williamsburg",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
