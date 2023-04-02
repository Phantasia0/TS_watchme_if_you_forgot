export interface UserMod {
  firstName: string;
  lastName: string;
  age: Number;
  isValid: boolean;
}

export function getFullName(user: UserMod) {
  return `${user.firstName} ${user.lastName}`;
}
