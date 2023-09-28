let mypost = document.querySelector('#mypost');

let post = "Web Designer";

let flag = 0;
let index = 0;

const typeWriter = () => {
    let new_post = post.slice(0,index);
    new_post += "_";
    mypost.innerText = new_post;
    
    if (flag===0) {
        index++;
    }
    else if (flag===1) {
        index--;
    }
    if(index > post.length) {
        flag = 1;
    }
    if (index === 0 && post==="Web Designer") {
        flag = 0;
        post = "Web Developer";
    }
    else if (index === 0 && post==="Web Developer") {
        flag = 0;
        post = "Video Editor";
    }
    else if (index === 0 && post==="Video Editor") {
        flag = 0;
        post = "Web Designer";
    }

    setTimeout(() => typeWriter(), 100);
}


typeWriter();


function animation(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    .from("#hello",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: -1,
        stagger: .2
    })
    .from("#myname",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.3,
        delay: 0,
        stagger: .2
    })
    .from("#mypost",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.3,
        delay: 0,
        stagger: .2
    })
    .from("#resume-btn",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
        delay: 0,
        stagger: .2
    })
}

animation();

// let tl1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.sec-2',
//         start: '5% 80%',
//         end: '29% 15%',
//         scrub: 1,
//         markers: false
//     }
// })
// tl1.from('#proj-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl1.from('#card-1', {
//     y: 50,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl1.from('#card-2', {
//     y: 50,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl1.from('#card-3', {
//     y: 50,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl1.from('#card-4', {
//     y: 50,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl1.from('#card-5', {
//     y: 50,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl1.from('#card-6', {
//     y: 50,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl1.from('#proj-view-btn', {
//     y: 50,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })

// let tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.sec-3',
//         start: '5% 80%',
//         end: '5% 15%',
//         scrub: 1,
//         markers: false
//     }
// })
// tl2.from('#resume-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.9
// })
// tl2.from('#edu-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#edu-box', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#skills-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#fe-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#fe-box', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#be-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#be-box', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#pl-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#pl-box', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#sl-head', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })
// tl2.from('#sl-box', {
//     y: 10,
//     opacity: 0,
//     ease: Expo.easeInOut,
//     duration: 0.1
// })

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-5',
        start: '10% 80%',
        end: '10% 15%',
        scrub: 1,
        markers: false
    }
})

tl5.from('#counter-1', {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.9
})
tl5.add(gsap.delayedCall(0,counter1));

tl5.from('#counter-2', {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})
tl5.add(gsap.delayedCall(0,counter2));

tl5.from('#counter-3', {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})
tl5.add(gsap.delayedCall(0,counter3));

tl5.from('#counter-4', {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})
tl5.add(gsap.delayedCall(-0.1,counter4));

function counter1(){
    let counts1 = setInterval(updated1);
    let upto1 = 0;
    function updated1() {
        let count1 = document.getElementById("counter-1");
        count1.innerHTML = ++upto1;
        if (upto1 === 1) {
            clearInterval(counts1);
        }
    }
}

function counter2(){
    let counts2 = setInterval(updated2);
    let upto2 = 0;
    function updated2() {
        let count2 = document.getElementById("counter-2");
        count2.innerHTML = ++upto2;
        if (upto2 === 1) {
            clearInterval(counts2);
        }
    }
}

function counter3(){
    let counts3 = setInterval(updated3);
    let upto3 = 0;
    function updated3() {
        let count3 = document.getElementById("counter-3");
        count3.innerHTML = ++upto3;
        if (upto3 === 20) {
            clearInterval(counts3);
        }
    }
}

function counter4(){
    let counts4 = setInterval(updated4);
    let upto4 = 0;
    function updated4() {
        let count4 = document.getElementById("counter-4");
        count4.innerHTML = ++upto4;
        if (upto4 === 150) {
            clearInterval(counts4);
        }
    }
}