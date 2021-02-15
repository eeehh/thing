document.querySelector('button').addEventListener('click', () => {
  // get the message content
  const message = document.querySelector('input').value
  if (message.trim() === '') return

  // tell the user it's sending
  document.querySelector('input').value = 'sending...'

  // send a POST request to /messages with 'user' and 'content' in a JSON-formatted body
  fetch('/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: 'lachlan',
      content: message
    })
  }).then(() => {
    document.querySelector('input').value = ''
  })
})