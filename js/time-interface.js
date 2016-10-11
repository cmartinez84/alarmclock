var Alarm = require('./../js/alarm.js').alarmClockModule;

$(function(){
  var myClock = setInterval(updateClock, 1000);
  function updateClock(){
    $("#time").text(moment().format("H:mm:ss"));
  }
});
