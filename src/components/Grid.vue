<template>
  <griddemo
    :colonnes="colonnes"
    :lignes="personnes">
  </griddemo>
 
</template>

<script>
  import griddemo from './Griddemo'



  export default {
    name: 'Grid',
    components: {
      griddemo,
   },
 data () {
   return{
    colonnes: ['Nom', 'Prénom'],
    personnes: [
      ["Durand", "Jacques"],
      ["Dupont", "Albert"],
      ["Martin", "Denis"],
    ]
}
}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
