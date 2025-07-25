describe('Teste mobile no navegador', () => {
    it('deve acessar a loja EBAC e verificar o título', async () => {
        await browser.url('http://lojaebac.ebaconline.art.br/');
        const title = await browser.getTitle();
        console.log('Título da página:', title);
        await expect(title).toContain('EBAC');
    });
});