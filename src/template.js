

const employeeCard = employee => {

  return `
  <section>
    <div class="card">
    <h3 class="card-title">${employee.name}</h3>
      <ul
        <li>${employee.id}</li>
      <li>${employee.email}</li>  
      </ul>
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
        <li>${employee.getOfficeNumber()}<//li> 
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
              <li>${employee.getSchool()}<//li> 
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
                    <li>${employee.getGitHub()}<//li> 
                  </ul>
                </div> 
              </section>`
}




const generateHtml = team => {
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
        
        ${team.map((employee) => {
          switch(employee.getRole()) {
            case 'Manager':
              return managerCard(employee)
              break;
            case 'Engineer':
              return engineerCard(employee)
              break;
            case "Employee":
              return employeeCard(employee)
              break;
            case "Intern":
              return internCard(employee)
              break;
          }
        }).join('')
      }      
        </main>
    </body>
    <footer>
        <h5> created by Ryan Blessing
        </h5>
    </footer>
    </html>
    `;
};

module.exports = generateHtml