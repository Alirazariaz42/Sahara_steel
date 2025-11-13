import React, { useContext, useState } from "react";
import "./ContactUs.css";
import { LocationOn, Mail, Phone } from "@mui/icons-material";
export const ContactUs = () => {
  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContect] = useState("");
  const [filelink, setfilelink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    formData.append("attachment", attachment);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    try {
      const response = await fetch("https://saharasteels.000webhostapp.com/", {
        method: "POST",
        body: formData,
        // mode: 'no-cors',
      });

      if (response.status === 200) {
        alert("Email sent successfully");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
    // setIsLoadingSubmit(false);
  };
  return (
    <div className=" ContactUsContainer">
      <div className=" container-fluid container-xxl p-2 p-sm-3 p-md-5 ">
        <div className=" text-light  text-center">
          <h1 className=" fw-bold text-uppercase">Contact Us</h1>
          <p>Let’s Work Together</p>
        </div>
        <div className="ContactFormContainer">
          <div className=" row m-0 w-100">
            <div className=" col-md-8 p-2 p-sm-4 FormContainer">
              <h3 className=" text-light">Get I Touch</h3>
              <form onSubmit={onFormSubmit}>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className=" w-100 inputFields"
                  placeholder=" Name"
                  name=""
                  id=""
                />

                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder=" Email Required!"
                  className="  inputFields "
                  required
                  name=""
                  id=""
                />
                <input
                  type="number"
                  onChange={(e) => setContect(e.target.value)}
                  placeholder=" Contact No."
                  className="  inputFields "
                  name=""
                  id=""
                />
                <textarea
                  placeholder="Message"
                  onChange={(e) => setRequirements(e.target.value)}
                  name=""
                  className=" w-100 inputFieldsTextAresContactUs"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>

                <input
                  type="file"
                  onChange={handleAttachmentChange}
                  // placeholder=" Contact No."
                  className=" w-100 inputFields"
                  name=""
                  id=""
                />

                {/* <button onClick={{(e) => e.preventDefault(), alert("message sent") }}> Submit Now</button> */}
                {/* <button onClick={onFormSubmit}>Submit Now</button> */}
                <input type="submit" value="Send Now" />
              </form>
            </div>
            <div className=" col-md-4 p-2 p-sm-4 ContactInfo">
              <h3 className=" fw-bold  text-dark">Contact Info</h3>
              <div className=" p-5">
                {/* <p>
                  {" "}
                  <LocationOn /> <span className=" fw-bold"> Location</span>
                  <br />
                  <span className="  fw-normal"> 123456</span>
                </p> */}

                <p>
                  {" "}
                  <Phone /> <span className=" fw-bold"> Phone</span>
                  <br />
                  <span className="  fw-normal">
                    {" "}
                    <a className=" text-dark " href="tel: +718-233-6300">
                      {" "}
                      +718-233-6300
                    </a>
                  </span>
                </p>

                <p>
                  {" "}
                  <Mail /> <span className=" fw-bold"> Mail</span>
                  <br />
                  <span className="  fw-normal">
                    {" "}
                    <a
                      className=" text-dark "
                      style={{ textDecoration: "none" }}
                      href="mailto:estimating@saharacontractingco.com"
                    >
                      <span>estimating@sahara</span>{" "}
                      <span style={{ marginLeft: "-4px" }}>
                        contractingco.com
                      </span>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
