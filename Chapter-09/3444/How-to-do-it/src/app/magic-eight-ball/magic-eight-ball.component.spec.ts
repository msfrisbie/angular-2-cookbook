import { TestBed, async } from '@angular/core/testing';
import { MagicEightBallComponent } from './magic-eight-ball.component';
import { MagicEightBallService } from '../magic-eight-ball.service';
import { By } from '@angular/platform-browser';

describe('Component: MagicEightBall', () => {
  let fixture;
  let getHeaderEl = () => fixture.nativeElement.querySelector('h1');
  let magicEightBallResponse = 'Answer unclear';
  let magicEightBallService;
  let revealSpy;

  let clickButton = () => {
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MagicEightBallComponent
      ],
      providers: [
        MagicEightBallService
      ]
    });
    fixture = TestBed.createComponent(MagicEightBallComponent);
    magicEightBallService = fixture.debugElement.injector.get(MagicEightBallService);
    revealSpy = spyOn(magicEightBallService, 'reveal').and.returnValue(magicEightBallResponse);
  }));

  afterEach(() => {
    fixture = undefined;
    magicEightBallService = undefined;
    revealSpy = undefined;
  });

  it('should begin with no text', async(() => {
    fixture.detectChanges();
    expect(getHeaderEl().textContent).toEqual('');
  }));

  it('should call reveal after a click', async(() => {
    clickButton();
    expect(revealSpy.calls.count()).toBe(1);
    expect(revealSpy.calls.mostRecent().returnValue).toBe(magicEightBallResponse);
  }));

  it('should show text after click', async(() => {
    clickButton();
    fixture.detectChanges();
    expect(getHeaderEl().textContent).toEqual(magicEightBallResponse);
  }));
});
