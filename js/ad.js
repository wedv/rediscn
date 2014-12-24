// JavaScript Document

function hiddenAddiv(){
	document.getElementById('showaddiv').style.display = 'none';
}

var adTHML = "";
adTHML += "     <div id='showaddiv' style='display:;margin: 0 auto;max-width: 900px;' class='columns home sidebar'>";
adTHML += "          <img src='/images/christmas.jpg' />";
adTHML += "      </div>";
document.write(adTHML);

setTimeout("hiddenAddiv()",5000);