const virginiaCities = [
  "Glade Spring", "Dungannon", "Hague", "Hampden Sydney", "Dry Fork",
  "Faber", "Haysi", "Dayton", "Goodview", "Fishersville",
  "Fairfield", "Dutton", "Fries", "Hinton", "Hardy",
  "Greenbackville", "Gloucester Point", "East Stone Gap", "Fancy Gap", "Ewing",
  "Eastville", "Hood", "Eggleston", "Grundy", "Grottoes",
  "Critz", "Hiwassee", "Foster", "Franktown", "Cross Junction",
  "Hartwood", "Crozier", "Hartfield", "Delaplane", "Hopewell",
  "Gladstone", "Gore", "Daleville", "Dewitt", "Gretna",
  "Free Union", "Goochland", "Pulaski", "Ruther Glen", "Sperryville",
  "Somerset", "Toms Brook", "Orkney Springs", "Prince George", "Stanleytown",
  "Reedville", "Port Haywood", "Stuarts Draft", "Scottsville", "Raphine",
  "Rhoadesville", "Red Oak", "Saluda", "Seaford", "Swoope",
  "Shacklefords", "Pamplin", "Singers Glen", "Rustburg", "Prospect",
  "Orange", "Strasburg", "Sparta", "Quicksburg", "Richardsville",
  "Rural Retreat", "Toano", "Rectortown", "Surry", "Rapidan",
  "Richlands", "Skipwith", "Pembroke", "Spout Spring", "Penhook",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
