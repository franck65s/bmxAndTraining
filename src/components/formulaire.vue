<template>
 <form id="myform">
<label>reply_to</label>
<input type="text" name="reply_to" />
<label>from_name</label>
<input type="text" name="from_name" />
<label>to_name</label>
<input type="text" name="to_name" />
<label>message_html</label>
<input type="text" name="message_html" />
<br><br>
<button>
Send
</button>
</form>

</template>

<script>
var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "template_e5nc4Q8i";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	alert("Sent!");
       myform.find("button").text("Send");
       console.log("test reussi")
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});
  export default {
    name: 'formulaire',
    


    //     // var myform = $("form#myform");

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #e3,
  #e3 .container {
    min-height: 700px;
    overflow: hidden;
    z-index: 0;
  }

  #e3 .input-group__details:after {
    background-color: rgba(255, 255, 255, 0.32) !important;
  }

  #e3 .input-group--focused .input-group__append-icon {
    color: inherit !important;
  }

</style>
