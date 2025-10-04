
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, index) => {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(20px)";

        setTimeout(() => {
            btn.style.transition = "all 0.6s ease";
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }, 300 * index);
    });
});

const modal = document.getElementById("livroModal");
const img = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");


img.onclick = () => modal.style.display = "flex";

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
}