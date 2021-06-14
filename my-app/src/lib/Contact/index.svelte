<script>
    let name;
    let email;
    let message;
    const handleSubmit = () => {
      console.log(name, email, message);
      // alert("Le message a bien été envoyé.");
    }
  </script>
    
  <!-- preventDefault or else the page will refresh when we submit. -->
  <form on:submit={handleSubmit} action="https://formsubmit.co/tiphaine.hersemeule@essec.edu" method="POST">
  
    <div class="container px-5 py-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-12 ">
        <h1 class="font-sans sm:text-3xl text-2xl font-medium font-bold title-font mb-4 ">Contact us</h1>
        <p class="font-sans lg:w-2/3 mx-auto leading-relaxed text-base ">Write your questions/requests on this form, we will answer you by mail as soon as possible.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto ">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="font-sans leading-7 text-sm text-gray-700">First & last name</label>
              <input type="text" id="name" name="name" placeholder="..." bind:value={name} required
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400  focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="font-sans leading-7 text-sm text-gray-700">Email</label>
              <input type="email" id="email" name="email" placeholder="..." bind:value={email} required
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400  focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="font-sans leading-7 text-sm text-gray-700">Message</label>
              <textarea id="message" name="message" placeholder="..." bind:value={message} required
               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400  focus:bg-white focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button type="submit" class="font-sans bg-gray-200 inline-flex items-center  border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0 flex mx-auto">Send</button>
          </div>
          <!-- <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"> -->
          
        </div>
      </div>
    </div>
  </form>
  <style>
        button {
    color:#552B4D;
}
  button:hover {
    background-color: #B366A4;
    color:#FFFFFF;
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


</style>