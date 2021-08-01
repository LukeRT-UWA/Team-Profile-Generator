const BaseEmployee = require("./BaseEmployee");

class Intern extends BaseEmployee {
constructor (name, id, email, school) {
    super(name, id, email);
        this.school = school
}
}

module.exports = Intern;