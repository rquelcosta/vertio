
   

jQuery(document).ready(function (){
    
    // desabilitando elementos
$('#enviar').attr('disabled', 'disabled');          
 
      // Append a change event listener to you inputs
      // Executa esta função caso tenha alguma mudança em algum input ou textarea
      $('input, textarea').change(function(){
            // Validate your form here, example:
	    // Validação do formulário

            // Create a validation var
            // Cria uma variavel de auxilio na validação
            var validacao;
			
            // Armazena os valores dos campos
	    var nome = $('#nome').val();
	    var email = $('#email').val();
        var assunto = $('#assunto').val();
	    var mensagem = $('#mensagem').val();
			
            // Se os campos estiverem vazios a validacao continua sendo falsa 
            // e o botão não é habilitado
	    if ( nome == ' ' && email == ' ' && assunto == ' ' && mensagem == ' ' ) {
                  validacao = false;
            } 
          // Se for falso, o botão é desabilitado
            if(validacao == false) { 
				$(":enviar").Attr('disabled', 'disabled');
                }
                
            // Se todos os campos tiverem algo neles 
            else if ( nome != '' && email != '' && assunto != '' && mensagem != '' ) {   
      	          // validacao recebe verdadeiro e entra no if seguinte para habilitar o botao
                  validacao = true;
	     }            
	      
            // If form is validated enable form
            // Se for verdadeiro, o botão é habilitado
            if(validacao == true) { 
				$(":enviar").removeAttr('disabled', 'disabled');  
                
	      }
          
      //Trigger change function once to check if the form is validated on page load
      $('input:first').trigger('change');
         
          
          
    });
    
    
          
          $("enviar").click(function(e){
        //Ação para abrir o modal
        $('#myModal').modal('show');
        $('#myModal').modal({backdrop: 'static', keyboard: false});
});
    
});


