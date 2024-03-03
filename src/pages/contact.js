import React from "react";
import "../App.css";

function Contact() {
  return (
    <div>
      <div className="contacttext">Contact US</div>
      <div className="container mb-4">
        We are there to assist! Whether you have questions, need assistance, or
        want to provide feedback, contacting us is simple. Use the information
        below to contact the apprppriate team.
      </div>

      <div className="container">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
          />

          <label for="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
          />

          <label for="interested">I'm Interested in</label>
          <select id="interested" name="interested">
            <option value="careers">Careers</option>
            <option value="port offerings">Port offerings</option>
            <option value="enterprise asset management">
              Enterprise Asset Management
            </option>
            <option value="internet of things">Internet of Things</option>
          </select>

          <label for="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <div className="btncenter">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
