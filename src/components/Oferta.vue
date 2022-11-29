<template>
    <div class="card mt-5 mb-2">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                       {{titulo}}
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
            <small class="text-muted">Preço: R${{preco}}  | Tipo: {{tipo}} | Publicação: </small>
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
            //default: 'O remetente não adicinou uma descrição para essa oferta'
            default() {
                return '*'.repeat(20)
            }
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
    }
}
</script>