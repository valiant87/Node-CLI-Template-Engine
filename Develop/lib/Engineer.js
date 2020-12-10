// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// Extends subclass
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); // this are inherited
    this.github = github; // this is speciffic to engineer class
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}
// this exports the class module

module.exports = Engineer;
