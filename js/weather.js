//weather
const API_KEY = 'e839cddd7e61819740df1a0c9e7ddd42'

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  console.log("당신의 위치는 ", lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('.weather span:first-child')
    const city = document.querySelector('.weather span:last-child')
    city.innerText = data.name
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  })
}

function onGeoError() {
  alert("당신이 어딨는지 찾을 수 없어요..")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

