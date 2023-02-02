/* <tr scope="row">
    <th>Name</th> (VARIABLE)
    <td>TEST </td> (VARIABLE)
</tr> */
//Add this to the file storing the chat room for each new message.

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

localStorage.setItem("Messages", "TEST")
var storage = localStorage.getItem("Messages");

$(function() 
{
     
   $(".table-messages").html(storage)

     $(".clear").click(function(){
        localStorage.setItem("Messages", "")
        $(".messages").html(localStorage.getItem("Messages"));
     });

     $(".send").click(function(){
        template.Message = $("#sendMessage").value;
        $("#sendMessage").value = "";
        storage += template.fullMessage()
        localStorage.setItem("Messages", )

     });

     $("#sendMessage").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);

        if(keycode=="13")
        {
            alert("submit")
        }
     });

});