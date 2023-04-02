/* 6. 타입 별칭(Alias) */

type TypeA = string;
type TypeB = string | number | boolean;

//prettier-ignore
type UserType = {
  name:string;
  age:number;
  isValid: boolean;
} | [string, number, boolean];

const userAST: UserType = {
  name: "Neo",
  age: 65,
  isValid: true,
};

const userBST: UserType = ["Evan", 65, false];

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case "string":
      return param.toUpperCase();
    case "number":
      return param.toFixed(2);
    default:
      return "Boolean!";
  }
}

//객체 구조나 확장해야 하는 경우 인터페이스
//여러 복합적 타입을 표현해야 할때는 타입 별칭을 사용하자
