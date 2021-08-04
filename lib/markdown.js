

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

`
}

function generateMiddleManager(payload) {
    return `<div>${payload.constructor.name}</div>
    <div>${payload.name}</div>
    <div>${payload.id}</div>
    <div>${payload.email}</div>
    <div>${payload.officeNo}</div>
`
}

function generateMiddleEngineer(payload) {
    return `<div>${payload.constructor.name}</div>
    <div>${payload.name}</div>
    <div>${payload.id}</div>
    <div>${payload.email}</div>
    <div>${payload.github}</div>
`
}

function generateMiddleIntern(payload) {
    return `<div>${payload.constructor.name}</div>
    <div>${payload.name}</div>
    <div>${payload.id}</div>
    <div>${payload.email}</div>
    <div>${payload.school}</div>
`
}

function generateEnd(){
return `</html>`

}
module.exports = {
    generatePage,
    generateMiddleManager,
    generateMiddleEngineer,
    generateMiddleIntern,
    generateEnd
};
