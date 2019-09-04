/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { React, useState } from "react"
import { Formik, Form, Field } from "formik"
import Button from "../components/Button.js"

const Contact = () => {

    const [buttonText, setButtonText] = useState('Send message ↠')

  const label = css`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.6rem;
    text-align: left;
    margin-bottom: 0.2rem;
  `

  const input = css`
    background: #f9f9f9;
    border: 1px solid #cdcdcd;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.6rem 0.2rem;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  `

  return (
    <div>
      <Formik
        initialValues={{ name: "", contact: "", message: "" }}
        onSubmit={(values, actions) => {
          if (!values.name || !values.contact || !values.message) {
            setButtonText('Some data is missing 😮')
            actions.setSubmitting(false)
            actions.setErrors({ error: true })
            // actions.setStatus({ msg: 'Set some arbitrary status or data' });
            setTimeout(() => {
                setButtonText('Send message ↠')
              }, 3000)
          } else {
            setButtonText('Submitting...🧞')
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
              setButtonText('Send message ↠')
            }, 3000)
          }
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label css={[label]} htmlFor="name">
              Your name
            </label>
            <Field css={[input]} type="text" name="name" placeholder="Name." />
            <label css={[label]} htmlFor="contact">
              Your contact
            </label>
            <Field
              css={[input]}
              type="text"
              name="contact"
              placeholder="Phone or eMail."
            />
            <label css={[label]} htmlFor="message">
              Your message
            </label>
            <Field
              css={[input]}
              component="textarea"
              rows="4"
              name="message"
              placeholder="Your message."
            />
            <Button
              type="submit"
              css={css`
                margin-top: 0.5rem;
                line-height: 1rem;
                ${errors.error && `border: 1px solid red;`};
                ${isSubmitting && `background: green; content: 'Submitting...'`};
              `}
              disabled={isSubmitting || errors.error}
            >
              {buttonText}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact
