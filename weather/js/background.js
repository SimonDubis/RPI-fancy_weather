const setBackButton = document.querySelector(".refresh-back");

async function setBackground() {
    const url = "https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=gXNjWMR-9RKHQXujy39K5ApV5XFK36Q0Cqg91p0PlgI";
    const res = await fetch(url);
    const data = await res.json();
  
    document.body.style.backgroundImage = "url('" + data.urls.regular + "')";
}

setBackButton.addEventListener("click", setBackground);
setBackground();