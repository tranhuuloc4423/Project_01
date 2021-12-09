$(document).ready(function(){
    $('.tour-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        Infinity: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});


// search-box
var btnSearch = document.querySelector('.sidebar-box__footer-btn');

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})

// search-box end


var btnNavReponsive = document.querySelector('.nav-dropdown__reponsive');

function openNavReponsive() {
    btnNavReponsive.classList.toggle('active')
}

// media video 

function toggle() {
    var videoPlayer = document.querySelector(".videoPlayer");
    var myVideo = document.querySelector(".myvideo");

    videoPlayer.classList.toggle("active");
    myVideo.pause();
    myVideo.currentTime = 0;

}



// media video

var form = document.querySelector('.modal-form-container');
var modalFormLog = document.querySelector('.form-register');
var modalFormReg = document.querySelector('.form-login');

// hàm mở modal
function showModal() {
    form.classList.add('active');
}

// hàm đóng 
function closeModal() {
    form.classList.remove('active');
}

form.addEventListener("click", closeModal);

// ngăn chặn đóng modal khi nghe event click vào modal
modalFormLog.addEventListener("click", function (event) {
    event.stopPropagation();
});

modalFormReg.addEventListener("click", function (event) {
    event.stopPropagation();
});

var formSwitchLog = document.getElementById('login');
var formSwitchReg = document.getElementById('register');
function openRegister() {
    formSwitchReg.style.display = "block";
    formSwitchLog.style.display = "none";
}

function openLogin() {
    formSwitchReg.style.display = "none";
    formSwitchLog.style.display = "block";
}

// sidebar box

var sideBar = document.querySelector('.sidebar-box');

function openSideBar() {
    sideBar.classList.add('active');
}
function closeSideBar() {
    sideBar.classList.remove('active');
}