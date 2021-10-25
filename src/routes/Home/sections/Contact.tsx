import React from "react";
import { B } from "components/styled";
import { Contact, ContactContent, ContactForm } from "components/styled/Home.styled";
import ContentHeading from "components/Home/Heading";
import ContactImg from "assets/images/traveler.png";

function index() {
  return (
    <Contact>
      <B.Container>
        <ContentHeading
          title="Contact"
          subTitle="Get in touch with us"
          className="content-heading"
        />

        <ContactContent>
          <div className="contactImg-wrap">
            <img src={ContactImg} alt="" />
          </div>

          <ContactForm>
            <div className="input-group-wrap">
              <div className="input-group">
                <input type="text" placeholder="Name" required />
                <span className="bar"></span>
              </div>

              <div className="input-group">
                <input type="email" placeholder="Email" required />
                <span className="bar"></span>
              </div>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Subject" required />
              <span className="bar"></span>
            </div>

            <div className="input-group">
              <textarea cols={30} rows={8} placeholder="Message" required></textarea>
              <span className="bar"></span>
            </div>

            <B.Button className="form-btn btn-purple">
              Send Message
              <span className="dots">
                <i className="fas fa-ellipsis-h"></i>
              </span>
            </B.Button>
          </ContactForm>
        </ContactContent>
      </B.Container>
    </Contact>
  );
}

export default index;
