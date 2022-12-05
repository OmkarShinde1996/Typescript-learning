//Abstract class is the just blueprint. We can't create an object of abstract class
//We can only exted the abstract class and we have to initiatlize the values to the 
//methods or variables present in the abstract class into the class which is extending the abstract class


//Abstract Class
abstract class Abstract {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    //Abstract method
    abstract getSepia(): void

    //non-abstract method
    getReelTime(): number{
        return 8
    }
}

//We cannot create an object or instance of an abstract class
// const newObj = new Abstract("","")

//We can extend an abstract class ike below

class newClass extends Abstract {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('Sepia');
    }
}

const newObj = new newClass("","",3)

//Interview important
//What is the use of abstract classes or what is the difference between abstract classes and interfaces
//Ans :- Abstract classes are not 100% abstract means we can keep abstract data as well as normal data
//in abstract classes like above. Also we cannot create object of abstract classes.
//But in interface it is 100% abstract means we only have to give blueprint of the data and that 
//data gets initialized in the class which implements that interface.