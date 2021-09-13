fetch("./header.html")
    .then((response) => {
    return response.text();
    }
)
.then((data) => {
    document.querySelector("#header").innerHTML = data;
})

fetch("./footer.html")
    .then((response) => {
    return response.text();
    }
)
.then((data) => {
    document.querySelector("#footer").innerHTML = data;
})

fetch("./about-us.html")
    .then((response) => {
    return response.text();
    }
)
.then((data) => {
    document.querySelector(".about-us").innerHTML = data;
})
