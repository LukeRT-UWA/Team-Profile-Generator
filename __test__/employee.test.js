const Employee = require('./src/employees/Employee');

function makeEmployee(
    name = "TestName",
    id = "123",
    email = "employee@email.com",
) {

    return new Employee(name, id, email)

}

describe("Test Employee Class", () => {
    it("Should have the correct data options", () => {

        const name = "TestName"
        const id = "123"
        const email = "employee@email.com"

        const employee = makeEmployee(name, id, email)
    
        expect(employee.name).toEqual(name)
        expect(employee.id).toEqual(id)
        expect(employee.email).toEqual(email)
    });






}


)