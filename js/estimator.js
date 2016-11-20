
function estimate(){
  document.getElementById("estimationTable").className = "table table-striped table-hover";
  return false;
}
function onClickNext()
{
/* Remove old tables if already drwan*/
  var element = document.getElementById("table");
  if(element!=null){
    element.parentElement.removeChild(element);
  }
var div = ocument.getElementById("placeholderForm");
addForm(div,"bw");
/*creating new one*/
/*
  var table = document.createElement("table");
  table.setAttribute("id","table");
  var numberOfInterface = document.getElementById("affectedInterfaces").value;

  for(var i=0;i<numberOfInterface;i++)
  {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
  }
  table.className = "table table-striped table-hover";
  document.getElementById("placeholderForm").appendChild(table);*/


}
function addForm(div, type)
{
  var d = document.createElement("div");
  d.className = "form-group";
  f.setAttribute('id',type + "Form");

  var l = document.createElement("label"); //input element, text
  i.setAttribute('for',type+"Input");
  i.setAttribute('name',"username");

  var s = document.createElement("input"); //input element, Submit button
  s.setAttribute('type',"submit");
  s.setAttribute('value',"Submit");

  f.appendChild(i);
  f.appendChild(s);

  document.getElementsByTagName('body')[0].appendChild(f);

}
