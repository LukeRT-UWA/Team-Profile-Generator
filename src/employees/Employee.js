class Employee {

    constructor(name, id, email){

        this.id = id;
        this.email = email;
        this.name = name;
    }

}

Employee.prototype.getRole = function(){
    return "Employee"
}

Employee.prototype.getEmail = function () {
    return this.email;
};

Employee.prototype.getName = function(){
    return this.name
}
Employee.prototype.getId = function () {
    return this.id;
};

module.exports = Employee