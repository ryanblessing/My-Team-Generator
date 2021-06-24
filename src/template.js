const employeeArray = () => {
  if(!employeeArray) {
    return '';
  }
  return `
  
  <section>
    
  
  
  `
}


const generateHtml = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">y
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My-Team-Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header> 
            <div class="container"> 
            <h1 class="">My Team</h1>
            </div>
        </header>

        <main>
            <section>
            
            </section>    
        </main>
    </body>

    </html>
    


    `;
};
module.exports = generateHtml