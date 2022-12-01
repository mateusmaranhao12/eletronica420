<template>
    <div class="col-md-3 mb-5">
        <h4><i class="fa-sharp fa-solid fa-cart-shopping"></i> Ofertas anunciadas</h4>
    </div>
    <div class="col-md-3 mb-5">
        <select class="form-select" v-model="ordenacao">
            <option value="" disabled>Filtrar ofertas</option>
            <option value="1">A - Z</option>
            <option value="2">Z - A</option>
            <option value="3">Mais recentes</option>
            <option value="4">Mais antigos</option>
            <option value="5">Mais baratos</option>
            <option value="6">Mais caros</option>
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

        data: () => ({
            ordenacao: '',
            ofertas: []
        }),

        mounted() {

            this.ofertas = JSON.parse(localStorage.getItem('ofertas'))

            this.emitter.on('filtrarOfertas', oferta => {
                const ofertas = JSON.parse(localStorage.getItem('ofertas'))
                this.ofertas = ofertas.filter(reg => reg.titulo.toLowerCase().includes(oferta.titulo.toLowerCase())) //true ou false: O método filter cria um novo array com todos os elementos que passaram no teste implementado na função
            })
        },

        watch: {
            ordenacao(valorNovo) {
                
                if(valorNovo == 1) { //ordenação A - Z
                    this.ofertas.sort((proximo, atual) => {
                        //1 caso a ordem esteja correta
                        if (atual.titulo < proximo.titulo) {
                            return 1
                        }
                        //-1 caso a ordem esteja incorreta (precisa inverter as posições)
                        if (atual.titulo > proximo.titulo) {
                            return -1
                        }
                        //0 caso nenhuma acao seja necessaria
                        return 0
                    })
                }

                if(valorNovo == 2) { //ordenação Z - A
                    this.ofertas.sort((proximo, atual) => {
                        //ordenação decrescente
                        return atual.titulo.localeCompare(proximo.titulo)
                    })
                }

                if(valorNovo == 3) { //mais recentes primeiro
                    this.ofertas.sort((proximo, atual) => {

                        if(atual.publicacao > proximo.publicacao) {
                            return 1
                        } else if (atual.publicacao < proximo.publicacao) {
                            return -1
                        }

                        return 0

                    })
                }

                if(valorNovo == 4) { //mais antigos primeiro
                    this.ofertas.sort((proximo, atual) => {

                        if(atual.publicacao < proximo.publicacao) {
                            return 1
                        } else if (atual.publicacao > proximo.publicacao) {
                            return -1
                        }

                        return 0

                    })
                }

                if(valorNovo == 5) { //mais baratos primeiro
                    this.ofertas.sort((proximo, atual) => {

                        if(atual.preco < proximo.preco) {
                            return 1
                        } else if (atual.preco > proximo.preco) {
                            return -1
                        }

                        return 0

                    })
                }

                if(valorNovo == 6) { //mais caros primeiro
                    this.ofertas.sort((proximo, atual) => {

                        if(atual.preco > proximo.preco) {
                            return 1
                        } else if (atual.preco < proximo.preco) {
                            return -1
                        }

                        return 0

                    })
                }

            }
        }
    }
</script>