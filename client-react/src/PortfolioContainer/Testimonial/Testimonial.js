import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import abhishekBhaiya from "../../../src/img/Testimonial/abhishekBhaiya.png";
import vivek from "../../../src/img/Testimonial/vivek.png";
import urvish from "../../../src/img/Testimonial/urvish.png";
import jangid from "../../../src/img/Testimonial/jangid.png";
import ankit from "../../../src/img/Testimonial/ankitAg.png";
import prem from "../../../src/img/Testimonial/prem.png";

import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Peers Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}>
              {/* abhishek Bhaiya  */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I have worked neck-to-neck with Vishal and build a
                      self-sustainable ecosystem for our FMCG Start-Up. The
                      recommendations coming out of Vishal’s four-week study
                      have allowed us to focus on problem areas and execute
                      real-time changes, which immediately improved the
                      effectiveness of our distribution processes and
                      procedures. He has also gained extensive experience with
                      operations management, workflow management, and service
                      level management.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>

                  <div className="client-info">
                    <img
                      src={abhishekBhaiya}
                      alt="no internet connection"></img>
                    <h5>Abhishek Anand </h5>
                    <p>Founder IndoAlpine,Moovo.in </p>
                  </div>
                </div>
              </div>

              {/* Urvish Patel */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Working with Vishal was better than expected and we had
                      really high expectations. He is always ready to learn new
                      things by doing all the research about best practices and
                      implementing them. I believe he is a very talented and
                      favourible employee , one who is always ready to take
                      challenges, but what really makes him stand out is his
                      work ethic and steady approach. Time after time, and
                      without us asking, he added enhancements and improvements
                      that resulted in a better end product for us.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={urvish} alt="no internet connection"></img>
                    <h5>Urvish Patel</h5>
                    <p>CTO FlipTree</p>
                  </div>
                </div>
              </div>

                   {/* Ankit Agarawal */}
                   <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Vishal is an extraordinarily experienced employee who
                      deeply understands his work and gets things done
                      efficiently, thoroughly, and correctly in accordance with
                      best practices. Drawing from his vast experience, First
                      and foremost, he defines reality and passion. The entire
                      management expresses gratitude to him. He has proved to be
                      the perfect person for the management and execution of a
                      project. Along with developing the product and adding
                      valuable ideas time to time, he always get things done on
                      time.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={ankit} alt="no internet connection"></img>
                    <h5>Ankit Agarawal</h5>
                    <p>CEO PrepLeaf</p>
                  </div>
                </div>
              </div>


              {/* Vivek Regmi */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      It's a real pleasure working with Vishal. His talent and
                      experience proved immensely valuable for our latest
                      project. He was involved from the very beginning,
                      providing advice and guidance even before we signed the
                      proposal. His previous sweet and sour experiences,
                      versatality and learnings proved to be Icing on the cake.
                      The work we received from him is top-notch, thoroughly
                      documented, and full of touches that show his commitment
                      to quality. I can't recommend him highly enough.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={vivek} alt="no internet connection"></img>
                    <h5>Vivek Regmi</h5>
                    <p>CEO MentorYard</p>
                  </div>
                </div>
              </div>

         
              {/* Hitesh Jangid */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I have worked with Vishal 
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={jangid} alt="no internet connection"></img>
                    <h5>Hitesh Jangid </h5>
                    <p>CTO,Founder PrepLeaf</p>
                  </div>
                </div>
              </div>

              {/* Prem Arjun */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Vishal and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={prem} alt="no internet connection"></img>
                    <h5>Prem Arjun</h5>
                    <p>Sr. BA, GROWW</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="pic not responding" />
      </div>
    </div>
  );
}
