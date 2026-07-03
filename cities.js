const virginiaCities = [
  "Round Hill", "Sandston", "Rockville", "Quinton", "Louisa",
  "Crozet", "Dunn Loring", "Fake City", "Ripplemead", "Troy",
  "Speedwell", "Stuart", "Sugar Grove", "The Plains", "Tazewell",
  "Remington", "Rice", "Rosedale", "Shipman", "Rileyville",
  "Sedley", "Steeles Tavern", "Stanley", "Partlow", "Rixeyville",
  "Tappahannock", "Warsaw", "Urbanna", "West Point", "Waverly",
  "Wakefield", "Woodville", "Virgilina", "Wicomico Church", "Union Hall",
  "Windsor", "Sharps", "Dinwiddie", "Fincastle", "Providence Forge",
  "Occoquan", "Dulles", "Kilmarnock", "Nokesville", "Machipongo",
  "Fort Defiance", "Linville", "Weems", "King William", "Lancaster",
  "Mineral", "Huntly", "Ivor", "Lebanon", "Keezletown",
  "Independence", "Newsoms", "New Market", "Kents Store", "Hume",
  "Maidens", "Lincoln", "Melfa", "Lyndhurst", "Kenbridge",
  "Meadows Of Dan", "New Point", "Norge", "Linden", "Jonesville",
  "Mckenney", "Monterey", "Natural Bridge", "Middlebrook", "Meadowview",
  "Huddleston", "North Garden", "Nassawadox", "King & Queen Court House", "Onley",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
