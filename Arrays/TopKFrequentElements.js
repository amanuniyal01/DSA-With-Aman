const TopKFrequentElements = (nums, k) => {

    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        }
        else {
            map[nums[i]] += 1;
        }
    }
    console.log("Map", map)

    let entries = Object.entries(map) // It'll give both key and values [["1":3] , ["2":2] , ["3":1]]
    console.log("Entries", entries)

    //Sort the entries in Descending Order on the basis of frequency.
    entries.sort((a, b) => b[1] - a[1]);

    //Just have to return k elements.
    var result = entries.slice(0, k)
    console.log("result", result)

    return result.map((item) => Number(item[0]))

}

var result = TopKFrequentElements([1, 1, 1, 2, 2, 3], 2)
console.log(result)