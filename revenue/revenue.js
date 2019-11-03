function revenue(transactions) {
  const dailyRevenue = {};
  let time = 0;
  let price = 0;

  for(let i = 0; i < transactions.length; i++) {
    price = transactions[i].price;
    time = new Date(transactions[i].timestamp).toString().substring(0, 15);
    dailyRevenue[time] = price;
  }

  return dailyRevenue;
}

module.exports = revenue;