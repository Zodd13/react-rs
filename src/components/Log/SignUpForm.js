import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [bio, setBio] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const terms = document.getElementById("terms");
    const usernameError = document.querySelector(".username-error");
    const emailError = document.querySelector(".email-error");
    const passwordConfirm = document.querySelector(".password-confirm-error");
    const passwordError = document.querySelector(".password-error");
    const termsError = document.querySelector(".terms-error");

    passwordConfirm.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword) {
        passwordError.innerHTML = "Les mots de passe ne correspondent pas.";
      }

      if (!terms.checked) {
        termsError.innerHTML = "Veuillez acceptez les conditions générales.";
      }
      if (username.length < 6) {
        usernameError.innerHTML = "Votre nom d'utilisateur est trop court.";
      }
      if (email.length < 6) {
        emailError.innerHTML = "Email incorrect.";
      }
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/auth/signup`,
        data: {
          username,
          email,
          bio,
          password,
        },
      })
        .then((res) => {
            setFormSubmit(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4>Enregistrement réussi, veuillez-vous connecter</h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="username">Nom d'utilisateur</label>
          <br />

          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="username-error"></div>
          <br />

          <label htmlFor="email">Adresse email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="email-error"></div>
          <br />

          <label htmlFor="bio">Votre biographie</label>
          <br />
          <input
            type="text"
            name="bio"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <div className="bio-error"></div>
          <br />

          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            autoComplete="true"
            name="password-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="password-error"></div>
          <br />
          <label htmlFor="password-control">Confirmer le mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            autoComplete="true"
            id="password-control"
            value={controlPassword}
            onChange={(e) => setControlPassword(e.target.value)}
          />
          <div className="password-confirm-error"></div>
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              {" "}
              conditions générales
            </a>{" "}
          </label>
          <input type="submit" value="Valider inscription" />
          <div className="terms-error"></div>
        </form>
      )}
    </>
  );
};

export default SignUpForm;
