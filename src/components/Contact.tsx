import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../assets/styles/Contact.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [focusedField, setFocusedField] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();


    const invalidName = name.trim() === '';
    const invalidEmail = email.trim() === '';
    const invalidMessage = message.trim() === '';


    setNameError(invalidName);
    setEmailError(invalidEmail);
    setMessageError(invalidMessage);


    if (invalidName || invalidEmail || invalidMessage) {
      return;
    }


    setSending(true);


    const templateParams = {

      from_name: name,
      from_email: email,
      message: message,

    };


    emailjs.send(
      'service_nn58skb',
      'template_i62r6tr',
      templateParams,
      'llXwFdjvusSDwwEGO'
    )

    .then(() => {

      setStatus("Message sent successfully!");

      setName('');
      setEmail('');
      setMessage('');

    })

    .catch(() => {

      setStatus(
        "Something went wrong. Please email me directly at ross.jones@queensu.ca"
      );

    })

    .finally(() => {

      setSending(false);

    });

  };



  return (

    <div id="contact">

      <div className="items-container">


        <div className="contact_wrapper">


          <h1>
            Get In Touch
          </h1>


          <p>
            Thanks for stopping by! If you'd like to connect, don't hesitate to reach out.
          </p>



          <Box

            component="form"

            onSubmit={sendEmail}

            noValidate

            autoComplete="off"

            className="contact-form"

          >



            <div className="form-flex">


              {/* NAME */}

              <TextField

                required

                label={
                  focusedField === "name" || name
                  ? "Your Name"
                  : ""
                }

                placeholder={
                  focusedField !== "name" && !name
                  ? "Your Name"
                  : ""
                }

                value={name}

                onFocus={() => setFocusedField("name")}

                onBlur={() => setFocusedField("")}

                onChange={(e) => setName(e.target.value)}

                error={nameError}

                helperText={
                  nameError
                  ? "Please enter your name"
                  : ""
                }

              />




              {/* EMAIL */}

              <TextField

                required

                label={
                  focusedField === "email" || email
                  ? "Email"
                  : ""
                }

                placeholder={
                  focusedField !== "email" && !email
                  ? "Email"
                  : ""
                }

                value={email}

                onFocus={() => setFocusedField("email")}

                onBlur={() => setFocusedField("")}

                onChange={(e) => setEmail(e.target.value)}

                error={emailError}

                helperText={
                  emailError
                  ? "Please enter your email"
                  : ""
                }

              />


            </div>





            {/* MESSAGE */}

            <TextField

              required

              label={
                focusedField === "message" || message
                ? "Message"
                : ""
              }

              placeholder={
                focusedField !== "message" && !message
                ? "Message"
                : ""
              }

              multiline

              rows={8}

              className="body-form"

              value={message}

              onFocus={() => setFocusedField("message")}

              onBlur={() => setFocusedField("")}

              onChange={(e) => setMessage(e.target.value)}

              error={messageError}

              helperText={
                messageError
                ? "Please enter a message"
                : ""
              }

            />





            <Button

              type="submit"

              variant="contained"

              endIcon={<SendIcon />}

              disabled={sending}

            >

              {sending ? "Sending..." : "Send"}

            </Button>





            {status && (

              <p className="contact-status">

                {status}

              </p>

            )}



          </Box>



        </div>


      </div>


    </div>

  );

}


export default Contact;