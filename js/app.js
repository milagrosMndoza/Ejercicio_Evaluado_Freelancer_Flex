/*
 * Archivo principal de JS
 */
var menu = document.getElementsByClassName("nav")[0];
var tituloNav = document.getElementsByClassName("titulo")[0];
var barra = document.getElementsByTagName("li")[0];
var barra2 = document.getElementsByTagName("li")[1];
var barra3 = document.getElementsByTagName("li")[2];
var modal = document.getElementById("modalId");
var modalImagen = document.getElementById("img01");
var imagenes = [];
var spans = [];

for (var i=0;i<6;i++) {
    imagenes[i] = document.getElementsByClassName("mostrar")[i];
    imagenes[i].addEventListener("click", desplegar);
}

function desplegar() {
    modal.style.display = "block";
    modalImagen.src = this.src;
    
}
for (var i = 0; i < 6; i++) {
    spans[i] = document.getElementsByClassName("close")[0];
    spans[i].addEventListener("click", cerrar);
}

function cerrar() {
    modal.style.display = "none";
}


 function scroll (event){
   var scroll=window.pageYOffset || document.body.scrollTop;
   console.log(scroll);
   if(scroll>3){
     menu.style.paddingTop = "12px";
     menu.style.paddingBottom = "12px";
     tituloNav.style.fontSize = "18px";
   }
   if(scroll>712){
      console.log(barra);
     barra.classList.add("pestana");
   }else{
     barra.classList.remove("pestana");
   }
   if(scroll>1566 ){
     barra2.classList.add("pestana");
     barra.classList.remove("pestana");
   }else{
     barra2.classList.remove("pestana");
   }
   if(scroll>2111){
     barra3.classList.add("pestana");
     barra2.classList.remove("pestana");
   }else{
     barra3.classList.remove("pestana");
   }
   if(scroll<3){
     menu.style.paddingTop = "25px";
     menu.style.paddingBottom = "25px";
     tituloNav.style.fontSize = "35px";
   }
 }
 window.addEventListener("scroll",scroll);

/*Para validar el formulario*/
var boton = document.getElementsByClassName("boton")[0];
boton.addEventListener("click", function(e){
 	e.preventDefault();
 	
 	var nombre = document.getElementById("name").value;
 	var email = document.getElementById("email").value;
 	var phone = document.getElementById("phone").value;
 	var message = document.getElementById("message").value;

 	if(nombre == ""){
 		document.getElementById("name").value = "· Ingrese su Nombre";
 	}	
 	if(email ==""){
		document.getElementById("email").value = "· Ingrese su Email";
 	}
 	if(phone ==""){
		document.getElementById("phone").value = "· Ingrese su Teléfono";
 	}
 	if(message == ""){
		document.getElementById("message").value = "· Ingrese su Mensaje";
 	}
 	if(nombre != "" && email != "" && phone != "" && message != ""){
 		document.getElementById("name").value ="";
 		document.getElementById("email").value ="";
 		document.getElementById("phone").value ="";
 		document.getElementById("message").value ="";	
 	}		

 })


