<template>
    <div class="card mb-5">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        <i :class="iconeOferta"></i> {{titulo}}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox">
                            <label class="form-check-label">Adicionar a minha lista</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>{{descricao}}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Preço: R${{preco}}  | Tipo: {{getTipo}} | Publicação: {{getPublicacao}} </small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Oferta',
    props: {
        titulo: {
            type: String,
            required: true,
            validator(p) {
                //console.log('Prop: ', p, )
                if(p.length < 6) return false //se estiver inválido
                return true //se estiver válido
            }
        },
        descricao: {
            type: String,
            required: true
        },
        preco: {
            type: [ Number, String ],
            required: true
        } ,
        tipo: {
            type: String,
            required: true
        },

        publicacao: {
            type: String,
            required: true
        }
    },

    computed: {
        getTipo() {
            switch(this.tipo) {
                case '1': return 'Computador'
                case '2': return 'Celular'
            }
            return ''
        },

        getPublicacao() {
            let dataPublicacao = new Date(this.publicacao)
            //return dataPublicacao.toLocaleString('pt-BR')
            return dataPublicacao.toLocaleDateString('pt-BR')
        },

        iconeOferta() {
            switch(this.tipo) {
                case '1': return 'fa-solid fa-computer'
                case '2': return 'fa-solid fa-mobile-screen-button'
            }
            return ''
        }
    }
    
}
</script>