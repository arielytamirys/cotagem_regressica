const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')


const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)//nextYear atualiza automaticamente o ano(renderizaçao de forma dinamica.//


const updateCountdown = () => { //atualizaçao de contador a cada segundo //

const currentTime = new Date()
const difference = newYearTime - currentTime
const days = Math.floor(difference / 1000 / 60 / 60 / 24)//math.floor aredonda o numero- difference mostra os segundos//
const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24 //Contagem de Horas pro dia Acabar
const minutes = Math.floor(difference / 1000 / 60) % 60 //minutos
const seconds = Math.floor(difference / 1000) % 60//segundos//

secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
hoursContainer.textContent = hours < 10 ? '0' + hours : hours
daysContainer.textContent = days < 10 ? '0' + days : days

}
setInterval(updateCountdown,1000)//conta cada segundo //