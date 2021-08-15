function prettyLightTabs(obj) {
	var tab = obj.children[0].children;
   var div = obj.children[1].children;
   
   var showTheTab = function (num) {
	   var tabNum = typeof num === 'number' ? num : this.getAttribute('data-jstabs-num');
   	for (var i = 0; i < div.length; i++) {
   	  div[i].style.display = 'none';
   	}
   	for (var i = 0; i < tab.length; i++) {
   	  tab[i].className = div[i].className.replace( /(?:^|\s)actab(?!\S)/ , '' );
   	}
   	div[tabNum].style.display = 'block';
   	tab[tabNum].className = tab[tabNum].className + ' actab';
   }

   for (var i = 0; i < tab.length; i++) {
   	tab[i].setAttribute('data-jstabs-num',i);
   	console.log(tab[i]);
   	tab[i].addEventListener('click', showTheTab);
   }
   showTheTab(0); 
}

function prettyLightTabsInit(cl) {
   cl =  typeof cl === 'string' ? cl : 'prettytabs';
   for (var i = 0; i < document.getElementsByClassName(cl).length; i++) {
   	new prettyLightTabs(document.getElementsByClassName(cl)[i]);
   }
}
try {
   document.addEventListener( "DOMContentLoaded", prettyLightTabsInit);	
   }catch (err) {
     var execute = prettyLightTabsInit;
	  function timeoutLoader() {
         if(document.body == null){
            setTimeout(timeoutLoader,300)
         } else {
            execute();
         }
      }
	  timeoutLoader();
	}