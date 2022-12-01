<template>
  <div class="jumbotron jumbotron-fluid mt-5">
    <div class="container">
      <pesquisar-oferta />
    </div>
  </div>

  <div class="container">
    <div class="row" >
        <ofertas /> 
      </div>
  </div>

</template>

<script>

  import PesquisarOferta from '@/components/PesquisarOferta.vue'
  import Ofertas from '@/components/Ofertas.vue'
  export default {

    name: 'Home',

    components: {
      PesquisarOferta,
      Ofertas
    }

  }

</script>
