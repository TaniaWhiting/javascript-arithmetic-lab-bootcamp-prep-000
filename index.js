var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a,b){
  return (a + b);
}


beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function subtract(a,b){
  return (a - b);
}


beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function multiply(a,b){
  return (a * b);
}


beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function divide(a,b){
  return (a / b);
}

function incrementN(n){
   return (n = n++);
}

function decrementN(n){
  return (n = n--);
}


}
