var Alarm = require('./../js/alarm.js').alarmClockModule;


$(function(){
  $("#alarm").submit(function(event){
    event.preventDefault();
    var alarm = $("#input").val();
    $(".alarms").append("<p>" + alarm + "</p>");
    var newAlarm = new Alarm("RAFAFA");
    console.log(newAlarm.alarmTime);


    var myFunction = setInterval(setAlarm, 1000);
    function setAlarm(){
      console.log("running");
      if($("#time").text() === alarm){
        alert("bake that duck up!");
      }
    }
  });

});
