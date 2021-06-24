







const generateManager = data => {
  
  return `
  
  <section>
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.managerName}</li>
        <li class="list-group-item">${data.managerId}</li>
        <li class="list-group-item">${data.managerEmail}</li>
        <li class="list-group-item">${data.officeNumber}</li>
      </ul>
    </div>
  </section>
  `
}

const generateEngineer = data => {
  
  return `
  
  <section>
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.engineerName}</li>
        <li class="list-group-item">${data.engineerId}</li>
        <li class="list-group-item">${data.engineerEmail}</li>
        <li class="list-group-item">${data.engineerGitHub}</li>
      </ul>
    </div>
  </section>
  `
}


const generateEmployee = data => {
  
  return `
  
  <section>
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.employeeName}</li>
        <li class="list-group-item">${data.employeeId}</li>
        <li class="list-group-item">${data.employeeEmail}</li>
      </ul>
    </div>
  </section>
  `
}


const generateIntern = data => {
  
  return `
  
  <section>
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.internName}</li>
        <li class="list-group-item">${data.internId}</li>
        <li class="list-group-item">${data.internEmail}</li>
        <li class="list-group-item">${data.internSchool}</li>
      </ul>
    </div>
  </section>
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
            <div class="navbar-header"> 
            <h1 class="">My Team</h1>
            </div>
        </header>

        <main>
            <section>
            ${generateManager}
            </section> 
            <section>
            ${generateEngineer}
            ${generateEmployee}
            ${generateIntern}
            </section>   
        </main>
    </body>
    <footer>
        <h3> created by Ryan Blessing
        </h3>
    </footer>
    </html>
    


    `;
};
module.exports = generateHtml(); 
  