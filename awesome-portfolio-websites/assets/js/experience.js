AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Associate Software Engineer",
    cardImage: "assets/images/experience-page/infinite.jpg",
    place: "Infinite Computer Solutions",
    Location:"Chennai, India",
    time: "(May, 2024 - present)",
    desp: "<li>Got training on ASP.Net Technolgies like (ASP.Net Framework with C#, ADO.Net, Entity Framework, MVC), Web APIs, Advance SQL, Web Technolgies.</li>"
  },
  {
    title: "Virtual Customer Service Associate",
    cardImage: "assets/images/experience-page/Amazon.png",
      place: "Amazon",
      Location: "Remote",
    time: "(July, 2023 - Aug, 2023)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li></li>",
  },
  {
    title: "Web Developer Intern",
    cardImage: "assets/images/experience-page/IPES.png",
      place: "Indian Pharma Educational Society",
      Location: "Lucknow, India",
    time: "(Apr, 2022 - Jun, 2022)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
    },
    {
        title: "Cloud Computing Intern",
        cardImage: "assets/images/experience-page/MTE.jpg",
        place: "MedTourEasy",
        Location: "Remote",
        time: "(Apr, 2022 - Jun, 2022)",
        desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
    },
    {
        title: "Web Developer Intern",
        cardImage: "assets/images/experience-page/SUN.png",
        place: "Sun Infotech Solutions",
        Location: "Lucknow, India",
        time: "(Oct, 2020 - Nov, 2020)",
        desp: "<li>Developed an E-Commerce Website as which was Mobile E-Shopping website in which user can see and compare the features of the smartphones and get link for the best price</li>The website was based on ASP.Net Technology</li>",
    },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, Location, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <p class="meta">
              <span class="pre-heading">${Location}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
        title: "Google Developer Student Club, BBDITM",
    cardImage: "assets/images/experience-page/gdsc.jpg",
    description:
      "Cloud Computing Facilitator at Google Developer Student Club, BBDNITM (6 th August, 2021 – 30th July,2022).",
  },
  {
    title: "Google Cloud Skills Boost",
    cardImage: "assets/images/experience-page/Cloud.jpg",
    description:
          "Completed 300+ Google Cloud Labs. My QWIKLABS Profile  https://rb.gy/t110j9 "
,
  },
  {
      title: "HackerRank",
      cardImage: "assets/images/experience-page/hackerrank.png",
    description:
      "Gold (5 Star) Badge for Java.",
  },
  {
    title: "Internamtional Mathematics Webinar, BBDITM",
    cardImage: "assets/images/experience-page/Webinar.jpg",
    description:
      "Organized an International Mathematics Webinar conducted in College.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
        title: "International Benchmark Test",
    subtitle: "Participant",
    image: "assets/images/experience-page/ACER.JPG",
        desp: "Participated in International Benchmark Tests conducted by The Australian Council for Education Research Ltd – 2015.",
        href: "https://www.acer-ibt.org/in",
  },
  {
      title: "Google Developer Student Club, BBDNITM ",
      subtitle: "Cloud Computing Facilitator (6th August, 2021 – 30th July, 2022)",
    image: "assets/images/experience-page/gdsc.jpg",
    desp: "Guided 300+ students about the google cloud technolnolgies performed over 100+ labs",
      href: "https://gdsc.community.dev/chapters/",
  },
  {
      title: "International Mathematics Webinar",
    subtitle: "Organiser",
    image: "assets/images/experience-page/Webinar.jpg",
      desp: "Organized an International Mathematics Webinar conducted by Babu Banarasi Das Insitiute of Technology and Management, Lucknow",
      href: "https://bbdnitm.ac.in/overview/",
  },
  {
      title: "National Cyber Olympiad",
    subtitle: "Participant",
    image: "assets/images/experience-page/SOF.jpg",
      desp: "Participated in National Cyber Olympiad conducted by Science Olympiad Foundation (SOF).",
      href: "https://www.sofolympiadtrainer.com/nco-olympiad.jsp#:~:text=The%20National%20Cyber%20Olympiad%20%28NCO%29%20is%20a%20cyber,scientists%2C%20technologists%20and%20IT%20talent%20at%20school%20level.",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
