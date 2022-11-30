<template>
    <div>
        <div class="divMinhaLista">
            <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i class="fa-solid fa-list"></i> Minha lista
            </button>
        </div>

        <div class="offcanvas offcanvas-end bg-dark text-white" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel"><i class="fa-solid fa-list"></i> Minha lista</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li v-for="(oferta, index) in ofertas" :key="index" class="list-group-item bg-dark text-white" style="border-color: white;">
                        {{oferta}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'MinhaLista',

        data: () => ({
            ofertas: []
        }),

        mounted() {
            this.emitter.on('adicionarAMinhaLista', (titulo) => {
                this.ofertas.push(titulo)
            })
            this.emitter.on('removerDaMinhaLista', (titulo) => {
                let indiceArray = this.ofertas.indexOf(titulo)
                if(indiceArray !== -1) this.ofertas.splice(indiceArray, 1) //remover um elemento a partir de um indice do array
            })
        }
    }

</script>