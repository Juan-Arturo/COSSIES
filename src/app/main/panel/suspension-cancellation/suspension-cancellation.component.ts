import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-suspension-cancellation',
  imports: [],
  templateUrl: './suspension-cancellation.component.html',
  styleUrl: './suspension-cancellation.component.css'
})
export class SuspensionCancellationComponent {

  nombreAlumno: string = 'JUAN ARTURO GALINDO PEREZ';
  nombreDependencia: string = 'SEPE-USET';
  motivoSuspensionCancelacion: string = 'Suspensión por ausencia injustificada';
  telefono: string = '9613161616';
  jefeInmediato: string = 'JUAN ARTURO GALINDO PEREZ';
  



  generatePdf() {
    // Configurar tamaño carta
    const pdf = new jsPDF({unit: 'mm',format: 'letter',orientation: 'portrait'});

    // Márgenes y dimensiones
    const marginLeft = 20;
    const marginRight = 20;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const availableWidth = pageWidth - marginLeft - marginRight;

    // Agregar imagen de fondo
    const fondoImagen = '../../assets/img/fondoCOSSIES.jpg';
    pdf.addImage(fondoImagen, 'PNG', 0, 0, pageWidth, pageHeight);

    // Asunto
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text('REPORTE DE ACTIVIDADES DESARROLLADAS EN SERVICIO SOCIAL', pageWidth/2, 40, {align: 'center'});
   
   
    // Generar nombre del archivo
    const nombreArchivo = `Actividades_Servicio_Social_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;
     
     // Descargar el PDF con nombre específico
     pdf.output('dataurlnewwindow', {filename: nombreArchivo});

    // Descargar el PDF con nombre específico
   // pdf.save(nombreArchivo);
  }
}
