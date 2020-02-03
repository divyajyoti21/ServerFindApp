import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DynamictableComponent } from './components/dynamictable/dynamictable.component';
import { RangesliderComponent } from './components/rangeslider/rangeslider.component';
import { SelectdropdownfilterComponent } from './components/selectdropdownfilter/selectdropdownfilter.component';
import { CheckboxfilterComponent } from './components/checkboxfilter/checkboxfilter.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        DynamictableComponent,
        CheckboxfilterComponent,
        SelectdropdownfilterComponent,
        RangesliderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

 /* it(`should have as title 'servers-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('servers-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('servers-app app is running!');
  });*/
});
