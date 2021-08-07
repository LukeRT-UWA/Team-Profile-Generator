const Manager = require('../src/employees/Manager');

function makeManager(
    name = "TestName",
    id = "123",
    email = "Manager@email.com",
    officeNo = "testschool"
) {

    return new Manager(name, id, email, officeNo)

}

describe("Test manager Class", () => {
    it("Should have the correct data options", () => {

        const name = "TestName"
        const id = "123"
        const email = "manager@email.com"
        const officeNo = "schoolbName"

        const manager = makeManager(name, id, email, officeNo)
    
        expect(manager.name).toEqual(name)
        expect(manager.id).toEqual(id)
        expect(manager.email).toEqual(email)
        expect(manager.officeNo).toEqual(officeNo)
    });

    it("Should return manager when getRole() is called", () => {

        const manager = makeManager()
        const expected = "Manager"
        expect(manager.getRole()).toEqual(expected)

    })

    it("Should return email when getEmail() is called", () => {

        const expected = "123@gmail.com"
        const manager = makeManager(123, 456, expected)        
        expect(manager.getEmail()).toEqual(expected)

    })

    it("Should return name when getName() is called", () => {

        const expected = "managerName"
        const manager = makeManager(expected, 456, 789)        
        expect(manager.getName()).toEqual(expected)

    })

    it("Should return ID when getID() is called", () => {

        const expected = "ID123"
        const manager = makeManager(123, expected, 789)        
        expect(manager.getID()).toEqual(expected)

    })

    it("Should return officeNo when getOfficeNo() is called", () => {

        const expected = "school123"
        const manager = makeManager(123, 456, 789, expected)        
        expect(manager.getOfficeNo()).toEqual(expected)

    })




}


)