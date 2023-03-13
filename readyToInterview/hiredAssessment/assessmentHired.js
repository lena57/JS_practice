//you are given a list of integers prices representing the stock
// prices of a company. You must buy the stock once and sell it later
// to maximize your profit. Return the maximum profit you can achieve.
// you are not allowed sell  before you buy.

function maxProfit(prices) {
  let profit = 0
  let buy = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i]
    } else {
      profit = Math.max(profit, prices[i] - buy)
    }
  }
  return profit

}

console.log(maxProfit([6, 10, 4, 2, 10, -6, 12]))

//given a string , find the length of the longest substring that
// contains no repeated characters
function lengthOfLongestSubstring(s) {
  let longest = 0
  let start = 0
  let end = 0
  let map = {}

  while (end < s.length) {
    if (map[s[end]] === undefined) {
      map[s[end]] = end
      end++
      longest = Math.max(longest, end - start)
    } else {
      delete map[s[start]]
      start++
    }
  }
  return longest
}
console.log(lengthOfLongestSubstring('abcabcbyutyrteb'))
