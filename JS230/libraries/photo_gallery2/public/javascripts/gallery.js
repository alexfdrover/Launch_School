document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.getElementById('slideshow');
  const slides = document.getElementById('slides');
  const comments = document.getElementById('comments');
  const form = document.querySelector('form');
  const photoInfo = document.querySelector('section > header');

  let photosTemplateId = document.getElementById('photos');
  let photoInformationTemplateId = document.getElementById('photo_information');
  let photoCommentsTemplateId = document.getElementById('photo_comments');
  let photoCommentTemplateId = document.getElementById('photo_comment');
  
  let photosTemplate = Handlebars.compile(photosTemplateId.innerHTML);
  let photoInformationTemplate = Handlebars.compile(photoInformationTemplateId.innerHTML);
  let photoCommentsTemplate = Handlebars.compile(photoCommentsTemplateId.innerHTML);
  let photoCommentTemplate = Handlebars.compile(photoCommentTemplateId.innerHTML);

  Handlebars.registerPartial('photo_comment', photoCommentTemplateId.innerHTML);
  
  let photos;
  let currentIndex = 0;

  fetch('/photos')
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      getCommentsFor(photos[0].id);
    });

  function getCommentsFor(idx) {
    let url = `/comments?photo_id=${idx}`;
    fetch(url).then(response => response.json())
              .then(json => {
                let comments = json;
                renderComments(comments);
              });
  }

  function renderPhotos() {
    slides.insertAdjacentHTML('beforeend', photosTemplate({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    let photo = photos.filter(item => {
      return item.id === idx;
    })[0];

    photoInfo.insertAdjacentHTML('beforeend', photoInformationTemplate(photo));
  }

  function renderComments(comments) {
    let ul = document.querySelector('#comments > ul');
    ul.insertAdjacentHTML('beforeend', photoCommentsTemplate({comments: comments}));
  }

  function decrementPhotoIdx() {
    if (currentIndex === 0) {
      currentIndex = photos.length - 1;
    } else {
      currentIndex -= 1;
    }
  }
  
  function incrementPhotoIdx() {
    if (currentIndex === photos.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
  }

  function clearDisplay() {
    photoInfo.innerHTML = '';
    let ul = document.querySelector('#comments > ul');
    ul.innerHTML = '';
  }

  document.querySelector('.prev').addEventListener('click', event => {
    decrementPhotoIdx();
    clearDisplay()
    renderPhotoInformation(photos[currentIndex].id);
    getCommentsFor(photos[currentIndex].id);
  });
  
  document.querySelector('.next').addEventListener('click', event => {
    incrementPhotoIdx();
    clearDisplay()
    renderPhotoInformation(photos[currentIndex].id);
    getCommentsFor(photos[currentIndex].id);
  });
});