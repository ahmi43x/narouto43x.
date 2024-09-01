// JavaScript for interactive elements

// Function to toggle the mobile navigation menu
function toggleNav() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// Add event listener to mobile menu button
document.getElementById('menu-toggle').addEventListener('click', toggleNav);

// Function for smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle the character builder
document.getElementById('character-builder-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('character-name').value;
    const skill = document.getElementById('character-skill').value;
    const village = document.getElementById('character-village').value;

    alert(`Your Naruto character:
    Name: ${name}
    Skill: ${skill}
    Village: ${village}`);
});

// Function to handle the Naruto quiz
function checkQuizAnswers() {
    const question1 = document.querySelector('input[name="question1"]:checked').value;
    const question2 = document.querySelector('input[name="question2"]:checked').value;
    let score = 0;

    if (question1 === 'correct') score++;
    if (question2 === 'correct') score++;

    alert(`Your score is ${score}/2`);
}

// Add event listener to quiz submit button
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
    checkQuizAnswers();
});

// Character hover effect
const characterImages = document.querySelectorAll('.character-image');
characterImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Example function to dynamically update latest news
function updateLatestNews() {
    const newsContainer = document.getElementById('latest-news');
    // Example of adding new news dynamically
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
        <h3>New Naruto Episode Announced!</h3>
        <p>Stay tuned for the latest episode coming next week!</p>
    `;
    newsContainer.appendChild(newsItem);
}

// Call updateLatestNews on page load
window.addEventListener('load', updateLatestNews);

// Example of dynamically updating the news items
function updateLatestNews() {
    const newsContainer = document.querySelector('.news-items');
    const newsData = [
        {
            title: 'New Naruto Episode Announced!',
            content: 'Stay tuned for the latest episode coming next week!'
        },
        {
            title: 'Special Manga Release',
            content: 'Check out the special edition of the Naruto manga series available now!'
        },
        {
            title: 'Fan Art Contest Winners',
            content: 'Congratulations to the winners of our Naruto fan art contest!'
        }
    ];

    newsContainer.innerHTML = newsData.map(news => `
        <div class="news-item">
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        </div>
    `).join('');
}

// Call the function to load news on page load
window.addEventListener('load', updateLatestNews);
document.addEventListener("DOMContentLoaded", function () {
    // Snow Effect for Heading
    const snowEffectHeading = document.querySelectorAll('.snow-effect-heading');
    snowEffectHeading.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.classList.add('snow-animation');
        });
        heading.addEventListener('mouseout', () => {
            heading.classList.remove('snow-animation');
        });
    });

    // 3D Transition for Latest News Heading
    const latestNewsHeading = document.querySelector('.latest-news h2');
    latestNewsHeading.addEventListener('mouseover', () => {
        latestNewsHeading.classList.add('rotate-3d');
    });
    latestNewsHeading.addEventListener('mouseout', () => {
        latestNewsHeading.classList.remove('rotate-3d');
    });

    // Interactive Elements: Character Builder and Naruto Quiz
    document.querySelector('.character-builder').addEventListener('click', function () {
        alert('Character Builder tool is under development!');
    });

    document.querySelector('.naruto-quiz').addEventListener('click', function () {
        alert('Naruto Quiz will be available soon!');
    });

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        this.reset();
    });

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive Polls: Example Functionality
    // Assuming there's some logic to handle polls, here’s a basic example
    const pollChoices = document.querySelectorAll('.poll-choice');
    pollChoices.forEach(choice => {
        choice.addEventListener('click', () => {
            choice.classList.toggle('selected');
            alert('You selected: ' + choice.textContent);
        });
    });

    // Hover Animation for Blog Heading
    const blogHeading = document.querySelector('.blog-heading');
    blogHeading.addEventListener('mouseover', () => {
        blogHeading.classList.add('hover-animation');
    });
    blogHeading.addEventListener('mouseout', () => {
        blogHeading.classList.remove('hover-animation');
    });
});
