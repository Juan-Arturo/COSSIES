import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-social-service-evaluation',
  imports: [],
  templateUrl: './social-service-evaluation.component.html',
  styleUrl: './social-service-evaluation.component.css'
})
export class SocialServiceEvaluationComponent {

  nombreAlumno: string = 'JUAN ARTURO GALINDO PEREZ';
  programa: string = 'SERVICIO SOCIAL';
  fechaReportada: string = '2025-03-08';
  nivelAcademico: string = 'PRIMER SEMESTRE';
  institucion: string = 'UNIVERSIDAD AUTÓNOMA DE CHIHUAHUA';
  telefono: string = '2461524865';

  



  generatePdf() {
    // Configurar tamaño carta
    const pdf = new jsPDF({ unit: 'mm', format: 'letter', orientation: 'portrait' });
  
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
    pdf.text('FORMATO DE EVALUACIÓN DE SERVICIO SOCIAL', pageWidth / 2, 40, { align: 'center' });
  
    // Título de la tabla
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DATOS GENERALES', marginLeft, 50);
  
    // Generar tabla con autoTable
    autoTable(pdf, {
      startY: 53,
      margin: { left: marginLeft }, // Ajusta la posición en X
      body: [
        // Primera columna de la tabla
        [{ content: 'NOMBRE', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'PROGRAMA', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{ content: this.nombreAlumno, styles: { halign: 'center' } }, { content: this.programa, styles: { halign: 'center' } }],
        [{ content: 'FECHA QUE SE REPORTA', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'NIVEL ACADÉMICO', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{ content: this.fechaReportada, styles: { halign: 'center' } }, { content: this.nivelAcademico, styles: { halign: 'center' } }],
        [{ content: 'INSTITUCION EDUCATIVA', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'TELEFONO', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{ content: this.institucion, styles: { halign: 'center' } }, { content: this.telefono, styles: { halign: 'center' } }],
      ],
      theme: 'grid',
      styles: {
        textColor: [0, 0, 0],
        font: 'Helvetica',
        fontSize: 6,
        cellPadding: 1,
        valign: 'middle',
        halign: 'center',
        lineWidth: 0.5, // Grosor de las líneas
        lineColor: [0, 0, 0] // Color negro para las líneas
      },
      columnStyles: {
        0: { cellWidth: 87.9 }, // Primera columna
        1: { cellWidth: 87.9 }, // Segunda columna
      },
      didParseCell: function (data: any) {
        // Cambiar color de fondo de las celdas de encabezado
        if (data.row.index % 2 === 0 && data.row.index <= 8) { // Encabezados de las filas principales
          data.cell.styles.fillColor = [200, 200, 200]; // Gris claro
        }
      }
    });
  
    // Obtener la posición final de la primera tabla
    const finalY = (pdf as any).lastAutoTable.finalY + 5; // Espacio adicional de 10 mm
 
    //Constantes de datos para la segunda tabla
    const dato2fila2='Cumple en tiempo y forma con las actividades encomendadas alcanzando los objetivos';
    const dato2fila3='Las actividades corresponden al perfil academico, del prestador de servicio social';
    const dato2fila4='El trato al prestador de servicio social es digno.';
    const dato2fila5='Trabaja en equipo y se adapta a nuevas situaciones.';
    const dato2fila6='Muestra iniciativa en las actividades encomendadas.';
    const dato2fila7='Organiza su tiempo y trabaja de manera proactiva.';
    const dato2fila8='Interpreta la realidad y se sensibiliza aportando soluciones a la problemática con la actividad.';
    const dato2fila9='Realiza sugerencias para beneficio o mejora del programa en el que participa.';


// Generar la segunda tabla (10 filas y 7 columnas)
autoTable(pdf, {
  startY: finalY, // Comenzar después de la primera tabla
  margin: { left: marginLeft }, // Ajusta la posición en X
  head: [
    [
      { content: '', styles: { halign: 'center' } },
      { content: '', styles: { halign: 'center' } },
      { content: 'NIVEL DE DESEMPEÑO', colSpan: 5, styles: { halign: 'center', fillColor: [200, 200, 200] } }
    ]
  ],
  body: [
    // Fila 1 
    ['NO', 'CRITERIOS A EVALUAR', 'Insuficiente', 'Suficiente', 'Bueno', 'Notable', 'Excelente'],
    // Fila 2 
    ['1', dato2fila2, '', '', '', '', ''],
    // Fila 3
    ['2', dato2fila3, '', '', '', '', ''],
    // Fila 4
    ['3', dato2fila4, '', '', '', '', ''],
    // Fila 5
    ['4', dato2fila5, '', '', '', '', ''],
    // Fila 6
    ['5', dato2fila6, '', '', '', '', ''],
    // Fila 7
    ['6', dato2fila7, '', '', '', '', ''],
    // Fila 8
    ['7', dato2fila8, '', '', '', '', ''],
    // Fila 9
    ['8', dato2fila9, '', '', '', '', ''],
  ],
  theme: 'grid',
  styles: {
    textColor: [0, 0, 0],
    font: 'Helvetica',
    fontSize: 6,
    cellPadding: 1,
    valign: 'middle',
    halign: 'center',
    lineWidth: 0.5, // Grosor de las líneas
    lineColor: [0, 0, 0], // Color negro para las líneas
    minCellHeight: 8 // Usar minCellHeight en lugar de cellHeight
  },
  columnStyles: {
    0: { cellWidth: 10}, // Justificar el texto de la primera columna
    1: { cellWidth: 77.65 }, // Columna 2 (más ancha)
    2: { cellWidth: 17.65 }, // Columna 3
    3: { cellWidth: 17.65 }, // Columna 4
    4: { cellWidth: 17.65 }, // Columna 5
    5: { cellWidth: 17.65 }, // Columna 6
    6: { cellWidth: 17.65 }, // Columna 7
  },
  didParseCell: function (data: any) {
    // Cambiar color de fondo de las celdas de encabezado
    if (data.row.index === 0) { // Solo la primera fila (encabezados)
      data.cell.styles.fillColor = [200, 200, 200]; // Gris claro
    }
  }
});
  
    // Obtener la posición final de la segunda tabla
    const finalY2 = (pdf as any).lastAutoTable.finalY + 8;

    // Agregar recuadro para observaciones
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('OBSERVACIONES:', marginLeft, finalY2);

    // Dibujar el recuadro
    const recuadroHeight = 45; // Altura del recuadro
    pdf.rect(marginLeft, finalY2 + 3, availableWidth, recuadroHeight);


    // Espacio para firma 1 (izquierda)
    pdf.line(pageWidth/4 - 30, finalY2+70, pageWidth/4 + 30, finalY2+70);
    pdf.text('NOMBRE Y FIRMA DEL', pageWidth/4, finalY2+75, {align: 'center'});
    pdf.text('RESPONSABLE DEL PROGRAMA', pageWidth/4, finalY2+80, {align: 'center'});
    pdf.text('SELLO DE LA DEPENDENCIA', pageWidth/4, finalY2+85, {align: 'center'});

    // Espacio para firma 2 (derecha)
    const firma2X = pageWidth - marginRight - 75; // Ajustar posición X considerando el margen derecho
    pdf.line(firma2X, finalY2+70, firma2X + 60, finalY2+70);
    pdf.text('RESPONSABLE DE SERVICIO SOCIAL DE LA', firma2X + 30, finalY2+75, {align: 'center'});
    pdf.text('CORDINACION DE SERVICIO SOCIAL DE', firma2X + 30, finalY2+80, {align: 'center'});
    pdf.text('INSTITUCIONES DE EDUCACION SUPERIOR', firma2X + 30, finalY2+85, {align: 'center'});

    // Generar nombre del archivo
    const nombreArchivo = `Actividades_Servicio_Social_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;
  
    // Descargar el PDF con nombre específico
    pdf.output('dataurlnewwindow', { filename: nombreArchivo });
  }
}
