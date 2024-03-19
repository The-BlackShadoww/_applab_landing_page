
//-------------- Navigation
const navOpen = document.querySelector('.menu_open');
const navClose = document.querySelector('.menu_close');
const navLinks = document.querySelector('.nav_links_container');
navOpen.addEventListener('click', () => {
    navLinks.classList.add('show_menu');
})
navClose.addEventListener('click', () => {
    navLinks.classList.remove('show_menu');
})


// ------------------------- smooth scroll 
const scrollLinks = document.querySelectorAll(".scroll_link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);

    let position = element.offsetTop;

    window.scrollTo({
        left: 0,
        top: position,
    });

  });
});

// --------- Get to know us 
const gkuBtn = document.querySelector(".gku_btn") 
gkuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
        left: 0,
        top: position
    });
})


// --------- Get in touch
const gitBtn = document.querySelector(".git_btn") 
gitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
        left: 0,
        top: position
    });
})



//----------------------- coments
const slides = document.querySelectorAll(".comment_slide");
const cmntRight = document.querySelector(".cmnt_right");
const cmntLeft = document.querySelector(".cmnt_left");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
})
            
            let count = 0;

            cmntRight.addEventListener('click', function () {
                count++;
                rvwCarsoul()
            })
            
            cmntLeft.addEventListener('click', function () {
                count--;
                rvwCarsoul()
            })
            
            function rvwCarsoul() {
                if (count === slides.length) {
                    count = 0;
                }
                if (count < 0) {
                    count = slides.length - 1;
                }
                slides.forEach(function (slide) {
                    slide.style.transform = `translateX(-${count * 100}%)`
                })
            };
            
            
            //------ Apps
            const appSlides = document.querySelectorAll(".item_app");
            const appRight = document.querySelector(".app_arw_right");
            const appLeft = document.querySelector(".app_arw_left");
            
            appSlides.forEach(function (slide, index) {
                slide.style.left = `${index * 50}%`
            })
            
            let appcount = 0;
            appRight.addEventListener('click', function () {
                appcount++;
                appcoursol()
            })
            
            appLeft.addEventListener('click', function () {
                appcount--;
                appcoursol()
            })
            
            function appcoursol() {
                if (appcount === appSlides.length - 1) { 
                    appcount = 0;
                }
                if (appcount < 0) {
                    appcount = appSlides.length - 1;
                }
                appSlides.forEach(function (slide) {
                    slide.style.transform = `translateX(-${appcount * 100}%)`
                    // slide.style.transform = `translateX(-${clac}%)`
                })
            };
            
            
            

            
//-------------------------- Go_top
const goTop = document.querySelector(".go_top");
goTop.addEventListener("click", (e) => {
    e.preventDefault();
    const id2 = e.currentTarget.getAttribute("href").slice(1);
    console.log(id2);
    const element2 = document.getElementById(id2);
    let position2 = element2.offsetTop;
        window.scrollTo({
            left: 0,
            top: position2,
        });
})
//---------- go_top
const topLink = document.querySelector(".go_top"); 
window.addEventListener("scroll", () => {
    const scrollHight = window.pageYOffset;
    if (scrollHight > 450) {
        topLink.classList.add("show_go_top");
    }
    else {
        topLink.classList.remove("show_go_top");
    }
})



// --------------------- [[[[ Animations ]]]]
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
tl.to(".intro_logo", { width: "200px", duration: .7, delay: .2 });
tl.to(".intro_img", { y: "0%", duration: .8 });
tl.to(".intro_slide", { y: "-100%", duration: .7, delay: .7 });
tl.to(".intro_hidden_txt", { y: "0%", duration: .3});