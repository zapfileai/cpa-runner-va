const virginiaCities = [
  "Ashburn", "Richmond", "Chesapeake", "Fairfax Station", "Fredericksburg",
  "Chantilly", "Concord", "Bumpass", "Franklin", "Check",
  "Chesterfield", "Bristol", "Accomac", "Afton", "Blackwater",
  "Bluefield", "Charlottesville", "Catawba", "Bluemont", "Catlett",
  "Christiansburg", "Callands", "Cobbs Creek", "Clear Brook", "Atlantic",
  "Buena Vista", "Church Road", "Clarksville", "Branchville", "Alton",
  "Ashland", "Cape Charles", "Clifton", "Alexandria", "Henrico",
  "Virginia Beach", "Falls Church", "Springfield", "Glen Allen", "Danville",
  "Leesburg", "Gloucester", "Manassas", "Sterling", "Hampton",
  "Warrenton", "Blackstone", "Catharpin", "Boyce", "Big Stone Gap",
  "Centreville", "Boones Mill", "Covesville", "Aylett", "Bedford",
  "Cloverdale", "Ben Hur", "Norfolk", "Galax", "Reston",
  "Arlington", "Bowling Green", "Mclean", "Burgess", "Coeburn",
  "Burke", "Broadway", "Cardinal", "Copper Hill", "Buckingham",
  "Vienna", "Herndon", "Lorton", "Pennington Gap", "Winchester",
  "Roanoke", "Castlewood", "Berryville", "Axton", "Colonial Beach",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < virginiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(virginiaCities[i]);
}

module.exports = { batches };
