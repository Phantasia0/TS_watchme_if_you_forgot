/* 5. 인터페이스(Interface) */

// A.
//선택적 속성 - ?
//읽기 전용 속성 - readonly

interface Users {
  name: string;
  readonly age: number;
  isValid?: boolean;
}

const matrix: Users = {
  name: "Neo",
  age: 70,
  // isValid: true,
};

//matrix.age = 22;

// B. 함수 타입 - 호출 시그니처(Call Signature)

interface GetName {
  (param: string): string;
  // (param: string, hello: string): string;
}

interface UserCS {
  name: string;
  age: number;
  getName: GetName;
  //getName: (message: string) => string;
}

const hogwart: UserCS = {
  name: "Harry",
  age: 66,
  getName: function (message: string): string {
    console.log(message);
    return this.name;
  },
};

hogwart.getName("Hello~");

// C. 인덱스 기능 타입 - 인덱스 시그니처(Index Signature)

//배열
interface Fruits {
  [item: number]: string;
}

const fruitss: Fruits = ["Apple", "Banana", "Cherry"];
console.log(fruitss[1]);

//객체
interface UserDS {
  [key: string]: unknown;
  name: string;
  age: number;
}

const human: UserDS = {
  name: "Aragon",
  age: 100,
};

human["isValid"] = true;
human["emails"] = ["thesecond@gmail.com"];

interface Payload {
  [key: string]: unknown;
}

function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

interface UserES {
  [key: string]: unknown; // 이것을
  name: string;
  age: number;
  isValid: boolean;
}

const maximus: UserES = {
  name: "Roman",
  age: 85,
  isValid: true,
};

logValues(maximus); //인덱싱 가능한 타입일 수 있도록 추가해준다

//확장(상속)

interface UserA {
  name: string;
  age: number;
}

interface UserB extends UserA {
  isValid: boolean;
}

const harry: UserA = {
  name: "Potter",
  age: 10,
  // isValid: true,
};

const ron: UserB = {
  name: "Wizzley",
  age: 10,
  isValid: true,
};

interface FullName {
  firstName: string;
  lastName: string;
}
interface FullName {
  middleName: string;
}

const fullName: FullName = {
  firstName: "S",
  middleName: "W",
  lastName: "J",
};
