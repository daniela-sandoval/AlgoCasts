// make a subset given a number, find the minimun within this subset, then after all that finished give the MAXIMUN of those smaller subsets.

// You're at a cereal aisle, and you see a row of cereal boxes. There's a lot. So you scan through them bit by bit since you can only see so much. With each scan, you see the least price. Now you've accumlated a set of cheap minimun cereal box prices. Finally, you have to take the greatest amount of those cheap prices.

segment(2, [1, 2, 3, 4]) => 3
segment(3, [1, 3, 7, 4, 5, 2, 15, 21, 1]) => 4

function segment(x, arr) {
	let minArr = []

  let currentArr = []
    for (let i = 0; i <= arr.length - x; i ++) {
      currentArr = arr.slice(i, i + x)
      minArr.push(Math.min(...currentArr))
    }
  return Math.max(...minArr)
}


async function filterMedicalRecords(ageStart, ageEnd, bpDiff) {
  STUFF
}
