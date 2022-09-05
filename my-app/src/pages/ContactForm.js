import React from "react";

function ContactForm() {
  return (
    <section class="mb-4 text-white">
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>
      <p class="text-center w-responsive mx-auto mb-5">
        If you have any questions or concerns, please contact us by filling out
        the information below!
      </p>

      <div class="row">
        <div class="col-md-9 mb-md-0 mb-5 text-white ">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            {/* <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                  <label for="name" class="">
                    First Name
                  </label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                  />
                  <label for="email" class="">
                    Your email
                  </label>
                </div>
              </div>
            </div> */}

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="name" class="">
                    Parent's First Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="lname" class="">
                    Parent's Last Name:
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="cname" class="">
                    Child's Name:
                  </label>
                  <input
                    type="text"
                    id="cname"
                    name="cname"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="email" class="">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="phone" class="">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <label for="message">Your Message:</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div class="text-center text-md-left">
            <a
              class="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
            >
              Send
            </a>
          </div>
          <div class="status"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
