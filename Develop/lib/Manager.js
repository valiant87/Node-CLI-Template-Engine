// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// Extends subclass
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); // are inhereted
    this.officeNumber = officeNumber; // this is speciffic to Manager
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
// This exports class module
module.exports = Manager;
