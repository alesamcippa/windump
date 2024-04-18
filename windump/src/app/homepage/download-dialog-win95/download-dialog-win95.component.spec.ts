import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDialogWin95Component } from './download-dialog-win95.component';

describe('DownloadDialogWin95Component', () => {
  let component: DownloadDialogWin95Component;
  let fixture: ComponentFixture<DownloadDialogWin95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadDialogWin95Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadDialogWin95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
