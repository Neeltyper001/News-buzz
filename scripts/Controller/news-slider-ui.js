const changeNews = (news) => {
    const slider = document.querySelector("#slider");
    const sliderText = document.querySelector("#slider-text");
    const sliderAnchor = document.querySelector("#slider-anchor");
    slider.attributes.style.value = `background-image: url(${news.prevImage})`;
    sliderText.textContent = news.title;
    sliderAnchor.href = news.newsUrl;
}