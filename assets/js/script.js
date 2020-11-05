/* Active buttons */
const navigationButtons = document.querySelectorAll('.button-navigation');

for (let index = 0; index < navigationButtons.length; index++) {
  navigationButtons[index].addEventListener('click', (event) => {
    navigationButtons.forEach((element) =>
      element.classList.remove('active-button')
    );
    event.currentTarget.classList.add('active-button');
  });
}

/* Scroll section */
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  document.querySelectorAll('.section').forEach((element, index) => {
    if (
      element.offsetTop -
        document.querySelector('.header-container').clientHeight <=
      scrollDistance
    ) {
      document.querySelectorAll('nav a').forEach((element) => {
        if (element.classList.contains('active-button'))
          element.classList.remove('active-button');
      });
      document
        .querySelectorAll('nav li')
        [index].querySelector('a')
        .classList.add('active-button');
    }
  });
});

/* Scroll animation */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

/* Active tags portfolio */
const tagPortfolio = document.querySelectorAll('.filter-link');

for (let index = 0; index < tagPortfolio.length; index++) {
  tagPortfolio[index].addEventListener('click', (event) => {
    tagPortfolio.forEach((element) => element.classList.remove('border-link'));
    event.currentTarget.classList.add('border-link');
  });
}

/* Border portfolio image */
const imagesPortfolio = document.getElementById('img_portfolio');

imagesPortfolio.querySelectorAll('img').forEach((el) => {
  el.addEventListener('click', (event) => {
    imagesPortfolio
      .querySelectorAll('img')
      .forEach((el) => el.classList.remove('border-img'));
    event.target.classList.add('border-img');
  });
});

/* Mixed portfolio images */
const filterList = document.getElementById('filter');
let arr1 = imagesPortfolio.querySelectorAll('img');
let a = 0;
let arr2 = [];
for (var i = arr1.length - 1; i >= 0; i--) {
  arr2[i] = a;
}
filterList.querySelectorAll('li').forEach((el) => {
  el.addEventListener('click', (event) => {
    filterList
      .querySelectorAll('li')
      .forEach((el) => el.classList.remove('active'));
    event.target.classList.add('active');
    imagesPortfolio.querySelectorAll('img').forEach((el) => el.remove());
    for (var i = arr1.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = temp;
    }
    while (i < arr1.length) {
      var j = Math.floor(Math.random() * arr1.length);
      if (arr2[j] == a) {
        arr2[j] = a + 1;
        imagesPortfolio.prepend(arr1[j]);
        ++i;
      }
    }
    ++a;
  });
});
