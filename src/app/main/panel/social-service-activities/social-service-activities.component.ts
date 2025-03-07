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
  especialidadCarrera: string = 'INGENIERIA EN SISTEMAS COMPUTACIONALES';
  semestre: string = 'NOVENO SEMESTRE';
  institucion: string = 'UNIVERSIDAD POLITECNICA DE TLAXCALA';
  horasServicio: number = 160;
  areaAdscripcion: string = 'TECNOLOGÍAS DE LA INFORMACIÓN';
  nombrePrograma: string = 'DESARROLLO WEB';
  nombreDependencia: string = 'SEPE-USET';
  fechaInicio: string = '2024-01-01';
  fechaFin: string = '2024-06-30';
  numeroPersonasBeneficiadas: number = 10;
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
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text('REPORTE DE ACTIVIDADES DESARROLLADAS EN SERVICIO SOCIAL', pageWidth/2, 40, {align: 'center'});
   
    pdf.setFontSize(10);
    const asuntoText = 'NO. INFORME:_______';
    const asuntoText1 = 'PERIODO:_______a________';
    const asuntoWidth = pdf.getTextWidth(asuntoText);
    const asuntoWidth1 = pdf.getTextWidth(asuntoText1);
    pdf.text(asuntoText, pageWidth - asuntoWidth - marginRight, 50);
    pdf.text(asuntoText1, pageWidth - asuntoWidth1 - marginRight, 55);

    // Encabezado
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    const textoPrestador = 'DATOS DEL PRESTADOR';
    const anchoPrestador = pdf.getTextWidth(textoPrestador);
    pdf.text(textoPrestador, marginLeft, 68);
    // Dibujar línea de subrayado
    pdf.line(marginLeft, 69, marginLeft + anchoPrestador, 69);


    //Datos del prestador
    pdf.setFontSize(12);

    pdf.setFont('helvetica', 'bold');
    pdf.text(`Nombre:`, marginLeft, 75);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${this.nombreAlumno}`, marginLeft+19, 75);

    pdf.setFont('helvetica', 'bold');
    pdf.text(`Carrera o nivel:`, marginLeft, 80);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${this.especialidadCarrera}`, marginLeft+33, 80);


    pdf.setFont('helvetica', 'bold');
    pdf.text(`Dependencia:`, marginLeft, 85);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${this.nombreDependencia}`, marginLeft+29, 85);


    pdf.setFont('helvetica', 'bold');
    pdf.text(`Area especifica de adscripcion:`, marginLeft, 90);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${this.areaAdscripcion}`, marginLeft+65, 90);


    pdf.setFont('helvetica', 'bold');
    pdf.text(`Nombre del programa:`, marginLeft, 95);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${this.nombrePrograma}`, marginLeft+47, 95);

    pdf.setFont('helvetica', 'bold');
    pdf.text(`Numero de horas cubiertas:`, marginLeft, 100);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${this.horasServicio}`, marginLeft+58, 100);


    pdf.setFont('helvetica', 'bold');
    pdf.text(`Numero de personas beneficiadas:`, marginLeft, 105);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${this.numeroPersonasBeneficiadas}`, marginLeft+72, 105);


    //texto antes de la descripcion de las actividades
    pdf.setFont('helvetica', 'normal');
    const textoActividades = 'Describir de manera cauntitativa las actividades realizadas en el servicio, si requiere mayor espacio emplear hojas anexas.';
    pdf.text(textoActividades, marginLeft, 115, {align:'justify', maxWidth: availableWidth});


 
// Dibujar un rectángulo con bordes negros y fondo transparente
const rectY = 125; // Posición Y del rectángulo (debajo del texto)
const rectHeight = 60; // Altura del rectángulo (ajusta según sea necesario)

// Configurar el color del borde (negro)
pdf.setDrawColor(0, 0, 0); // Borde negro

// Dibujar el rectángulo solo con borde (fondo transparente)
pdf.rect(marginLeft, rectY, availableWidth, rectHeight, 'S'); // 'S' para solo borde

    //texto de evidencia
    pdf.text('EVIDENCIA:', marginLeft, 190);

    // Pie de documento
    pdf.setFont('helvetica', 'bold');
   
    // Espacio para firma 1 (izquierda)
    pdf.line(pageWidth/4 - 30, 220, pageWidth/4 + 30, 220);
    pdf.text('NOMBRE Y FIRMA DEL ALUMNO', pageWidth/4, 225, {align: 'center'});

    // Espacio para firma 2 (derecha)
    pdf.line((pageWidth * 3/4) - 30, 220, (pageWidth * 3/4) + 30, 220);
    pdf.text('NOMBRE Y FIRMA DE JEFE INMEDIATO', (pageWidth * 3/4), 225, {align: 'center'});

    // Texto pequeño
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.text('Poner logo de la dependencia donde realiza servicio', marginLeft, 240);

    // Generar nombre del archivo
    const nombreArchivo = `Actividades_Servicio_Social_${this.nombreAlumno.replace(/\s+/g, '_')}.pdf`;
     
     // Descargar el PDF con nombre específico
     pdf.output('dataurlnewwindow', {filename: nombreArchivo});

    // Descargar el PDF con nombre específico
   // pdf.save(nombreArchivo);
  }
  

}
