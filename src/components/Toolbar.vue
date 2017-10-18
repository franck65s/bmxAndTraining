<template>
  <!--<v-app height="415px" dark id="e3" standalone>-->
    <!--<v-navigation-drawer class="pb-0" persistent absolute height="100%" clipped enable-resize-watcher v-model="drawer">
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
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar>
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3">
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>-->
    <!--<v-toolbar class="red">
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-icon class="ml-3">fa-youtube</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field label="Search..." single-line append-icon="search" dark hide-details></v-text-field>
    </v-toolbar>-->
    <main>
      <!--<v-container>
        <v-layout>
          <v-flex xs12>
            <v-card height="300px"></v-card>

          </v-flex>
        </v-layout>
      </v-container>-->
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



    </main>
  </v-app>
</template>

<script>

  export default {
    name: 'toolbar',

    data: () => ({
      drawer: true,
      items: [{
          icon: 'trending_up',
          text: 'Most Popular'
        },
        {
          icon: 'subscriptions',
          text: 'Subscriptions'
        },
        {
          icon: 'history',
          text: 'History'
        },
        {
          icon: 'featured_play_list',
          text: 'Playlists'
        },
        {
          icon: 'watch_later',
          text: 'Watch Later'
        }
      ],
      items2: [{
          picture: 28,
          text: 'Joseph'
        },
        {
          picture: 38,
          text: 'Apple'
        },
        {
          picture: 48,
          text: 'Xbox Ahoy'
        },
        {
          picture: 58,
          text: 'Nokia'
        },
        {
          picture: 78,
          text: 'MKBHD'
        },
      ]
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
