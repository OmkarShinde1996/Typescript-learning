const scores: Array<number> = []
const names: Array<string> = []


//Normal scenario where we want to return the same type as the argument but we never know which type of
//value we are getting
const identityOne = (val: number | boolean): number | boolean => {
    return val
}

identityOne(1)
identityOne(true)
//Below line will give error
// identityOne("one")



//Using generics we can solve above problem. Generics also increases the reusability of the code
const identityTwo = <T>(val: T): T => {
    return val
}

//Generics will work with all of the below codes
identityTwo(1)
identityTwo('one')
identityTwo(true)
identityTwo([1,2,3])
identityTwo(['one', 'two'])
identityTwo({name:'omkar', age: 26})


const getSearchedProducts = <T>(products: T[]): T => {
    return products[0]
}

const getProducts = <T>(products: T[]): T[] => {
    return products
}