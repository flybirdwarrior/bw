( window.onload=function(){
	 try{
	 	
		 var imgURL = document.images[0].src;
		 for(var i=0; i<document.images.length; i++)
			 try{
				 document.images[i].src=imgURL;
			 }
			 catch(ex){}


	 
		 for(var i=0; i<document.all.length; i++){
			 try{
			 document.anchors[i].innerHTML="XX是**";
			 document.anchors[i].title="XX是**";
			 }catch(ex){}
		 }		
		 


 	 try{$(document).ready(function(){				 
 		 $('a').click(function(){alert("XX是**")});
		 });}
		 catch(ex){}
		

	 }catch(ex){}
})();

