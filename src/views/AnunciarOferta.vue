<template>

    <div class="container py-4">
      <div class="row">
        <div class="col">
          <h4>Anuncie sua oferta para milhares de pessoas e de graça</h4>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <label class="form-label">
            Título do item
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
            Descrição
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
            Preço
          </label>
          <input type="number" class="form-control" v-model="preco">
          <div class="form-text">
            Informe o preço
          </div>
        </div>

        <div class="col">
          <label class="form-label">
            Tipo
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

  export default {
    name: 'AnunciarOferta',

    data: () => ({

      titulo: '',
      descricao: '',
      preco: '',
      tipo: ''

    }),

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
        
        localStorage.setItem('ofertas', JSON.stringify(ofertas))
        
        this.resetaFormulario()
       
      },

      resetaFormulario() {
        this.titulo = '',
        this.descricao = '',
        this.preco = '',
        this.tipo = ''
      }

    }
  }

</script>