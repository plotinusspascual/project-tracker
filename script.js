
//var currentTime = moment();
// $('#current-time').text(moment().format("L LT"));

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
    projectName: projectName,
    projectType: projectType,
    dueDate: dueDate,
    hourlyRate: hourlyRate,
  }


  var storedProject = getProjects();
  storedProjects.unshift(newProject);
  localStorage.setItem("projects", JSON.stringify(storedProjects));
  renderProjects();
}

//add event listener for submit button
submitButton.addEventListener("submit", postProjects);