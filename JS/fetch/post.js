const axios = require('axios');

axios
  .post('https://singulars-2020-default-rtdb.firebaseio.com/alumnes.json', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })