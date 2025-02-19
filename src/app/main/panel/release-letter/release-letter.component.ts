import { Component } from '@angular/core';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-release-letter',
  imports: [],
  templateUrl: './release-letter.component.html',
  styleUrl: './release-letter.component.css'
})
export class ReleaseLetterComponent {
  
  constructor() { }


   //PDF
    generatePdf() {
    // Configurar el tamaño de la hoja a carta (215.9 mm de ancho x 279.4 mm de alto)
    const doc = new jsPDF({
      unit: 'mm', // Usar milímetros como unidad
      format: 'letter', // Tamaño carta
      orientation: 'portrait', // Orientación vertical
    });
  
    // Márgenes
    const marginLeft = 20; // Margen izquierdo
    const marginRight = 20; // Margen derecho
    const pageWidth = doc.internal.pageSize.getWidth(); // Ancho de la página
    const availableWidth = pageWidth - marginLeft - marginRight; // Ancho disponible
  
    // Añadir el logo en el centro
    const logoImg = new Image();
    logoImg.src = '../../assets/img/NH.jpg'; // Ruta del logo
    const imgWidth = 50; // Ancho de la imagen
    const imgHeight = 30; // Alto de la imagen
    const centerX = (pageWidth - imgWidth) / 2; // Centrar horizontalmente
    doc.addImage(logoImg, 'PNG', centerX, 10, imgWidth, imgHeight);
  
    // Añadir el texto ASUNTO abajo a la derecha
    doc.setFontSize(14);
    const asuntoText = 'ASUNTO: CARTA DE LIBERACIÓN';
    const textWidth = doc.getTextWidth(asuntoText); // Obtener el ancho del texto
    const textX = pageWidth - textWidth - 20; // Posición X (derecha con margen de 10)
    doc.text(asuntoText, textX, 50); // Posición Y ajustada
  
    // Activar negrita para la siguiente sección
    doc.setFont('helvetica', 'bold'); // Activar negrita
    doc.setFontSize(14);
    doc.text('MTRO. VICTOR MANUEL BAEZ ALVARADO', 20, 60);
    doc.text('COORDINADOR DEL SERVICIO SOCIAL', 20, 65);
    doc.text('DE INSTITUCIONES DE EDUCACIÓN SUPERIOR', 20, 70);
    doc.text('Y MEDIA SUPERIOR', 20, 75);
    doc.text('P R E S E N T E', 20, 80);
  
    // Volver a normal después de la sección en negrita
    doc.setFont('helvetica', 'normal'); // Desactivar negrita
  
    // Función para estirar el texto y ocupar el ancho disponible
    function stretchText(doc: any, text: string, x: number, y: number, maxWidth: number) {
      const words = text.split(' ');
      const totalWordsWidth = words.reduce((acc, word) => acc + doc.getTextWidth(word), 0);
      const totalSpacesWidth = maxWidth - totalWordsWidth;
      const spaceWidth = totalSpacesWidth / (words.length - 1);
  
      let currentX = x;
      words.forEach((word, index) => {
        doc.text(word, currentX, y);
        currentX += doc.getTextWidth(word) + spaceWidth;
      });
    }
  
    // Añadir el cuerpo del texto estirado
    doc.setFontSize(12);
  
    stretchText(doc, '    Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo,', marginLeft, 90, availableWidth);
    stretchText(doc, 'me permito informar que el/la alumn() NOMBRE DEL/LA ALUMN() del SEMESTRE', marginLeft, 100, availableWidth);
    stretchText(doc, 'del NOMBRE DE LA INSTITUCIÓN EDUCATIVA, ha CONCLUIDO satisfactoriamente', marginLeft, 110, availableWidth);
    stretchText(doc, 'su SERVICIO SOCIAL, cubriendo un total de ____ HORAS en el área ________', marginLeft, 120, availableWidth);
    stretchText(doc, 'de la modalidad de __________ dentro de esta dependencia NOMBRE DE LA', marginLeft, 130, availableWidth);
    stretchText(doc, 'DEPENDENCIA, iniciando el día ____________ y concluyendo el día ____________.', marginLeft, 140, availableWidth);
  
    // Añadir el texto de liberación
    stretchText(doc, 'Por lo tanto, no tengo inconveniente en extender la presente CARTA DE LIBERACIÓN,', marginLeft, 150, availableWidth);
    stretchText(doc, 'a los _______ días del mes de _______ del 202_.', marginLeft, 160, availableWidth);
  
    // Añadir el texto de despedida
    doc.text('ATENTAMENTE', marginLeft, 170);
    doc.text('A LA FECHA DE SU PRESENTACION', marginLeft, 180);
  
    // Espacio para la firma
    doc.text('FIRMA DEL TITULAR O JEFE INMEDIATO', marginLeft, 200);
  
    // Añadir el texto final
    doc.setFontSize(8);
    doc.text('C.C.P. ARCHIVO DE LA COSSIES', marginLeft, 210);
  
    // Añadir el segundo logo abajo a la derecha
    const logoImg2 = new Image();
    logoImg2.src = '../../assets/img/COSSIES_logo.png'; // Ruta del segundo logo
    const img2Width = 50; // Ancho de la segunda imagen
    const img2Height = 20; // Alto de la segunda imagen
    const img2X = pageWidth - img2Width - 10; // Posición X (derecha con margen de 10)
    const img2Y = 250; // Posición Y (abajo)
    doc.addImage(logoImg2, 'PNG', img2X, img2Y, img2Width, img2Height);
  
    // Guardar el PDF
    doc.save('CartaDeLiberacion.pdf');
  }
}


// ../../assets/img/NH.jpg
// ../../assets/img/COSSIES_logo.png




/*
generatePdf() {
  // Configurar el tamaño de la hoja a carta (215.9 mm de ancho x 279.4 mm de alto)
  const doc = new jsPDF({
    unit: 'mm', // Usar milímetros como unidad
    format: 'letter', // Tamaño carta
    orientation: 'portrait', // Orientación vertical
  });

  // Añadir el logo en el centro
  const logoImg = new Image();
  logoImg.src = '../../assets/img/NH.jpg'; // Ruta del logo
  const imgWidth = 50; // Ancho de la imagen
  const ixt(asuntoText, textX, 50); // Posición Y ajustada

  // Activar negrita para la siguiente sección
  doc.setFont('helvetica', 'bold'); // Activar negrita
  doc.setFontSize(12);
  doc.text('MTRO. VICTOR MANUEL BAEZ ALVARADO', 10, 60);
  doc.text('COORDINADOR DEL SERVICIO SOCIAL', 10, 65);
  doc.text('DE INSTITUCIONES DE EDUCACIÓN SUPERIOR', 10, 70);
  doc.text('Y MEDIA SUPERIOR', 10, 75);
  doc.text('P R E S E N T E', 10, 80);

  // Volver a normal después de la sección en negrita
  doc.setFont('helvetica', 'normal'); // Desactivar negrita

  // Añadir el cuerpo del texto
  doc.setFontSize(12);
  doc.text('Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo,', 10, 90);
  doc.text('me permito informar que el/la alumn() NOMBRE DEL/LA ALUMN() del SEMESTRE', 10, 95);
  doc.text('del NOMBRE DE LA INSTITUCIÓN EDUCATIVA, ha CONCLUIDO satisfactoriamente', 10, 100);
  doc.text('su SERVICIO SOCIAL, cubriendo un total de ____ HORAS en el área ________', 10, 105);
  doc.text('de la modalidad de __________ dentro de esta dependencia NOMBRE DE LA', 10, 110);
  doc.text('DEPENDENCIA, iniciando el día ____________ y concluyendo el día ____________.', 10, 115);

  // Añadir el texto de liberación
  doc.text('Por lo tanto, no tengo inconveniente en extender la presente CARTA DE LIBERACIÓN,', 10, 125);
  doc.text('a los _______ días del mes de _______ del 202_.', 10, 130);

  // Añadir el texto de despedida
  doc.text('ATENTAMENTE', 10, 140);
  doc.text('A LA FECHA DE SU PRESENTACION', 10, 145);

  // Espacio para la firma
  doc.text('FIRMA DEL TITULAR O JEFE INMEDIATO', 10, 160);

  // Añadir el texto final
  doc.setFontSize(8);
  doc.text('C.C.P. ARCHIVO DE LA COSSIES', 10, 170);

  // Añadir el segundo logo abajo a la derecha
  const logoImg2 = new Image();
  logoImg2.src = '../../assets/img/COSSIES_logo.png'; // Ruta del segundo logo
  const img2Width = 50; // Ancho de la segunda imagen
  const img2Height = 20; // Alto de la segunda imagen
  const img2X = pageWidth - img2Width - 10; // Posición X (derecha con margen de 10)
  const img2Y = 250; // Posición Y (abajo)
  doc.addImage(logoImg2, 'PNG', img2X, img2Y, img2Width, img2Height);

  // Guardar el PDF
  doc.save('CartaDeLiberacion.pdf');mgHeight = 30; // Alto de la imagen
  const pageWidth = doc.internal.pageSize.getWidth(); // Ancho de la página
  const centerX = (pageWidth - imgWidth) / 2; // Centrar horizontalmente
  doc.addImage(logoImg, 'PNG', centerX, 10, imgWidth, imgHeight);

  // Añadir el texto ASUNTO abajo a la derecha
  doc.setFontSize(12);
  const asuntoText = 'ASUNTO: CARTA DE LIBERACIÓN';
  const textWidth = doc.getTextWidth(asuntoText); // Obtener el ancho del texto
  const textX = pageWidth - textWidth - 10; // Posición X (derecha con margen de 10)
  doc.te
}
*/

//opcion 2
/*
generatePdf() {
  // Configurar el tamaño de la hoja a carta (215.9 mm de ancho x 279.4 mm de alto)
  const doc = new jsPDF({
    unit: 'mm', // Usar milímetros como unidad
    format: 'letter', // Tamaño carta
    orientation: 'portrait', // Orientación vertical
  });

  // Márgenes
  const marginLeft = 10; // Margen izquierdo
  const marginRight = 10; // Margen derecho
  const pageWidth = doc.internal.pageSize.getWidth(); // Ancho de la página
  const availableWidth = pageWidth - marginLeft - marginRight; // Ancho disponible

  // Añadir el logo en el centro
  const logoImg = new Image();
  logoImg.src = '../../assets/img/NH.jpg'; // Ruta del logo
  const imgWidth = 50; // Ancho de la imagen
  const imgHeight = 30; // Alto de la imagen
  const centerX = (pageWidth - imgWidth) / 2; // Centrar horizontalmente
  doc.addImage(logoImg, 'PNG', centerX, 10, imgWidth, imgHeight);

  // Añadir el texto ASUNTO abajo a la derecha
  doc.setFontSize(14);
  const asuntoText = 'ASUNTO: CARTA DE LIBERACIÓN';
  const textWidth = doc.getTextWidth(asuntoText); // Obtener el ancho del texto
  const textX = pageWidth - textWidth - 10; // Posición X (derecha con margen de 10)
  doc.text(asuntoText, textX, 50); // Posición Y ajustada

  // Activar negrita para la siguiente sección
  doc.setFont('helvetica', 'bold'); // Activar negrita
  doc.setFontSize(14);
  doc.text('MTRO. VICTOR MANUEL BAEZ ALVARADO', 10, 60);
  doc.text('COORDINADOR DEL SERVICIO SOCIAL', 10, 65);
  doc.text('DE INSTITUCIONES DE EDUCACIÓN SUPERIOR', 10, 70);
  doc.text('Y MEDIA SUPERIOR', 10, 75);
  doc.text('P R E S E N T E', 10, 80);

  // Volver a normal después de la sección en negrita
  doc.setFont('helvetica', 'normal'); // Desactivar negrita



  // Añadir el cuerpo del texto con márgenes
  doc.setFontSize(14);
  const text = [
    'Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo,',
    'me permito informar que el/la alumn() NOMBRE DEL/LA ALUMN() del SEMESTRE',
    'del NOMBRE DE LA INSTITUCIÓN EDUCATIVA, ha CONCLUIDO satisfactoriamente',
    'su SERVICIO SOCIAL, cubriendo un total de ____ HORAS en el área ________',
    'de la modalidad de __________ dentro de esta dependencia NOMBRE DE LA',
    'DEPENDENCIA, iniciando el día ____________ y concluyendo el día ____________.'
  ];

  let yPosition = 90; // Posición Y inicial
  text.forEach(line => {
    doc.text(line, marginLeft, yPosition, { maxWidth: availableWidth });
    yPosition += 5; // Espacio entre líneas
  });

  // Añadir el texto de liberación
  doc.text('Por lo tanto, no tengo inconveniente en extender la presente CARTA DE LIBERACIÓN,', 10, 125);
  doc.text('a los _______ días del mes de _______ del 202_.', 10, 130);

  // Añadir el texto de despedida
  doc.text('ATENTAMENTE', 10, 140);
  doc.text('A LA FECHA DE SU PRESENTACION', 10, 145);

  // Espacio para la firma
  doc.text('FIRMA DEL TITULAR O JEFE INMEDIATO', 10, 160);

  // Añadir el texto final
  doc.setFontSize(8);
  doc.text('C.C.P. ARCHIVO DE LA COSSIES', 10, 170);

  // Añadir el segundo logo abajo a la derecha
  const logoImg2 = new Image();
  logoImg2.src = '../../assets/img/COSSIES_logo.png'; // Ruta del segundo logo
  const img2Width = 50; // Ancho de la segunda imagen
  const img2Height = 20; // Alto de la segunda imagen
  const img2X = pageWidth - img2Width - 10; // Posición X (derecha con margen de 10)
  const img2Y = 250; // Posición Y (abajo)
  doc.addImage(logoImg2, 'PNG', img2X, img2Y, img2Width, img2Height);

  // Guardar el PDF
  doc.save('CartaDeLiberacion.pdf');
}


*/


/*opcion 3
 generatePdf() {
    // Configurar el tamaño de la hoja a carta (215.9 mm de ancho x 279.4 mm de alto)
    const doc = new jsPDF({
      unit: 'mm', // Usar milímetros como unidad
      format: 'letter', // Tamaño carta
      orientation: 'portrait', // Orientación vertical
    });
  
    // Márgenes
    const marginLeft = 10; // Margen izquierdo
    const marginRight = 10; // Margen derecho
    const pageWidth = doc.internal.pageSize.getWidth(); // Ancho de la página
    const availableWidth = pageWidth - marginLeft - marginRight; // Ancho disponible
  
    // Añadir el logo en el centro
    const logoImg = new Image();
    logoImg.src = '../../assets/img/NH.jpg'; // Ruta del logo
    const imgWidth = 50; // Ancho de la imagen
    const imgHeight = 30; // Alto de la imagen
    const centerX = (pageWidth - imgWidth) / 2; // Centrar horizontalmente
    doc.addImage(logoImg, 'PNG', centerX, 10, imgWidth, imgHeight);
  
    // Añadir el texto ASUNTO abajo a la derecha
    doc.setFontSize(14);
    const asuntoText = 'ASUNTO: CARTA DE LIBERACIÓN';
    const textWidth = doc.getTextWidth(asuntoText); // Obtener el ancho del texto
    const textX = pageWidth - textWidth - 10; // Posición X (derecha con margen de 10)
    doc.text(asuntoText, textX, 50); // Posición Y ajustada
  
    // Activar negrita para la siguiente sección
    doc.setFont('helvetica', 'bold'); // Activar negrita
    doc.setFontSize(14);
    doc.text('MTRO. VICTOR MANUEL BAEZ ALVARADO', 10, 60);
    doc.text('COORDINADOR DEL SERVICIO SOCIAL', 10, 65);
    doc.text('DE INSTITUCIONES DE EDUCACIÓN SUPERIOR', 10, 70);
    doc.text('Y MEDIA SUPERIOR', 10, 75);
    doc.text('P R E S E N T E', 10, 80);
  
    // Volver a normal después de la sección en negrita
    doc.setFont('helvetica', 'normal'); // Desactivar negrita
  
  
  
    // Añadir el cuerpo del texto 
    doc.setFontSize(14);
    const text = [
      'Por medio del presente reciba un cordial y afectuoso saludo, al mismo tiempo,',
      'me permito informar que el/la alumn() NOMBRE DEL/LA ALUMN() del SEMESTRE',
      'del NOMBRE DE LA INSTITUCIÓN EDUCATIVA, ha CONCLUIDO satisfactoriamente',
      'su SERVICIO SOCIAL, cubriendo un total de ____ HORAS en el área ________',
      'de la modalidad de __________ dentro de esta dependencia NOMBRE DE LA',
      'DEPENDENCIA, iniciando el día ____________ y concluyendo el día ____________.'
    ];
  
    let yPosition = 90; // Posición Y inicial
    text.forEach(line => {
      doc.text(line, marginLeft, yPosition, { maxWidth: availableWidth });
      yPosition += 10; // Espacio entre líneas
    });
  
    // Añadir el texto de liberación
    doc.text('Por lo tanto, no tengo inconveniente en extender la presente CARTA DE LIBERACIÓN,', 10, 125);
    doc.text('a los _______ días del mes de _______ del 202_.', 10, 130);
  
    // Añadir el texto de despedida
    doc.text('ATENTAMENTE', 10, 140);
    doc.text('A LA FECHA DE SU PRESENTACION', 10, 145);
  
    // Espacio para la firma
    doc.text('FIRMA DEL TITULAR O JEFE INMEDIATO', 10, 160);
  
    // Añadir el texto final
    doc.setFontSize(8);
    doc.text('C.C.P. ARCHIVO DE LA COSSIES', 10, 170);
  
    // Añadir el segundo logo abajo a la derecha
    const logoImg2 = new Image();
    logoImg2.src = '../../assets/img/COSSIES_logo.png'; // Ruta del segundo logo
    const img2Width = 50; // Ancho de la segunda imagen
    const img2Height = 20; // Alto de la segunda imagen
    const img2X = pageWidth - img2Width - 10; // Posición X (derecha con margen de 10)
    const img2Y = 250; // Posición Y (abajo)
    doc.addImage(logoImg2, 'PNG', img2X, img2Y, img2Width, img2Height);
  
    // Guardar el PDF
    doc.save('CartaDeLiberacion.pdf');
  }
 */