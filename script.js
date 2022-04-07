
var psec = document.getElementById('sec')
var pmin = document.getElementById('min')
var phr = document.getElementById('hr')

setInterval(timer, 1000);

function timer(){
    const data = new Date()
    const min = data.getMinutes()
    const sec = data.getSeconds()
    const hr = data.getHours()

    psec.style.transform = `rotate(${sec*6}deg)`
    pmin.style.transform = `rotate(${min*6}deg)`
    phr.style.transform = `rotate(${hr*30}deg)`
}







