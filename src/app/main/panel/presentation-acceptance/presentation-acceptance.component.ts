import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  jsPDF  from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-presentation-acceptance',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos FormsModule para usar ngModel
  templateUrl: './presentation-acceptance.component.html',
  styleUrl: './presentation-acceptance.component.css'
})
export class PresentationAcceptanceComponent {
  // Variables del formulario
  nombreAlumno = '';
  grado = '';
  escuela = '';
  direccionEscuela = '';
  telefono = '';
  nombreDependencia = '';
  areaEspecifica = '';
  direccionDependencia = '';
  telefonoDependencia = '';
  jefeInmediato = '';
  cargoJefe = '';
  diasPrestacion = 'Lunes a Viernes';
  correo = '';
  programa = '';
  fechaInicio = '';
  fechaConclusion = '';

  // Generar el PDF con el formato requerido
  generatePDF(): void {
    const pdf = new jsPDF('p', 'mm', 'letter');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Agregar imagen superior
    pdf.addImage('../../assets/img/NH.jpg', 'JPEG', 80, 3, 50, 30);

    // Título
    pdf.setFont('Helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text('ASUNTO: ', 93, 42);

    pdf.setFont('Helvetica', 'normal');
    pdf.text('CARTA PRESENTACIÓN/ACEPTACIÓN', pdf.getTextWidth('ASUNTO: ') + 93, 42);

    // Contenido principal
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    pdf.text(`MTRO. VICTOR MANUEL BAEZ ALVARADO`, 20, 52);
    pdf.text(`COORDINADOR DEL SERVICIO SOCIAL`, 20, 56);
    pdf.text(`DE INSTITUCIONES DE EDUCACION SUPERIOR`, 20, 60);
    pdf.text(`Y MEDIA SUPERIOR`, 20, 64);
    pdf.text(`P R E S E N T E`, 20, 68);

    pdf.setFont('Helvetica', 'normal');
    pdf.text(`Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo, me`, 36, 76);
    pdf.text(`permito presentar al/la alumn() `, 20, 82);

    // Nombre del Alumno en negritas
    pdf.setFont('Helvetica', 'bold');
    pdf.text(`${this.nombreAlumno}`, 79, 82);
    
    pdf.setFont('Helvetica', 'normal');
    pdf.text(` del `, 143, 82);
    
    pdf.setFont('Helvetica', 'bold');
    pdf.text(`${this.grado}`, 152, 82);
    
    pdf.setFont('Helvetica', 'normal');
    pdf.text(` del `, 183, 82);

    pdf.setFont('Helvetica', 'bold');
    pdf.text(`${this.escuela}`, 20, 88);

    pdf.setFont('Helvetica', 'normal');
    pdf.text(`, con dirección `, 60, 88);
    
    pdf.setFont('Helvetica', 'bold');
    pdf.text(`${this.direccionEscuela}`, 89, 88);

    pdf.setFont('Helvetica', 'normal');
    pdf.text(` y teléfono`, 170, 88);
    
    pdf.setFont('Helvetica', 'bold');
    pdf.text(`${this.telefono}`, 20, 94);

    pdf.setFont('Helvetica', 'normal');
    pdf.text(`, quien está en disposición y tiene interés de realizar su servicio social`, 58, 94);
    pdf.text(`cubriendo un total de `, 20, 100);


    //horas en tatal en negritas
    pdf.setFontSize(10);
    pdf.setFont('Helvetica', 'bold');
    // pdf.text(489, 61, 100);
    pdf.text('horas en total', 70, 100);

    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'normal');
    pdf.text('en el área y programa que a continuación se detalla:', 94, 100);

    // 
    pdf.setFontSize(11);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('DATOS DE LA DEPENDENCIA:', 20, 108);

    // Generar tabla con autoTable
autoTable(pdf, {
  startY: 113,
  body: [
    // Primera columna de la tabla
    ['DEPENDENCIA', 'ÁREA ESPECÍFICA'],
    [this.nombreDependencia, this.areaEspecifica],
    ['DIRECCIÓN DE LA DEPENDENCIA', 'TELÉFONO'],
    [this.direccionDependencia, this.telefonoDependencia],
    ['JEFE INMEDIATO', 'CARGO DEL JEFE INMEDIATO'],
    [this.jefeInmediato, this.cargoJefe],
    ['DÍAS DE PRESTACIÓN', 'CORREO ELECTRÓNICO'],
    [this.diasPrestacion, this.correo],
    // Aquí agregamos las celdas divididas en 3 columnas
    ['PROGRAMA', 'FECHA DE INICIO', 'FECHA DE CONCLUSIÓN'],
    [this.programa, this.fechaInicio, this.fechaConclusion]
  ],
  theme: 'grid',
  styles: {
    font: 'Helvetica',
    fontSize: 10,
    cellPadding: 2,
    valign: 'middle'
  },
  columnStyles: {
    0: { cellWidth: 60 }, // Primera columna
    1: { cellWidth: 60 }, // Segunda columna
    2: { cellWidth: 60 }  // Tercera columna (solo usada en las últimas dos filas)
  },
  didDrawCell: function (data) {
    // Combinar celdas en las filas anteriores a la novena para mantener solo dos columnas
    if (data.row.index < 8 && data.column.index === 2) {
      data.cell.colSpan = 0; // Eliminar tercera celda si no es la fila deseada
    }
  }
});

    
    // Obtener la última posición de la tabla
    const finalY = (pdf as any).lastAutoTable.finalY || 107;
    

    // Ajustar posición después de la tabla
    let yPos = (pdf as any).lastAutoTable.finalY + 10;


    // Pie de página
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'normal');
    pdf.text('Sin otro particular, dando por entendido, que, al firmar el presente, el alumno es aceptado', 20, yPos);
    pdf.text(`para realizar su servicio social, quedo de Usted.`, 20, yPos + 5);

    pdf.setFontSize(11);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('ATENTAMENTE', 90, yPos + 18);
    pdf.text(`SAN PABLO APETATITLÁN, DE ANTONIO CARVAJAL A__ DE ___ DEL 202_`, 30, yPos + 22);

    // FIRMAS EN NEGRITA
    pdf.setFontSize(9);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('JEFE INMEDIATO', 40, yPos + 43);
    pdf.text(`FIRMA DEL RESPONSABLE DE SERVICIO SOCIAL DE LA`, 110, yPos + 43);
    pdf.text(`INSTITUCIÓN EDUCATIVA`, 135, yPos + 47);

    // Imagen inferior derecha
    pdf.addImage('../../assets/img/COSSIES_logo.png', 'JPEG', pageWidth - 50, pageHeight - 20, 39, 11);

    // Guardar el PDF con el nombre específico
    pdf.save('Carta Presentación/Aceptación Servicio Social.pdf');
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    this.generatePDF();
  }
}
