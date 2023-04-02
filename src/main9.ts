/* 10. 제네릭 - 함수 */

interface Obj {
  x: number;
}
type Arr = [number, number];

// function toArray(a: string, b: string): string[];
// function toArray(a: number, b: number): number[];
// function toArray(a: boolean, b: boolean): boolean[];
// function toArray(a: Obj, b: Obj): Obj[];
// function toArray(a: Arr, b: Arr): Arr[];
// function toArray(a: any, b: any) {
//   return [a, b];
// }

function toArray<T>(a: T, b: T) {
  return [a, b];
}

//prettier-ignore
console.log(
  toArray('Neo','Anderson'),
  toArray(1,2),
  toArray(true,true),
  toArray({x:1},{x:2}),
  toArray([1,2],[3,4]),
  // toArray<Arr>([1,2],[3,4,5])
)

/* 11. 제네릭 - 클래스 */
class UserGeneric<P> {
  // public payload;
  constructor(public payload: P) {
    //이렇게 축약 가능
    // this.payload = payload;
  }
  getPayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
}

interface UserBType {
  name: string;
  age: number;
  emails: string[];
}

const phantasia = new UserGeneric<UserAType>({
  name: "SWJ",
  age: 99,
  isValid: true,
});

const zeon = new UserGeneric<UserBType>({
  name: "Neo",
  age: 102,
  emails: ["neo@gmail.com"],
});

const leon = new UserGeneric<UserAType & UserBType>({
  name: "Neo",
  age: 102,
  isValid: true,
  emails: ["neo@gmail.com"],
});
