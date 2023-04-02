/* 8. 함수 - 오버로딩(Overloading) */

// 1)
function adds1(a: string, b: string) {
  return a + b;
}
function adds2(a: number, b: number) {
  return a + b;
}

adds1("hello", "world~");
adds2(1, 2);
// adds1('hello', 2);
// adds1('hello', 2);

// 2)
function addt(a: string, b: string): string; //타입 선언
function addt(a: number, b: number): number; //타입 선언
function addt(a: any, b: any) {
  //함수 구현부 (any 타입 선언한게 아님. 위 쪽에 있는 타입선언이 사용될 수 있도록 쓴것)
  return a + b;
}
addt("hello", "world~");
addt(1, 2);
// addt("hello", 2);
// addt(2, "hello");
