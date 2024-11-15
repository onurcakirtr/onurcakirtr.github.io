/* Saat ekleme kısmı*/
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

/* iletişim formunun kontrol edildiği kısım */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun gönderilmesini engelle

    const fname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const errorMessage = document.getElementById('error-message');

    errorMessage.style.display = 'none';

    if (!fname || !email || !subject) {
        errorMessage.textContent = 'Lütfen tüm alanları doldurun.';
        errorMessage.style.display = 'block';
        return;
    }

    // E-posta formatı kontrolü
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Geçersiz e-posta adresi.';
        errorMessage.style.display = 'block';
        return;
    }

    alert('Form başarıyla gönderildi!');
    document.getElementById('contactForm').reset(); 
});

// proje kategori kontrol kısmı
function filterProjects(category) {
    const projects = document.querySelectorAll('.project.card');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'grid';
        } else {
            project.style.display = 'none';
        }
    });
}


//hakkkında kısmındaki daha çok yada az göster butonu
function toggleBiography() {
    const biography = document.getElementById('biography');
    const toggleBtn = document.getElementById('toggleBioBtn');
    
    if (biography.style.display === 'none' || biography.style.display === '') {
        biography.style.display = 'block';
        toggleBtn.textContent = 'Daha Az Gör';
    } else {
        biography.style.display = 'none';
        toggleBtn.textContent = 'Daha Fazla Gör';
    }
}

//Projeye tıklanınca daha detaylı gösterme kısmı
function openModal(imageSrc, description) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalDescription").innerText = description;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}