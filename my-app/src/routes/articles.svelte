<svelte:head>
	<title>Articles</title>
</svelte:head>

<section class="text-gray-600 body-font"> 

  <div class="py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h1 class="font-sans sm:text-3xl text-2xl font-bold title-font mb-4">Our article</h1>
          <p>Learn more about our work</p>
        </div>
      </div>
  </div>
  </section>

<section class="text-gray-600 body-font">
    <div class="container px-5 py-5 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/3">
          <div class="h-full bg-gray-100 bg-opacity-75 px-8  pb-10 pt-5 rounded-lg overflow-hidden text-center relative">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Campaign #1</h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">The gendered perception of the naked body</h1>
            <p class="leading-relaxed mb-3">Today, les Méduses present you their first campaign about the gendered perception of the naked body. Why did Corinne Masiero's performance shock so much? Why did we ignore the message she was trying to convey and comment on her physique instead?</p>
            <a href="/naked" class=" inline-flex items-center">Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div class="h-full bg-gray-100 bg-opacity-75 px-8 pb-10 pt-5 rounded-lg overflow-hidden text-center relative">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Working group #1</h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">Training of students</h1>
            <p class="leading-relaxed mb-3">Today, we would like to present one of our working groups, composed of a dozen students and alumni: student training.</p>
            <a href="/training" class=" inline-flex items-center">Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div class="h-full bg-gray-100 bg-opacity-75 px-8 pb-10 pt-5 rounded-lg overflow-hidden text-center relative">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Working group #2</h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium  mb-3">Support structures for victims of SSV (sexist and sexual violence)</h1>
            <p class="leading-relaxed mb-3"> Today, we would like to present one of our working groups, composed of students and alumni: support structures for victims of SSV (sexist and sexual violence).</p>
            <a href="/support" class=" inline-flex items-center">Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      /* text-align:center; */
    }
  
    h1 {
      width: 100%;
      color : #552B4D;
    }
  
    h2 {
      width: 100%;
      color : #B366A4;
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