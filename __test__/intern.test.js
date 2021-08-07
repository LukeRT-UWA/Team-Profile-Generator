const Intern = require('../src/employees/Intern');

function makeIntern(
    name = "TestName",
    id = "123",
    email = "intern@email.com",
    school = "testgithub"
) {

    return new Intern(name, id, email, school)

}

describe("Test intern Class", () => {
    it("Should have the correct data options", () => {

        const name = "TestName"
        const id = "123"
        const email = "intern@email.com"
        const school = "schoolbName"

        const intern = makeIntern(name, id, email, school)
    
        expect(intern.name).toEqual(name)
        expect(intern.id).toEqual(id)
        expect(intern.email).toEqual(email)
        expect(intern.school).toEqual(school)
    });

    it("Should return intern when getRole() is called", () => {

        const intern = makeIntern()
        const expected = "Intern"
        expect(intern.getRole()).toEqual(expected)

    })

    it("Should return email when getEmail() is called", () => {

        const expected = "123@gmail.com"
        const intern = makeIntern(123, 456, expected)        
        expect(intern.getEmail()).toEqual(expected)

    })

    it("Should return name when getName() is called", () => {

        const expected = "internName"
        const intern = makeIntern(expected, 456, 789)        
        expect(intern.getName()).toEqual(expected)

    })

    it("Should return ID when getID() is called", () => {

        const expected = "ID123"
        const intern = makeIntern(123, expected, 789)        
        expect(intern.getID()).toEqual(expected)

    })

    it("Should return School when getSchool() is called", () => {

        const expected = "school123"
        const intern = makeIntern(123, 456, 789, expected)        
        expect(intern.getSchool()).toEqual(expected)

    })




}


)