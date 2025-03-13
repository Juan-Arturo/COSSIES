import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-suspension-cancellation',
  imports: [],
  templateUrl: './suspension-cancellation.component.html',
  styleUrl: './suspension-cancellation.component.css'
})
export class SuspensionCancellationComponent {
  
  nombreAlumno = 'ARMANDO MENDOZA GONZÁLEZ';
  nombreDependencia = 'COSSIES';
  telefonoDependencia = '55 5555 5555';
  jefeInmediato = 'ARMANDO MENDOZA GONZÁLEZ';
  cargoJefeInmediato = 'JEFE INMEDIATO';
  programa = 'SERVICIO SOCIAL';
  motivoSuspensionCancelacion: string = 'Suspensión por ausencia injustificada';
  fechaConclusion = '31/01/2025';

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
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('FORMATO DE SUSPENSIÓN O CANCELACIÓN DE SERVICIO SOCIAL', pageWidth/2, 43, {align: 'center'});

    // Encabezado
    pdf.setFont('helvetica', 'bold');
    pdf.text('MTRO. VICTOR MANUEL BAEZ ALVARADO', marginLeft, 55);
    pdf.text('COORDINADOR DEL SERVICIO SOCIAL', marginLeft, 60);
    pdf.text('DE INSTITUCIONES DE EDUCACIÓN SUPERIOR', marginLeft, 65);
    pdf.text('P R E S E N T E', marginLeft,70);
   
    // Textp
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    const texto1 = `      A través del presente, reciba un cordial y afectuoso saludo, al mismo tiempo me permito informar sobre la suspención/cancelación del servicio social del/la alumno/a que a continuación se anexan los datos correspondientes: `;

    pdf.setFont('helvetica', 'normal');
    pdf.text(texto1, marginLeft, 78, {
      align: 'justify',
      maxWidth: availableWidth
    });

    // Titulo de la tabla
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('DATOS PERSONALES: ', marginLeft, 98);

    // Generar tabla con autoTable
    autoTable(pdf, {
      startY: 105,
      margin: { left: marginLeft }, // Ajusta la posición en X
      body: [
        // Primera columna de la tabla
        [{ content: 'NOMBRE:', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'NOMBRE DE LA DEPEDENCIA:', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{ content: this.nombreAlumno, styles: { halign: 'center', minCellHeight: 8  } }, { content: this.nombreDependencia, styles: { halign: 'center', minCellHeight: 8  } }],
        [{ content: 'MOTIVO DE CANCELACIÓN O SUSPENSIÓN:', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'TELÉFONO:', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{ content: this.motivoSuspensionCancelacion, styles: { halign: 'center', minCellHeight: 20 } }, { content: this.telefonoDependencia, styles: { halign: 'center', minCellHeight: 20 } }],
        [{ content: 'JEFE INMEDIATO:', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'CARGO DEL JEFE INMEDIATO:', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{ content: this.jefeInmediato, styles: { halign: 'center' } }, { content: this.cargoJefeInmediato, styles: { halign: 'center' } }],
        [{ content: 'PROGRAMA:', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'FECHA DE SUSPENSIÓN O CANCELACIÓN:', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{ content: this.programa, styles: { halign: 'center' } }, { content: this.fechaConclusion, styles: { halign: 'center' } }],
      ],
      theme: 'grid',
      styles: {
        textColor: [0, 0, 0],
        font: 'Helvetica',
        fontSize: 6,
        cellPadding: 1,
        valign: 'middle',
        lineWidth: 0.5, // Grosor de las líneas
        lineColor: [0, 0, 0] // Color negro para las líneas
      },

      columnStyles: {
        0: { cellWidth: 87.9 }, // Primera columna
        1: { cellWidth: 87.9 }, // Segunda columna
      },

      // 🎨 Agregar color a celdas específicas
      didParseCell: function (data) {
        // Cambiar color de fondo de las celdas de encabezado
        if (data.row.index % 2 === 0 && data.row.index <= 8) { // Encabezados de las filas principales
          data.cell.styles.fillColor = [200, 200, 200]; // Gris claro
        }

      }
    });
   
    // Obtener la última posición de la tabla
    const finalY = (pdf as any).lastAutoTable.finalY || 107;

    // Ajustar posición después de la tabla
    let yPos = (pdf as any).lastAutoTable.finalY + 10;

    // Texto debajo de la tabla
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'normal');
    pdf.text('Sin otro particular, esperando su amable comprensión, quedo de usted', pageWidth / 2, 170, { align: 'center' });

    // Centramos "ATENTAMENTE"
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    const atencionText = 'ATENTAMENTE';
    const textWidth = pdf.getTextWidth(atencionText);
    const centerX = (pageWidth - textWidth) / 2; // Cálculo para centrar el texto
    pdf.text(atencionText, centerX, yPos + 20);

    // Centramos "TLAXCALA, TLAX., A LA FECHA DE SU PRESENTACIÓN"
    const fechaText = 'TLAXCALA, TLAX., A LA FECHA DE SU PRESENTACIÓN';
    const fechaTextWidth = pdf.getTextWidth(fechaText);
    const centerXFecha = (pageWidth - fechaTextWidth) / 2; // Cálculo para centrar el texto
    pdf.text(fechaText, centerXFecha, yPos + 25);

    // Centramos "ATENTAMENTE"
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('NOMBRE Y FIRMA DEL JEFE INMEDIATO', pageWidth / 2, 215, { align: 'center' });
    pdf.text('DEL PRESTADOR/A DE SERVICIO SOCIAL', pageWidth / 2, 220, { align: 'center' });



    // Generar nombre del archivo
    const nombreArchivo = `Actividades_Servicio_Social_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;
     
     // Descargar el PDF con nombre específico
     pdf.output('dataurlnewwindow', {filename: nombreArchivo});

    // Descargar el PDF con nombre específico
   // pdf.save(nombreArchivo);
  }
}
