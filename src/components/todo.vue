<template>
  <section class="container" id="todo">
    <div class="row">
      <div class="col-md-6 col-6">
        <h1>Todo</h1>
        <!--  input conta -->
        <input type="text" v-model="inputTodo" v-on:keyup.enter="addTodo()">
        <!--  Lista  -->
        <ul>
          <li v-for="tarefa in tarefas">
            {{ tarefa.tarefa }}
            <input type="button" value="Finalizar" v-on:click="removeTodo()">
          </li>
        </ul>
      </div>

      <div class="col-md-6 col-6">
        <h1>Done</h1>
        <ul>
          <li v-for="tarefa in tarefas">
            {{ tarefa.tarefa}}
            {{ tarefa.done }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      inputTodo: '',
      tarefas:[
        {
          tarefa: 'Curso',
          done: true
        }
      ],
      // dones:[
      //   {
      //     done: ''
      //   }
      // ]
    }
  },
  methods:{
    addTodo(){

      return this.tarefas.push({
                tarefa: this.inputTodo,
                done : true
              }),
              this.inputTodo = '',
              this.tarefas.reverse()
    },
    removeTodo(){
      //console.log(this.tarefas.tarefa)
      return this.tarefas.done = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#todo{
  color: rgba(0,0,0,0.54) !important;
  margin-top: 40px;
}
ul, li{
  list-style: none;
  margin: 0;
  padding: 0;
}
li{
  display: flex;
  align-items: center;
}

</style>
