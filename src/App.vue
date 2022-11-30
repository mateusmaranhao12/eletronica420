<template>
  <Header></Header>
  <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
    <template v-slot:titulo>
        <h5><i :class="iconeAlerta"></i> {{alerta.titulo}}</h5>
    </template>
      <p>{{alerta.descricao}}</p>
  </alerta>
  <router-view/>
</template>

<script>

  import Alerta from './components/Alerta.vue';
  import Header from './components/Header.vue';
  
  export default {
    name: 'App',

    data: () => ({
      exibirAlerta: false,
      alerta: { titulo: '', descricao: '', tipo: '', icone: '' }
    }),

    components: {
      Alerta,
      Header
    },

    mounted() {
      this.emitter.on('alerta', (a) => {

        this.alerta = a
        this.exibirAlerta = true
        setTimeout(() => this.exibirAlerta = false, 4000)
      })
    },

    computed: {
      iconeAlerta() {
        switch(this.alerta.tipo) {
            case 'erro': return 'fa-solid fa-triangle-exclamation'
            case 'sucesso': return 'fa-solid fa-square-check'
            default: return 'fa-solid fa-square-check'
        }
      }
    }
  }

</script>

<style lang="scss">
  @import '@/scss/index.scss';
</style>