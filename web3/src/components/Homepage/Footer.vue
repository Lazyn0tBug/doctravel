<template>
  <!-- Subscribe Section Start -->
  <section id="Subscribes" class="text-center py-20 bg-blue-100">
    <div class="container">
      <div class="flex justify-center mx-3">
        <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <h4 class="mb-3 section-heading wow fadeInUp" data-wow-delay="0.3s">Start For Free</h4>
          <p class="mb-4 text-gray-600 leading-loose text-sm wow fadeInUp" data-wow-delay="0.6s">
            Existing customized ideas through client-based deliverables. <br />
            Compellingly unleash fully tested outsourcing
          </p>
          <form for="">
            <div class="wow fadeInDown" data-wow-delay="0.3s">
              <input
                type="Email"
                class="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none"
                name="email"
                placeholder="Email Address"
              />
              <button
                class="border-0 bg-blue-600 text-white rounded-full w-12 h-12 duration-300 hover:opacity-75"
                type="submit"
              >
                <i class="lni lni-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Subscribe Section End -->

  <!-- Footer Section Start -->
  <footer id="footer" class="bg-gray-800 py-16">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.2s">
          <div class="mx-3 mb-8">
            <div class="footer-logo mb-3">
              <img src="../../assets/img/logo.svg" alt="" />
            </div>
            <p class="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam excepturi quasi,
              ipsam voluptatem.
            </p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.4s">
          <div class="mx-3 mb-8">
            <h3 class="font-bold text-xl text-white mb-5">Company</h3>
            <ul>
              <li><a href="#" class="footer-links">Press Releases</a></li>
              <li><a href="#" class="footer-links">Mission</a></li>
              <li><a href="#" class="footer-links">Strategy</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.6s">
          <div class="mx-3 mb-8">
            <h3 class="font-bold text-xl text-white mb-5">About</h3>
            <ul>
              <li><a href="#" class="footer-links">Career</a></li>
              <li><a href="#" class="footer-links">Team</a></li>
              <li><a href="#" class="footer-links">Clients</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.8s">
          <div class="mx-3 mb-8">
            <h3 class="font-bold text-xl text-white mb-5">Find us on</h3>

            <ul class="social-icons flex justify-start">
              <li class="mx-2">
                <a href="#" class="footer-icon hover:bg-indigo-500">
                  <i class="lni lni-facebook-original" aria-hidden="true"></i>
                </a>
              </li>
              <li class="mx-2">
                <a href="#" class="footer-icon hover:bg-blue-400">
                  <i class="lni lni-twitter-original" aria-hidden="true"></i>
                </a>
              </li>
              <li class="mx-2">
                <a href="#" class="footer-icon hover:bg-red-500">
                  <i class="lni lni-instagram-original" aria-hidden="true"></i>
                </a>
              </li>
              <li class="mx-2">
                <a href="#" class="footer-icon hover:bg-indigo-600">
                  <i class="lni lni-linkedin-original" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->

  <section class="bg-gray-800 py-6 border-t-2 border-gray-700 border-dotted">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full text-center">
          <p class="text-white">
            Copyright &copy; {{ new Date().getFullYear() }} 镜心堂. All Rights reserved.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Go to Top Link -->
  <a
    href="#"
    class="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400"
  >
    <i class="lni lni-arrow-up"></i>
  </a>

  <!-- Preloader -->
  <!--     <div id="preloader">
      <div class="loader" id="loader-1"></div>
    </div> -->
  <!-- End Preloader -->
</template>
