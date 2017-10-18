<template>
  <v-app height="415px">
    <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer">
      <router-link to="/">Accueil</router-link>
      <router-link to="/a">train</router-link>
      <router-link :to="{path: '/', hash: 'foo'}">Foo</router-link>
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
      <!--<router-view></router-view>-->
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
     
      <Bmxtrain id="foo"></Bmxtrain>
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
  // import paral from './components/paral'
  import Hello from './components/Hello'
  import Gallery from './components/Gallery'
  import Bmxtrain from './components/Bmxtrain'
  import formulaire from './components/formulaire'


  export default {
    name: 'app',
    components: {
      Hello,
      Gallery,
      Bmxtrain,
      formulaire



    },
    data: () => ({
      drawer: true,
      items: [{
          icon: 'trending_up',
          text: 'BMX vidéos'
        },
        {
          icon: 'subscriptions',
          text: 'Specific training'
        },
        {
          icon: 'history',
          text: 'Shop'
        },
        {
          icon: 'history',
          text: 'Contact'
        },


      ],

    })
  }


  //   data: () => ({
  //     drawer: true,
  //     items: [{
  //         icon: 'trending_up',
  //         text: 'Most Popular'
  //       },
  //       {
  //         icon: 'subscriptions',
  //         text: 'Subscriptions'
  //       },
  //       {
  //         icon: 'history',
  //         text: 'History'
  //       },
  //       {
  //         icon: 'featured_play_list',
  //         text: 'Playlists'
  //       },
  //       {
  //         icon: 'watch_later',
  //         text: 'Watch Later'
  //       }
  //     ],
  //     items2: [{
  //         picture: 28,
  //         text: 'Joseph'
  //       },
  //       {
  //         picture: 38,
  //         text: 'Apple'
  //       },
  //       {
  //         picture: 48,
  //         text: 'Xbox Ahoy'
  //       },
  //       {
  //         picture: 58,
  //         text: 'Nokia'
  //       },
  //       {
  //         picture: 78,
  //         text: 'MKBHD'
  //       },
  //     ]
  //   })
  // }

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
