const Employee = require('../src/employees/Employee');

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

    it("Should return Employee when getRole() is called", () => {

        const employee = makeEmployee()
        const expected = "Employee"
        expect(employee.getRole()).toEqual(expected)

    })

    it("Should return email when getEmail() is called", () => {

        const expected = "123@gmail.com"
        const employee = makeEmployee(123, 456, expected)        
        expect(employee.getEmail()).toEqual(expected)

    })

    it("Should return name when getName() is called", () => {

        const expected = "EmployeeName"
        const employee = makeEmployee(expected, 456, 789)        
        expect(employee.getName()).toEqual(expected)

    })

    it("Should return ID when getID() is called", () => {

        const expected = "ID123"
        const employee = makeEmployee(123, expected, 789)        
        expect(employee.getID()).toEqual(expected)

    })




}


)