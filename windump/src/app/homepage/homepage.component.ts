import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  lineOneVersions = [
    { name: 'Windows 1.x', imagePath: 'assets/images/Windows 1.x + 2.x.png' },
    { name: 'Windows 2.x', imagePath: 'assets/images/Windows 1.x + 2.x.png' },
    { name: 'Windows 3.x', imagePath: 'assets/images/Windows 3.x.png' },
    { name: 'Windows 95', imagePath: 'assets/images/Windows 9x.png' },
    { name: 'Windows 98', imagePath: 'assets/images/Windows 9x.png' },
    { name: 'Windows ME', imagePath: 'assets/images/Windows ME.png' }
  ];

  lineTwoVersions = [
    { name: 'Windows NT 3.x', imagePath: 'assets/images/Windows NT 3.5x.png' },
    { name: 'Windows NT 4', imagePath: 'assets/images/Windows 9x.png' },
    { name: 'Windows 2000', imagePath: 'assets/images/Windows 2000.png' },
    { name: 'Windows XP', imagePath: 'assets/images/Windows XP.png' },
    { name: 'Windows Vista', imagePath: 'assets/images/Windows Vista.png' },
    { name: 'Windows 7', imagePath: 'assets/images/Windows 7.png' },
    { name: 'Windows 8.x', imagePath: 'assets/images/Windows 8.x + 10.png' },
    { name: 'Windows 10', imagePath: 'assets/images/Windows 8.x + 10.png' },
    { name: 'Windows 11', imagePath: 'assets/images/Windows 11.png' }
  ];

  showInfo(version: string) {
    alert(`This is ${version}`);
  }

  showFiles(version: string) {
    alert(`These are the files for ${version}`);
  }
}
