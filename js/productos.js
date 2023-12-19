const data = [
  {
    nombre: "Paracetamol",
    descripcion: "Analgésico y antipirético",
    precio: 5.99,
    stock_actual: 200,
    fecha_vencimiento: "2023-12-31",
    categoria: "Medicamento",
    fabricante: "Farmacia Labs",
    presentacion: "Tabletas",
    composicion: "Paracetamol 500mg",
    indicaciones: "Alivio del dolor y reducción de la fiebre",
    contraindicaciones: "No utilizar en caso de alergia al paracetamol",
    stock_minimo: 50,
    lote: "ABC123",
    foto: "https://farmaciauniversal.com/assets/sources/PRODUCTOS/18119%20-%20paracetamol%20500%20mg%20-%20farmacia%20universal.jpg",
  },
  {
    nombre: "Amoxicilina",
    descripcion: "Antibiótico de amplio espectro",
    precio: 12.5,
    stock_actual: 150,
    fecha_vencimiento: "2024-06-30",
    categoria: "Medicamento",
    fabricante: "Salud Pharma",
    presentacion: "Cápsulas",
    composicion: "Amoxicilina 500mg",
    indicaciones: "Infecciones bacterianas",
    contraindicaciones: "No usar en caso de alergia a las penicilinas",
    stock_minimo: 30,
    lote: "XYZ456",
    foto: "https://farmaciauniversal.com/assets/sources/Veet/16592-amoxicilina-acido-clavulanico.jpg",
  },
  {
    nombre: "Omeprazol",
    descripcion: "Inhibidor de la bomba de protones",
    precio: 8.75,
    stock_actual: 100,
    fecha_vencimiento: "2023-10-15",
    categoria: "Medicamento",
    fabricante: "Digest Pharma",
    presentacion: "Cápsulas",
    composicion: "Omeprazol 20mg",
    indicaciones: "Acidez estomacal y úlceras gástricas",
    contraindicaciones: "No recomendado durante el embarazo",
    stock_minimo: 20,
    lote: "LMN789",
    foto: "https://farmaciauniversal.com/assets/sources/20783-omeprazol_3.jpg",
  },
  {
    nombre: "Ibuprofeno",
    descripcion: "Antiinflamatorio no esteroideo",
    precio: 7.25,
    stock_actual: 120,
    fecha_vencimiento: "2023-11-30",
    categoria: "Medicamento",
    fabricante: "Wellness Pharmaceuticals",
    presentacion: "Tabletas",
    composicion: "Ibuprofeno 200mg",
    indicaciones: "Alivio del dolor y reducción de la inflamación",
    contraindicaciones: "No usar en caso de úlceras estomacales",
    stock_minimo: 25,
    lote: "PQR321",
    foto: "https://farmaciauniversal.com/assets/sources/Hero%20Image/00890-ibuprofeno-400-mg_1.jpg",
  },
  {
    nombre: "Dipirona",
    descripcion: "Analgésico y antipirético",
    precio: 9.99,
    stock_actual: 80,
    fecha_vencimiento: "2023-09-15",
    categoria: "Medicamento",
    fabricante: "Global Pharmaceuticals",
    presentacion: "Solución Oral",
    composicion: "Dipirona 500mg/mL",
    indicaciones: "Alivio del dolor y fiebre",
    contraindicaciones: "Evitar en pacientes con problemas hematológicos",
    stock_minimo: 15,
    lote: "JKL789",
    foto: "https://prixz.com/salud/wp-content/uploads/2020/10/Dipirona.jpg",
  },
  {
    nombre: "Vitamina C",
    descripcion: "Suplemento vitamínico",
    precio: 12.0,
    stock_actual: 150,
    fecha_vencimiento: "2024-04-30",
    categoria: "Suplemento",
    fabricante: "Health Supplements Co.",
    presentacion: "Tabletas Efervescentes",
    composicion: "Ácido ascórbico 500mg",
    indicaciones: "Refuerzo del sistema inmunológico",
    contraindicaciones: "Evitar en caso de alergia a la vitamina C",
    stock_minimo: 30,
    lote: "MNO456",
    foto: "https://www.redoxon.es/sites/g/files/vrxlpx43341/files/2022-08/t7.png",
  },
  {
    nombre: "Cetirizina",
    descripcion: "Antihistamínico",
    precio: 6.5,
    stock_actual: 90,
    fecha_vencimiento: "2023-08-20",
    categoria: "Medicamento",
    fabricante: "Allergen Pharmaceuticals",
    presentacion: "Tabletas",
    composicion: "Cetirizina 10mg",
    indicaciones: "Alivio de alergias y picazón",
    contraindicaciones: "No recomendado en niños menores de 6 años",
    stock_minimo: 20,
    lote: "STU012",
    foto: "https://farmaciauniversal.com/assets/sources/Hero%20Image/cetiri_1.jpg",
  },
  {
    nombre: "Simvastatina",
    descripcion: "Estatina para reducción del colesterol",
    precio: 14.75,
    stock_actual: 60,
    fecha_vencimiento: "2023-10-01",
    categoria: "Medicamento",
    fabricante: "Cardio Health Labs",
    presentacion: "Tabletas",
    composicion: "Simvastatina 20mg",
    indicaciones:
      "Control del colesterol y prevención de enfermedades cardíacas",
    contraindicaciones: "Evitar en pacientes con enfermedad hepática",
    stock_minimo: 10,
    lote: "UVW345",
    foto: "https://www.pharmacys.com.ec/wcsstore/DF_CatalogAsset/images/catalog/producto/fullimage/100235P-1.jpg",
  },
  {
    nombre: "Sales Rehidratantes",
    descripcion: "Suplemento para rehidratación oral",
    precio: 5.99,
    stock_actual: 100,
    fecha_vencimiento: "2023-11-15",
    categoria: "Suplemento",
    fabricante: "Hydration Solutions Inc.",
    presentacion: "Sobres en polvo",
    composicion: "Electrolitos esenciales",
    indicaciones: "Rehidratación después de pérdida de líquidos",
    contraindicaciones: "No utilizar en caso de diabetes descompensada",
    stock_minimo: 30,
    lote: "XYZ789",
    foto: "https://www.hogarysalud.com.pe/wp-content/uploads/2023/04/00211027.jpg",
  },
  {
    nombre: "Melatonina",
    descripcion: "Suplemento para mejorar el sueño",
    precio: 10.5,
    stock_actual: 80,
    fecha_vencimiento: "2024-02-28",
    categoria: "Suplemento",
    fabricante: "Sleep Wellness Co.",
    presentacion: "Tabletas",
    composicion: "Melatonina 3mg",
    indicaciones: "Regulación del sueño y jet lag",
    contraindicaciones: "Evitar en mujeres embarazadas y lactantes",
    stock_minimo: 20,
    lote: "ABC567",
    foto: "https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2F7da12b5e8fe74b409765e316042ef249?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=11abef5cb65132e82199cd45550e89ec",
  },
];

const productosTable = document.getElementById("productosTable");
let productoRows = "";
data.forEach((producto, index) => {
  productoRows += `
    <tr class="table w-full table-fixed odd:bg-white even:bg-gray-50 border-b">
      <td class="pl-3 py-2 w-[45%]">
        <div class="w-full flex items-center gap-5">
          <img class="w-[150px] h-[70px] object-cover rounded-lg"
            src="${producto.foto}" alt="producto_${index}">
          <div class="w-[150px] flex flex-col gap-1">
            <p class="text-sm underline font-bold">${producto.nombre}</p>
            <p class="text-xs font-normal">${producto.descripcion}</p>
            <p class="text-xs font-bold italic">${producto.fabricante}</p>
          </div>
        </div>
      </td>
      <td class="py-2 w-[35%]">
        <div class="w-[225px] flex flex-col gap-1 text-xs">
          <p><b>Presentación:</b> ${producto.presentacion}</p>
          <p><b>Composición:</b> ${producto.composicion}</p>
          <p><b>Precio:</b> S/. ${producto.precio}</p>
        </div>
      </td>
      <td class="pr-3 py-2 w-[20%]">
        <a href="verproducto.html"
          class="px-3 py-2 flex items-center justify-center gap-2 bg-gradient-to-tr from-blue-700 to-blue-500 text-white text-xs font-semibold border rounded-lg">
          <i class="fa-solid fa-eye"></i>
          <p>Ver producto</p>
        </a>
      </td>
    </tr>
  `;
});
productosTable.innerHTML = productoRows;
