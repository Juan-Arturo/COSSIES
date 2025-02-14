import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';

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
    pdf.addImage('../../assets/img/NH.jpg', 'JPEG', 10, 10, 190, 25);

    // Título
    pdf.setFont('Helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.text('ASUNTO: CARTA PRESENTACION/ACEPTACION', 20, 50);

    // Contenido principal
    pdf.setFontSize(12);
    pdf.setFont('Helvetica', 'normal');
    pdf.text(`MTRO. VICTOR MANUEL BAEZ ALVARADO`, 20, 60);
    pdf.text(`COORDINADOR DEL SERVICIO SOCIAL`, 20, 66);
    pdf.text(`DE INSTITUCIONES DE EDUCACION SUPERIOR Y MEDIA SUPERIOR`, 20, 72);
    pdf.text(`PRESENTE`, 20, 78);

    pdf.text(`Por medio del presente, me permito presentar al/la alumno(a):`, 20, 90);
    pdf.text(`${this.nombreAlumno} del ${this.grado} del ${this.escuela}`, 20, 98);
    pdf.text(`Dirección: ${this.direccionEscuela}, Teléfono: ${this.telefono}`, 20, 106);

    // Tabla de datos de la dependencia
    let yPos = 120;
    pdf.setFillColor(200, 200, 200);
    pdf.rect(20, yPos, 170, 10, 'F');
    pdf.setTextColor(0);
    pdf.text('DATOS DE LA DEPENDENCIA', 85, yPos + 7);
    yPos += 15;

    const fields = [
      ['DEPENDENCIA:', this.nombreDependencia],
      ['ÁREA ESPECÍFICA:', this.areaEspecifica],
      ['DIRECCIÓN:', this.direccionDependencia],
      ['TELÉFONO:', this.telefonoDependencia],
      ['JEFE INMEDIATO:', this.jefeInmediato],
      ['CARGO:', this.cargoJefe],
      ['DÍAS DE PRESTACIÓN:', this.diasPrestacion],
      ['CORREO:', this.correo],
      ['PROGRAMA:', this.programa],
      ['FECHA DE INICIO:', this.fechaInicio],
      ['FECHA DE CONCLUSIÓN:', this.fechaConclusion]
    ];

    pdf.setFontSize(10);
    pdf.setFont('Helvetica', 'normal');
    fields.forEach(([label, value]) => {
      pdf.text(label, 20, yPos);
      pdf.text(value, 90, yPos);
      yPos += 8;
    });

    // Pie de página
    pdf.text('ATENTAMENTE', 20, yPos + 10);
    pdf.text(`SAN PABLO APETATITLÁN, A ___ DE ___ DEL 202_`, 20, yPos + 20);

    // Imagen inferior derecha
    pdf.addImage('../../assets/img/COSSIES_logo.png', 'JPEG', pageWidth - 50, pageHeight - 30, 40, 20);

    // Guardar el PDF con el nombre específico
    pdf.save('Carta Presentación/Aceptación Servicio Social.pdf');
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    this.generatePDF();
  }
}
