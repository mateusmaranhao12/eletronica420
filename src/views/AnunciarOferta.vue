<template>
    <transition 
      appear
      enter-active-class="animate__animated animate__flipInX"
      leave-active-class="animate__animated animate__flipOutX"
    >
      <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
        <template v-slot:titulo>
            <h5><i :class="iconeAlerta"></i> {{alerta.titulo}}</h5>
        </template>
          <p>{{alerta.descricao}}</p>
      </alerta>
    </transition>
    

    <div class="container py-4">
      <div class="row">
        <div class="col">
          <h4>Anuncie sua oferta para milhares de pessoas e de graça</h4>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <label class="form-label">
            Título do item <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" v-model="titulo">
          <div class="form-text">
            Exemplo: Xiaomi Mi 11 Lite, IPhone 13)
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <label class="form-label">
            Descrição <span class="text-danger">*</span>
          </label>
          <textarea type="text" class="form-control" v-model="descricao"></textarea>
          <div class="form-text">
            Informe os detalhes da sua oferta
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <label class="form-label">
            Preço <span class="text-danger">*</span>
          </label>
          <input type="number" class="form-control" v-model="preco">
          <div class="form-text">
            Informe o preço
          </div>
        </div>

        <div class="col">
          <label class="form-label">
            Tipo <span class="text-danger">*</span>
          </label>
          <select class="form-select" v-model="tipo">
            <option value="">--Selecione--</option>
            <option value="1">Computador</option>
            <option value="2">Celular</option>
          </select>
          <div class="form-text">
            Informe o tipo de produto que você deseja anunciar
          </div>
        </div>

      </div>

      <div class="row mt-3">
        <div class="col">
          <button type="submit" class="btn btn-dark" @click="anunciarOferta()">Anunciar</button>
        </div>
      </div>

    </div>

</template>

<script>

  import Alerta from '@/components/Alerta.vue'
  export default {
    name: 'AnunciarOferta',

    components: {
      Alerta
    },

    data: () => ({

      titulo: '',
      descricao: '',
      preco: '',
      tipo: '',

      exibirAlerta: false,
      alerta: { titulo: '', descricao: '', tipo: '', icone: '' }

    }),

    mounted() { //exibir alerta
      this.emitter.on('alerta', (a) => {

        this.alerta = a
        this.exibirAlerta = true
        setTimeout(() => this.exibirAlerta = false, 4000)
      })
    },

    computed: {
      iconeAlerta() { //icone do alerta de feed de sucesso e de erro
        switch(this.alerta.tipo) {
            case 'erro': return 'fa-solid fa-triangle-exclamation'
            case 'sucesso': return 'fa-solid fa-square-check'
            default: return 'fa-solid fa-square-check'
        }
      }
    },

    methods: {

      anunciarOferta() {

        let tempoDecorrido = Date.now()
        let dataAtual = new Date(tempoDecorrido)

        let ofertas = JSON.parse(localStorage.getItem('ofertas'))

        if(!ofertas) ofertas = []
        
        ofertas.push({
          titulo: this.titulo,
          descricao: this.descricao,
          preco: this.preco,
          tipo: this.tipo,
          publicacao: dataAtual.toISOString()
        })
        
        if(this.validarFormulario()) { //feed de sucesso

          localStorage.setItem('ofertas', JSON.stringify(ofertas))

          this.emitter.emit('alerta', {
            tipo: 'sucesso',
            titulo: `A oferta ${this.titulo} foi anunciada com sucesso :)`,
            descricao: 'Agora sua oferta poderá ser comprada por milhares de pessoas, é isso aí!!!'
          })

          this.resetaFormulario()

        } else {

          this.emitter.emit('alerta', { //feed de erro
            tipo: 'erro',
            titulo: `Erro! Não foi possível realizar a oferta :(`,
            descricao: 'Verifique se você preencheu todos os campos!'
          })

        }
       
      },

      resetaFormulario() { //resetar formulário após envio
        this.titulo = '',
        this.descricao = '',
        this.preco = '',
        this.tipo = ''
      },

      validarFormulario() { //verificar se todos os campos foram preenchidos
        let valido = true

        if(this.titulo === '') valido = false
        if(this.descricao === '') valido = false
        if(this.preco === '') valido = false
        if(this.tipo === '') valido = false

        return valido
      }

    }
  }

</script>