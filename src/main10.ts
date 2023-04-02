/* 11. 패키지의 타입 선언 */
//lodash.d.ts (dts) 파일을 만들고 타입 interface를 만들어야한다.

// lodash.d.ts 파일 생성 후 입력
// declare module "lodash" {
//   interface Lodash {
//     camelCase: (str: string) => string;
//     snakeCase: (str: string) => string;
//     kebabCase: (str: string) => string;
//   }

//   const _: Lodash;
//   export default _;
// }

//하지만 사용하는 패키지마다 이럴수는 없으므로
//https://github.com/DefinitelyTyped/DefinitelyTyped
//npm info @types/lodash

import _ from "lodash";

const str = "the brown fox jumps over the lazy dog.";

console.log(_.camelCase(str));
console.log(_.snakeCase(str));
console.log(_.kebabCase(str));
