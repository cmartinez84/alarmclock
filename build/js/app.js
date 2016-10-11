(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(alarmTime) {
  this.alarmTime = alarmTime;
  // console.log(moment().format("H:mm:ss"));
  alert("sigalert");
}


exports.alarmClockModule = Alarm;

},{}],2:[function(require,module,exports){
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

var Alarm = require('./../js/alarm.js').alarmClockModule;

$(function(){
  var myClock = setInterval(updateClock, 1000);
  function updateClock(){
    $("#time").text(moment().format("H:mm:ss"));
  }
});

},{"./../js/alarm.js":1}]},{},[2]);
