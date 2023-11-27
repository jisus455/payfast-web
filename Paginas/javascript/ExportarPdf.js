
function exportarPDF() {
  
    var doc = new jspdf.jsPDF();
    doc.text('Nombre: ' + localStorage.getItem('nombre'), 10, 10);
    doc.text('Apellido: ' + localStorage.getItem('apellido'), 10, 20);
    doc.text('Fecha de nacimiento: ' + localStorage.getItem('fechaNac'), 10, 30);
    doc.text(`Sexo: ${localStorage.getItem('sexo')==0?"Masculino":"Femenino"}`, 10, 40);
    doc.save(`informacion_${apellido}`);
  }