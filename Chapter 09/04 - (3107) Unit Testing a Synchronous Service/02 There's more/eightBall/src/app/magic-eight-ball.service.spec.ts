import {MagicEightBallService} from 
  './magic-eight-ball.service';

describe('Service: MagicEightBall', () => {
  let magicEightBallService;

  beforeEach(() => {
    magicEightBallService = new MagicEightBallService();
  });

  it('should be able to be injected', () => {
    expect(magicEightBallService).toBeTruthy();
  });

  it('should return a string with nonzero length', () => {
    let result = magicEightBallService.reveal();

    expect(result).toEqual(jasmine.any(String));
    expect(result.length).toBeGreaterThan(0);
  });

  it('should not return the same value twice in a row', () => {
    let last;
    for(let i = 0; i < 50; ++i) {
      let next = magicEightBallService.reveal();
      expect(next).not.toEqual(last);
      last = next;
    }
  });
});
