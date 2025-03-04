import { Component } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-social-service-activities',
  imports: [],
  templateUrl: './social-service-activities.component.html',
  styleUrl: './social-service-activities.component.css'
})
export class SocialServiceActivitiesComponent {
  
  // Variables para datos del alumno
  nombreAlumno: string = 'JUAN ARTURO GALINDO PEREZ';
  semestre: string = 'NOVENO SEMESTRE';
  institucion: string = 'UNIVERSIDAD POLITECNICA DE TLAXCALA';
  horasServicio: number = 160;
  areaAdscripcion: string = 'TECNOLOGÍAS DE LA INFORMACIÓN';
  nombrePrograma: string = 'DESARROLLO WEB';
  nombreDependencia: string = 'SEPE-USET';
  fechaInicio: string = '2024-01-01';
  fechaFin: string = '2024-06-30';
  fechaLiberacion: string = new Date().toISOString().split('T')[0];
  

  constructor() { }

   //PDF
   generatePdf() {
    // Configurar tamaño carta
    const doc = new jsPDF({
      unit: 'mm',
      format: 'letter',
      orientation: 'portrait'
    });

    // Márgenes y dimensiones
    const marginLeft = 20;
    const marginRight = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const availableWidth = pageWidth - marginLeft - marginRight;

    // Agregar imagen de fondo
    const fondoImagen = '../../assets/img/fondoCOSSIES.jpg';
    doc.addImage(fondoImagen, 'PNG', 0, 0, pageWidth, pageHeight);

    // Asunto
       doc.setFontSize(10);
       doc.setFont('helvetica', 'bold');
       doc.text('REPORTE DE ACTIVIDADES DESARROLLADAS EN SERVICIO SOCIAL', pageWidth/2, 40, {align: 'center'});
   
    doc.setFontSize(10);
    const asuntoText = 'NO. INFORME:_______';
    const asuntoText1 = 'PERIODO:_______a________';
    const asuntoWidth = doc.getTextWidth(asuntoText);
    const asuntoWidth1 = doc.getTextWidth(asuntoText1);
    doc.text(asuntoText, pageWidth - asuntoWidth - marginRight, 50);
    doc.text(asuntoText1, pageWidth - asuntoWidth1 - marginRight, 55);

    // Encabezado
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    const textoPrestador = 'DATOS DEL PRESTADOR';
    const anchoPrestador = doc.getTextWidth(textoPrestador);
    doc.text(textoPrestador, marginLeft, 70);
    // Dibujar línea de subrayado
    doc.line(marginLeft, 71, marginLeft + anchoPrestador, 71);

    // Cuerpo del texto
   





    

    // Pie de documento
    doc.setFont('helvetica', 'bold');
   
    // Espacio para firma 1 (izquierda)
    doc.line(pageWidth/4 - 30, 220, pageWidth/4 + 30, 220);
    doc.text('NOMBRE Y FIRMA DEL ALUMNO', pageWidth/4, 225, {align: 'center'});

    // Espacio para firma 2 (derecha)
    doc.line((pageWidth * 3/4) - 30, 220, (pageWidth * 3/4) + 30, 220);
    doc.text('NOMBRE Y FIRMA DE JEFE INMEDIATO', (pageWidth * 3/4), 225, {align: 'center'});

    // Texto pequeño
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('Poner logo de la dependencia donde realiza servicio', marginLeft, 240);

    // Generar nombre del archivo
    const nombreArchivo = `Actividades_Servicio_Social_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;
      
    // Descargar el PDF con nombre específico
    doc.save(nombreArchivo);
  }
  

}
