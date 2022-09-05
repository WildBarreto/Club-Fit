import React from "react";

import "./Join.css";

//import emailjs from "@emailjs/browser";

const Join = () => {
  /*const form = useref();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };*/

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTO PARA</span>
          <span>SUBIR DE NÍVEL</span>
        </div>

        <div>
          <span className="stroke-text">SEU CORPO</span>
          <span>CONOSCO?</span>
        </div>
      </div>
      <div className="right-j">
        <form /*ref={form}*/ className="email-container" /*onSubmit={sendEmail}*/>
          <input
            type="email"
            name="user_email"
            placeholder="Insira o seu endereço de email"
          />

          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
