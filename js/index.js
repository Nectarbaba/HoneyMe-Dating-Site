function myFunction() {
    if (window.innerWidth < 768) {
        const navList = document.getElementById("nav-list");
        navList.style.transition = "0.5s";
        navList.style.width = "350px";
        navList.style.display = "block";
        navList.style.opacity = "1";
    }
}
function closeNav() {
    if (window.innerWidth < 768) {
        const navList = document.getElementById("nav-list");
        navList.style.transition = "0.5s";
        navList.style.opacity = "0";
        navList.style.overflow = "hidden";
        navList.style.width = "0px";
        navList.style.display = "none";
        navList.style.overflow = "hidden";
    }
}
function openProfile() {
    // Logic to open the profile
    alert('Profile opened');
}
function closeProfile() {
    // Logic to close the profile
    alert('Profile closed');
}

        function previewImage(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(){
                const preview = document.getElementById('profileImagePreview');
                preview.src = reader.result;
                preview.style.display = 'block';
            }
            if (file) {
                reader.readAsDataURL(file);
            }
        }
