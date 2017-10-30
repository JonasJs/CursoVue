<template>



<section class="container" id="home">
  <label for="">Digit sua Fruta</label>
  <input type="text" v-model="Adiconar.Frutas" v-on:keyup.enter="addFruta()">
  <ul>
    <li v-for="cesta in Cestas">
      {{ cesta.Frutas }}
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: 'home',
  props:['itens'],
  data () {
    return {
      Adiconar: [{
        Frutas: ''
      }],
      Cestas: [
      //Para Usuarios
        { Frutas: 'Maça' },
        { Frutas: 'Pera' },
        { Frutas: 'Pera' },
        { Frutas: 'Açaí' },
        { Frutas: 'Acerola' },
        { Frutas: 'Abacate' },
        { Frutas: 'Abacaxi'}
      ]
    }
  },
  methods:{
    addFruta(){
      return this.Cestas.push({
        Frutas: this.Adiconar.Frutas
      }), this.Adiconar.Frutas = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  color: rgba(0,0,0,0.54) !important;
  margin-top: 40px;
  
}

</style>
