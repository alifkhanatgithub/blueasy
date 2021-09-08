
var a;
function showHide(){
	if(a==1){
		document.getElementById("two").style.display="inline";
		return a=0;
	}
	else{
		document.getElementById("two").style.display="none";
		return a=1;
	}
}