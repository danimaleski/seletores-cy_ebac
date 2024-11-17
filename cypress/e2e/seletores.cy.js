///<reference types = "cypress"/>

describe('Seletores avançados com cypress', () => {

  beforeEach(() => {
    cy.visit('../../seletores.html')
  });

  it('Seleciona elementos que contêm um Texto específico', () => {
    cy.contains('Cypress Ebac').should('have.attr', 'class', 'filho-2 item-especial')
    //attr: atributo, neste caso uma classe
  });
    
  it('Seleciona o elemento com a classe pai', () => {
    cy.get('.pai').should('exist') 
  })

  it('Seleciona o elemento com o id Filho', () => {
    cy. get('#id-filho').should('exist')
   })

  it('Seleciona um elemento filho dentro do elemento com a classe pai', () => {
    cy.get('.pai').find('.filho-4').should('contain', 'Testes automatizados com Cypress - aulas da EBAC') 
    //amarre o item pai com o item filho para uma busca mais refinada
  });

  it('Seleciona o segundo elemento <span> com a classe irmao', () => {
    cy.get('.irmao + .irmao').should('contain', 'Curso da EBAC de Qualidade de Software')
    //o + seria para pegar o segundo, já que a classe é igual 
  });

  it('Seleciona o próximo elemento irmão', () => {
    cy.get('#irmao-1').next().should('contain', 'Curso da EBAC de Qualidade de Software')
    //next é para pegar o próximo item
  });

  it('Seleciona o elemento irmão anterior', () => {
     cy.get('#irmao-2').prev().should('contain', 'Curso Engenheiro de Qualidade de Software')
     //prev é para pegar o item anterior
  });

  it('Seleciona o irmão da div anterior', () => {
     cy.get('[name="nome-do-atributo"]').prev().should('contain', 'Cypress Ebac')
     //da para pegar qualquer item da div anterior
  });

  it('Seleciona o terceiro elemento <li> encontrado', () => {
    cy.get('li').eq(2).should('have.text', 'Testes Ebac') 
    //eq serve para pegar a posição que deseja
  });

  it('Seleciona o elemento com o atributo data-test', () => {
    cy.get('[data-test="div-pai"]').should('exist') 
    //sempre que for trabalhar com o atributo inteiro, precisa ser colocado entre [], o data-test serve para testes, pode ser conversado com o dev
  });

  it('Seleciona o elemento com a classe pai do elemento com a classe filho', () => {
    cy.get('.filho-4').parent('[data-test="div-pai"]').should('have.attr', 'class', 'pai')
  });

  it('Seleciona o elemento com um valor em um select', () => {
    cy.get('[name="opcao"]').select('medio')//pelo id ou pelo texto
    cy.get('#id-enviar').click()
    cy.get('#mensagemFeedback').should('have.text', 'Obrigado por compartilhar conosco!') 
  });

})