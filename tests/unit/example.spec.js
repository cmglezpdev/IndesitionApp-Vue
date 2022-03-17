
// Pruebas relacionadas al componente Example 
// Test Suite
describe("Example Component", () => {

  // Descripcion de lo que la prueba debe hacer
  test("Debe de ser mayor a 10", () => {
   
    // Arreglar
    let value = 9;

    // Estimulo
    value += 2;

    // Observar el resultado
    expect(value).toBeGreaterThan(10);


  })

})