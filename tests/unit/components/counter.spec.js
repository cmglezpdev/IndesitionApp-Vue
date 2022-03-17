import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe("Counter Component", () => {

    let wrapper;

    // Ejecutar esto antes de cada prueba
    beforeEach(() => {
        wrapper = shallowMount( Counter );
    })

    test("debe de hacer match con el snapshot", () => {
        
        // Preparacion
        const wrapper = shallowMount( Counter );

        expect( wrapper.html() ).toMatchSnapshot();
    })


    test('h2 debe tener el valor Counter', () => {
        
        expect( wrapper.find('h2').exists() ).toBeTruthy();
        
        const h2Value = wrapper.find('h2').text();
        expect(h2Value).toBe("Counter");

    });


    //! Test simulando un click
    test('debe de incrementar y decrementar el contador', async () => {

        const [decreaseBtn, increaseBtn] = wrapper.findAll('button');

        // Disparador de eventos
        // Esperar a que carge el DOM
        await increaseBtn.trigger("click");
        await increaseBtn.trigger("click");
        await increaseBtn.trigger("click");

        await decreaseBtn.trigger("click");
        await decreaseBtn.trigger("click");

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe("101");
    });

    //! Evualar props
    test('debe de establecer el valor por defecto', () => {
   
        const start = wrapper.props('start');
        let value = wrapper.find('[data-testid="counter"]').text();
        
        expect( Number(value) ).toBe(start);

    });

    //! Enviar props y mostrarlas
    test('debe de mostrar la prop title', () => {
        
        const title = "Hola Mundo";

        const wrapper = shallowMount( Counter, {
            props: {
                title: title
            }
        } );
    
        expect( wrapper.find('h2').text() ).toBe(title);

    });



})