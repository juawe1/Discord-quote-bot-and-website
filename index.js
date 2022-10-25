import express from 'express';
import cors from 'cors';

import { dbAPI } from './mongodb.js';

var quotesAPI = new dbAPI("Cluster0", "discordQuotes", "quotes")

const test_data = [{"id":1,"first_name":"Codi","last_name":"Siebert","email":"csiebert0@ft.com","gender":"Male","ip_address":"218.112.111.208"},
{"id":2,"first_name":"Tamera","last_name":"Worshall","email":"tworshall1@blogs.com","gender":"Female","ip_address":"198.215.124.27"},
{"id":3,"first_name":"Zechariah","last_name":"Ebben","email":"zebben2@smugmug.com","gender":"Male","ip_address":"189.12.179.14"},
{"id":4,"first_name":"Rand","last_name":"Harris","email":"rharris3@weibo.com","gender":"Polygender","ip_address":"43.232.64.156"},
{"id":5,"first_name":"Ardine","last_name":"Thomsson","email":"athomsson4@mapquest.com","gender":"Female","ip_address":"121.158.227.127"},
{"id":6,"first_name":"Nye","last_name":"Hanbury-Brown","email":"nhanburybrown5@shinystat.com","gender":"Male","ip_address":"156.133.203.79"},
{"id":7,"first_name":"Howey","last_name":"Pearl","email":"hpearl6@lycos.com","gender":"Male","ip_address":"131.246.30.46"},
{"id":8,"first_name":"Minerva","last_name":"Heindrich","email":"mheindrich7@barnesandnoble.com","gender":"Bigender","ip_address":"153.110.169.208"},
{"id":9,"first_name":"Aguste","last_name":"Caverhill","email":"acaverhill8@ca.gov","gender":"Male","ip_address":"116.35.126.88"},
{"id":10,"first_name":"Lionello","last_name":"McGahern","email":"lmcgahern9@ow.ly","gender":"Male","ip_address":"238.0.173.36"}]

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.json('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.get('/test', (req, res) =>{
  quotesAPI.readFor().then((response) => {
    let quotes = []
    const data = Object.values(response)
    let innerArray = data[0]
    innerArray.forEach(item => {
      quotes.push(item.quote)
    });
    res.json(quotes)
  })
})

app.listen(8080, () =>
  console.log(`Example app listening on port 8080!`),
);