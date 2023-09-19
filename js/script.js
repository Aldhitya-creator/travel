// Ambil elemen header
const header = document.querySelector('header');
const btnNavTog = document.querySelector('#toggler-icon')

// Fungsi untuk mengubah latar belakang navbar saat pengguna menggulir
function changeNavbarBackground() {
    if (window.scrollY > 10) { // Sesuaikan nilai 50 dengan jarak yang Anda inginkan
        header.style.backgroundColor = 'rgb(8, 10, 10)'; // Atur latar belakang navbar saat menggulir
        btnNavTog.style.color = '#fff'
    } else {
        header.style.backgroundColor = ''; // Atur latar belakang navbar saat di bagian atas
        btnNavTog.style.color = ''
    }
}

// Tambahkan event listener untuk memantau perubahan saat menggulir
window.addEventListener('scroll', changeNavbarBackground);

new TypeIt("#simpleUsage", {
    strings: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
             "Libero in omnis possimus id labore nesciunt provident",
             "laborum quidem quaerat harum."],
    speed: 50,
    loop: true,
    waitUntilVisible: true,
}).go();