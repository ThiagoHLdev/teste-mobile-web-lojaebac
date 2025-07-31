
class HomePage {
    get searchInput() { return $('~searchInput'); }  // Exemplo de seletor genérico
    get searchButton() { return $('~searchButton'); }

    async open() {
        // código para abrir a home (se necessário)
    }

    async search(productName) {
        await this.searchInput.setValue(productName);
        await this.searchButton.click();
    }
}
module.exports = new HomePage();
