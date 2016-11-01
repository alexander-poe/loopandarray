function fizzBuzz(countTo) {
  var count = prompt('number please');
  for (var i = 1; i <= count; i++) {
    if (i % 15 === 0) {
    console.log('fizzbuzz');
  }
    else if (i % 21 === 0) {
    console.log('fizzbang')
  }
    else if (i % 35 === 0) {
    console.log('buzzbang');
  }
    else if (i % 5 === 0) {
    console.log('buzz');
  }
    else if (i % 3 === 0) {
    console.log('fizz');
  }
    else {
    console.log(i);
  }
  }
   
    return count;
}

fizzBuzz();




