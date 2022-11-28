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
                    <li class="list-group-item bg-dark text-white" style="border-color: white;">
                        Redmi Note 11
                    </li>
                    <li class="list-group-item bg-dark text-white" style="border-color: white;">
                        Memória RAM 16GB
                    </li>
                    <li class="list-group-item bg-dark text-white" style="border-color: white;">
                        IPhone 12 Pro Max
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>