const closeBtn = document.querySelector('.create-x');
const hamburgerIcon = document.querySelector('.hamb-icon');
const mobileMenuPage = document.getElementById('mobile_menu_page');
const aboutLink = document.getElementById('about');
const programLink = document.getElementById('program');
const joinLink = document.getElementById('join');
const speakersSection = document.getElementById('speakers');

function appear() {
  mobileMenuPage.style.display = 'block';
  document.body.style.overflow = 'auto';
}
function disappear() {
  mobileMenuPage.style.display = 'none';
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', disappear);
hamburgerIcon.addEventListener('click', appear);
aboutLink.addEventListener('click', disappear);
programLink.addEventListener('click', disappear);
joinLink.addEventListener('click', disappear);
speakersSection.addEventListener('click', disappear);

// creating the featured Speakers part

const speakerSection = document.querySelector('.speaker-card');

const speakersData = [
  {
    id: 0,
    imageLink: './img/speakers/speaker1.png',
    name: 'Yochai Benkler',
    role: 'Instructor in soft kills to raise succesful persons',
    line: './img/title-gray.svg',
    desc: 'Benkler published several works about emotional skills and how to raise kids with a high level of emotional intelligence.',
  },
  {
    id: 1,
    imageLink: './img/speakers/speaker2.png',
    name: 'SohYeong Noh',
    role: 'Director of Newborns institute of CapeTown',
    line: './img/title-gray.svg',
    desc: 'As the main venue for new techniques to face the first 1 year of newborns and high approach to guide all mothers in their road to pregnancy.',
  },
  {
    id: 2,
    imageLink: './img/speakers/speaker3.png',
    name: 'Magdalena Taylor',
    role: 'Children Educator for Science in University of Tel Aviv',
    line: './img/title-gray.svg',
    desc: 'Magdalena is expert of education in STEM for Kids, her experience and knowledge will help you to guide your kid in STEM area.',
  },
  {
    id: 3,
    imageLink: './img/speakers/speaker4.png',
    name: 'Pedro Herrera',
    role: 'Scientist in Neuro-learning for kids',
    line: './img/title-gray.svg',
    desc: 'Pedro worked a lot with neuro-learning with kids of several ages, he discovered several new techniques to prepare kids for STEM.',
  },
  {
    id: 4,
    imageLink: './img/speakers/speaker5.png',
    name: 'Laura Smith',
    role: 'Best emotional intelligence instructor for mothers and fathers',
    line: './img/title-gray.svg',
    desc: 'Laura is coach for sports team with more of 35 years of experience. Laura has worked as coach of American Football League. ',
  },
  {
    id: 5,
    imageLink: './img/speakers/speaker6.png',
    name: 'Ryan Payne',
    role: 'Programming Instructor and Physic Scientist',
    line: './img/title-gray.svg',
    desc: 'Ryan has the expertise and knowledge to guide mothers and fathers to orientate and create the coding spirit to children, Ryan has worked in several schools and universities specially in science. ',
  },
];

speakersData.forEach((postData) => {
  const cardWork = document.createElement('article');
  if (postData.id > 1) {
    cardWork.classList = 'cardWork cardWork-hidden';
  } else {
    cardWork.classList = 'cardWork';
  }

  cardWork.innerHTML = `
  
        <div class='img-speaker'>
            <img src='${postData.imageLink}' alt='speaker1'>
        </div>
        <div class='information-speaker'>    
            <h3 class='name-speaker'>${postData.name}</h3>
            <h4 class='role-speaker'>${postData.role}</h4>
            <img src='${postData.line}' class="gray-line" alt='line image'>
            <p class='desc-speaker'>${postData.desc}</p>
        </div> 
        
    `;
  speakerSection.appendChild(cardWork);
});

const speakersButton = document.getElementById('moreButton');
speakersButton.addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.cardWork-hidden');
  hiddenCards.forEach((cardWork) => {
    cardWork.classList.toggle('show');
    cardWork.classList.toggle('cardWork-hidden');
  });
  if (speakersButton.innerText === 'MORE') {
    speakersButton.innerText = 'LESS';
  } else {
    speakersButton.innerText = 'MORE';
    const showCards = document.querySelectorAll('.show');
    showCards.forEach((cardWork) => {
      cardWork.classList.remove('show');
      cardWork.classList.toggle('cardWork-hidden');
    });
  }
});