import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { SafeUrlPipe } from "../../../pipe/safe-url.pipe";

@Component({
  selector: 'app-pdf-view',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './pdf-view.component.html',
  styleUrl: './pdf-view.component.css'
})
export class PdfViewComponent implements OnInit{
  @Input() pdfUrl: string = '';

  ngOnInit(): void {
    console.log("Pdf url: ", this.pdfUrl)
  }
}
