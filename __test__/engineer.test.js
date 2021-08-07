const Engineer = require('../src/employees/Engineer');

function makeEngineer(
    name = "TestName",
    id = "123",
    email = "engineer@email.com",
    github = "testgithub"
) {

    return new Engineer(name, id, email, github)

}

describe("Test engineer Class", () => {
    it("Should have the correct data options", () => {

        const name = "TestName"
        const id = "123"
        const email = "engineer@email.com"
        const github = "githubName"

        const engineer = makeEngineer(name, id, email, github)
    
        expect(engineer.name).toEqual(name)
        expect(engineer.id).toEqual(id)
        expect(engineer.email).toEqual(email)
        expect(engineer.github).toEqual(github)
    });

    it("Should return engineer when getRole() is called", () => {

        const engineer = makeEngineer()
        const expected = "Engineer"
        expect(engineer.getRole()).toEqual(expected)

    })

    it("Should return email when getEmail() is called", () => {

        const expected = "123@gmail.com"
        const engineer = makeEngineer(123, 456, expected)        
        expect(engineer.getEmail()).toEqual(expected)

    })

    it("Should return name when getName() is called", () => {

        const expected = "engineerName"
        const engineer = makeEngineer(expected, 456, 789)        
        expect(engineer.getName()).toEqual(expected)

    })

    it("Should return ID when getID() is called", () => {

        const expected = "ID123"
        const engineer = makeEngineer(123, expected, 789)        
        expect(engineer.getID()).toEqual(expected)

    })

    it("Should return Github when getGithub() is called", () => {

        const expected = "GithubID123"
        const engineer = makeEngineer(123, 456, 789, expected)        
        expect(engineer.getGithub()).toEqual(expected)

    })




}


)