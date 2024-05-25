import React from "react";
import Header from './header';
function Home() {
  return (
    <>
     <Header/>
      <section id="why-us" class="why-us">
      <div class="container-fluid aos-init aos-animate" data-aos="fade-up">

        <header class="section-header">
          <h3>Why choose us?</h3>
          <p>Welcome to TF Soft Solutions - Empowering Tomorrow's Technology</p>
        </header>

        <div class="row">

          <div class="col-lg-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div class="why-us-img">
              <img src="img/logo/choose1.jpg" alt="" class="img-fluid" style={{'width': '746px', 'margin-top': '13px','border-radius': '150px'}}/>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="why-us-content">
              <p>At TF Soft Solutions, we believe in the transformative power of technology. As a pioneering force in the IT industry, we specialize in delivering innovative solutions that propel businesses into the future. Since our inception, we have been dedicated to harnessing the latest advancements in technology to drive growth, efficiency, and success for our clients worldwide.
              </p>

              <div class="features clearfix aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-bookmarks" style={{'color': '#f058dc'}}></i>
                <h4>Innovative Solutions</h4>
                <p>At TF Soft Solutions, we're dedicated to crafting innovative IT solutions that propel businesses forward. From cutting-edge software development to harnessing the power of emerging technologies like AI and blockchain, we're committed to staying ahead of the curve and delivering solutions that drive tangible results for our clients.</p>
              </div>

              <div class="features clearfix aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-box-seam" style={{'color': '#ffb774'}}></i>
                <h4>Client-Centric Approach</h4>
                <p>Our philosophy revolves around putting our clients at the center of everything we do. We understand that every business is unique, which is why we take the time to listen, understand, and tailor our services to meet their specific needs. Whether it's a small startup or a large enterprise, we're here to partner with our clients every step of the way, ensuring their success is our top priority.</p>
              </div>

              <div class="features clearfix aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-card-checklist" style={{'color': '#589af1'}}></i>
                <h4>Expert Team</h4>
                <p>Behind every successful project at TF Soft Solutions is a team of seasoned professionals who are passionate about technology and dedicated to delivering excellence. With a diverse range of expertise spanning software development, cybersecurity, cloud computing, and more, our team is well-equipped to tackle even the most complex IT challenges. Combined with a culture of continuous learning and improvement, we strive to exceed expectations and set new standards of excellence in the IT industry.</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="container">
        <div class="row counters aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">2</span>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="0" class="purecounter">3</span>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" class="purecounter">100</span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="48" data-purecounter-duration="0" class="purecounter">4</span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>
    <section id="team" className="section-bg">
  <div className="container">
    <div className="section-header" style={{'margin-top': '35px'}}>
      <h3>Management and Team</h3>
      <p style={{'width': '78%'}}>
      At TFS Solutions, we blend dedication, sincerity and adaptability to bring you standout digital solutions and reliable staffing services. Our strong commitment to improving our society drives us and we're passionate about pushing your success forward with unwavering hard work and a focused approach.
      </p>
    </div>
    <div className="row11" >
    <div className="col-lg-3 col-md-6 wow fadeInUp d1" >
        <div className="member" >
          <img src="img/team/RaviKantSharma.png"  className="img-fluid" alt="" />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Ravi Kant Sharma</h4>
              <span>Founder of TFS Group</span>
              <div className="social" style={{'margin-top': '-10px'}}>
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp d1" data-wow-delay="0.2s" >
        <div className="member" >
          <img src="img/team/ManojKumarSharma.jpg"  className="img-fluid" alt="" />
          <div className="member-info" >
            <div className="member-info-content">
              <h4>Manoj Kumar Sharma</h4>
              <span>Founder of TFS Group</span>
              <div className="social" style={{'margin-top': '-10px'}}>
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
   
  </div>
</section>
    </>
  );
}

export default Home;
