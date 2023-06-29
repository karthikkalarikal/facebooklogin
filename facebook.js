$(document).ready(function(){
  $('#signup-form').validate({
    rules:{
      email:{
        required:true,
        minlength:4
      }

    }
    

  })
})