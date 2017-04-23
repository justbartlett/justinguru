import { JustinguruPage } from './app.po';

describe('justinguru App', function() {
  let page: JustinguruPage;

  beforeEach(() => {
    page = new JustinguruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
