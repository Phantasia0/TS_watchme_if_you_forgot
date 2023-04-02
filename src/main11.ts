/* 12. 타입 내보내기 가져오기 */

import { getFullName, UserMod } from "./user";

const man: UserMod = {
  firstName: "John",
  lastName: "Conner",
  age: 100,
  isValid: true,
};

const fullName = getFullName(man);

console.log(fullName);
console.log(man.isValid);
