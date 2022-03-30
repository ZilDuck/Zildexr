import "./App.css"

function App() {
  return (
    <>
      <nav className="py-4 nav container">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-5 col-sm-1 col-xxl-2">
              <a href="index.html" className="logo">
                Zildexr
              </a>
            </div>
            <div className="pb-4 pb-md-0 mobile-menu col-sm-10 col-lg-5">
              <div className="d-md-flex justify-content-center justify-content-md-end align-items-center text-center h-full">
                <a href="about.html" className="caption-3 mt-4 mt-sm-0 me-sm-4 pb-4 pb-sm-0">
                  Home
                </a>
                <a href="sign-up.html" className="btn transparent-green small">
                  Sign Up
                </a>
              </div>
            </div>
            <button className="hamburger nav-btn active">
              <img className="w-full rounded" src="i/hamburger.svg" alt="" />
              <p>Menu</p>
            </button>
            <button className="nav-btn close">
              <img className="w-full rounded" src="i/close.svg" alt="" />
              <p>Close</p>
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-5 pb-5 block-1">
        <div className="pb-6 container">
          <div className="row align-items-center">
            <div className="mb-6 mb-lg-0 col-12 col-lg-6 col-xxl-5">
              <h1 className="mb-4">Simply explained with illustrations</h1>
              <p className="mb-4 pb-4 pe-xxl-6 body-21 grey-dark-4">
                There are a lot of different components that will help you create the perfect look for your project
              </p>
              <a href="resources-library.html" className="me-3 d-inline-block btn indigo medium">
                Get Started
              </a>
              <a href="features.html" className="d-inline-block btn transparent-indigo medium">
                Learn More
              </a>
            </div>
            <div className="px-xxl-0 col-12 col-lg-6 col-xxl-7">
              <img className="w-full" src="i/block-1-img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-6 bg-grey block-2">
        <div className="pt-6 pb-6 container">
          <div className="row align-items-stretch">
            <div className="col-lg-7 col-xl-6 order-1 order-lg-0">
              <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-stretch">
                <div className="mb-5 pe-sm-2 pe-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src="i/block-2-img-1.svg" alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">Managment</p>
                    <p className="body-17 grey-dark-4">Software platform for running your new internet business</p>
                  </div>
                </div>
                <div className="mb-5 ps-sm-2 ps-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src="i/block-2-img-2.svg" alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">Entertainment</p>
                    <p className="body-17 grey-dark-4">Software platform for running your new internet business</p>
                  </div>
                </div>
                <div className="mb-5 mb-sm-0 pe-sm-2 pe-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src="i/block-2-img-3.svg" alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">Marketing</p>
                    <p className="body-17 grey-dark-4">Software platform for running your new internet business</p>
                  </div>
                </div>
                <div className="ps-sm-2 ps-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src="i/block-2-img-4.svg" alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">References</p>
                    <p className="body-17 grey-dark-4">Software platform for running your new internet business</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 mb-lg-0 col-lg-5 col-xl-6 order-0 order-lg-1">
              <div className="h-full d-flex flex-column justify-content-between align-items-center">
                <div className="mb-5 mb-lg-0 col-xxl-9">
                  <h2 className="pb-3">The quickest way to create modern presentation</h2>
                  <p className="mb-4 pb-4 pe-xxl-5 body-21 grey-dark-4">
                    Best software platform for running an internet business. We build the most powerful and flexible
                    tools for internet commerce.
                  </p>
                  <div className="d-flex justify-content-start align-items-center">
                    <a
                      href="features.html"
                      className="d-flex justify-content-center align-items-center btn medium transparent-indigo"
                    >
                      Explore All
                    </a>
                  </div>
                </div>
                <div className="col-12 col-xxl-9">
                  <p className="mb-3 caption-3 grey-dark-4">Follow us</p>
                  <div className="d-flex justify-content-start align-items-center">
                    <a href="contacts.html" className="me-2 btn transparent-grey-dark rounded medium-r"></a>
                    <a href="contacts.html" className="me-2 btn transparent-grey-dark rounded medium-r"></a>
                    <a href="contacts.html" className="btn transparent-grey-dark rounded medium-r"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-6 bg-grey block-4">
        <div className="pt-6 pb-6 container text-center">
          <h2 className="mb-3 pb-5">Use illustrations in UI design</h2>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center h-full relative img-container">
                <img src="i/block-4-video-poster.png" srcSet="i/block-4-video-poster@2x.png 2x" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=glQboYwNVzs"
                  data-fancybox
                  className="video-btn btn black rounded large-r"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-6 block-5">
        <div className="pt-6 pb-6 container">
          <div className="row justify-content-xxl-center align-items-center">
            <div className="mb-6 col-md-5 col-lg-6 col-xxl-5">
              <img src="i/block-5-img-1.svg" alt="" className="w-full" />
            </div>
            <div className="mb-6 col-md-7 col-lg-6 col-xxl-5">
              <div className="d-flex justify-content-center">
                <div className="col-xxl-10">
                  <h3 className="mb-4">Make more time for&nbsp;the&nbsp;work</h3>
                  <ul className="mb-6">
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">
                      Many ways to use illustrations in design
                    </li>
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">
                      Simply explained with illustrations
                    </li>
                    <li className="d-flex justify-content-start align-items-center body-21">
                      Make more time for the work
                    </li>
                  </ul>
                  <div className="d-flex justify-content-start">
                    <a
                      href="features.html"
                      className="d-flex justify-content-center align-items-center btn medium transparent-indigo"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xxl-5 order-3 order-md-2">
              <div className="d-flex justify-content-center">
                <div className="col-xxl-10">
                  <h3 className="mb-4">Simply explained with video</h3>
                  <ul className="mb-6">
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">
                      Many ways to use illustrations in design
                    </li>
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">
                      Simply explained with illustrations
                    </li>
                    <li className="d-flex justify-content-start align-items-center body-21">
                      Make more time for the work
                    </li>
                  </ul>
                  <div className="d-flex justify-content-start">
                    <a
                      href="features.html"
                      className="d-flex justify-content-center align-items-center btn medium transparent-indigo"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 mb-lg-0 col-md-5 col-lg-6 col-xxl-5 order-2 order-md-3">
              <img src="i/block-5-img-2.svg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-sm-7 text-white overflow-hidden bomb-block">
        <div className="pt-2 container">
          <div className="row justify-content-start">
            <div className="mb-5 mb-sm-0 pe-xxl-0 col-sm-11 col-md-10 col-lg-8 col-xxl-6 text-block">
              <h2 className="mb-5">The quickest way to create awesome presentation</h2>
              <a href="apps.html" className="me-3 d-inline-block btn green medium">
                Get Started
              </a>
              <a href="about.html" className="d-inline-block btn transparent-grey-light medium">
                Learn More
              </a>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-4 col-xxl-6 d-flex d-sm-block justify-content-center relative img-block">
              <img src="i/bomb.svg" alt="" className="d-block" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-6 blog-block">
        <div className="pt-6 pb-6 container">
          <h2 className="mb-3">Get more from our blog</h2>
          <div className="mb-4 pb-4 row justify-content-between">
            <div className="col-md-6 col-lg-5">
              <p className="body-21 grey-dark-4">
                There are a lot of different components that will help you create the perfect look for your project
              </p>
            </div>
            <div className="mt-5 mt-md-0 col-md-6 col-lg-2">
              <div className="d-flex justify-content-md-end align-items-center">
                <a
                  href="blog.html"
                  className="d-flex justify-content-center align-items-center btn medium transparent-indigo"
                >
                  Explore All
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="mb-5 mb-lg-0 col-md-10 col-lg-4">
              <a href="blog.html" className="LinkBlog">
                <div className="mb-3 pt-6 pb-6 d-flex justify-content-center align-items-center rounded overflow-hidden relative bg-blur">
                  <img src="i/blog-block-img-1.svg" alt="" className="bg-img" />
                  <img src="i/blog-block-img-1.svg" alt="" className="mt-2 mb-2 d-block" height="155" width="155" />
                </div>
                <h5 className="pt-2 mb-3">Make myspace your best designed space</h5>
                <p className="mb-4 body-17 grey-dark-4">
                  A lot of different components that will help you create the perfect look for your project
                </p>
                <div className="d-inline-block hashtag no-hover">Design</div>
              </a>
            </div>
            <div className="mb-5 mb-lg-0 col-md-10 col-lg-4">
              <a href="blog.html" className="LinkBlog">
                <div className="mb-3 pt-6 pb-6 d-flex justify-content-center align-items-center rounded overflow-hidden relative bg-blur">
                  <img src="i/blog-block-img-2.svg" alt="" className="bg-img" />
                  <img src="i/blog-block-img-2.svg" alt="" className="mt-2 mb-2 d-block" height="155" width="155" />
                </div>
                <h5 className="pt-2 mb-3">My company culture has changed today</h5>
                <p className="mb-4 body-17 grey-dark-4">
                  A lot of different components that will help you create the perfect look for your project
                </p>
                <div className="d-inline-block hashtag no-hover">3D Illustrations</div>
              </a>
            </div>
            <div className="col-md-10 col-lg-4">
              <a href="blog.html" className="LinkBlog">
                <div className="mb-3 pt-6 pb-6 d-flex justify-content-center align-items-center rounded overflow-hidden relative bg-blur">
                  <img src="i/blog-block-img-3.svg" alt="" className="bg-img" />
                  <img src="i/blog-block-img-3.svg" alt="" className="mt-2 mb-2 d-block" height="155" width="155" />
                </div>
                <h5 className="pt-2 mb-3">Professionals in craft! All products were super great</h5>
                <p className="mb-4 body-17 grey-dark-4">
                  A lot of different components that will help you create the perfect look for your project
                </p>
                <div className="d-inline-block hashtag no-hover">Development</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-5 bg-black footer">
        <div className="pt-5 pb-3 container">
          <div className="row align-items-start pb-6">
            <div className="mb-6 mb-md-0 col-12 col-md-2 col-lg-2 col-xxl-4">
              <a href="index.html" className="logo text-white">
                Zildexr
              </a>
            </div>
            <div className="col-12 col-md-10 col-lg-10 col-xxl-8">
              <div className="d-flex flex-wrap align-items-start">
                <div className="mb-4 mb-lg-0 col-6 col-lg-3 col-xxl-3">
                  <a href="index.html" className="mb-4 d-block caption-1 medium text-white">
                    Home
                  </a>
                  <a href="careers.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Become Affiliate
                  </a>
                  <a href="pricing.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Go Unlimited
                  </a>
                  <a href="help-center.html" className="d-block caption-2 medium grey-light-4">
                    Services
                  </a>
                </div>
                <div className="mb-4 mb-lg-0 col-6 col-lg-3 col-xxl-3">
                  <a href="apps.html" className="mb-4 d-block caption-1 medium text-white">
                    Products
                  </a>
                  <a href="api.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Design Systems
                  </a>
                  <a href="resources-library.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Themes & Templates
                  </a>
                  <a href="features.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Mockups
                  </a>
                  <a href="api.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Presentations
                  </a>
                  <a href="resources-library.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Wireframes Kits
                  </a>
                  <a href="apps.html" className="d-block caption-2 medium grey-light-4">
                    UI Kits
                  </a>
                </div>
                <div className="mb-4 mb-lg-0 col-6 col-lg-3 col-xxl-3">
                  <a href="text.html" className="mb-4 d-block caption-1 medium text-white">
                    Legals
                  </a>
                  <a href="404.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    License
                  </a>
                  <a href="text.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Refund Policy
                  </a>
                  <a href="about.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    About Us
                  </a>
                  <a href="contacts.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Contacts
                  </a>
                </div>
                <div className="col-6 col-lg-3 col-xxl-3">
                  <a href="blog.html" className="mb-4 d-block caption-1 medium text-white">
                    Blog
                  </a>
                  <a href="blog.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Business Stories
                  </a>
                  <a href="blog.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Digital Store
                  </a>
                  <a href="blog.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Learning
                  </a>
                  <a href="contacts.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Social Media
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-5 row justify-content-center justify-content-sm-between align-items-center border-top-light">
            <div className="me-2 me-sm-0 px-0 px-sm-auto col-auto caption-2 medium grey-light-4">Copyright © 2020</div>
            <div className="px-0 px-sm-auto col-auto">
              <div className="d-flex justify-content-end align-items-center">
                <a href="contacts.html" className="me-1 me-sm-2 btn rounded medium-r transparent-grey-light"></a>
                <a href="contacts.html" className="me-1 me-sm-2 btn rounded medium-r transparent-grey-light"></a>
                <a href="contacts.html" className="btn rounded medium-r transparent-grey-light"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="js/script.min.js"></script>
    </>
  )
}

export default App
