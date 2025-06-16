import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

@Component({
  selector: 'app-pdf-view',
  standalone: true,
  imports: [],
  templateUrl: './pdf-view.component.html',
  styleUrl: './pdf-view.component.css'
})
export class PdfViewComponent implements AfterViewInit{
  @Input() pdfUrl: string = '';
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
    if (this.pdfUrl) this.loadPDF(this.pdfUrl);
  }

  async loadPDF(url: string) {
    const loadingTask = getDocument(url);
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);

    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d')!;
    const viewport = page.getViewport({ scale: 1.5 });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    await page.render(renderContext).promise;
  }
}
