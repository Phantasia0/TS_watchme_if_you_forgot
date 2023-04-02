/* 9. 클래스 - 접근 제어자(Access Modifiers) */

// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
// protected - 나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능

class UserACU {
  public first: string = "";
  protected last: string;
  private age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getAge() {
    return `${this.first} ${this.last} ${this.age} `;
  }
}

class UserBCU extends UserACU {
  // getAge(): string {
  //   return `${this.first} ${this.last} ${this.age} `;
  // }
}

class UserCCU extends UserBCU {
  // getAge(): string {
  //   return `${this.first} ${this.last} ${this.age} `;
  // }
}

const neon = new UserACU("Neon", "Anderson", 102);
console.log(neon.first);
// console.log(neon.last); // protected 에러
// console.log(neon.age);
