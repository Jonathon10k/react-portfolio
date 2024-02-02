import React from 'react'

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-success">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <h1 className="display-5 text-center text-white">My portfolio</h1>
          <h2 className="display-9 mt-2 mb-2 text-white mt-3 text-center">Welcome to my online portfolio!</h2>
        </div>
      </div>
      <div className="row flex-col">
        <div className="col-sm-12 col-md-12 col-lg-6 ms-auto text-center mb-3" id="jumbotron-about-section">
          <img src="./images/avatar.png" className="img-fluid"
            alt="An avatar image of JG Edward" />
          <p className="lead text-center mb-3 md-auto">
            
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;