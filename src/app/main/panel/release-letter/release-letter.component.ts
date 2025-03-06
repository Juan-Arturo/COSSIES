import { Component } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-release-letter',
  imports: [],
  templateUrl: './release-letter.component.html',
  styleUrl: './release-letter.component.css'
})

export class ReleaseLetterComponent {

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
    pdf.setFontSize(13);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ASUNTO:', pageWidth - pdf.getTextWidth('ASUNTO: CARTA DE LIBERACIÓN') - marginRight, 43);
    pdf.setFont('helvetica', 'normal'); 
    pdf.text('CARTA DE LIBERACIÓN', pageWidth - pdf.getTextWidth('CARTA DE LIBERACIÓN') - marginRight, 43);

    // Encabezado
    pdf.setFont('helvetica', 'bold');
    pdf.text('MTRO. VICTOR MANUEL BAEZ ALVARADO', marginLeft, 70);
    pdf.text('COORDINADOR DEL SERVICIO SOCIAL', marginLeft, 75);
    pdf.text('DE INSTITUCIONES DE EDUCACIÓN SUPERIOR', marginLeft, 80);
    pdf.text('Y MEDIA SUPERIOR', marginLeft, 85);
    pdf.text('P R E S E N T E', marginLeft, 95);

    // Cuerpo del texto
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    const texto1 = `      Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo, me permito informar que el/la alumn() ${this.nombreAlumno} del ${this.semestre} del ${this.institucion}, ha CONCLUIDO satisfactoriamente su SERVICIO SOCIAL, cubriendo un total de ${this.horasServicio} HORAS en el área ${this.areaAdscripcion} de la modalidad de ${this.nombrePrograma} dentro de esta dependencia ${this.nombreDependencia}, iniciando el día ${this.fechaInicio} y concluyendo el día ${this.fechaFin}. `;

    pdf.setFont('helvetica', 'normal');
    pdf.text(texto1, marginLeft, 110, {
      align: 'justify',
      maxWidth: availableWidth
    });

    const texto2 = `    Por lo tanto, no tengo inconveniente en extender la presente CARTA DE LIBERACIÓN, a los ${new Date(this.fechaLiberacion).toLocaleString('es-ES', {day: 'numeric'})} días del mes de ${new Date(this.fechaLiberacion).toLocaleString('es-ES', {month: 'long'})} del ${new Date(this.fechaLiberacion).getFullYear()}.`;
    pdf.text(texto2, marginLeft, 145, {
      align: 'justify',
      maxWidth: availableWidth
    });

      
    const texto3 = `Sin otro particular, quedo de usted.`;
    pdf.text(texto3, marginLeft, 165, {
      align: 'justify',
      maxWidth: availableWidth
    });

    // Pie de documento
    pdf.setFont('helvetica', 'bold');
    pdf.text('ATENTAMENTE', pageWidth/2, 190, {align: 'center'});
    pdf.text('A LA FECHA DE SU PRESENTACION', pageWidth/2, 195, {align: 'center'});

    // Espacio para firma
    pdf.line(pageWidth/2 - 30, 220, pageWidth/2 + 30, 220);
    pdf.text('FIRMA DEL TITULAR O JEFE INMEDIATO', pageWidth/2, 225, {align: 'center'});

    // Texto pequeño
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.text('C.C.P. ARCHIVO DE LA COSSIES', marginLeft, 240);

 
      
    // Generar nombre del archivo
    const nombreArchivo = `Carta_Lberación_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;

      // Descargar el PDF con nombre específico
      pdf.output('dataurlnewwindow', {filename: nombreArchivo});
  }
  
  
  
}


// ../../assets/img/NH.jpg
//../../assets/img/cosiesFondo
// ../../assets/img/COSSIES_logo.png

// Generar PDF
//doc.save('carta-liberacion.pdf');




   // Generar nombre del archivo
   //const nombreArchivo = `Carta_Liberacion_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;
// Descargar el PDF con nombre específico
//doc.save(nombreArchivo);