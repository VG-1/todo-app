// app.spec.js

//test case 1

describe("React TodoMVC", () => {
  it("adds and delete a single todo", () => {
    cy.visit("http://localhost:3000") // Arrange
    cy.get(".addTodo")
      .type('First task ')
    // cy.get('.SubmitButton').click()

    // .type('{enter}')
    cy.get('form').submit()
    cy.get('.DeleteTodo').click()
    cy.contains(' No Todos, yay!!!'); // Act

    // Act
    // cy.get(".AddTodoButton").should("have.length", 1) // Assert
  })
})




//test case 2

// checking if there is any todo or not

describe("React TodoMVC", () => {
  it("checks if there is any todo or not", () => {
    cy.visit("http://localhost:3000") // Arrange
    cy.contains(' No Todos, yay!!!'); // Act
  })
})

//test case 3

// checking multiple todos and deleting multiple todos
describe("React TodoMVC", () => {
  it("checks multiple todos", () => {
    cy.visit("http://localhost:3000") // Arrange

    cy.get(".addTodo")

      .type('First task ')
    // .type('{enter}')
    cy.get('form').submit()

      .type('Second task ')


    cy.get('form').submit()
    cy.get(".addTodo")
      .type('Third task ')
    cy.get('form').submit()
    cy.get(".addTodo")
      .type('Fourth task ')
    cy.get('form').submit()
    cy.get('.DeleteTodo').click({ multiple: true })
    // it("checks if there is any todo or not", () => {
    cy.contains(' No Todos, yay!!!'); // Act
    // })
    // cy.get(".AddTodoButton").should("have.length", 1) // Assert
  })
})

//test case 4

// checking multiple todos and deleting multiple todos
describe("React TodoMVC", () => {
  it("checks multiple todos", () => {
    cy.visit("http://localhost:3000") // Arrange

    cy.get(".addTodo")

      .type('First task ')
    // .type('{enter}')
    cy.get('form').submit()

      .type('Second task ')


    cy.get('form').submit()
    cy.get(".addTodo")
      .type('Third task ')
    cy.get('form').submit()
    cy.get(".addTodo")
      .type('Fourth task ')
    cy.get('form').submit()


    //THISSSSSSSSSSSSSSSSSSS

    cy.get('.DeleteTodo')
      .each(($el, $index) => {
        if ($index == 2) {
          return false;
        }
        cy.wrap($el).click()
      })

    // it("checks if there is any todo or not", () => {
    cy.contains('Third Task'); // Act
    cy.contains('Fourth Task'); // Act

    // })
    // cy.get(".AddTodoButton").should("have.length", 1) // Assert
    // })

  })
})

//test case 5

//  test case to check edit button

describe("React TodoMVC", () => {
  it("adds and delete a single todo", () => {
    cy.visit("http://localhost:3000") // Arrange
    cy.get(".addTodo")
      .type('First task ')
    cy.get('.SubmitButton').click()
    cy.get('.edit').clear().type('Edited Task')
    cy.get(".EditTodo").click()

    cy.contains('Edited Task');
    // Act

    // Act
    // cy.get(".AddTodoButton").should("have.length", 1) // Assert
  })
})


