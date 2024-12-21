function correctDate(date) {
    return date < 10 ? "0" + date : date;
}

function saleDate(containerId, finishDate) {
    const container = document.getElementById(containerId);
    const days = container.getElementsByClassName("time")[0];
    const hours = container.getElementsByClassName("time")[1];
    const minutes = container.getElementsByClassName("time")[2];
    const seconds = container.getElementsByClassName("time")[3];

    const currentDate = new Date();
    const timeDifference = finishDate - currentDate;

    if (timeDifference <= 0) {
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
        return;
    }

    days.innerHTML = correctDate(Math.trunc(timeDifference / (1000 * 60 * 60 * 24)));
    hours.innerHTML = correctDate(Math.trunc((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    minutes.innerHTML = correctDate(Math.trunc((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
    seconds.innerHTML = correctDate(Math.trunc((timeDifference % (1000 * 60)) / 1000));
}

// Устанавливаем дату завершения
const finishDate = new Date(2024, 11, 31); // 31 декабря 2024

// Обновляем оба таймера
setInterval(() => {
    saleDate("timer1", finishDate);
    saleDate("timer2", finishDate);
}, 1000);