const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
        event.preventDefault();
    });
}

const magicGifs = ["./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"];
const colorPalette = ["#3d315b", "#444b6e", "#708b75", "#9ab87a", "#f8f991", "#795c5f", "#a69658", "#d9b26f", "#fadf7f", "#f2e29f"];

const images = document.getElementsByTagName("img");
const newGifs = [...images].map(img => img.src);
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        newGifs[i] = getRandom(magicGifs);
        images[i].src = newGifs[i];
    });
    images[i].addEventListener("mouseenter", function () {
        images[i].src = "./assets/abracadabra.gif";
    });
    images[i].addEventListener("mouseleave", function () {
        images[i].src = newGifs[i];
    });
}

const paragraphs = document.getElementsByTagName("p");
const colorBckParagraphs = [...paragraphs].map(paragraph => paragraph.style.backgroundColor);
const colorTextParagraphs = [...paragraphs].map(paragraph => paragraph.style.color);
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function () {
        colorBckParagraphs[i] = getRandom(colorPalette);
        paragraphs[i].style.backgroundColor = colorBckParagraphs[i];
        colorTextParagraphs[i] = getRandom(colorPalette);
        paragraphs[i].style.color = colorTextParagraphs[i];
    });
    paragraphs[i].addEventListener("mouseenter", function () {
        paragraphs[i].style.backgroundColor = getRandom(colorPalette);
        paragraphs[i].style.color = getRandom(colorPalette);
    });
    paragraphs[i].addEventListener("mouseleave", function () {
        paragraphs[i].style.backgroundColor = colorBckParagraphs[i];
        paragraphs[i].style.color = colorTextParagraphs[i];
    });
}

const sections = document.getElementsByTagName("section");
const colorBckSections = [...sections].map(singleSection => singleSection.style.backgroundColor);
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function () {
        colorBckSections[i] = getRandom(colorPalette);
        sections[i].style.backgroundColor = colorBckSections[i];
    });
    sections[i].addEventListener("mouseenter", function () {
        sections[i].style.backgroundColor = getRandom(colorPalette);
    });
    sections[i].addEventListener("mouseleave", function () {
        sections[i].style.backgroundColor = colorBckSections[i];
    });
}

const articles = document.getElementsByTagName("article");
const colorBckArticles = [...articles].map(singleArticle => singleArticle.style.backgroundColor);
for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", function () {
        colorBckArticles[i] = getRandom(colorPalette);
        articles[i].style.backgroundColor = colorBckArticles[i];
    });
    articles[i].addEventListener("mouseenter", function () {
        articles[i].style.backgroundColor = getRandom(colorPalette);
    });
    articles[i].addEventListener("mouseleave", function () {
        articles[i].style.backgroundColor = colorBckArticles[i];
    });
}

const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}