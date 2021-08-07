var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

module.exports.MongoConnect = async() => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("binanceDB")
  });
}
module.exports.InsertTransactions = async(mydata) => 
  {
    const client = await MongoClient.connect(url);
    const dbo = client.db("binanceDB")
    dbo.collection("transactions").insertOne(mydata, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted")
    });
  }

module.exports.TimeRangeHandler = async(req,res) =>{
  
}

let SellTransactions = async() => 
{
  let Sells = [];
  const client = await MongoClient.connect(url);
  const dbo = client.db("binanceDB")
  var query = { Time : { $gte:1623300000000, $lte:1623303365870},Side:"SELL"}
  const result  = await dbo.collection("transactions").find(query).toArray();
  client.close();
  Sells = JSON.parse(JSON.stringify(result))
  return await Sells
}

let BuyTransactions = async() => 
{
  let Buy = [];
  const client = await MongoClient.connect(url);
  const dbo = client.db("binanceDB")
  var query = { Time : { $gte:1623300000000, $lte:1623303365870},Side:"BUY"}
  const result  = await dbo.collection("transactions").find(query).toArray();
  client.close();
  Buy = JSON.parse(JSON.stringify(result))
  return await Buy
}

let ResJson = async() => 
{
  return JSON.parse('{"Sell":'+JSON.stringify(await SellTransactions())+',"Buy":'+JSON.stringify(await BuyTransactions())+"}" )
}

module.exports.ProfitLoss = async() =>{
  const transactionsJson = await ResJson()
  const SellTransactions = transactionsJson.Sell
  const BuyTransactions = transactionsJson.Buy

  let total_sell = 0
  for(i=0 ; i<SellTransactions.length ; i++){
          total_sell += eval(SellTransactions[i].Price)
        }
  console.log("Total Sell:" +total_sell+"")

  let total_buy = 0
  for(i=0 ; i<BuyTransactions.length ; i++){
          total_buy += eval(BuyTransactions[i].Price)
        }
    console.log("Total buy:" +total_buy+"")

  let profitloss = total_sell - total_buy
  console.log("ProfitLoss:" +profitloss+"")

  return(""+profitloss)

}

