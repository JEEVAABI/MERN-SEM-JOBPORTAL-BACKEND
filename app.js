const express = require('express')
const app = express()
PORT = 3500

app.get('/',(request,response)=>{
    response.send("Get Router on Home Page")
})

app.listen(PORT, console.log(`Server listening at http://localhost:${PORT}/api/v1/jobs`))
