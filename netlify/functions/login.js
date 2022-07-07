exports.handler = async function (event, context) {
  // TODO: Lookup user in the database.
  // TODO: Verify password.
  console.log("Body", event)
  const { username, password } = JSON.parse(event.body)
  console.log(`Credentials received: ${username}, ${password}`)

  const result = {
    accessToken: "TODO: Generate JWT"
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}
