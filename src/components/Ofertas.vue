<template>
    <div class="col-md-3">
        <h4><i class="fa-sharp fa-solid fa-cart-shopping"></i> Ofertas anunciadas</h4>
    </div>
    <div class="col-md-3">
        <select class="form-select">
            <option value="">Filtrar ofertas</option>
            <option>Id crescente</option>
            <option>Id decrescente</option>
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
    <div class="ofertas">
        <oferta />
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
        }
    }
</script>