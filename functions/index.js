const functions = require("firebase-functions")

const admin = require("firebase-admin")
admin.initializeApp()

let whitelist = ["http://localhost:8000", "https://krey.io"]

// firebase functions:config:set gmail.email="christian@krey.io" gmail.password="szhdjuobuflpsfpg"

const cors = require("cors")({ origin: whitelist })
const nodemailer = require("nodemailer")
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = "Cloud Storage for Firebase quickstart"
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    // Grab the text parameter.
    const name = req.query.name
    const contact = req.query.contact
    const message = req.query.message
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    // const snapshot = await admin
    //   .database()
    //   .ref("/messages")
    //   .push({ original: original })
    const email = "christian.krey.de@gmail.com" // The email of the user.
    // const displayName = "christian" // The display name of the user.
    const mailOptions = {
      from: `${APP_NAME} <noreply@firebase.com>`,
      to: email,
    }

    // The user subscribed to the newsletter.
    mailOptions.subject = `New request on krey.io`
    mailOptions.text = `
    Name: ${name || ""}
    Contact: ${contact || ""}
    Message: ${message || ""} `
    await mailTransport.sendMail(mailOptions)
    console.log("New welcome email sent to:", email)
    // return null
    // res.status(201).send({ msg: snapshot.ref.toString() })
    res.send(200)
  })
})

// exports.sendWelcomeEmail = functions.auth.user().onCreate(user => {
//   // [END onCreateTrigger]
//   // [START eventAttributes]
//   const email = user.email // The email of the user.
//   const displayName = user.displayName // The display name of the user.
//   // [END eventAttributes]

//   return sendWelcomeEmail(email, displayName)
// })
// // [END sendWelcomeEmail]

// // Sends a welcome email to the given user.
// async function sendWelcomeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   }

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Welcome to ${APP_NAME}!`
//   mailOptions.text = `Hey ${displayName ||
//     ""}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`
//   await mailTransport.sendMail(mailOptions)
//   console.log("New welcome email sent to:", email)
//   return null
// }

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
// exports.makeUppercase = functions.database
//   .ref("/messages/{pushId}/original")
//   .onCreate((snapshot, context) => {
//     // Grab the current value of what was written to the Realtime Database.
//     const original = snapshot.val()
//     console.log("Uppercasing", context.params.pushId, original)
//     const uppercase = original.toUpperCase()
//     // You must return a Promise when performing asynchronous tasks inside a Functions such as
//     // writing to the Firebase Realtime Database.
//     // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
//     return snapshot.ref.parent.child("uppercase").set(uppercase)
//   })
