import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/Testimonial.css";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1080 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1366, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 360 },
      items: 1,
    },
  };

  return (
    <div className="testimonial">
      <h1 className="text-center pb-3">Character</h1>
      <div className="d-flex justify-content-center">
        <div className="col-md-8">
          <Carousel
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div className="card">
              <div className="col text-center">
                <div className="card-body mx-3">
                  <div className="mb-4">
                    <img
                      src="data:image/jpeg;base64,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"
                      className="rounded-circle shadow-1-strong"
                      width={128}
                      height={128}
                    />
                  </div>
                  <h5 className="font-weight-bold">Rajan Gupta</h5>
                  <div className="score">
                    <span style={{ width: "88%" }}></span>
                  </div>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="col text-center">
                <div className="card-body mx-3">
                  <div className="mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGNC5bvZ0jhwRy58rwFHDgdxerM9Nw61jSLvj_kqyzJ4OR9Q-ziB8FaLCUgAE4oLIYUY&usqp=CAU"
                      className="rounded-circle shadow-1-strong"   
                      width={128}
                      height={128}
                    />
                  </div>
                  <h5 className="font-weight-bold">Disha</h5>
                  <div className="score">
                    <span style={{ width: "100%" }}></span>
                  </div>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Cras sit amet nibh libero, in gravida nulla metus
                    scelerisque ante sollicitudin commodo cras purus odio,
                    vestibulum in tempus viverra turpis.
                    <i className="fas fa-quote-right pe-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="col text-center">
                <div className="card-body mx-3">
                  <div className="mb-4">
                    <img
                      src="https://png.pngtree.com/png-vector/20240120/ourmid/pngtree-cute-doctor-png-image_11442693.png"
                      className="rounded-circle shadow-1-strong"
                      width={128}
                      height={128}
                    />
                  </div>
                  <h5 className="font-weight-bold">Prince Raj</h5>
                  <div className="score">
                    <span style={{ width: "88%" }}></span>
                  </div>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Autem, totam debitis suscipit saepe sapiente magnam officiis
                    quaerat necessitatibus odio assumenda perferendis labore
                    laboriosam.
                    <i className="fas fa-quote-right pe-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="col text-center">
                <div className="card-body py-4 mt-2">
                  <div className="mb-4">
                    <img
                      src="https://ih1.redbubble.net/image.5465687790.9399/fposter,small,wall_texture,square_product,600x600.jpg"
                      className="rounded-circle shadow-1-strong"
                      width={128}
                      height={128}
                    />
                  </div>
                  <h5 className="font-weight-bold">Aman Kashyap</h5>
                  <div className="score">
                    <span style={{ width: "100%" }}></span>
                  </div>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Autem, totam debitis suscipit saepe sapiente magnam officiis
                    quaerat necessitatibus odio assumenda perferendis labore
                    laboriosam.
                    <i className="fas fa-quote-right pe-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="col text-center">
                <div className="card-body py-4 mt-2">
                  <div className="mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BxKoZVHsg6-e2GsPUML19JPH_0FIkf0K6Q&s"
                      className="rounded-circle shadow-1-strong"
                      width={128}
                      height={128}
                    />
                  </div>
                  <h5 className="font-weight-bold">Saurabh Kumar</h5>
                  <div className="score">
                    <span style={{ width: "88%" }}></span>
                  </div>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Autem, totam debitis suscipit saepe sapiente magnam officiis
                    quaerat necessitatibus odio assumenda perferendis labore
                    laboriosam.
                    <i className="fas fa-quote-right pe-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="col text-center">
                <div className="card-body py-4 mt-2">
                  <div className="mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-TdY0ZGF0KMnpyLzoLwg7oB8oTXivOCPcg&s"
                      className="rounded-circle shadow-1-strong"
                      width={128}
                      height={128}
                    />
                  </div>
                  <h5 className="font-weight-bold">Aryan kumar</h5>
                  <div className="score">
                    <span style={{ width: "88%" }}></span>
                  </div>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Autem, totam debitis suscipit saepe sapiente magnam officiis
                    quaerat necessitatibus odio assumenda perferendis labore
                    laboriosam.
                    <i className="fas fa-quote-right pe-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="col text-center">
                <div className="card-body py-4 mt-2">
                  <div className="mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaisvbfVLStmi9T1okTlKuWJGwuyIFBlR6u6PZqcTh7o-rvJUL51gMbvjzyzGi-yiV5Yg&usqp=CAU"
                      className="rounded-circle shadow-1-strong"
                      width={128}
                      height={128}
                    />
                  </div>
                  <h5 className="font-weight-bold">Noha</h5>
                  <div className="score">
                    <span style={{ width: "70%" }}></span>
                  </div>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Autem, totam debitis suscipit saepe sapiente magnam officiis
                    quaerat necessitatibus odio assumenda perferendis labore
                    laboriosam.
                    <i className="fas fa-quote-right pe-2" />
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
