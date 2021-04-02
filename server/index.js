const express = require('express');
const app = express();
const SERVER_PORT = 8080;
const cors = require('cors');
const eventRoutes = require('./routes/events');

app.use(cors());
app.get('/events', eventRoutes);

const eventString = require('./data/events.json');

// const event2String = JSON.stringify(eventString);


app.get('/', (req, res) => {
    res.send(eventString)
})



app.listen(SERVER_PORT, ()=>{
    console.log(`listening on port ${SERVER_PORT}`)
});