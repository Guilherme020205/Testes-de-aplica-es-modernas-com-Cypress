it('nada agora', function() {
     
})

function soma(a,b){
    return a + b;
}

console.log(soma(1,4))


it('a function', function() {
    console.log('Function', this)
})

it('arrow tst',  () =>  {
    console.log('Arrow', this)
})