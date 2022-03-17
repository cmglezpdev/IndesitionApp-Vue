import { shallowMount } from '@vue/test-utils';
import Indesition from '@/components/Indesition.vue';

describe("Indesition Component", () => {

    let wrapper;
    // Mocks de un fetch Api
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }));


    beforeEach(() => {
        wrapper = shallowMount( Indesition );
        jest.clearAllMocks();
    })

    test('debe de hacer match con el SnapShot', () => {
        expect( wrapper.html()).toMatchSnapshot();
    });

    test('Escribir en el input no debe de disparar nada', async () => {
        
        const getAnswerSpy = jest.spyOn( wrapper.vm, "getAnswer" );
        
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo');

        expect( getAnswerSpy ).not.toHaveBeenCalled();
    });

    test('Al escribir simbolo "?" debe de disparar el getAnswer', async () => {
        
        const getAnswerSpy = jest.spyOn( wrapper.vm, "getAnswer" );
        
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo?');

        expect( getAnswerSpy ).toHaveBeenCalled();

    });

    test('Pruebas en getAnswer', async () => {
        
        await wrapper.vm.getAnswer();
    
        const img = wrapper.find("img");
        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif");
        expect(wrapper.vm.answer).toBe('SII!!');
    });

    test('pruebas en getAnswer - fallo en el API', async () => {
        
        fetch.mockImplementationOnce(() => Promise.reject('Api is down'));

        await wrapper.vm.getAnswer();

        const img = wrapper.find("img");
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('No se pudo cargar del Api');
    });


})