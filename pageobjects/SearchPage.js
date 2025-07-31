
class SearchPage {
    get resultItems() { return $$('~resultItem'); } // lista de resultados

    async getResultsCount() {
        return this.resultItems.length;
    }
}
module.exports = new SearchPage();
