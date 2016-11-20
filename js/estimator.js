
function estimate(){
  document.getElementById("estimationTable").className = "table table-striped table-hover";
  return false;
}

function newInterface(){
  document.getElementById("inputAnswer1").className ="hidden";
  document.getElementById("labelAnswer1").className ="hidden";
  document.getElementById("answer1Help").className ="hidden";
}

function existingInterface(){
    document.getElementById("inputAnswer1").className ="form-control";
    document.getElementById("labelAnswer1").className ="visible";
    document.getElementById("answer1Help").className ="form-text text-muted";
}
