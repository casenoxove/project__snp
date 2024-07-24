const visual_s = new Swiper('#visual_slide',{
    autoplay: {delay:4000},
    loop: true,
})
const visual_best = new Swiper('#real_slide',{
    slidesPerView: 'auto',
    loop: true,
})
const visual_insta = new Swiper('#insta_slide',{
    autoplay: {delay:4000},
    slidesPerView: 6,
    loop: true,
})
// --------------------------------------------------
// --------------------------------------------------
// -------------------------------------------------- 베스트 상품 타이틀
document.addEventListener("DOMContentLoaded", function() {
    const realTimeBest = document.getElementById("realTimeBest");
    const weeklyBest = document.getElementById("weeklyBest");
    const realTimeContent = document.getElementById("realTimeContent");
    const weeklyContent = document.getElementById("weeklyContent");

    realTimeBest.addEventListener("click", function(event) {
        event.preventDefault();
        realTimeBest.classList.remove("inactive");
        weeklyBest.classList.add("inactive");
        realTimeContent.style.display = "block";
        weeklyContent.style.display = "none";
    });

    weeklyBest.addEventListener("click", function(event) {
        event.preventDefault();
        weeklyBest.classList.remove("inactive");
        realTimeBest.classList.add("inactive");
        weeklyContent.style.display = "block";
        realTimeContent.style.display = "none";
    });
// --------------------------------------------------
// --------------------------------------------------
// -------------------------------------------------- 브랜드
    
});
document.addEventListener("DOMContentLoaded", function() {
    const magazine = document.querySelector('.magazine');
    const story = document.querySelector('.story');
    const community = document.querySelector('.community');

    const brandMagazine = document.querySelector('.brand_magazine');
    const brandStory = document.querySelector('.brand_story');
    const brandCommunity = document.querySelector('.brand_community');

    magazine.addEventListener('mouseover', function() {
        brandMagazine.style.display = 'block';
    });
    magazine.addEventListener('mouseout', function() {
        brandMagazine.style.display = 'none';
    });

    story.addEventListener('mouseover', function() {
        brandStory.style.display = 'block';
    });
    story.addEventListener('mouseout', function() {
        brandStory.style.display = 'none';
    });

    community.addEventListener('mouseover', function() {
        brandCommunity.style.display = 'block';
    });
    community.addEventListener('mouseout', function() {
        brandCommunity.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const bestItems = document.querySelectorAll('.best_one, .best_two, .best_three, .best_four, .best_five');

    bestItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            bestItems.forEach(el => {
                el.querySelector('h3').classList.remove('activate');
                el.querySelector('h3').classList.add('inactive');
            });
            this.querySelector('h3').classList.remove('inactive');
            this.querySelector('h3').classList.add('activate');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.category');
    const productLists = document.querySelectorAll('.product');

    categories.forEach(category => {
        category.addEventListener('click', function(e) {
            e.preventDefault();

            const categoryType = this.getAttribute('data-category');

            productLists.forEach(list => {
                if (list.classList.contains(categoryType)) {
                    list.classList.add('active');
                } else {
                    list.classList.remove('active');
                }
            });
        });
    });
});