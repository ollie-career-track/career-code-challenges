function revenue(transactions) {
  const dailyRevenue = {};
  let time = 0;

  for(let i = 0; i < transactions.length; i++) {
    time = new Date(transactions[i].timestamp).toString().substring(0, 15);
    dailyRevenue[time] = transactions[i].price;
  }

  return dailyRevenue;
}

module.exports = revenue;