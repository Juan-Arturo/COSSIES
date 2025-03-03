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
    doc.setFontSize(13);
    const asuntoText = 'ASUNTO: CARTA DE LIBERACIÓN';
    const asuntoWidth = doc.getTextWidth(asuntoText);
    doc.text(asuntoText, pageWidth - asuntoWidth - marginRight, 50);

    // Encabezado
    doc.setFont('helvetica', 'bold');
    doc.text('MTRO. VICTOR MANUEL BAEZ ALVARADO', marginLeft, 70);
    doc.text('COORDINADOR DEL SERVICIO SOCIAL', marginLeft, 75);
    doc.text('DE INSTITUCIONES DE EDUCACIÓN SUPERIOR', marginLeft, 80);
    doc.text('Y MEDIA SUPERIOR', marginLeft, 85);
    doc.text('P R E S E N T E', marginLeft, 95);

    // Cuerpo del texto
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    const texto1 = `      Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo, me permito informar que el/la alumn() ${this.nombreAlumno} del ${this.semestre} del ${this.institucion}, ha CONCLUIDO satisfactoriamente su SERVICIO SOCIAL, cubriendo un total de ${this.horasServicio} HORAS en el área ${this.areaAdscripcion} de la modalidad de ${this.nombrePrograma} dentro de esta dependencia ${this.nombreDependencia}, iniciando el día ${this.fechaInicio} y concluyendo el día ${this.fechaFin}. `;

    doc.setFont('helvetica', 'normal');
    doc.text(texto1, marginLeft, 110, {
      align: 'justify',
      maxWidth: availableWidth
    });

    const texto2 = `    Por lo tanto, no tengo inconveniente en extender la presente CARTA DE LIBERACIÓN, a los ${new Date(this.fechaLiberacion).toLocaleString('es-ES', {day: 'numeric'})} días del mes de ${new Date(this.fechaLiberacion).toLocaleString('es-ES', {month: 'long'})} del ${new Date(this.fechaLiberacion).getFullYear()}.`;
    doc.text(texto2, marginLeft, 145, {
      align: 'justify',
      maxWidth: availableWidth
    });

      
    const texto3 = `Sin otro particular, quedo de usted.`;
    doc.text(texto3, marginLeft, 165, {
      align: 'justify',
      maxWidth: availableWidth
    });

    // Pie de documento
    doc.setFont('helvetica', 'bold');
    doc.text('ATENTAMENTE', pageWidth/2, 190, {align: 'center'});
    doc.text('A LA FECHA DE SU PRESENTACION', pageWidth/2, 195, {align: 'center'});

    // Espacio para firma
    doc.line(pageWidth/2 - 30, 220, pageWidth/2 + 30, 220);
    doc.text('FIRMA DEL TITULAR O JEFE INMEDIATO', pageWidth/2, 225, {align: 'center'});

    // Texto pequeño
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('C.C.P. ARCHIVO DE LA COSSIES', marginLeft, 240);

    // Abrir el PDF en una nueva pestaña
    const pdfOutput = doc.output('bloburl');
    window.open(pdfOutput, '_blank');
  }
  
  

}
