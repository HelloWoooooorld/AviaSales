class AviaService {
    async getResources(url) {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`Pizdos`)
        }
        return await res.json();
    }

    getId() {
        return this.getResources('https://front-test.beta.aviasales.ru/search');
    }

    async getIdFromObj() {
        const res = await this.getId();
        return res.searchId
    }

    getTicketFromId() {
        return this.getResources(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.getIdFromObj()}`)
    }
}


export default AviaService;
