const clima = require('./clima.js')

const city = 'Monterrey'

//clima.mapBox(city)


clima.mapBox(city, function(error, response) {
  if(error) {
    console.log(error)
  } else {
    console.log(response.name)
    clima.darkSky(response.lat, response.long, function(error, response) {
      if(error) {
        console.log(error)
      } else {
        console.log(response)
      }
    })
  }
})