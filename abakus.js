window.onload = function() {
	
	  var beads = document.getElementsByClassName('bead');
	  
	   function changePosition() {
	  	
      if (this.style.cssFloat =='right')
      {
       this.style.cssFloat ='left';
      } 
      else if (this.style.cssFloat == 'left')
      {     
	   this.style.cssFloat = 'right';
      } 
	   }
	      
	  for(var i = 0; i < beads.length; i++){  
	    
      var blob = beads[i].className;
      
      if (blob == "bead bead2"){
      beads[i].style.cssFloat = 'right';
      } else {
      beads[i].style.cssFloat = 'left';
      }
      beads[i].onclick = changePosition; 
}
}