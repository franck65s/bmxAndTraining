<template>
  <div id="app">
 <v-app id="example-2" toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer" 
      :mini-variant.sync="mini" 
      light 
      overflow
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon dark @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="deep-orange" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
   

      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn flat><h5>Bmx videos</h5></v-btn>

        <v-btn flat><h5>Spec BMX train</h5></v-btn>

        <v-btn flat><h5>Géneralist train</h5></v-btn>

        <v-btn flat><h5>Shops</h5></v-btn>

        <v-btn flat><h5>Contact</h5></v-btn>
 
      </v-toolbar-items>
    </v-toolbar>
   
    <main>
      <v-container fluid>
        <div class="title">
          <p>Click on sidebar to re-open.</p>
        <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p>
          <p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p>v
          <p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p><p>Click on sidebar to re-open.</p>
        </div>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</div>
</template>


<script>
  // import paral from './components/paral'
  import Hello from './components/Hello'
  import Gallery from './components/Gallery'
  import Bmxtrain from './components/Bmxtrain'
  import paral from './components/paral'
  import Toolbar from './components/Toolbar'
  import testmenu from './components/testmenu'
  export default {
    name: 'app',
    components: {
      Hello,
      Gallery,
      Bmxtrain,
      paral,
      Toolbar,
    
    },
      data () {
        drawer: null;
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ];
        mini: false;
        right: null
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
    background-color: white;
  }

</style>
