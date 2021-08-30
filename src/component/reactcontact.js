import React, { useState } from "react";
import "./contact.css";

const Reactcontact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if( name && email && phone && address && message ){
        const res = await fetch(
            "https://dummyproject-a1c23-default-rtdb.firebaseio.com/youtubereactfrom.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                phone,
                address,
                message,
              }),
            }
          );
      
          if (res) {
            setUser({
              name: "",
              email: "",
              phone: "",
              address: "",
              message: "",
            });
      
            alert("Data Stored Kar liya bidu !!!!")
          }
    } else {
        alert(" Plz fill all the details")
    }

  };

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <div className="container">
        <div className="jumbotron">
          <form className="needs-validation" novalidate method="POST">
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip01"
                  placeholder="First name"
                  name="name"
                  value={user.name}
                  onChange={getUserData}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip02">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="email@gmail.com"
                  name="email"
                  value={user.email}
                  onChange={getUserData}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip02">Mobile No.</label>
                <input
                  type="tel"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="0123456789"
                  name="phone"
                  value={user.phone}
                  onChange={getUserData}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip02">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="Enter your address"
                  value={user.address}
                  name="address"
                  onChange={getUserData}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-12 mb-3">
                <label for="validationTooltip02">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="Your message here ..."
                  name="message"
                  value={user.message}
                  onChange={getUserData}
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={postData}
            >
              Submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reactcontact;
