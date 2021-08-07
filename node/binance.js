const Binance = require('node-binance-api');
const Keys    = require('./config.js');
const DB = require('./database')

const binance = new Binance().options(Keys);

module.exports.BinanceFunc1  = async(req,res) => {
 await binance.allOrders("LTCBUSD", (error, orders, symbol) => {
  
  for (i=0 ; i<orders.length ; i++){
    let resul = {"Symbol": "" ,"Price": "" ,"Side":"", "Time":""};
    resul.Symbol = orders[i].symbol
    resul.Price = orders[i].price
    resul.Side = orders[i].side
    resul.Time = orders[i].time
    DB.InsertTransactions(resul);
  }
}
)
}

