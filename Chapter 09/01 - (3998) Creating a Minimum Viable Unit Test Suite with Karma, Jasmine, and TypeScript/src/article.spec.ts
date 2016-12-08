import {Article} from './article';

describe('Article unit tests', () => {
  it('Has correct title', () => {
    let a = new Article();
    expect(a.title)
      .toBe("Lab Mice Strike for Improved Working Conditions, Benefits");
  });
});
