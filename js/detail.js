const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const resep = resepData.find(item => item.id === id);
const detail = document.getElementById("detail-resep");

detail.innerHTML = `

<div class="card border-0 shadow-lg p-4">

    <div class="row g-4">

        <div class="col-md-6">
            <img
                src="${resep.gambar}"
                alt="${resep.nama}"
                class="img-fluid rounded shadow">
        </div>

        <div class="col-md-6">
            <span class="badge bg-primary mb-3">
                <i class="bi bi-tag-fill me-1"></i>
                ${resep.kategori}
            </span>

            <h2 class="fw-bold mb-4">
                ${resep.nama}
            </h2>

            <h4 class="mb-3">
                <i class="bi bi-basket2-fill text-primary me-2"></i>
                Bahan
            </h4>

            <ul class="list-group mb-4">
                ${resep.bahan
                    .map(item => `
                        <li class="list-group-item">
                            <i class="bi bi-check-circle-fill text-success me-2"></i>
                            ${item}
                        </li>
                    `)
                    .join("")}
            </ul>
            <h4 class="mb-3">
                <i class="bi bi-list-check text-success me-2"></i>
                Langkah Pembuatan
            </h4>

            <ol class="list-group list-group-numbered">
                ${resep.langkah
                    .map(item => `
                        <li class="list-group-item">
                            ${item}
                        </li>
                    `)
                    .join("")}
            </ol>
            <div class="mt-4">
                <a href="index.html" class="btn btn-primary">
                    <i class="bi bi-arrow-left-circle me-2"></i>
                    Kembali ke Beranda
                </a>
            </div>

        </div>

    </div>

</div>

`;