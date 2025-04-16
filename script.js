// Dark/Light mode qo'shish funksiyasi (Optional)
let modeButton = document.createElement('button');
modeButton.textContent = "Dark Mode";
document.body.appendChild(modeButton);

modeButton.addEventListener("click", function() {
    document.body.classList.toggle('dark-mode');
    modeButton.textContent = document.body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
});

// Dark mode uchun CSS qo‘shish
let style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: white;
    }
    .dark-mode header {
        background-color: #222;
    }
    .dark-mode footer {
        background-color: #222;
    }
    .dark-mode .gallery img {
        border-radius: 15px;
        filter: brightness(0.7);
    }
`;
document.head.appendChild(style);
