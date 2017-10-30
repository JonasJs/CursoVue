<template>
  <section class="container" id="home">
    <div class="row">
      <div class="col col-md-4 itens">
        <h2>Quadribol</h2>
        <a href=""><img src="http://hdwallpaper20.com/wp-content/uploads/2016/07/harry-potter-wallpaper4-1024x576.jpg" alt="" class="img-fluid"></a>
        <p>Hogwarts é dividida em quatro Casas: Grifinória, Sonserina, Corvinal e Lufa-Lufa, veja defender sua casa nessa épica batalha de Quadribol </p>
        
        <router-link to="/Quadribol">
          <button type="button" class="btn btn-primary">Jogar</button>
        </router-link>
      </div>
    </div>
  
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.itens h2, p{
  text-align: left;
}
.itens img{
  margin:16px 0; 
}
button{
  width: 200px;
  margin:0 auto;
  cursor:pointer;
  text-align: center !important;
}
</style>
