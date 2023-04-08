function clock() {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    var current_hour = new Date().getHours();
    var current_minute = new Date().getMinutes();
    var current_second = new Date().getSeconds();
    hour.innerHTML = current_hour;
    minute.innerHTML = current_minute;
    second.innerHTML = current_second;
}
var counting_time = setInterval(clock, 1000);