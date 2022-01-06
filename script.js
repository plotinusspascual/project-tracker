
//var currentTime = moment();
// $('#current-time').text(moment().format("L LT"));

var currentTime = function(){
  document.getElementById("current-time").innerHTML =
  moment().format("MM/D/YYYY, h:m:ss");
  }

setInterval(currentTime, 1000); 