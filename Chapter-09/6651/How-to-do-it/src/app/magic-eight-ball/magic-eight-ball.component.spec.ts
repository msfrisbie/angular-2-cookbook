import {TestBed, async} from '@angular/core/testing';
import {MagicEightBallComponent} from
  './magic-eight-ball.component';
import {MagicEightBallService} from
import {MagicEightBallService} from '../magic-eight-ball.service';
import {By} from '@angular/platform-browser';

describe('Component: MagicEightBall', () => {
  let fixture;
  let getHeaderEl = () =>
  fixture.nativeElement.querySelector('h1');
  let magicEightBallResponse = 'Answer unclear';
  let magicEightBallServiceStub = {
    reveal: () => magicEightBallResponse
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MagicEightBallComponent
      ],
      providers: [
        {
          provide: MagicEightBallService,
          useValue: magicEightBallServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(MagicEightBallComponent);
  }));

  afterEach(() => {
    fixture = undefined;
  });

  it('should begin with no text', async(() => {
    fixture.detectChanges();
    expect(getHeaderEl().textContent).toEqual('');
  }));

  it('should show text after click', async(() => {
    fixture.debugElement.query(By.css('button'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(getHeaderEl().textContent)
      .toEqual(magicEightBallResponse);
  }));
});
