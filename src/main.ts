/* 1. 타입 종류 */

//문자
let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}`;
let yourColor: string = "Your color is" + green;

//숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let inifinity: number = Infinity;
let nan: number = NaN;

//불린
let isBoolean: boolean;
let isDone: boolean = false;

//Null / Undefined
//사용할 일 거의 없고 이렇게 지정할 수 있다라고만 알아두자
let nul: null;
let und: undefined;
nul = null;
console.log(nul);
console.log(und);

//배열
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ["Apple", 1, 2, "Banana", 3];

//객체
//typeof DATA ==='object'
//타입이 엄격하지 않으므로 거의 사용하지 않는다. 대신
const obj: object = {};
const arr: object = [];
const func: object = function () {};

//이렇게 사용한다.
const userA: {
  name: string;
  age: number;
  isValid: boolean;
} = {
  name: "Neo",
  age: 50,
  isValid: true,
};

//인터페이스로 만들어진 타입
//인터페이스는 대문자로 시작
interface User {
  name: string;
  age: number;
  isValid: boolean;
}

const userB: User = {
  name: "Trinity",
  age: 50,
  isValid: true,
};

//함수
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
const add2 = function (x: number, y: number): number {
  return x + y;
};
const add3 = (x: number, y: number): number => {
  return x + y;
};
const add4 = (message: string): void => {
  console.log(message);
};

type Operation = (x: number, y: number) => number;
const calculate: Operation = (x, y) => x + y;

const a: number = add(1, 2);

const hello: () => void = function () {
  console.log("Hello world~");
};

const h: void = hello();

//Any
//일반적인 타입스크립트 작성에서는 사용하지 않는 것이 좋다.
// let hello: any = "Hello world";
// hello = 123;
// hello = false;
// hello = null;
// hello = {};
// hello = [];
// hello = function () {};

//Unknown
//정확하게 데이터 타입을 알 수 없는 경우 Unknown을 사용하자.
// const a: any = 123;
// const u: unknown = 123;

// const any: any = a;
// const boo: boolean = a;
// const num: number = a;
// const arr: string[] = a;
// const obj: { x: string; y: number } = a;

// const any: any = u;
// const boo: boolean = u;
// const num: number = u;
// const arr: string[] = u;
// const obj: { x: string; y: number } = u;

//Tuple
//온전하게 순서와 갯수가 정해져 있는 배열의 아이템을 만들때 유용하게 쓸 수 있다.
const tuple: [string, number, boolean] = ["a", 1, false];
const users: [number, string, boolean][] = [
  [1, "Neo", true],
  [2, "Trinity", false],
];

//Void
// function hello(msg: string): void {
//   console.log(`Hello ${msg}`);
// }
// const hi: void = hello("world");

//Never
// const nev: [] = [];
// nev.push(3); //nev에는 아무것도 넣을 수 없다. Never 타입이기 때문에

//Union
// let union: string | number;
// let union: (string | number)[];
// union='Hello type!';
// union=123;
// union= false; //에러

//Intersection
interface User {
  name: string;
  age: number;
}

interface Validation {
  isValid: boolean;
}

const neo: User & Validation = {
  name: "Neo",
  age: 50,
  isValid: true,
};
