const virginiaCities = [
  "Colonial Heights", "Blacksburg", "Abingdon", "Bracey", "Chester",
  "Broad Run", "Crewe", "Callao", "Buchanan", "Beaverdam",
  "Appomattox", "Craigsville", "Blue Ridge", "Chilhowie", "Belle Haven",
  "Capron", "Annandale", "Clifton Forge", "Collinsville", "Covington",
  "Chincoteague Island", "Bridgewater", "Chatham", "Center Cross", "Charles City",
  "Bristow", "Blairs", "Callaway", "Battery Park", "Bastian",
  "Castleton", "Bland", "Cheriton", "Bentonville", "Cartersville",
  "Amelia Court House", "Clinchco", "Altavista", "Atkins", "Alberta",
  "Barhamsville", "Arrington", "Barboursville", "Bent Mountain", "Big Island",
  "Bena", "Basye", "Claudville", "Carson", "Courtland",
  "Casanova", "Amissville", "Chase City", "Brightwood", "Bealeton",
  "Carrollton", "Churchville", "Bruington", "Bassett", "Brodnax",
  "Aroda", "Aldie", "Moseley", "Bloxom", "Great Falls",
  "Amherst", "Ararat", "Clintwood", "Heathsville", "Mechanicsville",
  "South Boston", "Portsmouth", "Fairfax", "Farmville", "Woodbridge",
  "Vinton", "Lynchburg", "Earlysville", "Keswick", "Salem",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
