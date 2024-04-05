
// start toggle
let sittingBox = document.querySelector('.sitting-box')
let open = document.querySelector('.fa-gear');
open.onclick = function (){
    this.classList.toggle('fa-spin')
    sittingBox.classList.toggle('open')
}
// end toggle


// start color box
if(localStorage.getItem('data-color')){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('data-color'))
    //remove class active
    let removeActive = document.querySelectorAll(".colors-list li")
    removeActive.forEach(li => {
        li.classList.remove('active')
        //add class active to clicked item
        if(li.dataset.color === localStorage.getItem('data-color')) {
            li.classList.add("active");
        }
    })
}
let colorsli = document.querySelectorAll('.colors-list li');
colorsli.forEach((li) => {
    li.addEventListener('click', (e)=> {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("data-color", e.target.dataset.color);
        //remove active class
        handleActive(e)
    } )
    })
localStorage.getItem('data-color');
// end color box

// function and setinteral let for chose if you awnt back ground switch or no






// function to hide mouse and swich it with orange point
function moveCustomPointer(event) {
const customPointer = document.getElementById('custom-pointer');
customPointer.style.left = event.clientX + 'px';
customPointer.style.top = event.clientY + 'px';
}

// Show the custom pointer when the mouse enters the window
document.addEventListener('mouseenter', function() {
document.getElementById('custom-pointer').style.display = 'block';
});

// Hide the custom pointer when the mouse leaves the window
document.addEventListener('mouseleave', function() {
document.getElementById('custom-pointer').style.display = 'none';
});

// Move the custom pointer on mousemove
document.addEventListener('mousemove', moveCustomPointer);




// Function to move the highlight element to follow the mouse pointer
function moveHighlight(event) {
    const highlight = document.getElementById('highlight');
    const x = event.clientX - highlight.offsetWidth / 2.6;
    const y = event.clientY - highlight.offsetHeight / 2.5;
    highlight.style.transform = `translate(${x}px, ${y}px)`;
}
  // Listen for mousemove event to move the highlight element
document.addEventListener('mousemove', moveHighlight);






// Function to write words dynamically
function writeAndRepeat(words, index, speed, repeat) {
if (index < words.length) {
    document.getElementById('text').innerText += words[index];
    index++;
    setTimeout(function() {
    writeAndRepeat(words, index, speed, repeat);
    }, speed);
} else {
    setTimeout(function() {
    document.getElementById('text').innerText = ''; // Clear the text
    if (repeat) {
        writeAndRepeat(words, 0, speed, repeat); // Repeat if necessary
    }
    }, speed * 40); // Wait for a brief moment before repeating
}
}

// Words to be written
    const wordsToWrite = 'creative';
    const speed = 100; // Speed of writing (milliseconds per character)
    const repeat = true; // Whether to repeat after writing

    // Call the function to start writing and repeating the words
writeAndRepeat(wordsToWrite, 0, speed, repeat);
















let canldeMask = document.querySelector('.landing-page .image-box img');
let aboutUsMask = document.querySelector('.about-us .image-box img');
let htmlSkillText = document.querySelector( '.skills .html-skill');
let cssSkillText = document.querySelector( '.skills .css-skill');
let jsSkillText = document.querySelector( '.skills .js-skill');
let problemSolvingSkillText = document.querySelector('.skills .problem-solving-skill');
let phpSkillText = document.querySelector('.skills .php-skill');  
let uiuxSkillText = document.querySelector( '.skills .uiux-skill');
let colorsli2 = document.querySelectorAll('.colors-list li');
colorsli2.forEach(ele => {
    ele.onclick = () => {
        if (ele.getAttribute('data-color') === "#a80e42" && ele.className === 'active') {
            canldeMask.src = '/imgs/pink-mask2.png';
            aboutUsMask.src = './imgs/about-us-pink-mask.png';
            htmlSkillText.src = '/imgs/html-skill2.png';
            cssSkillText.src = '/imgs/css-skill.png'
            jsSkillText.src = '/imgs/js-skill.png'
            problemSolvingSkillText.src = '/imgs/problem-solving.png';
            phpSkillText.src = '/imgs/php-skill.png'
            uiuxSkillText.src = '/imgs/uiux-skill.png'
        }
        else if (ele.getAttribute('data-color') === "#e91e63" && ele.className === 'active') {
            localStorage.setItem('pink-mask', canldeMask.src = './imgs/pink-mask.png')
            canldeMask.src = localStorage.getItem('pink-mask');

            localStorage.setItem('pink-mask', aboutUsMask.src = './imgs/about-us-pink-mask.png')
            aboutUsMask.src = localStorage.getItem('pink-mask');

        }
        else if (ele.getAttribute('data-color') === "#009688" && ele.className === 'active') {
            localStorage.setItem('baby-blue-mask', canldeMask.src = './imgs/lyer2.png')
            canldeMask.src = localStorage.getItem('baby-blue-mask');

            localStorage.setItem('baby-blue-mask', aboutUsMask.src = './imgs/about-us-babyblue-mask.png')
            aboutUsMask.src = localStorage.getItem('baby-blue-mask');

            // landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeibabyblue.svg');"
        }
        else if (ele.getAttribute('data-color') === "#14555f" && ele.className === 'active') {
            canldeMask.src = '/imgs/dark-blue-mask3.png';
            htmlSkillText.src = '/imgs/html-skill-darkblue.png';
            cssSkillText.src = '/imgs/css-skill-darkblue.png'
            jsSkillText.src = '/imgs/js-skill-darkblue.png'
            problemSolvingSkillText.src = '/imgs/problem-solving-darkblue.png';
            phpSkillText.src = '/imgs/php-skill-darkblue.png'
            uiuxSkillText.src = '/imgs/uiux-skill-darkblue.png'

            aboutUsMask.src = '/imgs/about-us-darkblue-mask.png'

            // landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeiblue.svg');"
        }
        else if (ele.getAttribute('data-color') === "#4CAF50" && ele.className === 'active') {
            localStorage.setItem('green-mask', canldeMask.src = './imgs/green-mask.png')
            canldeMask.src = localStorage.getItem('green-mask');

            localStorage.setItem('green-mask', aboutUsMask.src = './imgs/about-us-green-mask.png')
            aboutUsMask.src = localStorage.getItem('green-mask');

            // landingPageBackground.style.cssText = "background-image: url('/css/layered-waves-haikeigreen.svg');"
        }
    }
    })




    //get in touch button go to contact us
    let getInTouch = document.querySelector('.get-in-touch');
    getInTouch.onclick = function (e){
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
    })}




// skills progress 
let skills = document.querySelector('.skills');

window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;

    let aboutUs = document.querySelector('.sec2');
    let aboutUsTop = aboutUs.offsetTop;
    let aboutUsHeight = aboutUs.offsetHeight;
    if (windowScrollTop > (aboutUsTop + aboutUsHeight - windowHeight -500)) {
        let imagesBox = document.querySelector('.sec2 .image-box')
        imagesBox.classList.add('animation')

        let infoBox = document.querySelector('.sec2 .info-box')
        infoBox.classList.add('animation')

        let infoBoxH2 = document.querySelector('.about-us h2')
        infoBoxH2.classList.add('animation')
    }

    let gallery = document.querySelector('.gallery');
    let galleryTop = gallery.offsetTop;
    let galleryHeight = gallery.offsetHeight;
    if(windowScrollTop > (galleryTop + galleryHeight - windowHeight -200)) {
        let project = document.querySelectorAll('.gallery .project');
        project.forEach((e)=> {
            e.classList.add('animation')
        })
    }



    let skillsTop = aboutUs.offsetTop;
    let skillsHeight = aboutUs.offsetHeight;

    if (windowScrollTop > (skillsTop + skillsHeight - windowHeight +370)) {
        let ui = document.querySelectorAll('.skills .skill-box');
        ui.forEach((e)=> {
            e.classList.add('animation')

            let allSkillsText = document.querySelectorAll('.skills .skill-text');
            let laptop = document.querySelector('.html .laptop');
            let cssLayer = document.querySelector('.css .css-layer');
            let apiLayer = document.querySelector('.js .api-layer');
            let problemSolvingLayer = document.querySelector('.problem-solving .problem-solving-layer');
            let phpLayer = document.querySelector('.php .php-layer');
            let animationClass = [laptop, cssLayer, apiLayer, problemSolvingLayer, phpLayer];
            animationClass.forEach((e)=> {
                e.classList.add('animation')
            })

            allSkillsText.forEach((e)=> {
                e.classList.add('animation')
            })
        })
    }   

}



let aboutUs = document.querySelector('.sec2');

// popup box 
let allEmages = document.querySelectorAll('.gallery .project img');
allEmages.forEach(img => {
    img.addEventListener('click', ()=> {
        let popup = document.createElement('div');
        popup.className = 'popup'
        popup.style.cssText = 'position: fixed; z-index: 1000; background-color: rgba(0, 0, 0, .7); width: 100%; height: 100%; left: 0; top: 0';
        document.body.appendChild(popup)

        let popupBox = document.createElement('div')
        popupBox.className = 'popupBox';
        popupBox.style.cssText = 'z-index:1001; position: fixed; left: 50%; top: 47%; transform: translate(-50%, -50%);'

        if(img.alt !== null) {
            let headingImg = document.createElement('h3');
            let textHeadingImg = document.createTextNode(img.alt);
            headingImg.appendChild(textHeadingImg);
            popupBox.appendChild(headingImg);
        }

        let popupImg = document.createElement('img');
        popupImg.src = img.src
        popupImg.style.cssText = 'max-width:100%; border-radius: 5px;'

        popupBox.appendChild(popupImg);
        document.body.appendChild(popupBox)

        let close = document.createElement('span');
        close.className = 'close'
        let closeText = document.createTextNode('x');
        close.appendChild(closeText);
        popupBox.appendChild(close)

    })
})

document.addEventListener('click', function(e) {
    if(e.target.className == 'popup' || e.target.className == 'close') {
        document.querySelector('.popup').remove()
        document.querySelector('.popupBox').remove()
    }
})



// tool tips

let bullets = document.querySelectorAll('.nav-bullets .bullet');

let links = document.querySelectorAll('.links a')

function smoothScroll(element) {
    element.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}


smoothScroll(bullets);
smoothScroll(links);


function handleActive(ev) {
    ev.target.parentElement.querySelectorAll('.active').forEach(ele => {
        ele.classList.remove('active')
    })
    //add active to clicked element
    ev.target.classList.toggle('active')
}

// start nav bullets
let navBullets = document.querySelector('.nav-bullets');
let bulletsOptionSpan = document.querySelectorAll('.bullets-option span');
let bulletLocalsorage = localStorage.getItem('bullet_option')
if(bulletLocalsorage !== null) {
    bulletsOptionSpan.forEach(span => {
        span.classList.remove('active')
    })
    if(bulletLocalsorage === 'block') {
        navBullets.style.display = 'block';
        document.querySelector('.bullets-option #show').classList.add('active')
    }
    else {
        navBullets.style.display = 'none';
        document.querySelector('.bullets-option #hide').classList.add('active')
    }
}

bulletsOptionSpan.forEach(span => {
    span.addEventListener('click', (e) => {
        if(e.target.dataset.display === 'show') {
            navBullets.style.display = 'block';
            localStorage.setItem('bullet_option', 'block')
        }else {
            navBullets.style.display = 'none';
            localStorage.setItem('bullet_option', 'none')
        }
        handleActive(e)
    })
})

// reset options
document.querySelector('.reset-options').onclick = function () {
    localStorage.clear();
    window.location.reload()
}


// open menu 
let linksMenu = document.querySelector('.links');
let toggleMenuIcon = document.querySelector('.toggle-menu-icon');

toggleMenuIcon.onclick = function (e) {
    this.classList.toggle("menu-active");
    linksMenu.classList.toggle('open');
    e.stopPropagation()
}
document.addEventListener('click', (e)=> {
    if(e.target !== linksMenu && e.target !== toggleMenuIcon) {
        if(linksMenu.classList.contains('open')) {
            toggleMenuIcon.classList.toggle("menu-active");
            linksMenu.classList.toggle('open');
        }
    }
})
linksMenu.onclick = function(e) {
    e.stopPropagation()
}







