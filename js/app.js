const container = document.getElementById("resep-container");
const search = document.getElementById("search");

function tampilkanResep(data) {
    container.innerHTML = "";
    data.forEach(resep => {

        container.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-lg border-0">
                <img
                    src="${resep.gambar}"
                    alt="${resep.nama}"
                    class="card-img-top"
                    height="250">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">
                        <i class="bi bi-tag-fill me-1"></i>
                        ${resep.kategori}
                    </span>

                    <h5 class="fw-bold">
                        ${resep.nama}
                    </h5>
                </div>

                <div class="card-footer bg-white border-0">
                    <a
                        href="detail.html?id=${resep.id}"
                        class="btn btn-primary w-100">
                        <i class="bi bi-eye-fill me-1"></i>
                        Lihat Resep
                    </a>
                </div>
            </div>
        </div>
        `;
    });
}

// Tampilkan semua resep saat halaman dibuka
tampilkanResep(resepData);

// Fitur pencarian
search.addEventListener("keyup", () => {
    const keyword = search.value.toLowerCase();
    const hasil = resepData.filter(item =>
        item.nama.toLowerCase().includes(keyword)
    );
    tampilkanResep(hasil);
});

// Filter kategori
document.querySelectorAll(".menu-btn")
.forEach(btn => {
    btn.addEventListener("click", () => {
        const kategori = btn.dataset.kategori;
        if (kategori === "Semua") {
            tampilkanResep(resepData);
        } else {
            const hasil = resepData.filter(item =>
                item.kategori === kategori
            );
            tampilkanResep(hasil);
        }
    });
});