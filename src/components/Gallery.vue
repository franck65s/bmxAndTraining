<template>
  <div id="container">
    <div class="gallery">
      <h1>Videos BMX race</h1>
        <ul>
        <li v-for="video in videos">
          <p> <a :href="'https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId">{{ video.snippet.title }} </a></p>
          <a :href="'https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId"><img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title" :title="video.snippet.title" class="thumbnail"
            /></a>
        </li>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'gallery',

    data() {
      return {
        videos: []
      };
    },
    created: function () {
      this.fetchVideoList();
    },
    methods: {
      fetchVideoList: function () {
        // GET /someUrl
        this.$http.get(
          'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLbArQr9lNfmLw0k0stXeprErTJxsVUucL&key=AIzaSyAJv4n6Z0QSMqtxGwusnuy5Rn-m5vFP9zM&fields=items&part=snippet&maxResults=15'
        ).then(response => {
          this.videos = response.data.items;
          // get body data
          // this.videos = videosList.items;
          console.log(this.videos);

        }, response => {
          console.log(error.statusText);
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    box-sizing: border-box;
  }

  body {
    background: black;
  }

  #container {
    max-width: 960px;
    margin: 0 auto;
    font-family: arial;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    align-content: space-between;
  }

  li {
    width: 31%;
    margin-right: 2%;
    list-style: none;
    margin-bottom: 30px;
    background: black;
    border-radius: 3px;
    padding: 10px;
  }

  p {
    font-size: 15px;
    min-height: 40px;
  }

  a {
    color: #2793da;
    text-decoration: none;
  }

  a:hover {
    color: #333;
    text-decoration: underline;
  }

  .thumbnail {
    border: 1px solid #fcfcfc;
    padding: 2px;
    width: 100%;
    height: auto;
  }

</style>
