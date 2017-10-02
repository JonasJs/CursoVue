<template>
	<section class="container quadribol">

		<div class="select">
			<h1>Escolhe Os Time </h1>
			<div class="row justify-content-md-center">
		
				<div class="col col-md-4 itens">
					<img v-bind:src="imageTeamOne" alt="">
					<h5>Time 1: <span>{{ teamOne }}</span></h5>
					<select class="form-control" v-model="teamOne">
					  <option value="Corvinal" >Corvinal</option>
					  <option value="Grifinória" >Grifinória</option>
					  <option value="Lufa-Lufa" >Lufa-Lufa</option>
					  <option value="Sonserina" >Sonserina</option>
					</select>
				</div>
				<div class="col col-md-4 itens">
					<img v-bind:src="imageTeamTwo" alt="">
					<h5>Time 1: <span>{{ teamTwo }}</span></h5>

					<select class="form-control" v-model="teamTwo">
					  <option value="Corvinal" >Corvinal</option>
					  <option value="Grifinória" >Grifinória</option>
					  <option value="Lufa-Lufa" >Lufa-Lufa</option>
					  <option value="Sonserina" >Sonserina</option>
					</select>
					<img src="">
				</div>
			</div>
		</div>
		<br><br><br><br><br><br><br><br><br><br>
	</section>
</template>
<script>
	//Images dos Times
	import LufaLufa from '././assets/quadribol/lufa-lufa.jpg';
	export default{
		name: 'Quadribol',
		data(){
			return{
				status: '',
				imageTeamOne: LufaLufa,

				imageTeamTwo: 'http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_cHQtYnIuaGFycnlwb3R0ZXIud2lraWEuY29t_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvaGFycnlwb3R0ZXIvaW1hZ2VzLzAvMDYvR19maW5hbF8lMjgxJTI5LmpwZy9yZXZpc2lvbi9sYXRlc3Q%2FY2I9MjAxMjExMTYwMTI3MzEmcGF0aC1wcmVmaXg9cHQtYnImaTEwYy5tYXJrLmltYWdlLnR5cGU%3D_$/$/$/$/$/$/$/$',

				teamOne: 'Lufa-Lufa',
				teamTwo: 'Grifinória',
				
			}
		},
		watch: {
			teamTwo: function(){
				//Time 1
				if(this.teamOne == 'Corvinal'){
					this.imageTeamOne = 'http://c-6rtwjumjzx7877x24anlsjyyjx2ebnpnfx2esthttpnjx2esjy.g00.wikia.com/g00/3_c-6uy-gw.mfwwdutyyjw.bnpnf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fanlsjyyj.bnpnf.sthttpnj.sjyx2fmfwwdutyyjwx2fnrfljx78x2f5x2f52x2fWfajshqfb_x2573Xx25H8x25FIrgtqt_Htwansfqx2574.uslx2fwjanx78ntsx2fqfyjx78yx3fhgx3d75625879779483x26ufym-uwjkncx3duy-gwx26n65h.rfwp.nrflj.yduj_$/$/$/$/$/$/$/$'
				}
				else if (this.teamOne == 'Grifinória') {
					this.imageTeamOne = 'http://tu9srvbirvvtmjikdmlnbmv0dguud2lraweubm9jb29rawuubmv0.g00.wikia.com/g00/2_cHQtYnIuaGFycnlwb3R0ZXIud2lraWEuY29t_/TU9SRVBIRVVTMjIkaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQvaGFycnlwb3R0ZXIvaW1hZ2VzLzAvMDYvR19maW5hbF8lMjgxJTI5LmpwZy9yZXZpc2lvbi9sYXRlc3Q%2FY2I9MjAxMjExMTYwMTI3MzEmcGF0aC1wcmVmaXg9cHQtYnImaTEwYy5tYXJrLmltYWdlLnR5cGU%3D_$/$/$/$/$/$/$/$'
				}
				else if(this.teamOne  == 'Lufa-Lufa'){
					this.imageTeamTwo = 'http://c-6rtwjumjzx7877x24anlsjyyjx2ebnpnfx2esthttpnjx2esjy.g00.wikia.com/g00/3_c-6uy-gw.mfwwdutyyjw.bnpnf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fanlsjyyj.bnpnf.sthttpnj.sjyx2fmfwwdutyyjwx2fnrfljx78x2f8x2f8kx2fM_knsfq.oulx2fwjanx78ntsx2fqfyjx78yx3fhgx3d75676656670693x26ufym-uwjkncx3duy-gwx26n65h.rfwp.nrflj.yduj_$/$/$/$/$/$/$/$'
				}
			}
		}
	}

</script>
<style scoped>

.quadribol{
	color: rgba(0,0,0,0.54) !important;
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
	
</style>