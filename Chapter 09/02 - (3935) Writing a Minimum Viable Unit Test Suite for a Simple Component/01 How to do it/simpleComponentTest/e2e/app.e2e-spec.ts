import { SimpleComponentTestPage } from './app.po';

describe('simple-component-test App', function() {
  let page: SimpleComponentTestPage;

  beforeEach(() => {
    page = new SimpleComponentTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
