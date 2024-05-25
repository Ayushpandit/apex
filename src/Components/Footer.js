import React from 'react'

function Footer() {

  function handleSubmit () {
    alert("You're welcome! If you have any more questions or need further assistance, feel free to ask. Have a great day!");
  }
  return (
   <>
    <footer id="footer" class="section-bg">
    <div class="footer-top">
    <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
            <div class="col-sm-6">
              <div class="footer-info">
                <h2>TFS Solutions</h2>
                <p>At TFS solutions, we take pride in crafting visually stunning and intuitive front-end solutions that leave a lasting impact on users. Our team of skilled front-end developers is well-versed in cutting-edge technologies.</p>
              </div>
              <div class="footer-newsletter">
                <p>Whether it’s building responsive websites or interactive web applications, we ensure seamless user experiences across all devices. Trust us to bring your designs to life and create an impressive digital presence that captivates your audience.</p>
              </div>
              <div class="social-links">
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li style={{'padding': '0px 0px 0px 0px'}}><a href="#">Home</a></li>
                  <li style={{'padding': '0px 0px 0px 0px'}}><a href="#">About us</a></li>
                  <li style={{'padding': '0px 0px 0px 0px'}}><a href="#">Services</a></li>
                  <li style={{'padding': '0px 0px 0px 0px'}}><a href="#">Terms of service</a></li>
                  <li style={{'padding': '0px 0px 0px 0px'}}><a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="footer-links">
                    <h4>Contact Us</h4>
                    <p>
                      #443, Phase 3B1, Mohali <br />
                      Punjab, PB 160059 , INDIA <br />
                      <strong>Phone:</strong> +91 8968800443
                      <br />
                      <strong>Email:</strong> trishulservices.co@gmail.com
                      <br />
                    </p>
                  </div>
            </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form">
          <h4>Talk to us and get your project moving!</h4>
          
            <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div class="validation"></div>
            </div>

            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>

            <div class="text-center"><button  onClick={()=>handleSubmit()} title="Send Message">Send Message</button></div>
       
        </div>

      </div>

      

    </div>
</div>
</div>
  </footer>

   </>
  )
}

export default Footer
