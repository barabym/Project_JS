function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
      yield i;
    }
  
  }
  
  // Используем оператор … для преобразования итерируемого объекта в массив
  let sequence = [...generateSequence(2,5)];
  
// let sequence =["qw","sd","rt","hg","sd"]


  alert(sequence); // 2, 3, 4, 5