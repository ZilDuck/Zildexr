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
                {/* <a href="sign-up.html" className="btn transparent-green small">
                  Sign Up
                </a> */}
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
              <h1 className="mb-4">Make your Zilliqa Dapp stand out!</h1>
              <p className="mb-4 pb-4 pe-xxl-6 body-21 grey-dark-4">
                Enrich your application with a variety of request/response pairs to wow your users.
              </p>
              <a href="resources-library.html" className="me-3 d-inline-block btn indigo medium">
                Contact us
              </a>
              <a href="features.html" className="d-inline-block btn transparent-indigo medium">
                Read The Docs!
              </a>
            </div>
            <div className="px-xxl-0 col-12 col-lg-6 col-xxl-7">
              <img className="w-full" src={require("./graph.png")} />
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
                    <img className="mt-1 mb-4" src={require("./i/block-2-img-1.png")} alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">GetContractDetails</p>
                    <p className="body-17 grey-dark-4">Fetch all of the mutable/immutable data in one call</p>
                  </div>
                </div>
                <div className="mb-5 ps-sm-2 ps-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src={require("./i/block-2-img-2.png")} alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">GetNFTForAddress</p>
                    <p className="body-17 grey-dark-4">
                      Retrieve all of the NFT's that a user has associated with their address
                    </p>
                  </div>
                </div>
                <div className="mb-5 pe-sm-2 pe-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src={require("./i/block-2-img-3.png")} alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">GetDeployedContractsForAddress</p>
                    <p className="body-17 grey-dark-4">
                      Know all of the contracts your users have deployed to interact with them
                    </p>
                  </div>
                </div>
                <div className="mb-5 ps-sm-2 ps-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src={require("./i/block-2-img-4.png")} alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">GetTokenID</p>
                    <p className="body-17 grey-dark-4">
                      Fetch either a singular token, a range, or a selection with the associated metadata
                    </p>
                  </div>
                </div>
                <div className="mb-5 mb-sm-0 pe-sm-2 pe-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src={require("./i/block-2-img-1.png")} alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">GetActionsForTokenID</p>
                    <p className="body-17 grey-dark-4">
                      Analyse all of the actions that a singular NFT token has taken
                    </p>
                  </div>
                </div>
                <div className="ps-sm-2 ps-lg-3 col-sm-6">
                  <div className="py-4 px-4 py-lg-5 px-lg-5 bg-white rounded overflow-hidden text-center">
                    <img className="mt-1 mb-4" src={require("./i/block-2-img-2.png")} alt="" height="130" width="130" />
                    <p className="pt-1 pb-2 lead medium">GetStatisticsForMetadata</p>
                    <p className="body-17 grey-dark-4">
                      Calculate all of the NFT attributes and their counts from metadata
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 mb-lg-0 col-lg-5 col-xl-6 order-0 order-lg-1">
              <div className="h-full d-flex flex-column justify-content-between align-items-center">
                <div className="mb-5 mb-lg-0 col-xxl-9">
                  <h2 className="pb-3">Pick and choose what API calls you require</h2>
                  <p className="mb-4 pb-4 pe-xxl-5 body-21 grey-dark-4">
                    With all this functionality at your fingertips, the only question is where will you start? Check out
                    our Pricing page for more details about plans.
                  </p>
                  <div className="d-flex justify-content-start align-items-center">
                    <a
                      href="features.html"
                      className="d-flex justify-content-center align-items-center btn medium transparent-indigo"
                    >
                      Read The Docs!
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

      <div className="pt-6 pb-6 block-9 container text-center">
        <div className="pricing-options">
          <h2 class="pb-3">Pricing options</h2>
          <p class="body-21 grey-dark-4 pb-4">Create the perfect look for your project</p>
          <div className="pt-4 row justify-content-center justify-content-lg-between align-items-stretch pricing-options yearly">
            <div className="mb-5 mb-lg-0 col-sm-10 col-lg-4 text-start pricing-block yearly">
              <div className="d-flex flex-column justify-content-between inner h-full">
                <div>
                  <div className="pt-5 px-5 pb-4 d-flex justify-content-between align-items-center border-bottom-dark">
                    <h5>Start</h5>
                    <h5>Free</h5>
                  </div>
                  <div className="px-5 py-5">
                    <ul>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Editable boards
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Anonymous board viewers
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Premade templates
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Core integrations
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <a href="resources-library.html" className="d-block w-full btn outline-grey medium text-center">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-5 mb-lg-0 col-sm-10 col-lg-4 text-start pricing-block yearly">
              <div className="d-flex flex-column justify-content-between bg-indigo text-white inner h-full">
                <div>
                  <div className="pt-5 px-5 pb-4 d-flex justify-content-between align-items-center border-bottom-light">
                    <h5>Business</h5>
                    <h5>$10/m</h5>
                  </div>
                  <div className="px-5 py-5">
                    <ul>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Editable boards
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Anonymous board viewers
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Premade templates
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Core integrations
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Basic attention management
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Asana integration
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <a href="resources-library.html" className="d-block w-full btn outline-white medium text-center">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-lg-4 text-start pricing-block yearly">
              <div className="d-flex flex-column justify-content-between bg-black text-white inner h-full">
                <div>
                  <div className="pt-5 px-5 pb-4 d-flex justify-content-between align-items-center border-bottom-light">
                    <h5>Enterprise</h5>
                    <h5> $30/m</h5>
                  </div>
                  <div className="px-5 py-5">
                    <ul>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Editable boards
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Anonymous board viewers
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Premade templates
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Core integrations
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Basic attention management
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        Asana integration
                      </li>
                      <li className="mb-3 d-flex justify-content-start align-items-center caption-2">
                        High-resolution exports
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <a href="resources-library.html" className="d-block w-full btn white medium text-center">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-6 block-5">
        <div className="pt-6 pb-6 container">
          <div className="row justify-content-xxl-center align-items-center">
            <div className="mb-6 col-md-5 col-lg-6 col-xxl-5">
              <img src={require("./stand.png")} alt="" className="w-full" />
            </div>
            <div className="mb-6 col-md-7 col-lg-6 col-xxl-5">
              <div className="d-flex justify-content-center">
                <div className="col-xxl-10">
                  <h3 className="mb-4">Zildexer is the first choice for</h3>
                  <ul className="mb-6">
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">Marketplaces</li>
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">Projects</li>
                    <li className="d-flex justify-content-start align-items-center body-21">Aggregators / Wallets</li>
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
                  <h3 className="mb-4">Check our partners out! </h3>
                  <ul className="mb-6">
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">zilkroad.io</li>
                    <li className="mb-3 d-flex justify-content-start align-items-center body-21">zilstream.com</li>
                    <li className="d-flex justify-content-start align-items-center body-21">heyalfie.io</li>
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
              <img src={require("./machine.png")} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-sm-7 text-white overflow-hidden bomb-block">
        <div className="pt-2 container">
          <div className="row justify-content-start">
            <div className="mb-5 mb-sm-0 pe-xxl-0 col-sm-11 col-md-10 col-lg-8 col-xxl-6 text-block">
              <h2 className="mb-5">Got a question? We're here to help!</h2>
              <a href="apps.html" className="me-3 d-inline-block btn green medium">
                Join our Discord Server
              </a>
              <a href="about.html" className="d-inline-block btn transparent-grey-light medium">
                Read The Docs!
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
                    API Documentation
                  </a>
                  <a href="pricing.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    API Pricing
                  </a>
                </div>

                <div className="mb-4 mb-lg-0 col-6 col-lg-3 col-xxl-3">
                  <a href="apps.html" className="mb-4 d-block caption-1 medium text-white">
                    Our Clients
                  </a>
                  <a href="api.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    zilkroad.io
                  </a>
                  <a href="resources-library.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    zilstream.com
                  </a>
                  <a href="features.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    heyalfie.io
                  </a>
                </div>

                <div className="mb-4 mb-lg-0 col-6 col-lg-3 col-xxl-3">
                  <a href="text.html" className="mb-4 d-block caption-1 medium text-white">
                    Contact
                  </a>
                  <a href="contacts.html" className="mb-3 d-block caption-2 medium grey-light-4">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-5 row justify-content-center justify-content-sm-between align-items-center border-top-light">
            <div className="me-2 me-sm-0 px-0 px-sm-auto col-auto caption-2 medium grey-light-4">Copyright © 2022</div>
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
