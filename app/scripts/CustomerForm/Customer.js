/**
  * Customer.js
  *
  */
var Customer = function(customerId, firstName, lastName, phoneNumber, email) { // Customer CTOR
	this.customerId =  customerId || -1; // "-1"
	this.firstName = firstName || "";
	this.lastName = lastName ||  "";
	this.phoneNumber = phoneNumber || "";
	this.email = email || "";

};

Customer.prototype.getFirstName = function() {
	return this.firstName;
};

Customer.prototype.setFirstName = function(firstName) {
	this.firstName = firstName;
};

