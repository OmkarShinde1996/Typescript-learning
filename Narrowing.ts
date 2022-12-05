const detectType = (val: number | string) => {
    if(typeof val === 'string'){
        return val.toUpperCase()
    }
    return val + 3
}

const provideId = (id: string | null) => {
    if(!id){
        console.log('Kindlly provide valid id');
        return
    }
    id.toLowerCase()
}



//Narrowing the type with "in" operator
interface User {
    email: string,
    name: string
}

interface Admin {
    email: string,
    name: string,
    isAdmin: boolean,
}

const isAdminAccount = (account: User | Admin) => {
    if('isAdmin' in account){
        return account.isAdmin
    }
    return false
}

const notAdmin: User = {
    email: 'omkar@gmail.com',
    name: 'omkar',
}

const AdminUser: Admin = {
    email: 'omkar@gmail.com',
    name: 'omkar',
    isAdmin: true,
}

isAdminAccount(notAdmin) //return false
isAdminAccount(AdminUser) //returns true


//Narrowing the type with "instanceOf" operator
const logValue = (x: Date | string) => {
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else {
        console.log(x.toUpperCase())
    }
}


//Narrowing the type with Discreminated union
interface Circle {
    kind: 'circle',
    radious: number
}

interface Square {
    kind: 'square',
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    length: number
    width: number
}

type Shape =  Circle | Square | Rectangle

const trueShape = (shape: Shape) => {
    if(shape.kind === 'circle'){
        return Math.PI * shape.radious ** 2
    }
    // return shape.side * shape.side
}


//Narrowing type with exhaustivness checking 
const getShape = (shape: Shape) => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radious ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}