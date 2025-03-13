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

//datos de la dependencia
titularEentidadReceptora = 'MTRO. VICTOR MANUEL BAEZ ALVARADO';
cargo = 'COORDINADOR DEL SERVICIO SOCIAL';

  // Variables del formulario
  nombreAlumno = 'ARMANDO MENDOZA GONZÁLEZ';
  grado = '10';
  escuela = 'COLEGIO DE BACHILLERES PLATÓN SÁNCHEZ';
  direccionEscuela = 'Av. Revolución 123, Colonia Centro, Ciudad de México, México';
  telefonoAlumno = '55 5555 5555';
  horasEnTotal = '489';
  nombreDependencia = 'COSSIES';
  areaEspecifica = 'Tec';
  direccionDependencia = 'Av. Revolución 123, Colonia Centro, Ciudad de México, México';
  telefonoDependencia = '55 5555 5555';
  jefeInmediato = 'ARMANDO MENDOZA GONZÁLEZ';
  cargoJefeInmediato = 'JEFE INMEDIATO';
  diasPrestacion = 'Lunes a Viernes';
  correoDependencia = 'Armando.Mendoza@cossies.com';
  programa = 'SERVICIO SOCIAL';
  fechaInicio = '01/01/2025';
  fechaConclusion = '31/01/2025';

  // Generar el PDF con el formato requerido
  generatePDF(): void {
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



    // Título
    pdf.setFont('Helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text('ASUNTO: ', 93, 43);

    pdf.setFont('Helvetica', 'normal');
    pdf.text('CARTA PRESENTACIÓN/ACEPTACIÓN', pdf.getTextWidth('ASUNTO: ') + 93, 43);

    // Contenido principal
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    pdf.text(`${this.titularEentidadReceptora}`, marginLeft,55);
    pdf.text(`COORDINADOR DEL SERVICIO SOCIAL`, marginLeft, 60);
    pdf.text(`P R E S E N T E`, marginLeft, 65);

   

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    const texto1 = `      Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo, me permito presentar al/la alumn() ${this.nombreAlumno} del ${this.grado} SEMESTRE del ${this.escuela}, con dirección ${this.direccionEscuela} y teléfono ${this.telefonoAlumno}, quien está en disposición y tiene interés de realizar su servicio social cubriendo un total de ${this.horasEnTotal} horas en total en la modalidad que a continuación se detalla: `;

    pdf.setFont('helvetica', 'normal'); 
    pdf.text(texto1, marginLeft, 75, {
      align: 'justify',
      maxWidth: availableWidth
    });

 
   

    // Titulo de la tabla
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('DATOS DE LA DEPENDENCIA: ', marginLeft, 114);
    


    // Generar tabla con autoTable
    autoTable(pdf, {
      startY: 116,
      margin: { left: marginLeft }, // Ajusta la posición en X
      body: [
        // Primera columna de la tabla
        [{ content: 'DEPENDENCIA:', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'ÁREA ESPECÍFICA:', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{content: this.nombreDependencia, styles: { halign: 'center' } }, {content: this.areaEspecifica, styles: { halign: 'center' }}],
        [{ content: 'DIRECCIÓN DE LA DEPENDENCIA:', styles: { fontStyle: 'bold', halign: 'center' }}, { content: 'TELÉFONO:', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{content: this.direccionDependencia, styles: { halign: 'center' } }, {content: this.telefonoDependencia, styles: { halign: 'center' }}],
        [{ content: 'JEFE INMEDIATO:', styles: { fontStyle: 'bold', halign: 'center' }}, { content: 'CARGO DEL JEFE INMEDIATO:', styles: { fontStyle: 'bold', halign: 'center' }}],
        [{content: this.jefeInmediato, styles: { halign: 'center' } }, {content: this.cargoJefeInmediato, styles: { halign: 'center' }}],
        [{ content: 'DÍAS DE PRESTACIÓN:', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'CORREO ELECTRÓNICO:', styles: { fontStyle: 'bold', halign: 'center' } }],
        [{content: this.diasPrestacion, styles: { halign: 'center' } }, {content: this.correoDependencia, styles: { halign: 'center' }}],
        // Aquí agregamos las celdas divididas en 3 columnas
        [{ content: 'PROGRAMA:', styles: { fontStyle: 'bold', halign: 'center' } }, { content: 'FECHA INICIO - FECHA CONCLUSIÓN', styles:{ fontStyle: 'bold', halign: 'center' } }],
        [{content: this.programa, styles: { halign: 'center' } }, {content: this.fechaInicio + ' - ' + this.fechaConclusion, styles: { halign: 'center' } }]
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
        0: { cellWidth:  87.9 }, // Primera columna
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
    const text2="Sin otro particular, dando por entendido, que, al firmar el presente, los interesados se apegaran a los lineamientos del Servicio Social aplicables para el Estado de Tlaxcala, quedo de Usted."
  
    pdf.text(text2, marginLeft, yPos, {
      align: 'justify',
      maxWidth: availableWidth
    });

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


    // FIRMAS EN NEGRITA PRIMERA SECCION
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('Enlace de Servicio Social', 37, yPos + 35);
    pdf.text(`Nombre del Jefe Inmediato`, 130, yPos + 35);
    pdf.text(`de la Institución Educativa`, 37, yPos + 40);

    // FIRMAS EN NEGRITA SEGUNDA SECCION
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'bold');
    pdf.text('Lic. Víctor Manuel Báez Alvarado', 30, yPos + 65);
    pdf.text('Coordinador del Servicio Social de',28, yPos + 70);
    pdf.text('Instituciones de Educación Superior ',26, yPos + 75);
    pdf.text('VO. BO', 55, yPos + 80);
    pdf.text('Alumno',150, yPos + 80);
    
   

    // FIRMAS EN NEGRITA
    pdf.setFontSize(5);
    pdf.setFont('Helvetica', 'normal');
    pdf.text('C.C.P. ALUMNO', 20, yPos +90);
    pdf.text('C.C.P. JEFE INMEDIATO', 20, yPos +93);
    pdf.text('C..C.P. ARCHIVO DE LA COSSIES ', 20, yPos +96);

    // Generar nombre del archivo
    const nombreArchivo = `Carta_Presentacion_Aceptacion_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;
    // Descargar el PDF con nombre específico
    pdf.output('dataurlnewwindow', {filename: nombreArchivo});

  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    this.generatePDF();
  }


  //pdf.save(nombreArchivo);
}

//ancho disponible 175.89999999999998