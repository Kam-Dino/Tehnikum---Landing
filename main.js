function correctDate (date){
    return date < 10 ? "0" + date : date;
}


function saleDate(){
    const day = document.getElementsByClassName("time")[0];
    const hour = document.getElementsByClassName("time")[1];
    const minute = document.getElementsByClassName("time")[2];
    const second = document.getElementsByClassName('time')[3];
    const finishDate = new Date(2024, 11, 31)
    const currentDate = new Date()
    const date = finishDate-currentDate
    day.innerHTML = correctDate(Math.trunc(date/(1000*60*60*24)))
    hour.innerHTML = correctDate(Math.trunc(
        (date % (1000*60*60*24)) / (1000 * 60 * 60)));
    minute.innerHTML = correctDate(Math.trunc((date%(1000*60*60))/(1000*60)));
    second.innerHTML = correctDate(Math.trunc((date%(1000*60))/(1000)));
}   
saleDate();
setInterval(function(){
    saleDate();
}, 1000)
