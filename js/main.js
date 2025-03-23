/* js for navbar start */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
/* js for navbar end */

/* js for hamburger menu start */
document.getElementById("mobile-menu").addEventListener("click", function () {
    document.querySelector(".navbar-nav").classList.toggle("active");
});
/* js for hamburger menu end */

/* js for section2 start */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".custom-btn");
    const title = document.getElementById("class-title");
    const description = document.querySelector(".text-content p");
    const schedule = document.querySelector(".text-content ul");
    const image = document.querySelector(".img-container img");

    const classData = {
        yoga: {
            title: "Why are your Yoga?",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio fugiat ab perferendis quam aliquam, blanditiis asperiores excepturi quas. Velit beatae modi vel totam, deleniti ipsa enim quibusdam placeat. Amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam optio, dolorum animi atque magnam totam dolor.",
            schedule: `
                <li>Saturday-Sunday: 8:00am - 10:00am</li>
                <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
            `,
            img: "/img/yoga.jpg"
        },
        group: {
            title: "Why are your Group Training?",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio fugiat ab perferendis quam aliquam, blanditiis asperiores excepturi quas. Velit beatae modi vel totam, deleniti ipsa enim quibusdam placeat. Amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam optio, dolorum animi atque magnam totam dolor.",
            schedule: `
                <li>Saturday-Sunday: 8:00am - 10:00am</li>
                <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
            `,
            img: "/img/group.webp"
        },
        solo: {
            title: "Why are your Solo?",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio fugiat ab perferendis quam aliquam, blanditiis asperiores excepturi quas. Velit beatae modi vel totam, deleniti ipsa enim quibusdam placeat. Amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam optio, dolorum animi atque magnam totam dolor.",
            schedule: `
                <li>Saturday-Sunday: 8:00am - 10:00am</li>
                <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
            `,
            img: "/img/solo.jpg"
        },
        stretching: {
            title: "Why are your Stretching?",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio fugiat ab perferendis quam aliquam, blanditiis asperiores excepturi quas. Velit beatae modi vel totam, deleniti ipsa enim quibusdam placeat. Amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam optio, dolorum animi atque magnam totam dolor.",
            schedule: `
                <li>Saturday-Sunday: 8:00am - 10:00am</li>
                <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
            `,
            img: "/img/stret.webp"
        }
    };

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            const classType = this.dataset.class;
            const data = classData[classType];

            if (data) {
                title.textContent = data.title;
                description.textContent = data.description;
                schedule.innerHTML = data.schedule;
                image.src = data.img;
                image.alt = classType;
            }

            // Aktif butonu vurgula
            buttons.forEach(btn => btn.classList.remove("active-btn"));
            this.classList.add("active-btn");
        });
    });
});
/* js for section2 end */

/* js for bmi calculater start */
function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let triangle = document.getElementById("triangle");

    if (!height || !weight) {
        triangle.style.left = "50%";
        return;
    }

    let bmi = weight / ((height / 100) ** 2);

    let imageWidth = 500; 
    let minBMI = 10;  
    let maxBMI = 40;  

    let position = ((bmi - minBMI) / (maxBMI - minBMI)) * imageWidth;

    position = Math.max(0, Math.min(position, imageWidth));

    triangle.style.left = `${position}px`;
}
/* js for bmi calculater end */