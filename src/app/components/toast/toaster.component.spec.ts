import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastEvents } from './interfaces';
import { ToastService } from './services';

import { ToasterComponent } from './toaster.component';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;
  let toastService: ToastService;

  const MockToast = {
    message: 'Test message',
    title: 'Test message',
    type: ToastEvents.SUCCESS
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToasterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    toastService = TestBed.inject(ToastService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispose of toasts', async () => {
    component.currentToasts = [{ ...MockToast }];

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.currentToasts.length).toEqual(1);

    component.dispose(0);

    expect(component.currentToasts.length).toEqual(0);
  });
});
