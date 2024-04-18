import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-download-dialog',
  templateUrl: './download-dialog-win95.component.html',
  styleUrls: ['./download-dialog-win95.component.scss']
})
export class DownloadDialogWin95Component {
  constructor(
    public dialogRef: MatDialogRef<DownloadDialogWin95Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  downloadFile(fileName: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `/assets/downloads/${fileName}`);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  downloadFileFromWeb(url: string, fileName: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
