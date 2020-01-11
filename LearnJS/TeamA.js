var ob = ob || {};
ob.TeamA = ob.TeamA || {};
ob.TeamA.customer = function (firstName, lastName){
	this.fname = firstName;
	this.lname = lastName;
	this.getFullName = function(){
		return firstName + " " +  lastName
	}
	return this;
}
