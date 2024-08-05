const gallery = document.querySelector('.gallery');
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

gallery.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    modal.style.display = "block";
    modalImg.src = event.target.dataset.source;
    captionText.textContent = event.target.alt;
});

span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}