var bonjour = require('bonjour-hap')()
var express = require("express");
var app = express()
const fs = require('fs')


//gets the json files which store device info

//accessory json
let rawdata = fs.readFileSync('device/accessory-info.json');
let data = JSON.parse(rawdata);
//light on / off json
let rawdata2 = fs.readFileSync('device/lights.json');
let data2 = JSON.parse(rawdata2);
//light settings json
let rawdata3 = fs.readFileSync('device/light-settings.json');
let data3 = JSON.parse(rawdata3);

//Bonjour publishing (doesnt work atm)
var txtrecords = {
  id:"3C:6A:9D:15:5E:B6",
  serial_number: "abc123"
}

bonjour.publish({ name: 'Elgato-Key-Light-E424', type: 'elg', port: 9123, protocol: "tcp", txt: txtrecords });
console.log('starting elgato-emulator :)');
console.log('Publishing to Bonjour');

//Shows what is possible to find outside
//bonjour.find({ type: 'elg'}, function (service) {console.log(service)})
//console.log(data, data2, data3)

//http endpoint (these ones return json)
app.use(express.json());

app.get('/elgato/accessory-info', (req, res) => {res.json(data)});
app.get('/elgato/lights', (req, res) => {res.json(data2)});
app.get('/elgato/lights/settings', (req, res) => {res.json(data3)});
app.get('/elgato/identify', (req, res) => {console.log(req.body)});

//http endpoints (this one is where we recive data)

app.put("/elgato/lights", function(req, res) {
  console.log(req.body);
});

app.put("/elgato/accessory-info", function(req, res) {
  console.log(req.body);
});

app.put("/elgato/lights/settings", function(req, res) {
  console.log(req.body);
});

//http endpoints (post)

app.post("/elgato/identifty", function(req, res) {
  console.log(req.body);
});

//debug stuff ctrl+k+u to undo it and ctrl+k+c to markour
// app.get('*', (req, res) => {
//   const { rawHeaders, httpVersion, method, socket, url } = req;
//   const { remoteAddress, remoteFamily } = socket;
//   console.log(JSON.stringify({timestamp: Date.now(),rawHeaders,httpVersion,method,remoteAddress,remoteFamily,url}));
//   console.log("--------------");
// });

// app.post('*', (req, res) => {
//   const { rawHeaders, httpVersion, method, socket, url } = req;
//   const { remoteAddress, remoteFamily } = socket;
//   console.log(JSON.stringify({timestamp: Date.now(),rawHeaders,httpVersion,method,remoteAddress,remoteFamily,url}));
//   console.log("--------------");
// });

// app.put('*', (req, res) => {
//   const { rawHeaders, httpVersion, method, socket, url } = req;
//   const { remoteAddress, remoteFamily } = socket;
//   console.log(JSON.stringify({timestamp: Date.now(),rawHeaders,httpVersion,method,remoteAddress,remoteFamily,url}));
//   console.log("--------------");
// });

//Publish Server :)
app.listen(9123, '0.0.0.0');
