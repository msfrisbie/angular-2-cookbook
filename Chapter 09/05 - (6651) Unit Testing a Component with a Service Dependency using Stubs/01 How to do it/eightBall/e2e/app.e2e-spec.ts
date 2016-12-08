import { EightBallPage } from './app.po';

describe('eight-ball App', function() {
  let page: EightBallPage;

  beforeEach(() => {
    page = new EightBallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
