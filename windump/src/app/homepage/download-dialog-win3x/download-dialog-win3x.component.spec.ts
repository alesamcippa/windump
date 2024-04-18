import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDialogComponent } from './download-dialog-win3x.component';

describe('DownloadDialogComponent', () => {
  let component: DownloadDialogComponent;
  let fixture: ComponentFixture<DownloadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
