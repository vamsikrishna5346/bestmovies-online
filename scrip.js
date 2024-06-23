document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Here you would add the logic to search movies
    } else {
        alert('Please enter a search term.');
    }
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let posters = document.getElementsByClassName('poster');

    Array.from(posters).forEach(poster => {
        let title = poster.getElementsByClassName('movie-title')[0].textContent.toLowerCase();
        if (title.includes(filter)) {
            poster.style.display = "";
        } else {
            poster.style.display = "none";
        }
    });
});
