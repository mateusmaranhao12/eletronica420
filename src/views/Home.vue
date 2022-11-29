<template>
  <div class="jumbotron jumbotron-fluid mt-5">
    <div class="container">
      <h1 class="display-4">Pesquisar ofertas</h1>
      <div class="col">
        <input type="text" class="form-control" placeholder="Pesquisar item (Ex: Redmi Note 10)">
        <div class="mt-4">
          <button class="btn btn-dark"><i class="fa-solid fa-magnifying-glass"></i> Pesquisar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
        <ofertas />
      </div>
  </div>

</template>

<script>

  import Ofertas from '@/components/Ofertas.vue';
  export default {

    name: 'Home',

    components: {
      Ofertas
    },

    data: () => ({
      ofertas: []
    }),

    mounted() { //
      this.ofertas = JSON.parse(localStorage.getItem('ofertas'))
    }

  }

</script>
