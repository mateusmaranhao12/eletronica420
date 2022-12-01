<template>
    <div class="col-md-3 mb-5">
        <h4><i class="fa-sharp fa-solid fa-cart-shopping"></i> Ofertas anunciadas</h4>
    </div>
    <div class="col-md-3 mb-5">
        <select class="form-select">
            <option value="">Filtrar ofertas</option>
            <option>A - Z</option>
            <option>Z - A</option>
        </select>
    </div>
    <div class="col-md-3 mb-5">
        <select class="form-select">
            <option value="">Filtrar tipo</option>
            <option>Celular</option>
            <option>Computador</option>
        </select>
    </div>
    <div class="col-md-3 mb-5">
        <minha-lista />
    </div>
    <div class="ofertas" v-for="(oferta, index) in ofertas" :key="index">
        <oferta v-bind="oferta" />
    </div>
</template>

<script>

    import MinhaLista from '@/components/MinhaLista.vue'
    import Oferta from '@/components/Oferta.vue'

    export default {
        name: 'Ofertas',
        
        components: {
            MinhaLista,
            Oferta
        },

        data () {
        return {
            ofertas: []
        }
        },

        mounted() {

            this.ofertas = JSON.parse(localStorage.getItem('ofertas'))

            this.emitter.on('filtrarOfertas', oferta => {
                const ofertas = JSON.parse(localStorage.getItem('ofertas'))
                this.ofertas = ofertas.filter(reg => reg.titulo.toLowerCase().includes(oferta.titulo.toLowerCase())) //true ou false: O método filter cria um novo array com todos os elementos que passaram no teste implementado na função
            })
        }

        
    }
</script>