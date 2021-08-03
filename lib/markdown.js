

function generatePage() {

    return `
<html>
<head>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<header class="team-heading">
<h1>My New Team</h1>
</header>
<body>
<main class="team-area" id="cards">
</div>
</main>
<script src="index.js"></script>
</body>
</html>
`
}

function generateMiddleManager(payload) {
    return `<div>${payload.constructor.name}</div>
`
}

function generateMiddleEngineer(payload) {
    return `<div>Engineer</div>
    `
}

function generateMiddleIntern(payload) {
    return `<div>Intern</div>
        `
}

function generateEnd(){
return `END END END`

}
module.exports = {
    generatePage,
    generateMiddleManager,
    generateMiddleEngineer,
    generateMiddleIntern,
    generateEnd
};
