<template>
    <div :class="estiloAlerta" role="alert">
        <slot name="titulo">

        </slot>
        <hr>
        <slot>

        </slot>
    </div>
</template>

<script>

export default {
    name: 'Alerta',
    props: { tipo: String },

    computed: {
        estiloAlerta() { //estilo visual do alerta, feed de erro ou de sucesso
            switch(this.tipo) {
                case 'erro': return 'alert alert-danger'
                case 'sucesso': return 'alert alert-success'
                default: return ''
            }
        }
    }
}
</script>
