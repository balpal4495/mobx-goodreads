import { observable, computed, action } from 'mobx';

class Store {
  name = 'dummy app';
  description = 'just experimenting with mobx';
  @observable numClicks = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }

  @action clickButton() {
    console.log('action fired off');
    let url = 'https://www.goodreads.com/search.xml?key=PffdULAudc8ss8djUWWpdw&q=Ender%27s+Game';
    // let anyUrl = 'http://anyorigin.com/get?url=https%3A//www.goodreads.com/search.xml%3Fkey%3DPffdULAudc8ss8djUWWpdw%26q%3DEnder%2527s+Game&callback=?';
    let anyUrl = 'http://localhost:5000/book';
    let book = fetch(anyUrl)
              .then(function(response) {
                return response.json();
              });
    console.log('book::', book);
    this.numClicks++;
  }
}

export default Store;