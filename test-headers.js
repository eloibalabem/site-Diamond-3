const https = require('https');

https.get('https://cdn.jsdelivr.net/gh/eloibalabem/diamondmusic@81d04563fdc9717208ed5a6b324639e182b2ad23/background%20site%20diamond.mp3', (res) => {
  console.log('Headers:', res.headers);
});
