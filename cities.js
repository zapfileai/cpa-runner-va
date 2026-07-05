const virginiaCities = [
  "Stanardsville", "Port Republic", "Thaxton", "Sumerduck", "Scottsburg",
  "Pilot", "Timberville", "Triangle", "Ringgold", "Rockbridge Baths",
  "Randolph", "Spencer", "Port Royal", "Ophelia", "Ruthville",
  "Shawsville", "Orlean", "Quantico", "Riner", "Radiant",
  "Paeonian Springs", "Ridgeway", "Rochelle", "Parksley", "Pearisburg",
  "Sutherland", "Saint Stephens Church", "Stephenson", "South Hill", "Sandy Hook",
  "Ruckersville", "Penn Laird", "Philomont", "Saltville", "Verona",
  "Zuni", "Woodford", "Weyers Cave", "Woodberry Forest", "White Stone",
  "Woodstock", "Ware Neck", "Upperville", "White Post", "Unionville",
  "Walkerton", "White Marsh",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
