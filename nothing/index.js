let MenuIcon = document.querySelector(".menuToggle");
let links = document.querySelectorAll("aside ul .MenuList li:not(:last-child)");
let content = document.querySelector(".mainbody");

// design remover ( the active class)
function removeD() {
    links.forEach((e) => { e.classList.remove("active") })
}

// stop my design ( my links coloration ) whene the device is a phone 
let allowClick = true; // this variable used here and in my redisign() function  and resiz() function eto controle the design
window.addEventListener('load', function() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    if (this.innerWidth < 800) {
        removeD();
        allowClick = false;
    }
});




/********************************************************** */




//aside + content width changing by toggling the menu btn
let side = document.querySelector("aside");
MenuIcon.addEventListener("click", function() {
    this.classList.toggle("changeToggleMenu");
    side.classList.toggle("active");

    if (side.classList.contains("active")) {

        content.style.width = "calc(100vw - 80px)";
        content.style.marginLeft = "80px";

    } else {
        content.style.width = "calc(100vw - 300px)";
        content.style.marginLeft = "300px";

    };
});
// for CLICKING each link ( changing links style (color a before will appear) only if its allowed to click (ur allowed to click whene u use a computer or larger screens)


function redisign() {
    links.forEach((e, i) => {
        e.addEventListener("click", () => {

            links.forEach((link) => {
                if (link !== e) {
                    link.classList.remove("active");

                }
            });
            if (allowClick) {

                e.classList.add("active");

            }



        });
    });
}

redisign()




//  slider script
let dots = document.getElementsByClassName("idot");
let timeout;
let slideindex = 0;

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        if (dots[i].checked) {

            clearTimeout(timeout);
            slideindex = i;
            showslide(slideindex);
            timeout = setTimeout(autoshowslide, 7000, slideindex);
        }
    });
}
showslide(slideindex);
timeout = setTimeout(autoshowslide, 7000, slideindex);

function autoshowslide(slideindex) {
    slideindex++;
    if (slideindex >= dots.length) {
        slideindex = 0;
    }
    showslide(slideindex);
    timeout = setTimeout(autoshowslide, 7000, slideindex);
}

function showslide(slideindex) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "white";
    }

    if (slideindex >= slides.length) {
        slideindex = 0;
    }


    slides[slideindex].style.display = "flex";
    dots[slideindex].style.backgroundColor = "gray";
}
// end slider
//start reveal animation
ScrollReveal().reveal('.population div', {
    reset: true,
    interval: 200, // Animation duration in milliseconds
    origin: 'bottom', // Reveal from the bottom
    distance: '20px', // Distance to reveal
    delay: 300, // Delay before the animation starts
    easing: 'ease-out', // Easing function for the animation
});
ScrollReveal().reveal('.slider', {

    duration: 1000, // Animation duration in milliseconds
    origin: 'bottom', // Reveal from the bottom
    distance: '20px', // Distance to reveal
    delay: 300, // Delay before the animation starts
    easing: 'ease-out', // Easing function for the animation
});
ScrollReveal().reveal('.linkshead', {
    reset: true,
    duration: 500, // Animation duration in milliseconds
    origin: 'left', // Reveal from the bottom
    distance: '20px', // Distance to reveal
    delay: 300, // Delay before the animation starts
    easing: 'ease-out', // Easing function for the animation
});
ScrollReveal().reveal('.obcontent>div', {
    reset: true,
    interval: 200, // Animation duration in milliseconds
    origin: 'left',
    distance: '50px',
    delay: 300,
    easing: 'ease-out',

});

ScrollReveal().reveal('.dischead', {
    reset: true,
     duration: 500, // Animation duration in milliseconds
    origin: 'left', // Reveal from the bottom
    distance: '20px',
    delay: 300,
    easing: 'ease-out',

});
ScrollReveal().reveal('.cvhead', {
    reset: true,
    duration: 500, // Animation duration in milliseconds
    origin: 'left', // Reveal from the bottom
    distance: '20px',
    delay: 300,
    easing: 'ease-out',

});
ScrollReveal().reveal('.obhead', {
    reset: true,
    duration: 500, // Animation duration in milliseconds
    origin: 'left', // Reveal from the bottom
    distance: '20px',
    delay: 300,
    easing: 'ease-out',

});
ScrollReveal().reveal('.cvBlock', {

    interval: 200,
    origin: 'top',
    distance: '50px',
    delay: 300,
    easing: 'ease-out',

});


//targetiing the heads to change colors of my h1 whene scroll in
ScrollOut({
        targets: ".linkshead , .dischead ,.obhead ,.StatSection,.obSection,.homesection,.cvhead"
    })
    //start making my numbers counting anumation
let homeheader = document.querySelector(".linkshead");

let countprogress = document.querySelectorAll(".popInfo p");

countprogress.forEach((e) => {
    let pplNow = Number(e.dataset.count);
    let currentCount = 0;

    // Use setInterval to increment the count
    let counterInterval = setInterval(() => {
        e.textContent = "+" + currentCount;
        currentCount++;

        if (currentCount > pplNow) {
            clearInterval(counterInterval); // Stop the interval when it reaches the desired count
        }
    }, 0.001); // Adjust the interval time (in milliseconds) for the animation speed
});

// bar chart getting my canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Define labels for the chart
const labels = ['commun', 'MM', 'ADBD', 'Prepa', 'Data science', 'master', 'ing', 'TPIM'];

// Define the data for the chart
const data = {
    labels: labels,
    datasets: [{
        label: 'people folowing this section',
        data: [65, 59, 80, 81, 56, 55, 40, 75],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

// Define chart options
const options = {
    responsive: true,

    plugins: {
        legend: {
            display: true,
            position: 'bottom',
        },
        datalabels: {
            color: 'black',
            anchor: 'center',
            align: 'end',


        },

        title: {
            display: true,
            text: 'Nombre Des Etudiants Pre Section',
            position: 'bottom',
            padding: {
                top: 10,
                bottom: 30,
            },
        },
    },
};


// Create a new bar chart
const myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options,
    plugins: [ChartDataLabels],
});
/********************end pie chart**********************/


/***************************Start bar chart********************/
const cctx = document.getElementById('mysChart').getContext('2d'); // Use 'mysChart' ID here for pie chart
const Piedata = {
    labels: [
        'Ariana',
        'Beja',
        'Ben Arous',
        'Bizerte',
        'Gabes',
        'Gafsa',
        'Jendouba',
        'Kairouan',
        'Kasserine',
        'Kebili',
        'Kef',
        'Mahdia',
        'Manouba',
        'Medenine',
        'Monastir',
        'Nabeul',
        'Sfax',
        'Sidi Bouzid',
        'Siliana',
        'Sousse',
        'Tataouine',
        'Tozeur',
        'Tunis',
        "Zaghouan"
    ],
    datasets: [{
        label: 'Number Of Students',
        data: [300, 50, 100, 4, 54, 56, 76, 67, 87, 44, 55, 34, 12, 90, 76, 78, 98, 87, 65, 76, 56, 22, 23, 2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 77, 77, 0.7)',
            'rgba(75, 192, 67, 0.7)',
            'rgba(255, 102, 204, 0.7)',
            'rgba(102, 204, 255, 0.7)',
            'rgba(255, 128, 0, 0.7)',
            'rgba(0, 204, 0, 0.7)',
            'rgba(128, 0, 128, 0.7)',
            'rgba(204, 102, 0, 0.7)',
            'rgba(0, 128, 255, 0.7)',
            'rgba(255, 204, 0, 0.7)',
            'rgba(0, 255, 128, 0.7)',
            'rgba(255, 0, 255, 0.7)',
            'rgba(255, 153, 0, 0.7)',
            'rgba(0, 153, 153, 0.7)',
            'rgba(128, 128, 128, 0.7)',
            'rgba(0, 0, 255, 0.7)',
            'rgba(204, 51, 51, 0.7)',
            'rgba(0, 102, 102, 0.7)'
        ],



        hoverOffset: 4
    }]
};


const Pieoptions = {
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Nombre des étudiants'
            }
        },
        x: {
            title: {
                display: true,
                text: 'État'
            }
        }
    },
    plugins: {
        legend: {
            display: true,

        },
        datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'start',
        },
        // Set the background color for the chart canvas to white
        title: {
            display: true,
            text: 'Nombre Des Etudiants Pre Etat',
            position: 'bottom',
            padding: {
                top: 10,
                bottom: 30,
            },
        },
    },
};
const mySBarChart = new Chart(cctx, {
    type: 'bar',
    data: Piedata,
    options: Pieoptions,
    plugins: [ChartDataLabels],


});
/*************************** END bar chart********************/
/*********************** Line Chart Start*********************/
const ccctx = document.getElementById('myPChart').getContext('2d');
const linelabel = [];
let startdate = new Date("2011");
let currentdate = new Date();
for (let d = startdate.getFullYear(); d <= currentdate.getFullYear(); d++) {
    linelabel.push(d.toString());
}

console.log(startdate);

const linedata = {
    labels: linelabel,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 65, 99, 129, 234, 1000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const stackedLine = new Chart(ccctx, {
    type: 'line',
    data: linedata, // Changed from "data" to "linedata"
    options: {
        scales: {
            y: {
                stacked: true
            }
        },
        plugins: {
            legend: {
                display: true,

            },
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
            },
            // Set the background color for the chart canvas to white
            title: {
                display: true,
                text: 'Nombre Des Etudiants Pre Année',
                position: 'bottom',
                padding: {
                    top: 10,
                    bottom: 30,
                },
            },
        },
    }
});

ScrollReveal().reveal('.chr', {
    reset: true,
    interval: 200, // Animation duration in milliseconds
    origin: 'bottom', // Reveal from the bottom
    distance: '20px', // Distance to reveal
    delay: 300, // Delay before the animation starts
    easing: 'ease-out', // Easing function for the animation
});



/*************************Resizing the window will make my web fit with any widhth************************************** */
/* here i wanted my aside addpt with all width if ur using large screen u iwll get a normal aside with hover and click disign 
/ else we will have a top nav without clicking design */
window.onresize = function() {
        if (window.innerWidth < 800) {
            MenuIcon.style.display = "none";
            MenuIcon.classList.remove("changeToggleMenu");
            side.classList.remove('active');
            content.style.marginLeft = 0;
            content.style.width = "100vw";
            removeD();
            allowClick = false;



        } else {
            MenuIcon.style.display = "flex";
            if (side.classList.contains("active")) {

                content.style.width = "calc(100vw - 80px)";
                content.style.marginLeft = "80px";
                allowClick = true;

            } else {
                content.style.width = "calc(100vw - 300px)";
                content.style.marginLeft = "300px";

            };
            removeD();
            links[0].classList.add("active");
            this.scrollTo(0, 0);
            allowClick = true;


        }
        redisign();
    }
    /***********************end of responsive  resizing********************** */


// Get all the "View Cv" buttons and add a click event listener to each
const viewCvButtons = document.querySelectorAll('.showcv');
const openphoto = document.querySelector('.openphoto');
const closemyimg = document.querySelector('.closeimg');
const imageSources = [
    "./cv (1)-1.png",
    // Add more image sources for each cvBlock
];
viewCvButtons.forEach((button, i) => {
    button.addEventListener('click', () => {

        let myimg = document.querySelector(".imgshown img");
        if (imageSources.length > i && imageSources[i]) {
            myimg.src = imageSources[i];
            openphoto.style.transform = "scale(1)";
        }


    });
});


closemyimg.onclick = function() {
    openphoto.style.transform = "scale(0)";

}
