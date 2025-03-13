import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-social-service-project',
  imports: [],
  templateUrl: './social-service-project.component.html',
  styleUrl: './social-service-project.component.css'
})
export class SocialServiceProjectComponent {

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
    const pdf = new jsPDF({ unit: 'mm', format: 'letter', orientation: 'landscape' });

    // Márgenes y dimensiones
    const marginLeft = 20;
    const marginRight = 20;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const availableWidth = pageWidth - marginLeft - marginRight;

    // Agregar imagen de fondo
    const fondoImagen = '../../assets/img/COSSIES 2_portrait.jpg';
    pdf.addImage(fondoImagen, 'PNG', 0, 0, pageWidth, pageHeight);

    // Asunto
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('INFORME DE SERVICIO SOCIAL POR PROYECTO', pageWidth / 2, 36, { align: 'center' });

    // Encabezado
    pdf.setFont('helvetica', 'bold');
    pdf.text('ESCUELAS PARTICIPANTES: ', marginLeft, 48);
    pdf.text('FECHA: ', marginLeft, 53);

    // Generar tabla con autoTable
    autoTable(pdf, {
      startY: 60,
      margin: { left: marginLeft }, // Ajusta la posición en X
      body: [
        // Primera fila (Encabezados)
        [
          { content: 'FECHA:', styles: { fontStyle: 'bold', halign: 'center', minCellHeight: 8, fillColor: [255, 255, 255] } },
          { content: 'METAS ALCANZADAS:', styles: { fontStyle: 'bold', halign: 'center', minCellHeight: 8, fillColor: [255, 255, 255] } },
          { content: 'BENEFICIARIOS DEL PROYECTO:', styles: { fontStyle: 'bold', halign: 'center', minCellHeight: 8, fillColor: [255, 255, 255] } }
        ],

        // Filas de datos
        ...Array(4).fill([
          { content: this.motivoSuspensionCancelacion, styles: { halign: 'center', minCellHeight: 20, fillColor: [255, 255, 255] } },
          { content: this.telefonoDependencia, styles: { halign: 'center', minCellHeight: 20, fillColor: [255, 255, 255] } },
          { content: this.telefonoDependencia, styles: { halign: 'center', minCellHeight: 20, fillColor: [255, 255, 255] } }
        ]),

        // Fila de total
        [
          { content: '', styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 255, 255] } },
          { content: 'Total de personas beneficiadas: ', styles: { fontStyle: 'bold', halign: 'left', fillColor: [255, 255, 255] } },
          { content: '', styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 255, 255] } }
        ],
      ],

      theme: 'grid',
      styles: {
        textColor: [0, 0, 0], // Texto en negro
        font: 'Helvetica',
        fontSize: 6,
        cellPadding: 1,
        valign: 'middle',
        lineWidth: 0.5, // Grosor de las líneas
        lineColor: [0, 0, 0], // Líneas en negro
      },  

      columnStyles: {
        0: { cellWidth: 87.9 }, // Primera columna
        1: { cellWidth: 87.9 }, // Segunda columna
      },



      // 🎨 Agregar color a celdas específicas
      didParseCell: function (data) {
        // Cambiar color de fondo de las celdas de encabezado
        if (data.row.index % 2 === 0 && data.row.index <= 8) { // Encabezados de las filas principales
          data.cell.styles.fillColor = [255, 255, 255]; // Gris claro
        }

      }
    });

    // Obtener la última posición de la tabla
    const finalY = (pdf as any).lastAutoTable.finalY || 107;

    // Ajustar posición después de la tabla
    let yPos = (pdf as any).lastAutoTable.finalY + 10;

    // Agregar segunda página
    pdf.addPage();

    // Agregar imagen de fondo
    const fondoImagen2 = '../../assets/img/COSSIES 2_portrait.jpg';
    pdf.addImage(fondoImagen2, 'PNG', 0, 0, pageWidth, pageHeight);

    // Agregar más contenido si es necesario
    pdf.setFontSize(12);
    pdf.text('EVIDENCIA FOTOGRÁFICA:', marginLeft, 48);
    
    // Generar tabla con autoTable
    autoTable(pdf, {
      startY: 55,
      margin: { left: marginLeft }, // Ajusta la posición en X
      body: [
        // Filas de datos
        ...Array(1).fill([
          { content: this.motivoSuspensionCancelacion, styles: { halign: 'center', minCellHeight: 110, fillColor: [255, 255, 255] } }
        ]),
      ],

      theme: 'grid',
      styles: {
        textColor: [0, 0, 0], // Texto en negro
        font: 'Helvetica',
        fontSize: 6,
        cellPadding: 1,
        valign: 'middle',
        lineWidth: 0.5, // Grosor de las líneas
        lineColor: [0, 0, 0], // Líneas en negro
      },

      columnStyles: {
        0: { cellWidth: 240 }, // Primera columna
        1: { cellWidth: 240 }, // Segunda columna
      },



      // 🎨 Agregar color a celdas específicas
      didParseCell: function (data) {
        // Cambiar color de fondo de las celdas de encabezado
        if (data.row.index % 2 === 0 && data.row.index <= 8) { // Encabezados de las filas principales
          data.cell.styles.fillColor = [255, 255, 255]; // Gris claro
        }

      }
    });

    // Obtener la última posición de la tabla
    const finalY2 = (pdf as any).lastAutoTable.finalY2 || 107;

    // Ajustar posición después de la tabla
    let yPos2 = (pdf as any).lastAutoTable.finalY2 + 10;

    // Agregar más contenido si es necesario
    pdf.setFontSize(12);
    pdf.text('ALUMNOS Y JEFE INMEDIATO', marginLeft, 180);

    // Centramos "ATENTAMENTE"
    pdf.setFontSize(10);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('TITULAR DE LA COORDINACIÓN DEL SERVICIO SOCIAL DE', pageWidth / 2, 195, { align: 'center' });
    pdf.text('INSTITUCIONES DE EDUCACIÓN MEDIA SUPERIOR', pageWidth / 2, 200, { align: 'center' });


    // Generar nombre del archivo
    const nombreArchivo = `INFORME DE SERVICIO SOCIAL POR PROYECTO_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;

    // Descargar el PDF con nombre específico
    pdf.output('dataurlnewwindow', { filename: nombreArchivo });
  }
}