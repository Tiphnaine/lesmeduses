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
        <h1 class="font-sans sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Contactez-nous</h1>
        <p class="font-sans lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">Write your questions/requests on this form, we will answer you by mail as soon as possible.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto ">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="font-sans leading-7 text-sm text-gray-600">First & last name</label>
              <input type="text" id="name" name="name" placeholder="..." bind:value={name} required
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="font-sans leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" placeholder="..." bind:value={email} required
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="font-sans leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" placeholder="..." bind:value={message} required
               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button type="submit" class="font-sans inline-flex items-center bg-gray-100 border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0 flex mx-auto">Send</button>
          </div>
          <!-- <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"> -->
          
        </div>
      </div>
    </div>
  </form>
  <style>
        button {
    background-color: #FFFFFF;
    color:#552B4D;
}
  button:hover {
    background-color: #B366A4;
    color:#FFFFFF;
}
</style>