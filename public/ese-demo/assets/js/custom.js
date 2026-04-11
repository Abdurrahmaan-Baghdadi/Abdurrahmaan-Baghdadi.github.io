// JavaScript Document
function addFocus(addElement)
{
	addElement.classList.remove("default");
}
function removeFocus(removeElement)
{
	removeElement.classList.add("default");
}
var elUploadNew = document.getElementById('uploadNew');
elUploadNew.addEventListener('mouseover',function() {addFocus(elUploadNew);}, false);
elUploadNew.addEventListener('mouseout',function() {removeFocus(elUploadNew);}, false);
var elUploadExisting = document.getElementById('uploadExisting');
elUploadExisting.addEventListener('mouseover',function() {addFocus(elUploadExisting);},false);
elUploadExisting.addEventListener('mouseout',function() {removeFocus(elUploadExisting);},false);
