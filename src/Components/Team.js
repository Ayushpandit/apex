import React from 'react'
import Header from './header';
function Team() {
  return (
    <>
     <Header/>
     <section id="team" class="team section-bg">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-header">
          <h3>Our Management Team</h3>
          <p>These individuals work together to lead and manage the organization, each bringing their expertise and perspective to drive growth, innovation, and success. Effective communication, collaboration, and strategic decision-making are essential for the management team to achieve the company's objectives.</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <img src="img/team/KKS.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>KK Sharma</h4>
                  <span>CEO (Chief Executive Officer)</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <img src="img/team/RajuSinghDhakarey.png" class="img-fluid" alt="" style={{'height': '361px'}}/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>RS Dhakarey</h4>
                  <span>CTO (Chief Technology Officer)</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <img src="img/team/RaviSaril.png" class="img-fluid" alt="" style={{'height':'358px'}}/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Ravi Sarin</h4>
                  <span>CFO (Chief Financial Officer)</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <img src="img/team/Screenshot_3.png" class="img-fluid" alt="" style={{'height': '358px'}}/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Abhishek Sharma</h4>
                  <span>COO / CMO (Chief Operating / Marketing Officer)</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <img src="img/team/AmanPS.jpg" class="img-fluid" alt="" style={{'height':'358px'}}/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Aman Preet Singh</h4>
                  <span>CHRO (Chief Human Resources Officer)</span>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section>

    </>
  )
}

export default Team
