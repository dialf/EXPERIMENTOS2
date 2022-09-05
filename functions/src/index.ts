import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';



const app = express();
app.use(cors({ origin: true }));


app.get('/', (req, res) => {
 res.send('hola WORLD!');
});

app.post('/', (req, res) => {
  res.send('No me acuerdo que era post');
 });

 app.get('/pais', async (req,res) => {
  const data = {
    country: req.headers['x-appengine-country'],
    city: req.headers['x-appengine-city'],
    citylatlong: req.headers['x-appengine-citylatlong'],
    ip: req.headers['x-appengine-user-ip'],
  }
  return res.send(data).end();
 })

exports.app = functions.https.onRequest(app)

 export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("que onda bro ya es la 2 ves que haces eso acordate de git pedaso de B***** att:lafken del pasado =3");
  });

//let horario = new Date().toLocaleString( {hours12: fasle} ); 
//let horario = new Date(Date.UTC((2012, 11, 12, 3, 0, 0 )));
// //const options = {hours: Number,minutes: Number,seconds: Number }
//console.log(horario);
//toLocaleDateString
//console.log(new Date().toLocaleString( { hour12: false }));
//console.log(new Date().toLocaleString( { hour12}));
//new Date().toLocaleString( { hour12})