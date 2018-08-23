var SocialProfile = /** @class */ (function () {
    function SocialProfile(name, work, education, address, contact, email, birthday, numberOfFriends, friends, age, currentCity, homeTown) {
        var _this = this;
        //getters and setters
        this.getName = function () {
            return _this.name;
        };
        this.setName = function (name) {
            _this.name = name;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.setWork = function (work) {
            _this.work = work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.setEducation = function (education) {
            _this.education = education;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.setAddress = function (address) {
            _this.address = address;
        };
        this.getContact = function () {
            return _this.contact;
        };
        this.setContact = function (contact) {
            _this.contact = contact;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.setBirthday = function (birthday) {
            _this.birthday = birthday;
        };
        this.getNumberOfFriends = function () {
            return _this.numberOfFriends;
        };
        this.setNumberOfFriends = function (numberOfFriends) {
            _this.numberOfFriends = numberOfFriends;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.setFriends = function (friends) {
            _this.friends = friends;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.setAge = function (age) {
            _this.age = age;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.setCurrentCity = function (currentcity) {
            _this.currentCity = currentcity;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.setHomeTown = function (homeTown) {
            _this.homeTown = homeTown;
        };
        this.name = name;
        this.work = work;
        this.education = education;
        this.address = address;
        this.contact = contact;
        this.email = email;
        this.birthday = birthday;
        this.numberOfFriends = numberOfFriends;
        this.friends = friends;
        this.age = age;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
    }
    return SocialProfile;
}());
var friends = ["Amol", "Rajesh"];
var myProfile = new SocialProfile("Bhaskar Pawar", "Software Engineer", "Btech SGGSI E&T Nanded", "Gulunchwadi", 7975978329, "bhaskar26.pawar@gmail.com", "26 Sep 1990", 578, friends, 27, "Bangalore", "Pune");
console.log("\n\nSocial Profile");
console.log("Name = " + myProfile.getName());
console.log("Work = " + myProfile.getWork());
console.log("Education = " + myProfile.getEducation());
console.log("Address = " + myProfile.getAddress());
console.log("Contact = " + myProfile.getContact());
console.log("Email = " + myProfile.getEmail());
console.log("Birthday = " + myProfile.getBirthday());
console.log("Number Of Friends = " + myProfile.getNumberOfFriends());
console.log("Friends = " + myProfile.getFriends());
console.log("Age = " + myProfile.getAge());
console.log("CurrenCity = " + myProfile.getCurrentCity());
console.log("Home Town = " + myProfile.getHomeTown());
