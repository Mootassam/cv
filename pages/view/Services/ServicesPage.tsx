import React from "react";
import Layouts from "../layout/Layouts";

function ServicesPage() {
  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='row mb-4 align-items-center'>
            <div className='col-md-6' data-aos='fade-up'>
              <h2>My Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus incidunt ut officiis explicabo
                inventore.
              </p>
            </div>
          </div>
        </div>
        <div className='site-section pb-0 services'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-6 mb-5'
                data-aos='fade-up'
                data-aos-delay>
                <i className='bi bi-card-checklist' />
                <h4 className='h4 mb-2'>Web Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul className='list-unstyled list-line'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-6 mb-5'
                data-aos='fade-up'
                data-aos-delay={100}>
                <i className='bi bi-binoculars' />
                <h4 className='h4 mb-2'>Mobile Applications</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul className='list-unstyled list-line'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-6 mb-5'
                data-aos='fade-up'
                data-aos-delay>
                <i className='bi bi-brightness-high' />
                <h4 className='h4 mb-2'>Graphic Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul className='list-unstyled list-line'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-6 mb-5'
                data-aos='fade-up'
                data-aos-delay={100}>
                <i className='bi bi-calendar4-week' />
                <h4 className='h4 mb-2'>SEO</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  explicabo inventore.
                </p>
                <ul className='list-unstyled list-line'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                  <li>Non pariatur nisi</li>
                  <li>Magnam soluta quod</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Cumque quae aliquam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Testimonials Section ======= */}
      <section className='section pt-0'>
        <div className='container'>
          <div
            className='testimonials-slider swiper'
            data-aos='fade-up'
            data-aos-delay={100}>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='testimonial-wrap'>
                  <div className='testimonial'>
                    <img
                      src='assets/img/person_1.jpg'
                      alt='Image'
                      className='img-fluid'
                    />
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam necessitatibus incidunt ut officiis explicabo
                        inventore.
                      </p>
                    </blockquote>
                    <p>— Jean Hicks</p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className='swiper-slide'>
                <div className='testimonial-wrap'>
                  <div className='testimonial'>
                    <img
                      src='assets/img/person_2.jpg'
                      alt='Image'
                      className='img-fluid'
                    />
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam necessitatibus incidunt ut officiis explicabo
                        inventore.
                      </p>
                    </blockquote>
                    <p>— Chris Stanworth</p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className='swiper-pagination' />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
