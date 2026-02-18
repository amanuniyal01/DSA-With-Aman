// Input: prices = [7,1,5,3,6,4]
// Output: 5  [6-1=5] max profit..

const BuyAndSellStock = (prices) => {
    let minProfit = prices[0]
    let maxProfit = 0
    let i;
    for (i = 1; i < prices.length; i++) {
        if (prices[i] - minProfit > maxProfit)
            maxProfit = prices[i] - minProfit
    }
    if (prices[i] < minProfit[i]) {
        minProfit[i] = prices[i]
    }
    return maxProfit

}
console.log(BuyAndSellStock([1, 2, 3, 4, 5, 6]))