/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Button from "../components/Button.js"

const Basic = () => {
  const label = css`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: .6rem;
    text-align: left;
    margin-bottom: .2rem;
  `

  const input = css`
    background: #f9f9f9;
    border: 1px solid #cdcdcd;
    box-sizing: border-box;
    border-radius: 4px;
    padding: .6rem .2rem;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: .8rem;
    margin-bottom: .5rem;
  `
  return (
    <div>
      <Formik
        initialValues={{ name: "", contact: "", message: "" }}
        validate={values => {
          let errors = {}
          if (!values.name) {
            errors.name = "Required"
          }
          // else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          // ) {
          //   errors.email = 'Invalid email address';
          // }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label css={[label]} htmlFor="name">Your name</label>
            <Field css={[input]} type="text" name="name" placeholder="Name." />
            <ErrorMessage name="name" component="div" />
            <label css={[label]} htmlFor="contact">Your contact</label>
            <Field css={[input]} type="text" name="contact" placeholder="Phone or eMail." />
            <ErrorMessage name="contact" component="div" />
            <label css={[label]} htmlFor="message">Your message</label>
            <Field css={[input]} component="textarea" rows="4" name="message" placeholder="Your message." />
            <ErrorMessage name="message" component="div" />
            <Button type="submit" css={css`margin-top: .5rem;`}>
          Send message ↠
        </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Basic
