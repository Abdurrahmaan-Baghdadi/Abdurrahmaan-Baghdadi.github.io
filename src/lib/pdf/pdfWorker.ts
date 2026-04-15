import { pdfjs } from 'react-pdf';

// These are the correct v10 CSS paths
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// This tells the browser to look at your own domain for the worker
// satisfying the "script-src 'self'" requirement
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';