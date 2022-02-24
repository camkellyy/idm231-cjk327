//Carousel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide button');

//Buttons
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

//Counter
let counter = 1;
const size = 420;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Clicking
nextButton.addEventListener('click',()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevButton.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'last') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === 'first') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});


//Variables
const trueRed = document.querySelector('.Ari');
const honeysuckle = document.querySelector('.Lib');
const sandDollar = document.querySelector('.Cap');
const mimosa = document.querySelector('.Gem');
const serenity = document.querySelector('.Aqu');
const tigerlily = document.querySelector('.Sag');
const marsala = document.querySelector('.Vir');
const radientOrchid = document.querySelector('.Can');
const greenery = document.querySelector('.Tau');
const tangerineTango = document.querySelector('.Leo');
const ultraViolet = document.querySelector('.Pis');
const chiliPepper = document.querySelector('.Sco');
const helpButton = document.querySelector('.help');


//Variable Event Listeners
trueRed.addEventListener('click', function() {
    userPicked('Ari');
});
honeysuckle.addEventListener('click', function() {
    userPicked('Lib');
});
sandDollar.addEventListener('click', function() {
    userPicked('Cap');
});
mimosa.addEventListener('click', function() {
    userPicked('Gem');
});
serenity.addEventListener('click', function() {
    userPicked('Aqu');
});
tigerlily.addEventListener('click', function() {
    userPicked('Sag');
});
marsala.addEventListener('click', function() {
    userPicked('Vir');
});
radientOrchid.addEventListener('click', function() {
    userPicked('Can');
});
greenery.addEventListener('click', function() {
    userPicked('Tau');
});
tangerineTango.addEventListener('click', function() {
    userPicked('Leo');
});
ultraViolet.addEventListener('click', function() {
    userPicked('Pis');
});
chiliPepper.addEventListener('click', function() {
    console.log('scorpio button');
    userPicked('Sco');
});
helpButton.addEventListener('click', function() {
    modalHelp.hidden = !modalHelp.hidden;
});

//Popup Function
function userPicked(colorName) {
    const image = document.querySelector('.image');
    const bdate = document.querySelector('.date');
    const description1 = document.querySelector('.description-1');
    const description2 = document.querySelector('.description-2');
    const underline = document.querySelector('hr');


    switch (colorName) {
        case 'Ari':
            image.src = '../modal/aries.png';
            bdate.innerHTML = "March 21st - April 19th.";
            description1.innerHTML = "You tend to fall in love very quickly, probably because you are full of passion. You are also a motivated and confident leader, but don’t let your stubborness get in the way!";
            description2.innerHTML = "As a fire sign, you share many similarities with Saggitarius’ and Leo’s, but that does not mean you are compatable!";
            underline.style.borderColor = "#BF1932";
            modal.hidden = !modal.hidden;
        break;
        case 'Lib':
            image.src = '../modal/libra.png';
            bdate.innerHTML = "Sept 23rd - Oct 23rd.";
            description1.innerHTML = "You have many friends as you are quite extrovered and always friendly! Your charm and connectivity make people feel comfortable around you.";
            description2.innerHTML = "As an air sign, you are concerned with the balance of the world and fight for justice."
            underline.style.borderColor = "#D94F70";
            modal.hidden = !modal.hidden;
        break;
        case 'Cap':
            image.src = '../modal/capricorn.png';
            bdate.innerHTML = "Dec 22nd - Jan 19th.";
            description1.innerHTML = "You are one of the most hardworking signs. You are ambitious and goal-oriented, leading to you being very organized. You are likely to be succesful due to your focus and determination.";
            description2.innerHTML = "You are considered to be the leader of the earth signs - take that Virgo and Taurus!";
            underline.style.borderColor = "#DECDBE";
            modal.hidden = !modal.hidden;
        break;
        case 'Gem':
            image.src = '../modal/gemini.png';
            bdate.innerHTML = "May 21st - June 21st.";
            description1.innerHTML = "You are connected to your inner child through your playfullness and curiosity! Considered the social butterfly of the zodiacs, you are constantly juggling various hobbies, friend groups, and passions.";
            description2.innerHTML = "As an air sign, you are very intellectual and are almost always thinking about something!";
            underline.style.borderColor = "#F0C05A";
            modal.hidden = !modal.hidden;
        break;
        case 'Aqu':
            image.src = '../modal/aquarius.png';
            bdate.innerHTML = "Jan 20th - Feb 18st.";
            description1.innerHTML = "You are very forward-thinking and optimistic. You have a vision of your future, and with your cleverness and self-reliance, you will make your future into a reality!";
            description2.innerHTML = "As an air sign, you want the world to be a better place. With your optimism, we can get there!";
            underline.style.borderColor = "#92A8D1";
            modal.hidden = !modal.hidden;
        break;
        case 'Sag':
            image.src = '../modal/saggitarius.png';
            bdate.innerHTML = "Nov 22th - Dec 21st.";
            description1.innerHTML = "You are an adventurer at heart. This is obvious through your adabtability to new environments. You are also quite curious, often searching for answers other’s wouldn’t!";
            description2.innerHTML = "As a fire sign, you are assertive and blunt, but also full of compassion!";
            underline.style.borderColor = "#E2583E";
            modal.hidden = !modal.hidden;
        break;
        case 'Vir':
            image.src = '../modal/virgo.png';
            bdate.innerHTML = "August 23th - Sept 22st.";
            description1.innerHTML = "You are a very quick thinker, which complements your communication skills. However, you often have too much mental energy, resulting in being stressed and tense.";
            description2.innerHTML = "As an earth sign, you have deep roots nature and are very kind and smypathetic to others!";
            underline.style.borderColor = "#955251";
            modal.hidden = !modal.hidden;
        break;
        case 'Can':
            image.src = '../modal/cancer.png';
            bdate.innerHTML = "June 22th - July 22st.";
            description1.innerHTML = "You are devoted to your family and friends, and will do anything to protect them, whoch shows how hyper-emotional you are. You also tend to fall in love quickly, again due to your sensitivity.";
            description2.innerHTML = "As a water sign, you share many similarities with Scorpio’s and Picses’, but that does not mean you’re compatable!";
            underline.style.borderColor = "#B163A3";
            modal.hidden = !modal.hidden;
        break;
        case 'Tau':
            image.src = '../modal/taurus.png';
            bdate.innerHTML = "April 20th - May 20st.";
            description1.innerHTML = "You are very stubborn, resulting in being resistant to change. You are also hardworking and dedicated, so you can make the best out of any new situation! Many of your freidnships rely on you, as you are so dependable.";
            description2.innerHTML = "As an earth sign, you are extreamely grounded and always stick to the truth!";
            underline.style.borderColor = "#88B04B";
            modal.hidden = !modal.hidden;
        break;
        case 'Leo':
            image.src = '../modal/leo.png';
            bdate.innerHTML = "July 23th - August 22st.";
            description1.innerHTML = "You draw attention to yourself through your energy and sense of self-assurence. You respect others and are generous with your time, leading to a natural drive for leadership!";
            description2.innerHTML = "As a fire sign, you share many similarities with Saggitarius’ and Aries’, especially your compassion!";
            underline.style.borderColor = "#DD4124";
            modal.hidden = !modal.hidden;
        break;
        case 'Pis':
            image.src = '../modal/pisces.png';
            bdate.innerHTML = "Feb 19th - March 20st.";
            description1.innerHTML = "You are very aware of your inner child and have never lost your creativity and imagination! You put your all into your relationships to ensure the happiness of others.";
            description2.innerHTML = "As a water sign, you are emotionally sensitive and aware, allowing you to form meaningful relationships.";
            underline.style.borderColor = "#5F4B8B";
            modal.hidden = !modal.hidden;
        break;
        case 'Sco':
            image.src = '../modal/scorpio.png';
            bdate.innerHTML = "Oct 24th - Nov 21st.";
            description1.innerHTML = "You are very passionate, and out your all into whatever captivates you. Because you are a profound-thinker, your passion runs free. But your secretive personality often keeps others from seeing the real you.";
            description2.innerHTML = "As a water sign, you are able to dive deep into your emotions, but don’t get too lost!";
            underline.style.borderColor = "#9B1B30";
            modal.hidden = !modal.hidden;
        break;
    }
}


//Calendar Input Code
const userSubmitBtn = document.querySelector('.submit');

//Event Listener
userSubmitBtn.addEventListener('click', function() {
    const userBday = new Date(document.querySelector('.bday').value);

    const whichMonth = userBday.getUTCMonth() + 1;
    const whichDayOfMonth= userBday.getUTCDate();

    //Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sag";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Sco";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Lib";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Vir";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Can";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Gem";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Tau";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Ari";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pis";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aqu";
    }

    userPicked(AstroSign);
});


//Modal Functionality
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('btn-modal-close');
modalCloseBtn.addEventListener('click', function() {
    modal.hidden = !modal.hidden;
});


//Help Modal Functionality
const modalHelp = document.getElementById('modal-help');
const modalCloseBtnHelp = document.getElementById('btn-modal-close-help');
modalCloseBtnHelp.addEventListener('click', function() {
    modalHelp.hidden = !modalHelp.hidden;
});