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



const courseList = document.querySelector('#course-grid');
const totalCredits = document.querySelector('#total-credits');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayCourses(courseArray) {
    courseList.innerHTML = '';

    courseArray.forEach((course) => {
        const courseCard = document.createElement('div');

        courseCard.className = course.completed ? 'course-card completed' : 'course-card';
        courseCard.innerHTML = `
      ${course.category} ${course.number}
      <span>${course.completed ? 'Completed' : 'Not completed'}</span>
    `;

        courseList.appendChild(courseCard);
    });

    const credits = courseArray.reduce((total, course) => total + course.credits, 0);
    totalCredits.textContent = `Total Credits: ${credits}`;
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
            displayCourses(courses);
        } else {
            const filtered = courses.filter(item => item.category === selectedCategory);
            displayCourses(filtered);
        }
    });
});

// Initialize the view with all 10 items present
displayCourses(courses);













// function setActiveButton(selectedButton) {
//     filterButtons.forEach((button) => {
//         button.classList.remove('active-filter');
//         button.setAttribute('aria-pressed', 'false');
//     });

//     selectedButton.classList.add('active-filter');
//     selectedButton.setAttribute('aria-pressed', 'true');
// }

// filterButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         setActiveButton(button);

//         const filter = button.dataset.filter;
//         const filteredCourses = filter === 'all'
//             ? courses
//             : courses.filter((course) => course.subject === filter);

//         displayCourses(filteredCourses);
//     });
// });

// displayCourses(courses);


/**********************dialogelements(course-details)**********************************************/

const courseDetails = document.querySelector('#course-details');

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseDiv.addEventListener('click', () => {
    displayCourseDetails(course);
});