const $ = document.querySelector.bind(document);
var isActive = false;
let timeID = null;
const Accept = () => {
    $('.modal').classList.remove('active')
    $('.modal_overlay').classList.remove('active')
    $('.modal_body').classList.remove('active')
    const date = $('.dateTime').value
    const endDate = new Date(date)


const countdown = () => {
    // const endDate = new Date("December 6, 2021 10:10:00").getTime()
    const nowDate = new Date().getTime()

    
    const distance = endDate - nowDate;

    if(distance < 0 || !date ) {
        return;
    }
    console.log('ads')
    $('.Button_create').innerText = "HUỶ"
    isActive = true;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const timeDays = Math.floor(distance / day)
    const timeHours = Math.floor((distance % day) / hour)
    const timeMinutes = Math.floor((distance % hour) / minute)
    const timeSeconds = Math.floor((distance % minute) / second)



    $('#Days').innerHTML = `${timeDays < 10 ? '0' : ''}` + timeDays
    $('#Hours').innerHTML = `${timeHours < 10 ? '0' : ''}` + timeHours
    $('#Minutes').innerHTML = `${timeMinutes < 10 ? '0' : ''}` + timeMinutes
    $('#Seconds').innerHTML = `${timeSeconds < 10 ? '0' : ''}` + timeSeconds
}
timeID = setInterval(countdown, 1000);
}
const Create = () => {
    if(isActive) {
        isActive = false;
        clearInterval(timeID)
        $('.Button_create').innerText = "TẠO NGÀY KẾT THÚC"
        $('#Days').innerHTML = '00'
        $('#Hours').innerHTML =  '00'
        $('#Minutes').innerHTML =  '00'
        $('#Seconds').innerHTML =  '00'
    } else {
        $('.modal').classList.add('active')
        $('.modal_overlay').classList.add('active')
        $('.modal_body').classList.add('active')
    }
}

const Cancel = () => {
    $('.modal').classList.remove('active')
    $('.modal_overlay').classList.remove('active')
    $('.modal_body').classList.remove('active')
}





