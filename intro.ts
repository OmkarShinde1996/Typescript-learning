
//type alieas
type User = {
    name: string;
    age: number;
    isActive: boolean;
}

const fnt = (user: User): User => {
    return user
}

const user: User = {name: 'omkar', age: 25, isActive: true}
fnt(user)

console.log('omkar');
console.log(user.name);

export {}