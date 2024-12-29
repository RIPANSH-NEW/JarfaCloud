// Pilih semua elemen dengan kelas 'fade-in'
const faders = document.querySelectorAll('.fade-in');

// Fungsi untuk mengecek elemen yang terlihat di viewport
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return; // Abaikan jika tidak terlihat
        entry.target.classList.add('show'); // Tambahkan kelas 'show' jika terlihat
        observer.unobserve(entry.target); // Hentikan pengamatan untuk elemen ini
    });
}, { threshold: 0.2 }); // Elemen terlihat jika 20% masuk ke viewport

// Terapkan observer ke semua elemen
faders.forEach(fader => appearOnScroll.observe(fader));