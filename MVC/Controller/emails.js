$(document).on('click','#multiMsg',function(e){

    e.preventDefault();
    e.stopImmediatePropagation();

        e.preventDefault();
        e.stopImmediatePropagation();

        $("#emailsPage").show();
        $("#settingsPage").hide();
        $("#insert_form").empty();
        $("#foundationMembers").hide();
        $("#tablediv").hide();
        $("#update_form_div").hide();
        $("#insert_form_div").hide();

/*     $.ajax({ 
          url: '../Model/emails.php',
         data: {function2call: 'allUsersList'},
          type: 'POST',
          dataType: "JSON",
          success: function(data) {

            },
            error: function(data){
            console.log(data);
        }
    }); */

        return false;      
});

$(document).on('click','#tosendform',function(e){ // SAVE THE SELECTED EMAILS IN AN ARRAY

    e.preventDefault();
    e.stopImmediatePropagation();

    $(".hide_to_send_email").hide();
    $("#emailForm").show();

        return false;      
});

$(document).on('click','#back_to_email_list',function(e){

    e.preventDefault();
    e.stopImmediatePropagation();

    $(".hide_to_send_email").show();
    $("#emailForm").hide();

        return false;      
});



    

