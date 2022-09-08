import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u3o879c",
        "template_8igo8no",
        form.current,
        "0gG95kH2Dykuhivpf"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("ERROR");
        }
      );
  };

  const style = {
    display:"flex",
    justifyContent: "center"
  }
  
  return (
    <div style={style}>

    <StyledContactForm>
      <h1 class="text-white text-center" >Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div class="text-danger">
          <label>Parent's First Name:</label>
          <input type="text white" name="first_name" />
        </div>

        <div class="text-warning">
          <label>Parent's Last Name:</label>
          <input type="text" name="last_name" />
        </div>

        <div class="text-success">
          <label>Child's Name:</label>
          <input type="text" name="child_name" />
        </div>

        <div class="text-primary">
          <label>Email</label>
          <input type="email" name="email" />
        </div>

        <div class="text-info">
          <label>Phone Number:</label>
          <input type="phone" name="phone" />
        </div>

        <div class="text-light">
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </StyledContactForm>
  </div>
  );
}

export default ContactForm;

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      color: white;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      color: white;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background-color: purple;
      color: white;
      border: none;
    }
  }
`;
