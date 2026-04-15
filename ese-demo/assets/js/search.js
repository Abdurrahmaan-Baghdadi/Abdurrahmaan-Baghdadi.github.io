// JavaScript Document
function addFocus(addElement)
{
	addElement.classList.remove("default");
}
function removeFocus(removeElement)
{
	removeElement.classList.add("default");
}
var elSearchLoan = document.getElementById('searchByLoan');
elSearchLoan.addEventListener('mouseover',function() {addFocus(elSearchLoan);},false);
elSearchLoan.addEventListener('mouseout',function() {removeFocus(elSearchLoan);},false);
var elSearchType = document.getElementById('searchByType');
elSearchType.addEventListener('mouseover',function() {addFocus(elSearchType);},false);
elSearchType.addEventListener('mouseout',function() {removeFocus(elSearchType);},false);
var elSearchDate = document.getElementById('searchByDate');
elSearchDate.addEventListener('mouseover',function() {addFocus(elSearchDate);},false);
elSearchDate.addEventListener('mouseout',function() {removeFocus(elSearchDate);},false);
var elSearchAll = document.getElementById('searchAll');
elSearchAll.addEventListener('mouseover',function() {addFocus(elSearchAll);},false);
elSearchAll.addEventListener('mouseout',function() {removeFocus(elSearchAll);},false);