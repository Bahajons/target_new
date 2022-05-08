
// Slider start
let array = [
  { title: "Target International school1", description: "Biznes va IT ga ixtisoslashgan1", text: "1lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corrupti, possimus, rerum quas unde impedit, officiis" },
  { title: "Target International school2", description: "Biznes va IT ga ixtisoslashgan2", text: "2lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corrupti, possimus, rerum quas unde impedit, officiis" },
  { title: "Target International school3", description: "Biznes va IT ga ixtisoslashgan3", text: "3lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corrupti, possimus, rerum quas unde impedit, officiis" }
]

let mainSlider = document.getElementById('main_slider');
let postim = document.getElementById('postim');
function GetData() {
  let slider = '';
  for (let i = 0; i < array.length; i++) {
    slider += `<div class="single-slider slider-height d-flex align-items-center justify-content-center"
        style="background-image: url(img/slider/slider_bg_1.jpg);">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-md-12">
              <div class="slider-content slider-content-2">
                <h1 class="white-color f-700" data-animation="fadeInUp" data-delay=".2s"><span>${array[i].description}</span><br>${array[i].title}</h1>
                <p data-animation="fadeInUp" data-delay=".4s">${array[i].text}<br> incididunt ut labore et dolore magna aliqua enim ad minime.</p>
                <button class="theme-btn" data-animation="fadeInUp" data-delay=".6s"><span class="btn-text">
                <a style="color: black;" href="contact_us.html">Bog'lanish</a></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>`
  }
  // postim.innerHTML = `<div class="slider-active" id="main_slider">${slider}</div>`;
}
GetData()
// Slider end



// News start
let newsId = document.getElementById('newsId')
function GetNews() {
  fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(json => {
      Paint(json)
    });
}
GetNews();
function Paint(json) {
  newsId.innerHTML = ''
  for (let i = 0; i < 10; i++) {
    newsId.innerHTML += `<div class="col-xl-6 offset-xl-0 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
    <div class="single-events mb-30">
      <div class="events-wrapper events-wrapper-padding">
        <div class="events-inner d-flex">
          <div class="events-thumb">
            <a href="NewsssDetails.html"><img src="img/events/small_events_thumb_01.jpg" alt=""></a>
          </div>
          <div class="events-text white-bg">
            <div class="event-text-heading mb-20">
              <div class="events-calendar text-center f-left">
                <span class="date">25</span>
                <span class="month">Sep, 2018</span>
              </div>
              <div class="events-text-title clearfix">
                <a onclick="NewsDetails(${json[i].id})">
                  <h4>${json[i].title}</h4>
                </a>
                <div class="time-area">
                  <span class="ti-time"></span>
                  <span class="published-time">05:23</span>
                </div>
              </div>
            </div>
            <div class="events-para">
              <p>${json[i].body}</p>
            </div>
            <div class="events-speaker">
              <h2>Speaker : <span>Alexzender</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  }
  console.log(json);

}

function NewsDetails(id) {
  newsId = id;
  localStorage.setItem("newsId", id)
  window.location.href = "NewsDetails.html";
}
// News end
// NewsDetails start

function NewsDetailsOne() {
  let id = localStorage.getItem("newsId");
  let NewsTitle = document.getElementById("NewsTitle")
  let NewsDiscription = document.getElementById("NewsDiscription")
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      NewsTitle.innerHTML = json.title;
      NewsDiscription.innerHTML = json.body;
    });
  // console.log("Bosildi");
  // console.log(id);
}
NewsDetailsOne()

// NewsDetails start
