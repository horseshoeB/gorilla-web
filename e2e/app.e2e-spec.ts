import { GorillaWebPage } from './app.po';

describe('gorilla-web App', function() {
  let page: GorillaWebPage;

  beforeEach(() => {
    page = new GorillaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
