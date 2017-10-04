<template>
	<section class="container quadribol">

		<!-- Painel do Jogo -->
		<transition name="painel-game" v-if="status == false">
			<div class="game" >
				<div class="content">
					<h1>Jogando</h1>
					<button type="button" class="btn btn-primary" v-on:click.prevent.stop="alert()" v-if="flagAlert == false">Selecionar novos times</button>
					<button type="button" class="btn btn-primary">Jogar Novamente</button>
				</div>
			</div>
		</transition>


		<!-- painel de seleção do time -->
		<transition name="painel-select">
			<div class="select" v-if="status">
				<!-- Alerta para quando os jogares escolherem os mesmos times -->
				<div class="alert alert-danger" role="alert" id="flagAlert" v-if="flagAlert">
				Infelizmente <strong>dois times iguais não podem se enfrenta</strong>, por favor escolha outro time.
				</div>
				<h1>Escolhe Os Time </h1>
				<div class="row justify-content-md-center">
				<!-- Time 1 -->
					<div class="col col-md-4 itens">
						<img v-bind:src="imageTeamOne" alt="">
						<h5>Time 1: <span>{{ teamOne }}</span></h5>
						<select class="form-control" v-model="teamOne">
							<option value="Lufa-Lufa" >Lufa-Lufa</option>	
							<option value="Corvinal" >Corvinal</option>
							<option value="Grifinória" >Grifinória</option>
							<option value="Sonserina" >Sonserina</option>
						</select>
					</div>
					<!-- Time 2 -->
					<div class="col col-md-4 itens">
						<img v-bind:src="imageTeamTwo" alt="">
						<h5>Time 2: <span>{{ teamTwo }}</span></h5>

						<select class="form-control" v-model="teamTwo">
							<option value="Lufa-Lufa" >Lufa-Lufa</option>	
							<option value="Corvinal" >Corvinal</option>
							<option value="Grifinória" >Grifinória</option>
							<option value="Sonserina" >Sonserina</option>
						</select>
						<img src="">
					</div>
				</div>
				
				<button type="button" class="btn btn-danger" disabled v-if="flagAlert == true">Jogar</button>
				<button type="button" class="btn btn-primary" v-on:click.prevent.stop="alert()" v-if="flagAlert == false">Jogar</button>
			</div>
		</transition>
		
		
		
	</section>
</template>
<script>
	//Images dos Times
	import LufaLufa from '../assets/quadribol/lufa-lufa.jpg';
	import Corvinal from '../assets/quadribol/corvinal.png';
	import Grifinoria from '../assets/quadribol/grifinoria.jpg';
	import Sonserina from '../assets/quadribol/sonserina.jpg';

	export default{
		name: 'Quadribol',
		data(){
			return{
				/*status: Verifica quem que tela o Jogador esta.
					status: true = Tema de Seleção do time
					status: false = Tema de Jogando	
				*/
				status: true,

				//Time 1
				imageTeamOne: Grifinoria,
				teamOne: 'Grifinória',
				//Time 2
				imageTeamTwo: LufaLufa,
				teamTwo: 'Lufa-Lufa',

				/*	flagAlert: Verifica se dois time selecionados são iguais
						flagAlert: false = Não mostra o alerta
						flagAlert: true = mostra o alerta 
				*/
				flagAlert: false
			}
		},
		watch: {

			//Time 1
			teamOne: function(){
				// Verificar se os Times escollhidos são iguais
				if(this.teamOne == this.teamTwo){
					this.flagAlert = true
				}else{
					this.flagAlert = false
				}
				// Verifica qual o Time escolhido e de acoro com ele, muda a Imagem
				if(this.teamOne == 'Lufa-Lufa'){
					this.imageTeamOne = LufaLufa
				}
				else if (this.teamOne == 'Corvinal') {
					this.imageTeamOne = Corvinal
				}
				else if(this.teamOne  == 'Grifinória'){
					this.imageTeamOne = Grifinoria
				}
				else if(this.teamOne  == 'Sonserina'){
					this.imageTeamOne = Sonserina
				}
			},

			//Time 2
			teamTwo: function(){
				// Verificar se os Times escollhidos são iguais
				if(this.teamOne == this.teamTwo){
					this.flagAlert = true
				}else{
					this.flagAlert = false
				}

				// Verifica qual o Time escolhido e de acoro com ele, muda a Imagem
				if(this.teamTwo == 'Lufa-Lufa'){
					this.imageTeamTwo = LufaLufa
				}
				else if (this.teamTwo == 'Corvinal') {
					this.imageTeamTwo = Corvinal
				}
				else if(this.teamTwo  == 'Grifinória'){
					this.imageTeamTwo = Grifinoria
				}
				else if(this.teamTwo  == 'Sonserina'){
					this.imageTeamTwo = Sonserina
				}
			}
		},
		methods:{
			alert(){
				if(this.status == true){
					this.status = false
				}else{
					this.status = true
				}
			}
		}
	}

</script>
<style scoped>

.quadribol{
	color: rgba(0,0,0,0.54) !important;
	height: 100%;
	margin-bottom: 40px;
	
}
.game{
	margin-top: 100px;
}
.select h1, .alert-danger{
	margin-top: 40px;
}
.itens{
	text-align: center;
	margin-top: 32px;
}
.itens span{
	text-transform: uppercase;
}
.itens h5{
	text-align: left;
}
.itens img{
	margin: 0 auto;
	margin-bottom:32px;
	height: 250px;
}

/*	painel-fade-enter  =  antes do elemento ser incluído ou removido, o estado atual
	painel-fade-enter-active == quando o elemento esta sendo incluído
	painel-fade-leave-active == quando o elemento esta sendo removido
*/
.painel-select-enter, .painel-select-leave-active {
  opacity: 0;
}

.painel-select-enter-active, .painel-select-leave-active {
  transition: opacity .8s;
}
.painel-game-enter, .painel-game-leave-active {
  opacity: 0;
}

.painel-game-enter-active, .painel-game-leave-active {
  transition: opacity .4s
}
</style>