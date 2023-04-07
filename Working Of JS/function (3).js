{
    console.log(x); // outputs undefined
    console.log(y); // outputs ReferenceError: y is not defined
    console.log(z); // outputs ReferenceError: z is not defined
  
    let x = 1;
    var y = 2;
    const z = 3;
  
    console.log(x); // outputs 1
    console.log(y); // outputs 2
    console.log(z); // outputs 3
  }
  