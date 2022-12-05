class User {
    public email: string
    name: string
    private city: string = 'Mumbai' //default value
    constructor (email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const omkar = new User ('omkar@gmail.com', 'omkar')

//If any property is marked as public which is marked as by default in typescript then we can access it anywhere
omkar.email

//once any property is marked as private we can only access that property only in the same class
//and if it is marked as readonly the we can access it but wew can't change it's value.
// omkar.city 


//below code in typescript is different but produces same code as above in javascript
class UserData {
    private city: string = 'Mumbai' //default value
    constructor (public email: string, public name: string, private _courseCount: number = 1) {
    }

    //Getters and Setters in Typescript
    //Getter :- We define getter using get keyword in javascript
    get getEmailId (): string {
        return this.email
    }

    get courseCount (): number {
        return this._courseCount
    }

    //Setter :- We define setter using set keyword in javascript and don't give any return type in typescript
    //Interview important
    //Whenever we are going to define setter method in typescript we does not define its return type
    set courseCount (courseNum) {
        if(courseNum <= 1){
            throw new Error('Course count cannot be less than 1')
        }
        this._courseCount = courseNum
    }
}

const user = new UserData('omkar@gmail.com', 'omkar')
user.courseCount
