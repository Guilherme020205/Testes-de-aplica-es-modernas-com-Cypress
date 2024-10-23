/// <reference types="cypress" />

it('Equali', () => {
    const a = 1;
    expect(a).equal(1)
    expect(a, 'Deveria ser 1').equal(1) //  Mostra uma mensagem melhorada de erro
    expect(a).to.be.equal(1) // espera que seja igual a 2
    expect(a).not.to.be.equal(2) // espera que não seja igual a 2
});

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true // booleano direto no to.be  
    expect(true).to.be.true  
    expect(b).to.be.null 
    expect(a).to.be.not.null   
    expect(c).to.be.undefined   
});

it('Object equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.deep.equal({a: 1, b:2})
    // expect(obj).to.be.equal({a: 1, b:2}) // Assim não funciona ele não considera
    expect(obj).eql({a: 1, b:2}) // Valida tem tais valores
    expect(obj).include({a: 1}) // Valida que tem incluido a: 1
    expect(obj).to.have.property('b', 2) // Valida que tem a propriedade b e seu valor é 2
    expect(obj).to.not.be.empty // Valida que não está vazio
    expect({}).to.be.empty // Valida que está vazio

});

it('Arrays', () => {
    const arr =  [1,2,3]

    expect(arr).to.have.members([1,2,3]) // valida contem somente esses dados
    expect(arr).to.have.include.members([1,3]) // valida que possa conter esses dados
    expect(arr).to.not.be.empty // Valida que não está vazio
    expect([]).to.be.empty // Valida que não está vazio

});

it('Types', () => { // Valida os tipos
    const num = 1
    const str = "FlexMobile"

    expect(num).to.be.a('number')
    expect(str).to.be.not.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.a('object')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')

});

it('String', () => {

    const str = "Flex mobile"

    expect(str).to.be.equal('Flex mobile')
    expect(str).to.have.length('11')
    expect(str).to.contains('Flex')
    expect(str).to.match(/Flex/) // Valida contem a palvra x
    expect(str).to.match(/^Flex/) // Valida contem no inicio a palvra x
    expect(str).to.match(/mobile$/) // Valida contem no final a palvra x
    expect(str).to.match(/.{11}/)
    expect(str).to.match(/\w+/) // Valida contem apenas palavras
    expect(str).to.match(/\D+/) // Valida contem apenas letras
    
})

it('Numbers', () => {
    const num = 2
    const floatNum = 5.2123

    expect(num).to.be.equal(2)
    expect(num).to.be.above(1) // Valida esta a cima de x
    expect(num).to.be.below(10) // Valida esta a baixo de x
    expect(floatNum).to.be.equal(5.2123)
    expect(floatNum).to.be.closeTo(5.2, 0.1) // Valida que o floarNum chega perto de x com uma precisão y
});