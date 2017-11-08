<template>

  <v-app height="415px">
    <v-navigation-drawer persistent light v-model="drawer">
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link :to="{path: '/', hash: 'Bmxtrain'}">Bmx training</router-link>
        </li>
        <li>
          <router-link :to="{path: '/', hash: 'Bmxgallery'}"> Videos</router-link>
        </li>
        <li>
          <router-link :to="{path: '/', hash: 'Contact'}"> Contact</router-link>
        </li>
      </ul>

      <v-list dense>
        <!--<v-list-tile v-for="item in items" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>-->
        <v-subheader class="mt-3 grey--text text--darken-1">Help us to promote this Website</v-subheader>
        <v-list>
          <social-sharing url="http://localhost:8080/" inline-template>
            <ul>
              <li>
                <network network="facebook">
                  <i class="fa fa-facebook"></i> Facebook
                </network>
              </li>
              <li>
                <network network="googleplus">
                  <i class="fa fa-google-plus"></i> Google +
                </network>
              </li>
              <li>
                <network network="linkedin">
                  <i class="fa fa-linkedin"></i> LinkedIn
                </network>
              </li>
              <li>
                <network network="pinterest">
                  <i class="fa fa-pinterest"></i> Pinterest
                </network>
              </li>
              <li>
                <network network="reddit">
                  <i class="fa fa-reddit"></i> Reddit
                </network>
              </li>
              <li>
                <network network="twitter">
                  <i class="fa fa-twitter"></i> Twitter
                </network>
              </li>

            </ul>
          </social-sharing>

        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed="true" class="red">
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field label="Search..." single-line append-icon="search" dark hide-details></v-text-field>
    </v-toolbar>



    <main>

      <v-parallax id="paral" src="https://s-media-cache-ak0.pinimg.com/originals/82/4d/41/824d41a811ac057e2f3c5bd3f7695725.jpg"
        height="900">
        <v-layout>
          <h1 class="white--text">Boost Your Roots</h1>
          <h4 class="white--text">Free ressources from web around bmx and training</h4>
        </v-layout>
      </v-parallax>

      <div id="Bmxgallery">
        <gallery></gallery>
      </div>

      <v-parallax id="paral" src="http://a.espncdn.com/photo/2013/0818/as_bmx_revolution7_2048.jpg" height="500">
      </v-parallax>
      <div id="Bmxtrain">

        <Bmxtrain></Bmxtrain>
      </div>
      <v-parallax id="paral" src="http://sf.co.ua/14/05/wallpaper-1858701.jpg" height="900">
      </v-parallax>
      <div id="Contact">
        <formulaire></formulaire>
      </div>
      <v-parallax id="paral" src="http://chrispiascik.com/wp-content/uploads/2014/09/1718-20140922-BMX-jumble.jpg" height="300">
      </v-parallax>
      <div>
        <GoogleMap></GoogleMap>
      </div>

      <div>
        <Grid></Grid>
      </div>



      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>© {{ new Date().getFullYear() }}</div>
      </v-footer>
      <!--<hello></hello>-->
      <!-- component template -->


      <!-- demo root element -->

    </main>

  </v-app>

</template>

<script>
  // import paral from './components/paral'
  import Hello from './components/Hello'
  import Gallery from './components/Gallery'
  import Bmxtrain from './components/Bmxtrain'
  import formulaire from './components/formulaire'
  import GoogleMap from './components/Googlemap'
  import Grid from './components/Grid'


  export default {
    name: 'app',
    components: {
      Hello,
      Gallery,
      Bmxtrain,
      formulaire,
      GoogleMap,
      Grid,


    },
    data: () => ({
      drawer: true,

    })
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
