import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      {/* FOOTER START */}
      <section className="footer bg-dark pt-5 pb-2 text-white">
        <div className="footer-section">
          <div className="container">

            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5">
                <div className="input-group mb-3">
                  <input type="text" className="form-control bg-dark border boder-white text-white py-2" placeholder="Email Address" />
                  <span className="input-group-text bg-dark text-white border boder-white" id="basic-addon2"><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="form-check">
                  <input className="form-check-input bg-dark" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our
                      <span className='ms-2'><Link className='text-white'>privacy policy</Link></span> </p>
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h6>Orders and support</h6>
                    <hr className ='footer-hr'/>
                  </div>
                  <ul>
                    <li><Link to="/">Contact us</Link></li>
                    <li><Link to="/">FAQs</Link></li>
                    <li><Link to="/">Shipping</Link></li>
                    <li><Link to="/">Returns</Link></li>
                    <li><Link to="/">Order history</Link></li>
                    <li><Link to="/">Terms and conditions</Link></li>

                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h6>Services</h6>
                    <hr className ='footer-hr'/>
                  </div>
                  <ul>
                    <li><Link to="/">Live assistance</Link></li>
                    <li><Link to="/">Corporate gifts</Link></li>
                    <li><Link to="/">Facial appointments</Link></li>
                    <li><Link to="/">Click and collect</Link></li>
                    <li><Link to="/">Video consultation</Link></li>
                  </ul>
                </div>

              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h6>Location preferences</h6>
                    <hr className ='footer-hr'/>
                  </div>
                  <ul>
                    <li>Shipping:</li>
                    <li><Link to="/"><u>Hong Kong SAR,China</u></Link></li>
                    <li className='pt-3'>Language:</li>
                    <li><Link to="/"><u>English</u></Link></li>
                    <li><Link to="/">繁體中文</Link></li>
                    <li><Link to="/">简体中文</Link></li>

                  </ul>
                </div>

              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 pt-5">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h6>Sustainability</h6>
                    <hr className ='footer-hr'/>
                   
                  </div>
                  <p className='ps-4'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.
                      <span><Link className='text-white'>Learn more</Link></span>
                    </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 pt-5">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h6>About</h6>
                    <hr className ='footer-hr'/>
                  </div>
                  <ul>
                    <li><Link to="/">Our story</Link></li>
                    <li><Link to="/">Foundation</Link></li>
                    <li><Link to="/">Careers</Link></li>
                    <li><Link to="/">Privacy policy</Link></li>
                    <li><Link to="/">Accessibility</Link></li>
                    <li><Link to="/">Cookie Policy</Link></li>

                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 pt-5">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h6 className=''>Social media</h6>
                    <hr className ='footer-hr'/>
                  </div>
                  <ul>
                    <li><Link to="/">Instagram</Link></li>
                    <li><Link to="/">Twitter</Link></li>
                    <li><Link to="/">LinkedIn</Link></li>
                    <li><Link to="/">WeChat</Link></li>
                    <li><Link to="/">Weibo</Link></li>
                  </ul>
                </div>
              </div>
            </div>

           
          </div>

           <div className="border-top border-5">
              <h5 className='ps-5 pt-4'>© Aesop</h5>
            </div>
        </div>
      </section>
      {/* FOOTER END */}

    </>
  )
}

export default Footer