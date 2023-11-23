import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/Contact.scss";

export const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuccessMessageClose = () => {
    setSuccessMessage("");
  };

  const form = useRef();
  const [nomStatus, setNomStatus] = useState("empty");
  const [nom, setNom] = useState("");
  const [isNomFocused, setIsNomFocused] = useState(false);

  const [emailStatus, setEmailStatus] = useState("empty");
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [phoneStatus, setPhoneStatus] = useState("empty");
  const [phone, setPhone] = useState("");

  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const [messageStatus, setMessageStatus] = useState("empty");
  const [message, setMessage] = useState("");
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r012cd6",
        "template_j4ow6n3",
        form.current,
        "Lon5Jzk7nxbfjrV8O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSuccessMessage("Votre message a été envoyé avec succès.");
    setNom("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsNomFocused(false);
    setIsEmailFocused(false);
    setIsPhoneFocused(false);
  };

  return (
    <main className="nes-container is-dark with-title">
      <h1 className="title"> CONTACTEZ MOI</h1>

      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom</label>
          <input
            type="text"
            name="user_name"
            className={`nes-input is-dark ${
              isNomFocused
                ? nom.length > 0 && nom.length > 2
                  ? "nes-input is-success"
                  : "nes-input is-warning"
                : "nes-input is-dark"
            }`}
            value={nom}
            onFocus={() => setIsNomFocused(true)}
            onChange={(e) => setNom(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className={`nes-input is-dark ${
              isEmailFocused
                ? email.includes("@") && email.split("@")[1].length > 0
                  ? "nes-input is-success"
                  : "nes-input is-warning"
                : "nes-input is-dark"
            }`}
            value={email}
            onFocus={() => setIsEmailFocused(true)}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Phone</label>
          <input
            type="number"
            name="user_phone"
            maxLength={10}
            className={`nes-input is-dark ${
              isPhoneFocused
                ? phone.length > 9
                  ? "nes-input is-success"
                  : "nes-input is-warning"
                : "nes-input is-dark"
            }`}
            value={phone}
            onFocus={() => setIsPhoneFocused(true)}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <label>Message</label>
          <textarea
            name="message"
            className="nes-input is-dark"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
        <div className={`message-container ${successMessage ? "" : "hidden"}`}>
          {successMessage && (
            <>
              <p className="close-message" onClick={handleSuccessMessageClose}>
                x
              </p>
              <p className="success-message">{successMessage}</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;
