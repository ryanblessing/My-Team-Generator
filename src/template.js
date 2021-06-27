

const employeeCard = employee => {

  return `
  <div class="d-sm-inline-flex" id="Employees">
        <div class="col-sm-3" id="employee-card">
          <div class="card border" style="width: 18rem;">
            <div class="card-body">
              <h3 class="card-title border-bottom">${employee.name}</h3>
              <p>${employee.getRole()}</p>
                <ul>
                  <li>${employee.id}</li>
                  <li>${employee.email}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
  `
}

const managerCard = manager => {
  return `
  <section class="row" id="Managers">
      <div class="col-lg-10">
        <div class="card border" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title border-bottom">${manager.name}</h3>
            <p>${manager.getRole()}</p>
            <ul>
              <li>${manager.id}</li>
              <li>${manager.email}</li>
              <li>${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <br>`
}

const internCard = intern => {
  return `
  <div class="d-sm-inline-flex" id="Interns">
  <div class="col-sm-3" id="employee-card">
    <div class="card border" style="width: 18rem;">
      <div class="card-body"></div>
        <h3 class="card-title border-bottom">${intern.name}</h3>
        <p>${intern.getRole()}</p>
        <ul>
          <li>${intern.id}</li>
          <li>${intern.email}</li>
          <li>${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</section>
        <br>`
}

const engineerCard = engineer => {
  return `
  <section class="col d-sm-inline-flex" id="Engineers">
  <div class="col-sm-3" id="employee-card">
    <div class="card border" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title border-bottom">${engineer.name}</h3>
        <p>${engineer.getRole()}</p>
        <ul>
          <li>${engineer.id}</li>
          <li>${engineer.email}</li>
          <li>${engineer.getGitHub()}</li>
        </ul>
      </div>
    </div>
  </div>
  <br>`
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div class="container-fluid">
          <h4 class="navbar-brand" href="#">My Team Generator</h4>
        </div>
      </nav>
        </header>

        <main>
        
        ${employeeArray.map((employee) => {
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
    <footer class="container-fluid navbar-expand-lg bg-dark text-light">
        <h4> created by Ryan Blessing
        </h4>
    </footer>
    </html>
    `;
};

module.exports = generateHtml