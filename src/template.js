const generateTemplate = require("../index.js");

function template() {
    return`
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">y
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My-Team-Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header> 
            <div> 
            <h1>

            </div>
        </header>
    </body>
    
    `
    
}


module.exports = template()