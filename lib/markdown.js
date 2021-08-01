function generatePage(payload) {

return `
<html>
<head>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<header class="team-heading">
<h1>My New Team</h1>
</header>
<main class="team-area">
<div class="employee-card">
${payload[0].name} <br>
${payload[0].constructor.name}
    <div class="card-body">
        <ul class="list-group-item">
            <li>${payload[0].id}</li>
            <li>${payload[0].email}</li>
            <li>${payload[0].officeNo}</li>
        </ul>
    </div>   
</div>
</main>
</html>
`
}
module.exports = { 
    generatePage,
};
