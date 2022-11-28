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
          <input type="text" class="form-control">
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
          <textarea type="text" class="form-control"></textarea>
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
          <input type="number" class="form-control">
          <div class="form-text">
            Informe o preço
          </div>
        </div>

        <div class="col">
          <label class="form-label">
            Tipo
          </label>
          <select class="form-select">
            <option value="" disabled>--Selecione--</option>
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
          <button type="submit" class="btn btn-dark">Anunciar</button>
        </div>
      </div>

    </div>

</template>