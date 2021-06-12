<svelte:head>
	<title>The Perception of the naked body</title>
</svelte:head>

<head>
    <style>
    /*each image is referenced twice in the HTML, but each image only needs to be updated in the CSS*/
    .image1 {
      content: url("https://i.imgur.com/2Fp3NAr.png")
    }
  
    .image2 {
      content: url("https://i.imgur.com/eHQWXAS.png")
    }
  
    .image3 {
      content: url("https://i.imgur.com/z7B0tEP.png")
    }
  
    .image4 {
      content: url("https://i.imgur.com/GwiBdn6.png")
    }
  
    .image5 {
      content: url("https://i.imgur.com/vTsCM2z.png")
    }

    .image6 {
      content: url("https://i.imgur.com/RDq1YJe.png")
    }

    .image7 {
      content: url("https://i.imgur.com/GsG64OZ.png")
    }
    .image8 {
      content: url("https://i.imgur.com/ZCX7rwm.png")
    }

    .image9 {
      content: url("https://i.imgur.com/P6EZ2VJ.png")
    }
      </style>
  </head> 
  
  <body>
    <section class="mx-auto max-w-2xl">
      <h2 class="text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2">The Perception of the naked body</h2>
      <p class="text-xl text-center tracking-wide font-serif leading-loose mb-2">Did you follow the case of Corinne Masiero? No, it doesn't ring a bell ? Okay.
        The woman who undressed on stage during the Césars ceremony to denounce the situation of the temporary show business workers? It comes back faster.
        Today, les Méduses present you their first campaign about the gendered perception of the naked body. Why did Corinne Masiero's performance shock so much? Why did we ignore the message she was trying to convey and comment on her physique instead?</p>
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
        <div class="mySlides hidden">
          <div class="image7 w-full object-cover"></div>
        </div>
        <div class="mySlides hidden">
          <div class="image8 w-full object-cover"></div>
        </div>
        <div class="mySlides hidden">
          <div class="image9 w-full object-cover"></div>
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
            <img class="image6 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(5)" alt="article">
          </div>
          <div>
            <img class="image7 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(5)" alt="article">
          </div>
          <div>
            <img class="image8 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(5)" alt="article">
          </div>
          <div>
            <img class="image9 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" onclick="currentSlide(5)" alt="article">
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