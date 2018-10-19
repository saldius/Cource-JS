'use strict';
		
	function showCurentTime() {

  let cureDate = new Date(),
      cureTime = 'Текущее время: ',
      hours = (cureDate.getHours()).toString();

 if (hours < 10) { 
	 hours = "0" + hours; 
 }

  let minutes = (cureDate.getMinutes()).toString();
  
 if (minutes < 10) { 
	 minutes = "0" + minutes; 
 }  

  let seconds = (cureDate.getSeconds()).toString();
  
 if (seconds < 10) {
    seconds = '0' + seconds;  
 }

  document.body.innerText = cureTime + hours + ':' + minutes + ':' + seconds;

}
 setInterval(showCurentTime, 1000); 

