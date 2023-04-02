/* 3. 타입 단언(Assertion) */
// '단언' = 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
// const el = document.querySelector("body") as HTMLBodyElement;
// el.textContent = "Hello world?!";

const el = document.querySelector(".title");
if (el) {
  //타입 가드
  el.textContent = "Hello world?!";
}

// 2)
//잘못된 코드
function getNumber(x: number | null | undefined) {
  if (x) {
    //타입 가드
    return Number(x.toFixed(2));
  }
}

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }

  return (x as string).toUpperCase();
}

getValue("hellow world", false);
getValue(3.1415, true);

/* 4. 타입 가드 */
function add5(val: string | number | boolean) {
  let res = "Result :";

  if (typeof val === "number") {
    res += val.toFixed(2);
  }

  if (typeof val === "string") {
    res += val.toUpperCase();
  }
}

add5(3.1415);
add5("hello world");

function logText(el: Element) {
  console.log(el.textContent);
}

const h1El = document.querySelector("h1");
if (h1El instanceof HTMLHeadingElement) {
  logText(h1El);
}
