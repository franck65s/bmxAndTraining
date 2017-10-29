<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="lead-form">
          <h1 class="text-center">Real-time Google Map Embedding - Vue JS 2</h1>
          <hr/>
          <div class="row">
            <div class="col-md-12">
              <input type="text" class="form-control input-lg" placeholder="Enter Place Name" v-model="place">
            </div>
            <div class="col-md-6">
              <h3> Latitude : {{ latitude }}</h3>
            </div>
            <div class="col-md-6">
              <h3> Longitude : {{ longitude }}</h3>
            </div>
            <div class="col-md-12" v-bind:class="{ 'not-visible' : active }">
              <iframe frameborder="0" style="width: 100%; height: 350px; border:0" v-bind:src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyCNsBxCz4yYoQwKdPO6cs_Cx1UPHu4Vc-g&q='+ place"
                allowfullscreen></iframe>
              </iframe>
            </div>
          </div>
        </div>
        <!-- end of .lead-form -->
      </div>
      <!-- end of .col-md-6.col-md-offset-3 -->
    </div>
    <!-- end of .row -->
  </div>
  <!-- end of .container -->
  </div>
  <!-- end of #app -->
</template>

<script>
  // import Gallery from './components/Gallery'
  // import Bmxtrain from './components/Bmxtrain'
  // import formulaire from './components/formulaire'

  export default {
    name: 'GoogleMap',
    data: function () {
      return {
        place: '',
        latitude: '',
        longitude: '',
        active: 'true'
      }
    },
    watch: {
      place: function () {
        this.latitude = '';
        this.longitude = '';
        this.active = true;
        if (this.place.length >= 3) {
          this.active = false;
          this.lookupCoordinates();
        }
      }
    },
    methods: {
      lookupCoordinates: _.debounce(function () {
        var app = this;
        app.latitude = "Searching...";
        app.longitude = "Searching...";
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + app.place)
          .then(function (response) {
            app.latitude = response.data.results[0].geometry.location.lat;
            app.longitude = response.data.results[0].geometry.location.lng;
          })
          .catch(function (error) {
            app.latitude = "Invalid place";
            app.longitude = "Invalid place";
          })
      }, 500)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h3 {
    font-weight: bold;
    color: #666666;
  }

  .not-visible {
    visibility: hidden;
  }

  #submit-form {
    margin-top: 20px;
  }

  .lead-form {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    padding: 10px 50px 30px 50px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  span.city-span {
    color: (#444);
    text-transform: uppercase;
    margin-left: 5px;
    margin-top: 10px;
  }

  .form-control {
    margin-bottom: 3px;
  }

</style>
