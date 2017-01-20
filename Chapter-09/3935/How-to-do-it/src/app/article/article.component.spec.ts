import {TestBed, async} from '@angular/core/testing';
import {ArticleComponent} from './article.component';

describe('Component: Article', () => {
  let expectedTitle = 'Captain Hook Sues Over Spork Snafu';
  let fixture;
  it('should create an instance', () => {
    let component = new ArticleComponent();
    expect(component).toBeTruthy();
  });
  
  describe('Async', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ArticleComponent
        ],
      });
      fixture = TestBed.createComponent(ArticleComponent);
    }));
    
    afterEach(() => {
      fixture = undefined;
    });
    
    it('should have correct title', async(() => {
      expect(fixture.componentInstance.title)
        .toEqual(expectedTitle);
    }));
    
    it('should render title in an h1 tag', async(() => {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('h1')
        .textContent).toContain(expectedTitle);
    }));
  });
});