import { AppPage } from './app.po';

describe('App E2E Test Suite', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have the correct h1 text', () => {
    page.navigate();

    expect(page.getHeaderText())
      .toEqual('AppComponent template!');
  });
});
