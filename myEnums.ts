//Aroplane seats options
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

//Doing it with ENUMS in typescript
const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
}

const seat = SeatChoice.AISLE

//You can also assign the index just hover on the enum to see the indexes 
//(you can assign number or strings as index)
const enum SeatChoice1 {
    AISLE = 10,
    MIDDLE = 14,
    WINDOW = 15,
}