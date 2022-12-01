<template>
    <h1 class="display-4">Pesquisar ofertas</h1>
    <div class="col">
        <input v-model="titulo" type="text" class="form-control" placeholder="Pesquisar item (Ex: Redmi Note 10)" @keyup.enter="pesquisarOferta">
        <div class="mt-4">
            <button class="btn btn-dark" type="button" @click="pesquisarOferta()"><i class="fa-solid fa-magnifying-glass"></i> Pesquisar</button>
        </div>
    </div>
</template>

<script>

    export default {

        name: 'PesquisarOferta',
        data: () => ({
            titulo: ''
        }),
        methods: {
            pesquisarOferta() {
                this.emitter.emit('filtrarOfertas', {titulo: this.titulo})
            }
        }
    }

</script>