<template>
  <div id="app">
    <toolbar>
   
    </toolbar>

    <v-parallax id="paral" src="https://s-media-cache-ak0.pinimg.com/originals/82/4d/41/824d41a811ac057e2f3c5bd3f7695725.jpg"
      height="900">
      <h1 class="white--text">Boost Your Roots</h1>
      <h4 class="white--text">Free ressources from web around bmx and training</h4>
      </v-layout>
    </v-parallax>

    <!--<img src="./assets/logo.png">
    <hello></hello>-->
    <gallery></gallery>
    <v-parallax id="paral" src="http://a.espncdn.com/photo/2013/0818/as_bmx_revolution7_2048.jpg" height="300">
    </v-parallax>
    <Bmxtrain></Bmxtrain>
    <v-parallax id="paral" src="http://sf.co.ua/14/05/wallpaper-1858701.jpg" height="300">
    </v-parallax>
    <social-sharing url="http://localhost:8080/" inline-template>
      <div>
        <network network="facebook">
          <i class="fa fa-facebook"></i> Facebook
        </network>
        <network network="googleplus">
          <i class="fa fa-google-plus"></i> Google +
        </network>
        <network network="linkedin">
          <i class="fa fa-linkedin"></i> LinkedIn
        </network>
        <network network="pinterest">
          <i class="fa fa-pinterest"></i> Pinterest
        </network>
        <network network="reddit">
          <i class="fa fa-reddit"></i> Reddit
        </network>
        <network network="twitter">
          <i class="fa fa-twitter"></i> Twitter
        </network>
        <network network="vk">
          <i class="fa fa-vk"></i> VKontakte
        </network>
        <network network="weibo">
          <i class="fa fa-weibo"></i> Weibo
        </network>
        <network network="whatsapp">
          <i class="fa fa-whatsapp"></i> Whatsapp
        </network>
      </div>
    </social-sharing>
    <v-card class="grey lighten-4 elevation-0">
      <v-card-text>
        <v-container fluid>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Normal with hint text</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field name="input-7-1" label="Label Text" multi-line></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Focus</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field name="input-7-2" label="Label Text" value="Input Text" class="input-group--focused" multi-line></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Normal with multi-line input text</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field name="input-7-3" label="Label Text" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                multi-line></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Normal with multi-line input text</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field name="input-7-4" label="Label Text" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                multi-line></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>


    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>© {{ new Date().getFullYear() }}</div>
    </v-footer>





  </div>
</template>


<script>
  // import paral from './components/paral'
  import Hello from './components/Hello'
  import Gallery from './components/Gallery'
  import Bmxtrain from './components/Bmxtrain'
  import paral from './components/paral'
  import Toolbar from './components/Toolbar'

  export default {
    name: 'app',
    components: {
      Hello,
      Gallery,
      Bmxtrain,
      paral,
      Toolbar

    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: black;
  }

</style>
