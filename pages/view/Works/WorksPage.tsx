import React from "react";
export const config = {
  unstable_runtimeJS: false,
};
function WorksPage() {
  return (
    <>
      <section className='section site-portfolio'>
        <div className='container'>
          <div className='row mb-5 align-items-center'>
            <div className='col-md-12 col-lg-6 mb-4 mb-lg-0' data-aos='fade-up'>
              <h2>Hey, I'm Johan Stanworth</h2>
              <p className='mb-0'>
                Freelance Creative &amp; Professional Graphics Designer
              </p>
            </div>
            <div
              className='col-md-12 col-lg-6 text-start text-lg-end'
              data-aos='fade-up'
              data-aos-delay={100}>
              <div id='filters' className='filters'>
                <a href='#' data-filter='*' className='active'>
                  All
                </a>
                <a href='#' data-filter='.web'>
                  Web
                </a>
                <a href='#' data-filter='.design'>
                  Design
                </a>
                <a href='#' data-filter='.branding'>
                  Branding
                </a>
                <a href='#' data-filter='.photography'>
                  Photography
                </a>
              </div>
            </div>
          </div>
          <div
            id='portfolio-grid'
            className='row no-gutter'
            data-aos='fade-up'
            data-aos-delay={200}>
            <div className='item web col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Boxed Water</h3>
                  <span>Web</span>
                </div>
                <img className='img-fluid' src='assets/img/img_1.jpg' />
              </a>
            </div>
            <div className='item photography col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Build Indoo</h3>
                  <span>Photography</span>
                </div>
                <img className='img-fluid' src='assets/img/img_2.jpg' />
              </a>
            </div>
            <div className='item branding col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Cocooil</h3>
                  <span>Branding</span>
                </div>
                <img className='img-fluid' src='assets/img/img_3.jpg' />
              </a>
            </div>
            <div className='item design col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Nike Shoe</h3>
                  <span>Design</span>
                </div>
                <img className='img-fluid' src='assets/img/img_4.jpg' />
              </a>
            </div>
            <div className='item photography col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Kitchen Sink</h3>
                  <span>Photography</span>
                </div>
                <img className='img-fluid' src='assets/img/img_5.jpg' />
              </a>
            </div>
            <div className='item branding col-sm-6 col-md-4 col-lg-4 mb-4'>
              <a href='work-single.html' className='item-wrap fancybox'>
                <div className='work-info'>
                  <h3>Amazon</h3>
                  <span>brandingn</span>
                </div>
                <img className='img-fluid' src='assets/img/img_6.jpg' />
              </a>
            </div>
          </div>
        </div>
      </section>

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
            </div>
            <div className='swiper-pagination' />
          </div>
        </div>
      </section>
    </>
  );
}

export default WorksPage;
