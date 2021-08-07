const express = require('express')
const app = express();
const binance = require('./binance')
const dB = require('./database')
const port = 8000;

// app.get('/timerange', dB.TimeRangeHandler)
app.get('/bin', binance.BinanceFunc1)

app.get('/profitloss', async(req,res) => {
  res.send(JSON.parse('{"LTCBUSD":'+JSON.stringify(await dB.ProfitLoss())+"}"))
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


