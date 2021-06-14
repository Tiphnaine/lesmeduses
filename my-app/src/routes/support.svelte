<svelte:head>
	<title>Support structures for victims of SSV</title>
</svelte:head>
 
<head>
  <style>
    /*each image is referenced twice in the HTML, but each image only needs to be updated in the CSS*/
    .image1 {
      content: url("https://i.imgur.com/o4xH0Td.png")
    }
  
    .image2 {
      content: url("https://i.imgur.com/QhgelQp.png")
    }
  
    .image3 {
      content: url("https://i.imgur.com/oRcLeK1.png")
    }
  
    .image4 {
      content: url("https://i.imgur.com/UPnvnvN.png")
    }
  
    .image5 {
      content: url("https://i.imgur.com/FlLXG3d.png")
    }

    .image6 {
      content: url("https://i.imgur.com/fhg46yF.png")
    }
    </style>
</head> 
  
  <body>
    <section class="mx-auto max-w-2xl">
      <h1 class="text-xl text-center tracking-wide font-bold  leading-loose mb-2">Support structures for victims of SSV (sexist and sexual violence)</h1>
      <p class="text-center tracking-wide leading-loose mb-2">Today, we would like to present one of our working groups, composed of a dozen students and alumni: student training.</p>
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
  <style>
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    p {
      width: 100%;
      --tw-text-opacity: 1;
      color: rgba(75, 85, 99, var(--tw-text-opacity));
      font-family: Arial, Helvetica, sans-serif;
      /* text-align:center; */
    }
  
    h1 {
      width: 100%;
      color : #552B4D;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    h2 {
      width: 100%;
      color : #B366A4;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    a {
      color: var(--heading-color);
      text-decoration: none;
      transition: color 0.2s linear;
    }
  
    a:hover {
      color: #B366A4;
    }
    /* .welcome {
      position: absolute;
      width: 200px;
      height: 200px;
    } */
  
    .testimonial {
    border-radius: 1rem;
  }
  </style>