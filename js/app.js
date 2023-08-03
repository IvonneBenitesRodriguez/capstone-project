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
    id: 'card1',
    imageLink: './img/speakers/speaker1.png',
    name: 'Yochai Benkler',
    role: 'Instructor in soft kills to raise succesful persons',
    line: './img/title-gray.svg',
    desc: 'Benkler published several works about emotional skills and how to raise kids with a high level of emotional intelligence.',
  },
  {
    id: 'card2',
    imageLink: './img/speakers/speaker2.png',
    name: 'SohYeong Noh',
    role: 'Director of Newborns institute of CapeTown',
    line: './img/title-gray.svg',
    desc: 'As the main venue for new techniques to face the first 1 year of newborns and high approach to guide all mothers in their road to pregnancy.',
  },
];

for (let i = 0; i < speakersData.length; i += 1) {
  const cardWork = document.createElement('article');
  cardWork.classList.add('card');
  cardWork.setAttribute('id', 'cardArea');

  cardWork.innerHTML = `
  
        <div class='img-speaker'>
            <img src='${speakersData[i].imageLink}' alt='speaker1'>
        </div>
        <div class='information-speaker'>    
            <h3 class='name-speaker'>${speakersData[i].name}</h3>
            <h4 class='role-speaker'>${speakersData[i].role}</h4>
            <img src='${speakersData[i].line}' class="gray-line" alt='line image'>
            <p class='desc-speaker'>${speakersData[i].desc}</p>
        </div> 
        
    `;
  speakerSection.appendChild(cardWork);
}
