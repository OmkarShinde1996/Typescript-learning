
//function argument type
function addTwo(num: number){
    return num + 2
}

addTwo(5)

//function argument type and function return type
//if function does not return anything the type will be "void"
function isNumber(num: number): boolean {
    return num > 2
}

isNumber(5)

//optional values using "?" before :
const signUpUser = (name: string, email: string, isPaid?: boolean): void => {}

signUpUser('omkar', 'omkar@g.com')

//Union operator "|"
const getValue = (myVal: number): boolean | string => {
    if(myVal > 5){
        return true
    }
    return "200 OK"
}

getValue(23)

export {}