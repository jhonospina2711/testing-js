const Person = require('./06-person');

describe('Test for person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Jhon', 45, 1.7);
  });

  // AAA
  // Arrange | Given | Dado algo | Preparar para la prueba
  // Act | When | Cuando | Cuando se presente x o y escenario
  // Assert | Then | Entonces | resolver la hipotesis
  test('should return down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Asser
    expect(imc).toBe('down');
  });

  test('sould return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
