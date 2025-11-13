import React, { useState } from "react";
import "./UploadModal.css";
import { Call, LocationOn, Mail, Phone } from "@mui/icons-material";

export const UploadModal = (props) => {
  const closeForm = () => {
    props.close();
  };

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
    <div>
      <div className=" modalContainer">
        <div className=" FormContainer2">
          <div className=" p-sm-4 p-2 p-md-4">
            <h3 className=" text-dark">Get A Quote</h3>
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
                placeholder=" Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="  inputFields "
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
                name=""
                className=" w-100 inputFieldsTextAres"
                onChange={(e) => setRequirements(e.target.value)}
                id=""
                cols="25"
                rows="3"
              ></textarea>

              <input
                type="file"
                onChange={handleAttachmentChange}
                className=" w-100 inputFields"
                placeholder=" Name"
                name=""
                id=""
              />

              {/* <button> Submit Now</button> */}
              {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  alert("message sent");
                }}
              >
                Submit Now
              </button> */}
              <input type="submit" value="Send Now" />
            </form>
          </div>
          <div>
            <button onClick={closeForm} className=" btn btn-close"></button>
            <div className="  ">
              <h3 className=" text-dark">Contact Info</h3>
              {/* <h5 className=" mt-5">
                <span  style={{ backgroundColor:"#212529", color : "white", padding:"2px 5px 7px", borderRadius:"50%",  }}>
                  <LocationOn />
                </span>{" "}
                <span className=" "> Location</span>
              </h5> */}

              <h5 className=" text-center mt-5">
                <span
                  style={{
                    backgroundColor: "#212529",
                    color: "white",
                    padding: "2px 5px 7px",
                    borderRadius: "50%",
                  }}
                >
                  <Call />
                </span>{" "}
                <p className=" ">
                  <a
                    className=" text-dark"
                    style={{ color: "" }}
                    href="tel:+718-233-6300"
                  >
                    {" "}
                    +718-233-6300
                  </a>
                </p>
              </h5>

              <h5 className=" text-center mt-5">
                <span
                  style={{
                    backgroundColor: "#212529",
                    color: "white",
                    padding: "2px 5px 7px",
                    borderRadius: "50%",
                  }}
                >
                  <Mail />
                </span>{" "}
                <p className=" ">
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
                </p>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
