$(document).ready(function(){
   $('ul.tabs li a:first').addClass('selection');
   

   $('ul.tabs li a').click(function(){
        
        $('ul.tabs li a').removeClass('selection');
        $(this).addClass('selection');
        $('.container div').hide();
        document.getElementById('text').style.display='block';
       
        
       var  activeTab = $(this).attr('href');
       
        $(activeTab).show();
        
        
        return false;

       
   });


   var window = document.getElementById('window');
   var open = document.getElementById('ver');
   var close = document.getElementById('close');
   
   open.addEventListener('click', function(){
        window.style.display='block';
        $('.window div').show();
        document.getElementById('text').style.display='none';

   })

   close.addEventListener('click',function(){
       window.style.display= 'none';
       document.getElementById('text').style.display='block';
   })


/*funcion que retorna el sistema operativo*/
var navInfo = navigator.appVersion.toLowerCase();
var so = 'Sistema Operativo';
function retornarSO()
{
	if(navInfo.indexOf('win') != -1)
	{
		so = 'Windows';
	}
	else if(navInfo.indexOf('linux') != -1)
	{
		so = 'Linux';
	}
	else if(navInfo.indexOf('mac') != -1)
	{
		so = 'Macintosh';
	}
	return so
}

document.getElementById('plataform').innerHTML= "Sistema Operativo:" + retornarSO() + "<br>";

/* navegador usado */
function retornarNav(){
     var navegador = navigator.userAgent;
     var navegadores =  ["Firefox", "Chrome"];
     for (var i in navegadores){
          if (navegador.indexOf(navegadores[i]) != -1)
               return navegadores[i];
     }
}

document.getElementById("navegator").innerHTML = "Navegador: " + retornarNav();



})

const selectContainer = (idChild) => {
     var children = document.getElementById("padre").getElementsByTagName('article');
     for(var i=0; i<children.length; i++){
         if(children[i].id!==idChild){
             children[i].style.display = "none";
         }else {
             children[i].setAttribute( "onClick", `showAll()`);
         }
     }
}

const showAll = () => {
     var children = document.getElementById("padre").getElementsByTagName('article')
     for(var i=0; i<children.length; i++){
         children[i].removeAttribute('style');
         children[i].setAttribute( "onClick", `selectContainer('${children[i].id}')`);
     }
}