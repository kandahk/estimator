
function estimate(){
  document.getElementById("estimationTable").className = "table table-striped table-hover";
  return false;
}
function onClickNext()
{
  var div = document.getElementById("placeholderDiv");
  var number = document.getElementById("affectedInterfaces").value;

  div.className = "form-group title_block";
  for(var i=1;i<number;i++)
    addForm(div,i);
  return false;
}
function addForm(div, i)
{
  var cln = div.cloneNode(true);
  cln.id = i+"";
  cln.className = "form-group title_block";
  div.parentNode.appendChild(cln);
}
