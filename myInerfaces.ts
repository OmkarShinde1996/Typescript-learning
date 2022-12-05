interface User {
    readonly id: number; //readonly is the typescript reserved keyword which once declared cannot be changed
    name: string;
    age: number;
    isActive?: boolean;
}

const loginHandler = (user: User): string => {
    return "Logged In"
}

const user: User = {
    id: 123,
    name: 'omkar',
    age: 25,
}

loginHandler(user)

interface UserData {
    readonly id: number; //readonly is the typescript value which once declared cannot be changed
    name: string;
    age: number;
    isActive?: boolean;
    startTrial(): string; //function type with return type as string
    getCoupon(couponName: string, value: number): number;
}

const userData: UserData = {
    id: 123,
    name: 'omkar',
    age: 25,
    startTrial: () => {
        return "Hello"
    },
    getCoupon: (couponName: "10PER", off: 10) => {
        return 10
    },
}

//If we define 2 or more interfaces with same name but different values the whenever we are ging to actually 
//define it with values then we need to provide all the values combined of all the interfaces with same name
//like below
interface abc {
    name: string
}
interface abc {
    age: number
}
interface abc {
    isActive: boolean
}

const actualUser: abc = {
    name: 'omkar',
    age: 25,
    isActive: true
}

//We can also extend one interface into another like below. Also we can exted one or more interfaces
interface Vehicle {
    wheels : number
    haveStearing: boolean
}

interface Car extends Vehicle {
    doors: number
    hasGears: boolean
}

interface Bike extends Vehicle {
    isKickStart: boolean
    gears: number
}

const bmw: Car = {
    wheels: 4,
    haveStearing: true,
    doors: 4,
    hasGears: true,
}

const pulser: Bike = {
    wheels: 2,
    haveStearing: true,
    isKickStart: true,
    gears: 4,
}

export {}