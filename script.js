var template = {

   combine1 : "<tr scope=\"row\"><th>",
   Name : "Unknown",
   combine2 : "</th><td>",
   Message : "Message", 
   combine3 : "</td></tr>",
   fullMessage : function()
   {
      return this.combine1+this.Name+this.combine2+this.Message+this.combine3;
   }

}

var storage = localStorage.getItem("Messages");

$(function() 
{
     
   $(".table-messages").html(storage)
   template.Name = prompt("Enter your username: ");
     $(".clear").click(function(){
        localStorage.setItem("Messages", "")
        $(".table-messages").fadeOut(function()
        {
         $(".table-messages").html(localStorage.getItem("Messages"));
         $(".table-messages").show();
        })
        
     });

     $(".send").click(function(){
        template.Message = $("#sendMessage").val();
        $("#sendMessage").val('');
        storage = localStorage.getItem("Messages");
        storage += template.fullMessage()
        localStorage.setItem("Messages", storage)
        console.log(storage);
        $(".table-messages").html(storage)
        fadeLast();

     });

     $("#sendMessage").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);

        if(keycode=="13")
        {
         template.Message = $("#sendMessage").val();
         $("#sendMessage").val('');
         storage = localStorage.getItem("Messages");
         storage += template.fullMessage()
         localStorage.setItem("Messages", storage)
         $(".table-messages").html(storage)
         fadeLast();
        }
     });

});

function fadeLast()
{
   $(".table-messages tr:last").hide();
   $(".table-messages tr:last").fadeIn();
}