function* gen() {
  // Передать вопрос во внешний код и подождать ответа
  yield "2 + 2?";
  yield "333";
  yield 12;

 
}

let generator = gen();

let question = generator.next().value;
alert(question);

 question = generator.next().value;
alert(question);

 question = generator.next().value;
alert(question);