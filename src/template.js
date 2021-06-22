const generateHtml = (answer) => {
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
            <div class=""> 
            <h1 class="">My Team</h1>
            </div>
        </header>

        <main>
        <!-- Manager Section -->
            <section>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${answer.managerName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${answer.managerId}</h6>
              <p class="card-text">${answer.officeNumber}</pId>
              <a href="#" class="card-link">${answer.managerEmail}</a>
            </div>
          </div>
            </section>

            <!-- Engineer Section -->
            <section>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${answer.engineerName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${answer.engineerId}</h6>
              <p class="card-text">${answer.engineerGithub}</pId>
              <a href="#" class="card-link">${answer.engineerEmail}</a>
            </div>
          </div>

          <!-- Employee Section -->
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${answer.employeeName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${answer.employeeId}</h6>
            <a href="#" class="card-link">${answer.employeeEmail}</a>
          </div>
        </div>

        <!-- Intern Section -->
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${answer.internName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${answer.internId}</h6>
          <p class="card-text">${answer.internSchool}</pId>
          <a href="#" class="card-link">${answer.internEmail}</a>
        </div>
      </div>
            </section>

            
            
        </main>
    </body>

    </html>
    


    `;
};
module.exports = generateTemplate