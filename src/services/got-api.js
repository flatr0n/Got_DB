export default class GotApi {
  _base = "https://anapioficeandfire.com/api/";
  async getResource(url) {
    const res = await fetch(this._base + url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, reveived ${res.status}`);
    }
    return await res.json();
  }
  getPersons() {
    return this.getResource("characters?page=2&pageSize=15");
  }
  getHouses() {
    return this.getResource("houses");
  }
  getBooks() {
    return this.getResource("books");
  }
  getPerson(id) {
    return this.getResource(`characters/${id}`);
  }
  getHouse(id) {
    return this.getResource(`houses/${id}`);
  }
  getBook(id) {
    return this.getResource(`books/${id}`);
  }
}
