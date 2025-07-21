import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: "",
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // console.log(formData);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the form ka data...");
    console.log(formData);
  }

  return (
    <div className=" flex flex-col items-center mt-4 ">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Prabhat"
          name="firstName"
          id="firstName"
          value={FormData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="Ranjan"
          name="lastName"
          id="lastName"
          value={FormData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="abc@gmail.com"
          name="email"
          id="email"
          value={FormData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option value="India">India</option>
          <option value="Bangkok">Bangkok</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Russia">Russia</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          placeholder="LIG-B, 219, Sonagiri"
          name="streetAddress"
          id="streetAddress"
          value={FormData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          placeholder="Kishanganj"
          name="city"
          id="city"
          value={FormData.city}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="state">State/Provience</label>
        <br />
        <input
          type="text"
          placeholder="Bihar"
          name="state"
          id="state"
          value={FormData.state}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          placeholder="855101"
          name="postalCode"
          id="postalCode"
          value={FormData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <br />

        <fieldset>
          <legend>By Email:</legend>

          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>
                Lorem ipsumi numquam laboriosam, blanditiis tempore voluptas{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>
                Lorem ipsumi numquam laboriosam, blanditiis tempore voluptas{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>
                Lorem ipsumi numquam laboriosam, blanditiis tempore voluptas{" "}
              </p>
            </div>
          </div>
        </fieldset>
        <br />
        <br />
        <fieldset>
          <legend>Push Notification</legend>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quo?
          </p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification </label>
        </fieldset>

        <button className=" bg-blue-500 text-white rounded py-2 px-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
