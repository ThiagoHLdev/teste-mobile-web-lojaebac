
const HomePage = require('../pageobjects/HomePage');
const SearchPage = require('../pageobjects/SearchPage');

describe('EBAC Loja Mobile Web - Fluxo de Busca', () => {
    before(async () => {
        await browser.url('https://lojaebac.ebaconline.art.br/'); // URL da loja EBAC
    });

    it('Deve buscar produto genérico e validar resultados', async () => {
        await HomePage.search('Produto');
        const count = await SearchPage.getResultsCount();
        console.log('Número de resultados encontrados:', count);
        expect(count).toBeGreaterThan(0);
    });
});
