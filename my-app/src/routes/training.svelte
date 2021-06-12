<svelte:head>
	<title>Support structures for victims of SSV</title>
</svelte:head>

<head>
    <style>
    /*each image is referenced twice in the HTML, but each image only needs to be updated in the CSS*/
    .image1 {
      content: url("https://i.imgur.com/MkobVHR.png")
    }
  
    .image2 {
      content: url("https://i.imgur.com/oP3Zsfp.png")
    }
  
    .image3 {
      content: url("https://i.imgur.com/5EgGZJp.png")
    }
  
    .image4 {
      content: url("https://i.imgur.com/80v2R55.png")
    }
  
    .image5 {
      content: url("https://i.imgur.com/IfLPTDB.png")
    }

    .image6 {
      content: url("https://i.imgur.com/XSisIuU.png")
    }
      </style>
  </head> 
 
  <body>
    <section class="mx-auto max-w-2xl">
      <h2 class="text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2">Training of students</h2>
      <p class="text-xl text-center tracking-wide font-serif leading-loose mb-2">Today, we would like to present one of our working groups, composed of students and alumni: support structures for victims of SSV (sexist and sexual violence).</p>
      <div class="shadow-2xl relative">
        <!-- large image on slides -->
        <div class="mySlides hidden">
          <div class="image1 w-full object-cover"></div>
        </div>
        <div class="mySlides hidden">
          <div class="image2 w-full object-cover"></div>
        </div>
        <div class="mySlides hidden">
          <div class="image3 w-full object-cover"></div>
        </div>
        <div class="mySlides hidden">
          <div class="image4 w-full object-cover"></div>
        </div>
        <div class="mySlides hidden">
          <div class="image5 w-full object-cover"></div>
        </div>
        <div class="mySlides hidden">
          <div class="image6 w-full object-cover"></div>
        </div>
  
        <!-- butttons -->
        <a class="absolute left-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold" onclick="plusSlides(-1)">❮</a>
        <a class="absolute right-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold" onclick="plusSlides(1)">❯</a>
  
  
        <!-- smaller images under description -->
        <div class="flex">
          <div>
            <img class="image1 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(1)" alt="article">
          </div>
          <div>
            <img class="image2 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(2)" alt="article">
          </div>
          <div>
            <img class="image3 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(3)" alt="article">
          </div>
          <div>
            <img class="image4 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(4)" alt="article">
          </div>
          <div>
            <img class="image5 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(5)" alt="article">
          </div>
          <div>
            <img class="image6 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(6)" alt="article">
          </div>
        </div>
      </div>
    </section>
  
  
    <script>
      //JS to switch slides and replace text in bar//
      var slideIndex = 1;
      showSlides(slideIndex);
  
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
  
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
  
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("description");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
          slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" opacity-100", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " opacity-100";
        captionText.innerHTML = dots[slideIndex - 1].alt;
      }
    </script>
  </body>