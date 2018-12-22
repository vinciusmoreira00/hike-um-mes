Template.Feed.events({
     "submit form": function(evento, template) {
        evento.preventDefault(); 
        var textoDOFormulario = evento.target.texto.value;
        console.log(textoDOFormulario);
        Posts.insert({
        	texto: textoDOFormulario
        }); 
     } 
});