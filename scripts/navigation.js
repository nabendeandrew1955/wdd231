
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}`;
document.querySelector("#lastmodified").textContent = `lastmodification: ${document.lastModified}`;




navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Array holding exactly 10 raw data objects
const courses = [
    {
        category: "Wdd Courses",
        number: "Wdd-130",
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        desc: "This course introduces students to the world wide web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major technology.",
        completed: true

    },

    {
        category: "Wdd Courses",
        number: "Wdd-131",
        title: "Dynamic web Fundamentals",
        credits: 3,
        certificate: "Web and Computer Programming",
        desc: "This course builds on prior experience in web fundamental and programming. Students will learn to create dynamic websites that use javascript to respond to events, update content, and create responsive user experiences.",
        completed: true

    },

    {
        category: "Cse Courses",
        number: "Cse-110",
        title: "Introduction to Programming.",
        credits: 2,
        Certificate: "Web and Computer Programming",
        desc: "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, arrays, and input/output) and use them to solve problems.",
        completed: true

    },

    {
        category: "Wdd Courses",
        number: "Wdd-231",
        title: "Front end Web Development 1",
        credits: 2,
        certificate: "Web and Computer Programming",
        desc: "This course builds on prior experience with Dynamic WebFundamentals and programming. Students will focus on user experience, accessibility, compliance, performance, optimization and basic API usage technology.",
        completed: false
    },

    {
        category: "Cse Courses",
        number: "Cse-111",
        title: "Programming with Functions.",
        credits: 3,
        certificate: "Web and Computer Programming",
        desc: "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many displines, including business, physical science, human performance and humanities.",
        completed: false
    },

    {
        category: "Cse Courses",
        number: "Cse-210",
        title: "Programming with Classes",
        credits: 3,
        certificate: "Web and Computer Programming",
        desc: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. it will also work with inheritance and polymorphism.",
        completed: false

    }

];

const courseGrid = document.getElementById('course-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalCreditsDisplay = document.getElementById("total-credits");

// Logic to construct and display items inside the DOM
function renderCourses(filteredList) {
    courseGrid.innerHTML = ''; // Wipe out existing structural elements

    filteredList.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        card.innerHTML = `
                    <div>
                        <span class="course-tag">${course.category}</span>
                        <h3 class="course-title">${course.title}</h3>
                         <h4 class="course-number">${course.number}</h4>
                        <p class="course-desc">${course.desc}</p>
                     <p class="course-credits"><strong>Credits: ${course.credits}</strong></p>
                    </div>
                    <button class="action-btn">View Course</button>
                `;
        courseGrid.appendChild(card);
    });

    const totalCredits = filteredList.reduce((accumulator, currentCourse) => {
        return accumulator + currentCourse.credits;
    }, 0);

    totalCreditsDisplay.textContent = `Total Credits Acquired: ${totalCredits}`;




}

// Logic to toggle selected states and process category checks
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove selected highlight state from all filter items
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Highlight the button that was clicked
        e.target.classList.add('active');

        const selectedCategory = e.target.getAttribute('data-category');

        // Switch statement matching criteria
        if (selectedCategory === 'all') {
            renderCourses(courses);
        } else {
            const filtered = courses.filter(item => item.category === selectedCategory);
            renderCourses(filtered);
        }
    });
});

// Initialize the view with all 10 items present
renderCourses(courses);


