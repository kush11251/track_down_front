import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { SafeUrlPipe } from "../../../pipe/safe-url.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdf-view',
  standalone: true,
  imports: [SafeUrlPipe, CommonModule],
  templateUrl: './pdf-view.component.html',
  styleUrl: './pdf-view.component.css'
})
export class PdfViewComponent implements OnInit{
  @Input() pdfUrl: string = '';

  isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  ngOnInit(): void {
    console.log("Pdf url: ", this.pdfUrl)
  }
}
