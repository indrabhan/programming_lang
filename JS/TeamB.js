var ob = ob || {};
ob.TeamB = ob.TeamB || {};
ob.TeamB.customer = function (firstName, middleName, lastName){
	this.fname = firstName;
	this.mname = middleName;
	this.lname = lastName;
	this.getFullName = function(){
		return this.fname + " " + this.mname + " " + this.lname
	}
	return this;
}