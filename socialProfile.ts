class SocialProfile {
    private name: string;
    private work: string;
    private education : string;
    private address: string;
    private contact: number;
    private email: string;
    private birthday: string;
    private numberOfFriends: number;
    private friends: string[];
    private age: number;
    private currentCity: string;
    private homeTown: string;

    constructor (name: string,work: string,education: string,address: string,contact: number,email: string,birthday: string,numberOfFriends: number,friends: string[],age: number,currentCity: string,homeTown: string) {
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
    
    //getters and setters
    getName = ():string => {
        return this.name;
    }
    setName = (name:string) => {
        this.name = name;
    }
    getWork = ():string => {
        return this.work;
    }
    setWork = (work:string) => {
        this.work = work;
    }
    getEducation = ():string => {
        return this.education;
    }
    setEducation = (education:string) => {
        this.education = education;
    }
    getAddress = ():string => {
        return this.address;
    }
    setAddress = (address:string) => {
        this.address = address;
    }
    getContact = ():number => {
        return this.contact;
    }
    setContact = (contact:number) => {
        this.contact = contact;
    }
    getEmail = ():string => {
        return this.email;
    }
    setEmail = (email:string) => {
        this.email = email;
    }
    getBirthday = ():string => {
        return this.birthday;
    }
    setBirthday = (birthday:string) => {
        this.birthday = birthday;
    }
    getNumberOfFriends = ():number => {
        return this.numberOfFriends;
    }
    setNumberOfFriends = (numberOfFriends:number) => {
        this.numberOfFriends = numberOfFriends;
    }
    getFriends = ():string[] => {
        return this.friends;
    }
    setFriends = (friends:string[]) => {
        this.friends = friends;
    }
    getAge = ():number => {
        return this.age;
    }
    setAge = (age:number) => {
        this.age = age;
    }
    getCurrentCity = ():string => {
        return this.currentCity;
    }
    setCurrentCity = (currentcity:string) => {
        this.currentCity = currentcity;
    }
    getHomeTown = ():string => {
        return this.homeTown;
    }
    setHomeTown = (homeTown:string) => {
        this.homeTown = homeTown;
    }
    
}
let friends:string[] = ["Amol","Rajesh"];
let myProfile = new SocialProfile("Bhaskar Pawar","Software Engineer","Btech SGGSI E&T Nanded","Gulunchwadi",7975978329,"bhaskar26.pawar@gmail.com","26 Sep 1990",578,friends,27,"Bangalore","Pune");
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