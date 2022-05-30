describe('group 1', () => {
  // beforeAll() es una sentencia que se ejecuta antes de ejecutar las pruebas;
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  // Sentencia que se ejecuta despues de ejecutar las pruebas ejemplo: Bajar una BD
  afterAll(() => {
    console.log('afterAll');
  });
  // down db

  // Es una sentencia que se ejecuta antes de ejecutar cada prueba
  beforeEach(() => {
    console.log('beforeEach');
  });

  // Es una sentencia que se ejecuta antes de ejecutar cada prueba
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
    });
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
