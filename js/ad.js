// JavaScript Document

function hiddenAddiv(){
	document.getElementById('showaddiv').style.display = 'none';
}

var adTHML = "";
adTHML += "     <div id='showaddiv' style='display:;' class='text columns home sidebar'>";
adTHML += "          <img src='/images/newYear2014.jpg' />";
adTHML += "      </div>";
document.write(adTHML);

setTimeout("hiddenAddiv()",5000);