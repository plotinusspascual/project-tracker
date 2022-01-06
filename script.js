var projectName = $("#project-name");
var projectType = $("project-type");
var dueDate = $("due-date");
var hourlyRate = $("hourly-rate");
var projectNameInput = $("#project-name-input");
var projectTypeInput = $("project-type-input");
var dueDateInput = $("due-date-input");
var hourlyRateInput = $("hourly-rate-input");
var submitButton = $("submit-button");

var currentTime = function(){
  document.getElementById("current-time").innerHTML =
  moment().format("MM/D/YYYY, h:m:ss");
  }

setInterval(currentTime, 1000); 



function getProjects(){
  var storedProjects = JSON.parse(localStorage.getItem("project"));
  if (storedProjects === null) {
    return [];
  }
  return storedProjects;
}

function postProject(event) {
  event.preventDefault();
  // get items by id for values pairs
  var newProject = {
    projectName: projectNameInput.value,
    projectType: projectTypeInput.value,
    dueDate: dueDateInput.value,
    hourlyRate: hourlyRateInput.value,
  }
  console.log(newProject);


  var storedProjects = getProjects();
  storedProjects.unshift(newProject);
  localStorage.setItem("projects", JSON.stringify(storedProjects));
  renderProjects();
}

//add event listener for submit button
submitButton.on("submit", postProject);