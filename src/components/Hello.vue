<template>
    <v-app height="415px">
    <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer">
      <router-link to="/">Accueil</router-link>
      <router-link to="/a">train</router-link>

      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">Help us to promote this Website</v-subheader>
        <v-list>
          <social-sharing url="http://localhost:8080/" inline-template>
            <div>
              <div>
                <network network="facebook">
                  <i class="fa fa-facebook"></i> Facebook
                </network>
              </div>
              <div>
                <network network="googleplus">
                  <i class="fa fa-google-plus"></i> Google +
                </network>
              </div>
              <div>
                <network network="linkedin">
                  <i class="fa fa-linkedin"></i> LinkedIn
                </network>
                <div>
                </div>
                <network network="pinterest">
                  <i class="fa fa-pinterest"></i> Pinterest
                </network>
                <div>
                </div>
                <network network="reddit">
                  <i class="fa fa-reddit"></i> Reddit
                </network>
              </div>
              <div>
                <network network="twitter">
                  <i class="fa fa-twitter"></i> Twitter
                </network>
              </div>

            </div>
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
      <gallery></gallery>
      <v-parallax id="paral" src="http://a.espncdn.com/photo/2013/0818/as_bmx_revolution7_2048.jpg" height="500">
      </v-parallax>
      <Bmxtrain></Bmxtrain>
      <v-parallax id="paral" src="http://sf.co.ua/14/05/wallpaper-1858701.jpg" height="900">
      </v-parallax>
      <formulaire></formulaire>I
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>© {{ new Date().getFullYear() }}</div>
      </v-footer>
      <!--<hello></hello>-->


    </main>
  </v-app>
</template>

<script>

  // import Gallery from './components/Gallery'
  // import Bmxtrain from './components/Bmxtrain'
  // import formulaire from './components/formulaire'

export default {
  name: 'hello',
  //  components: {
     
  //     Gallery,
  //     Bmxtrain,
  //     formulaire
  //   },
  data () {
    return {
      msg: 'test vue-router ffgg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
