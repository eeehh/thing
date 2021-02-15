const fs = require('fs')

// express is a node module which starts a little webserver for us
const express = require('express')
const app = express()

// this line will make it so that going to example.com/X will return public/X, or index.html by default for the root url
app.use(express.static('public'))

// this line allows us to receive JSON in request bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// this function will run when a 'POST' request is sent to the /messages url
app.post('/messages', (req, res) => {
  // create the data file if it doesn't already exist
  if (!fs.existsSync('data')) {
    fs.writeFileSync('data', '')
  }

  // add the message content to the file, separating the user and message with a colon
  const data = req.body
  fs.appendFileSync('data', data.user + ':' + data.content + '\n')

  // return a response so the browser knows the message has been sent
  res.status(200).send()
})

// bind the server to port 8080, you can use nginx to proxy this
app.listen(8080, () => console.log('Website online at http://localhost:8080'))
