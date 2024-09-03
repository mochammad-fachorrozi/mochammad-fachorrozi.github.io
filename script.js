// AOS
const galleryImage = document.querySelectorAll('.gallery-img');

    galleryImage.forEach((img, i) => {
        img.dataset.aos = 'fade-down';
        img.dataset.aosDelay = i * 100;
        img.dataset.aosDuration = 1000;
    })

AOS.init({
duration: 2000, 
once: true,
});


// gsap
gsap.registerPlugin(TextPlugin);
    gsap.to('.lead', { duration: 2, delay: 1.5, text: 'Web Developer '});
    gsap.from('.jumbotron img', {duration: 1, rotateY: 360, opacity: 0});
    gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce'});
    gsap.from('.display-4', { duration: 1.5, x: -50, opacity: 0,delay: 0.5, ease: 'back'});


// form kirim
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJH9vv9c2UL2bkkZgNrBsk83mm8wYysvNAYr6R2pFByMPlYF2JJ9js47JeiwEqWoSAjg/exec';

const form = document.forms['mf-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
      
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //   ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan myAlert
        myAlert.classList.toggle('d-none');
        // reset formnya
        form.reset();
        console.log('Success!', response);
        })
            .catch(error => console.error('Error!', error.message))
})