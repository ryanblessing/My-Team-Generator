const employeeCard = employee => {

  return `
  <section>
    <div class="card">
    <h3 class="card-title">${employee.name}</h3>
    <p>${employee.id}</p>
    <p>${employee.email}</p>  
    </div>
  </section>`
}

const managerCard = manager => {
  return `
  <section>
    <div class="card">
    <h3 class="card-title">${manager.name}</h3>
    <p>${manager.position}</p>
      <ul>
        <li>${manager.id}</li>
        <li>${manager.email}</li>
        <li>${employee.join(getOfficeNumber())}<//li> 
      </ul>
    </div> 
  </section>`
}

const internCard = intern => {
  return `
        <section>
          <div class="card">
          <h3 class="card-title">${intern.name}</h3>
          <p>${intern.position}</p>
            <ul>
              <li>${intern.id}</li>
              <li>${intern.email}</li>
              <li>${employee.join(getSchool())}<//li> 
            </ul>
          </div> 
        </section>`
}

const engineerCard = engineer => {
  return `
              <section>
                <div class="card">
                <h3 class="card-title">${engineer.name}</h3>
                <p>${engineer.position}</p>
                  <ul>
                    <li>${engineer.id}</li>
                    <li>${engineer.email}</li>
                    <li>${employee.join(getGitHub())}<//li> 
                  </ul>
                </div> 
              </section>`
}


const generateHtml = employeeArray => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My-Team-Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header> 
            <div class="navbar-header"> 
            <h1>My Team</h1>
            </div>
        </header>

        <main>
        <section>
        ${managerCard}
        </section>

            <section>
            ${employeeArray.map((employee) => {
              return employeeCard(employee)})
            .join(engineerCard)
            .join(internCard)}
            </section> 
              
        </main>
    </body>S
    <footer>
        <h5> created by Ryan Blessing
        </h5>
    </footer>
    </html>
    


    `;
};
module.exports = generateHtml;