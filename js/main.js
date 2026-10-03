  var swiper = new Swiper(".swiperPlane", {
    loop: true,
    speed: 1500, // زمن الحركة (1.2 ثانية) خليها أبطأ أو أسرع حسب رغبتك
    autoplay: {
      delay: 4000, // كل 4 ثواني يغير السلايد
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".swiperPassengers", {
    loop: true,
    speed: 1500, 
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

document.querySelectorAll('.card-faq .btn').forEach(btn => {
  const rightIcon = btn.querySelector('.bi-chevron-right');
  const downIcon = btn.querySelector('.bi-chevron-down');

  downIcon.style.display = 'none';

  btn.addEventListener('click', () => {
    const isOpen = downIcon.style.display === 'inline-block';

    if (isOpen) {
      downIcon.style.display = 'none';
      rightIcon.style.display = 'inline-block';
    } else {
      rightIcon.style.display = 'none';
      downIcon.style.display = 'inline-block';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card-Recent');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, i * 200); // تأخير تدريجي لكل كارد
      }
    });
  }, { 
    threshold: 0,
    rootMargin: "0px 0px -100px 0px" // يبدأ قبل 100px
  });

  cards.forEach(card => observer.observe(card));
});
let iconlist = document.querySelector(".list-nav");
let listmenu = document.querySelector(".list-nav-menu");
let closelist = document.querySelector(".close-btn");
iconlist.addEventListener("click" , function(){
  if(listmenu.style.display ==='none'){
     listmenu.style.display = "block";
  }else{
    listmenu.style.display="none";
  }
});

closelist.addEventListener("click" , function(){
     
    listmenu.style.display ="none" ;
  }
);

