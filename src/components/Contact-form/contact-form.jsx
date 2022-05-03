import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="mailto:dhruvpandya1401@gmail.com?subject=HI, I Saw your Website">
                    {ContactFromDate.email}
                  </a>
                </h5>
                <h5>
                  <a href="tel:7021206529">{ContactFromDate.phone}</a>
                </h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit?
              </h3>
              <div className="item">
                <h6>
                  <a
                    href="https://goo.gl/maps/gKG8EUwQMZCKDjqD8"
                    target="blank_"
                  >
                    {ContactFromDate.location.first}
                    <br />
                    {ContactFromDate.location.second}
                  </a>
                </h6>
              </div>
              <div className="social mt-50">
                <a
                  href="https://www.facebook.com/dhruv.pandya.902"
                  target="blank_"
                  className="icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=917021206529&text=Hi%2C%20I%20saw%20your%20website%F0%9F%98%84"
                  target="blank_"
                  className="icon"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.instagram.com/dhruvvvvvvvv._/"
                  target="blank_"
                  className="icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruvpandya1401/"
                  target="blank_"
                  className="icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
