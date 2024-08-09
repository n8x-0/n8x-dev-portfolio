if (window.innerWidth > 500) {
    window.addEventListener("resize", () => window.location.reload());
}

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

let vdoSrc = [
    'https://videos.pexels.com/video-files/8466294/8466294-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/15562120/15562120-hd_1920_1080_24fps.mp4',
    'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/9669050/9669050-hd_1920_1080_25fps.mp4',
    'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4',
]
function randVdo() {
    let rnd = Math.floor(Math.random() * 5);
    select(".vdo").setAttribute("src", vdoSrc[rnd])
}
function select(x) {
    return document.querySelector(x);
}
let headerList = select("#headerList");
let headerListOpen = false;

function navButtonToggler() {
    headerList.addEventListener('click', () => {
        if (headerListOpen) {
            headerListOpen = false;
            select(".openedHeaderListCont").classList.remove("block");
            select(".openedHeaderListCont").classList.add("hidden");
            return;
        }
        headerListOpen = true;
        select(".openedHeaderListCont").classList.remove("hidden")
        select(".openedHeaderListCont").classList.add("block")
    });
}
function pageOneAnim() {
    gsap.set(".scaler", { scale: 10 })
    gsap.set(".rowlft", { xPercent: 1 })
    gsap.set(".rowrgt", { xPercent: -3.4 })
    gsap.set(".headText span", { opacity: 0.05 })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
        }
    });

    tl.to(".layer1", {
        "--circ": "0%",
        ease: Power2,
        duration: 3
    }, 'a')
        .to(".scaler", {
            scale: 1,
            ease: Power1,
            duration: 3
        }, 'a')
        .to(".rowlft", {
            xPercent: 5,
            stagger: 0.1,
            duration: 8
        }, 'b')
        .to(".rowrgt", {
            xPercent: -8,
            stagger: 0.1,
            duration: 8
        }, 'b')
        .to(".headText span", {
            opacity: 0.8,
            stagger: 0.1,
        }, 'b')
}
function xScroller() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".trigger",
            start: `18% top`,
            end: `bottom bottom`,
            scrub: 2,
        },
        xPercent: -100,
        // ease: Power1
    })
}
function themeChanger() {
    document.querySelectorAll(".section").forEach((e) => {
        ScrollTrigger.create({
            trigger: e,
            start: 'top 15%',
            end: 'bottom 15%',
            // markers: true, 
            onEnter: () => {
                document.body.setAttribute('theme', e.dataset.color)
            },
            onEnterBack: () => {
                document.body.setAttribute('theme', e.dataset.color)
            }
        })
    })
}
function verticalPage3Anim(dir) {
    let amount = window.innerWidth < 1280 && window.innerWidth > 768 ? -130 : -10;

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".trigger",
            start: `top 10%`,
            end: `50% bottom`,
            scrub: 1,
        }
    })
    tl2
        .to(".capsSkillsRgt", { [dir]: 160 }, "skl")
        .to(".capsSkill", { [dir]: 50 }, "skl")
        .to(".capsSkillsLft", { [dir]: amount }, "skl")
        .to(".capsSkillsText", {
            scrollTrigger: {
                trigger: ".trigger",
                start: `top 10%`,
                end: `50% bottom`,
                scrub: 0.5,
            },
            opacity: 0,
            scale: 0,
            stagger: 0.1
        }).from(".skillIcon", {
            scrollTrigger: {
                trigger: ".trigger",
                start: `top 10%`,
                end: `50% bottom`,
                scrub: 1,
            },
            opacity: 0,
            scale: 0,
        })
    gsap.from(".projectCard", {
        scrollTrigger: {
            trigger: ".trigger",
            start: 'bottom-=50 65%',
            end: 'bottom 65%',
            scrub: true,
        },
        x: 100,
        opacity: 0,
        stagger: 0.05
    })
}
function textAnim(x, classes = "") {
    if (window.innerWidth < 670) {
        select(".nixipixi").innerText = 'Nixi';
    }
    let clutter = ''
    select(x).innerText.split("").forEach(e => {
        clutter += `<span class=${classes}>${e}</span>`
    })
    let res = select(x).innerHTML = clutter;
    return res;
}
textAnim(".headText");
textAnim(".nixipixi", "relative");

document.addEventListener("DOMContentLoaded", function () {
    randVdo();
    navButtonToggler();
    pageOneAnim()
    xScroller();
    themeChanger();
    if (window.innerWidth <= 768) {
        verticalPage3Anim('y');
    } else {
        verticalPage3Anim('x');
    }
});

gsap.set(".nixipixi span", { 'top': '50' })

gsap.to(".nixipixi span", {
    scrollTrigger: {
        trigger: ".page4",
        start: "top 10%",
        end: 'bottom bottom',
        scrub: 1,
        // markers: true
    },
    'top': '0',
    stagger: 0.04,
    ease: 'circ'
})


if (window.innerWidth <= 1024) {
    gsap.set(".card", { scale: 1 })
    gsap.to(".cardCont", {
        scrollTrigger: {
            trigger: ".pg2Sec",
            start: 'top -10%',
            scrub: true,
            pin: true,
        },
        x: "-75%"
    }, 'c')

} else {
    document.querySelectorAll(".card").forEach(e => {
        gsap.to(e, {
            scrollTrigger: {
                trigger: e,
                scrub: true,
                start: 'top 50%',
                end: 'bottom 50%',
            },
            scaleX: 1.08,
            'background': '#000000',
            'color': '#AEDEE0',
            duration: 1,
            ease: Power4
        })
        gsap.to(".capsule", {
            scrollTrigger: {
                trigger: ".capsule",
                start: "top 50%",
                end: 'bottom 50%',
                scrub: true
            },
            'transform': 'translateY(-3.5rem)',
            stagger: 0.2,
            ease: Power2,
            duration: 3
        })
    })
}