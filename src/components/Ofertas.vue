<template>
    <div class="col-md-3">
        <h4><i class="fa-sharp fa-solid fa-cart-shopping"></i> Ofertas anunciadas</h4>
    </div>
    <div class="col-md-3">
        <select class="form-select">
            <option value="">Filtrar ofertas</option>
            <option>A - Z</option>
            <option>Z - A</option>
        </select>
    </div>
    <div class="col-md-3">
        <select class="form-select">
            <option value="">Filtrar tipo</option>
            <option>Celular</option>
            <option>Computador</option>
        </select>
    </div>
    <div class="col-md-3">
        <minha-lista />
    </div>
    <div class="ofertas" v-for="(oferta, index) in ofertas" :key="index">
        <oferta
            v-bind="oferta"
        />
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

        mounted() { //
            this.ofertas = JSON.parse(localStorage.getItem('ofertas'))
        }

        
    }
</script>