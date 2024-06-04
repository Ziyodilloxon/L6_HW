import "./Contact.css"

const Contact = () => {
  return (
    <>
      <div className="Contact_us">
        <div className="contact">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let's talk about your project or
            <br />
            idea and find out how we can help your business grow. If you are
            <br />
            looking for unique digital experiences that's relatable to your
            <br />
            users, drop us a line.
          </p>
        </div>
        <div className="input__wrapper">
          <input className="input" type="text" placeholder="Name" />
          <input className="input2 input" type="email" placeholder="Email Adress" />
          <input className="input3 input" type="number" placeholder="Phone" />
          <input className="input4 input" type="text" placeholder="Your Message" />
          <button>SUBMIT</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
