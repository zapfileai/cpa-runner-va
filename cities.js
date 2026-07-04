const virginiaCities = [
  "Indian Valley", "Milford", "Merrifield", "Kinsale", "Moon",
  "Mappsville", "Newport", "Locust Hill", "Meherrin", "Hudgins",
  "Midland", "Hot Springs", "Newington", "Mathews", "Marion",
  "Middletown", "Mount Crawford", "Lightfoot", "Mount Vernon", "North Tazewell",
  "Mount Solon", "Mattaponi", "Irvington", "Oilville", "Lawrenceville",
  "Millwood", "Manquin", "Moneta", "Markham", "Montross",
  "Lunenburg", "Jeffersonton", "Mount Sidney", "Lovingston", "North",
  "Marshall", "New Castle", "Mount Holly", "Madison", "Lynch Station",
  "New Church", "Norton", "Onemo", "Eagle Rock", "Fort Lee",
  "Damascus", "Deltaville", "Hanover", "Falls Mills", "Hayes",
  "Edinburg", "Dolphin", "Cumberland", "Duffield", "Elkton",
  "Gladys", "Flint Hill", "Exmore", "Elliston", "Disputanta",
  "Hillsville", "Evergreen", "Elk Creek", "Fulks Run", "Fort Belvoir",
  "Dahlgren", "Halifax", "Goldvein", "Hallwood", "Fork Union",
  "Doswell", "Gasburg", "Emporia", "Gordonsville", "Dugspur",
  "Dunnsville", "Greenville", "Fort Valley", "Crimora", "Garrisonville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
