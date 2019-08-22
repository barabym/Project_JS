function* gen() {
  // Передать вопрос во внешний код и подождать ответа
  let result = yield "2 + 2?";

  let v=(result+23)*4;

  let result2 = yield v;

  let x=result2*10

  yield x;
}

let generator = gen();

let question = generator.next().value;
// "2 + 2?"

let a = generator.next(27).value;
alert (a);

let b = generator.next(333).value;
alert (b);

