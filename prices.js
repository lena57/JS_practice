// you are given a list of integers that
// represent the price of the stock over time.
// price[i] is the price of stock on day i
//you must buy the stock once and then later sell it
// you are not allowed to sett before you buy. return the max profit
// made form buying stock and later selling it.
//If the list is empty return 0.
const prices = [6, 0, -1, 10, 20, -7, 5] // return 11
function maxProfit(prices){
  let profit=0;
  let minToBuy = prices[0]
  for(let i=1; i<prices.length; i++){
    if(prices[i]<minToBuy){
      minToBuy=prices[i]
    }else{
      profit = Math.max(profit, prices[i]-minToBuy)
    }
  }
  return profit
}

console.log(maxProfit(prices))
