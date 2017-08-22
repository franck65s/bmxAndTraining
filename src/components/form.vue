<template>
  <div id="simple-form-container">
    <form action="">
      <div class="form-section" transition="start">
        <p v-if="error.in.name">{{error.text.name}}</p>
        <label for="name">{{label.name}}</label>
        <input type="text" name="name" v-model="name" v-bind:placeholder="placeholder.name" />
      </div>
      <br />
      <div class="form-section">
        <p v-if="error.in.email">{{error.text.email}}</p>
        <label for="email">{{label.email}}</label>
        <input type="text" name="email" v-model="email" v-bind:placeholder="placeholder.email" />
      </div>
      <br />
      <div class='form-section'>
        <p v-if="error.in.message">{{error.text.message}}</p>
        <label for="message">{{label.message}}</label>
        <textarea name="message" v-model="message" v-bind:placeholder="placeholder.message"></textarea>
      </div>
      <br />
      <button type="submit" @click="submitForm">{{label.submit}}</button>
    </form>
  </div>
  </div>

</template>

<script>
  export default {
    name: 'form',

   data: {
    label: {
     name: "Name: ",
     email: "Email: ",
     message: "Message: ",
     submit: "Submit"
    },
   placeholder: {
    name: "Place your name",
    email: "Place your email",
    message: "Place your message"
   },
   error: {
    in: {
     name: false,
     email: false,
     message: false,
    },
    text: {
     name: "Name is required",
     email: "Email is required",
     message: "Message is required"
    }
   }
  },
 methods: {
  submitForm: function(event) {
    console.log(event.target);
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }
 }
};



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
