const data = {
  admins: [
    {
      usuario: "mariarodriguez123",
      clave: "yosoymaria123",
      nombre: "María Rodríguez Peña",
      email: "mariarodriguez@gmail.com",
      puesto: "Administrador",
      telefono: "904882657",
      direccion: "Av. la república 386",
      salario: "S/. 1500.00",
      contratacion: "12/10/2023",
      foto: "https://pymstatic.com/5844/conversions/personas-emocionales-small-16_9.jpg",
    },
  ],
  farmaceutas: [
    {
      usuario: "juanperez456",
      clave: "clavejuan456",
      nombre: "Juan Pérez López",
      email: "juanperez@gmail.com",
      puesto: "Farmaceuta",
      telefono: "905552233",
      direccion: "Calle de los olivos 123",
      salario: "S/. 1200.00",
      contratacion: "05/05/2024",
      foto: "https://images.ecestaticos.com/cLAr0spOucOB5T-J3MRKXWrtybE=/119x87:4983x3534/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F542%2F18c%2F2b9%2F54218c2b95445ae1fea91aca9e37b53e.jpg",
    },
    {
      usuario: "anagonzalez789",
      clave: "claveana789",
      nombre: "Ana González Torres",
      email: "anagonzalez@gmail.com",
      puesto: "Farmaceuta",
      telefono: "907776655",
      direccion: "Plaza Mayor 789",
      salario: "S/. 1300.00",
      contratacion: "20/11/2023",
      foto: "https://weremote.net/wp-content/uploads/2022/08/mujer-sonriente-apunta-arriba.jpg",
    },
    {
      usuario: "pedromartinez321",
      clave: "clavepedro321",
      nombre: "Pedro Martínez Castro",
      email: "pedromartinez@gmail.com",
      puesto: "Farmaceuta",
      telefono: "906665544",
      direccion: "Avenida de los Pinos 567",
      salario: "S/. 1100.00",
      contratacion: "15/07/2024",
      foto: "https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=NqMHLF8T4RzPaBE_WMnflSGB_1-kZZTQgAkekUxumZg=",
    },
    {
      usuario: "lauragonzalez567",
      clave: "clavelaura567",
      nombre: "Laura González Ramírez",
      email: "lauragonzalez@gmail.com",
      puesto: "Farmaceuta",
      telefono: "909998877",
      direccion: "Calle de las Flores 789",
      salario: "S/. 1250.00",
      contratacion: "10/03/2023",
      foto: "https://www.clarin.com/2018/09/28/_dQjtk6b-_1200x0__1.jpg",
    },
  ],
  proveedores: [
    {
      usuario: "carlosrodriguez654",
      clave: "clavecarlos654",
      nombre: "Carlos Rodríguez Sánchez",
      email: "carlosrodriguez@gmail.com",
      puesto: "Farmaceuta",
      telefono: "908887766",
      direccion: "Rocafuerte 234",
      salario: "S/. 1350.00",
      contratacion: "02/09/2024",
      foto: "https://opticasoliva.com/cdn/shop/collections/lentes-para-hombre.jpg?v=1629309609",
    },
    {
      usuario: "sofiatorres890",
      clave: "clavesofia890",
      nombre: "Sofía Torres Jiménez",
      email: "sofiatorres@gmail.com",
      puesto: "Farmaceuta",
      telefono: "901112233",
      direccion: "Calle de la Luna 456",
      salario: "S/. 1180.00",
      contratacion: "18/06/2023",
      foto: "https://img.freepik.com/fotos-gratis/retrato-de-caucasiano-mulher-sorri_53876-24998.jpg",
    },
    {
      usuario: "robertogomez098",
      clave: "claveroberto098",
      nombre: "Roberto Gómez Reyes",
      email: "robertogomez@gmail.com",
      puesto: "Farmaceuta",
      telefono: "902223344",
      direccion: "Avenida del Sol 789",
      salario: "S/. 1420.00",
      contratacion: "25/01/2024",
      foto: "https://elmundopositivo.com/wp-content/uploads/2020/07/cortehombre-5-300x266.jpg",
    },
    {
      usuario: "elenamolina765",
      clave: "claveelena765",
      nombre: "Elena Molina Vargas",
      email: "elenamolina@gmail.com",
      puesto: "Farmaceuta",
      telefono: "903334455",
      direccion: "Calle de los Ríos 321",
      salario: "S/. 1265.00",
      contratacion: "08/12/2023",
      foto: "https://pbs.twimg.com/profile_images/1337757611698032641/DBFJ-khl_400x400.jpg",
    },
  ],
};

const usuariosGrid = document.getElementById("usuariosGrid");
let usuarioCards = "";
data.farmaceutas.forEach((usuario, index) => {
  usuarioCards += `
    <div
      class="p-5 flex flex-col gap-3 items-center justify-center bg-gradient-to-tr from-lime-100 to-lime-400 border border-black rounded-xl">
      <img class="object-cover w-[50px] h-[50px] rounded-[50%] shadow-xl"
        src="${usuario.foto}" alt="usuario_${index}" />
      <div class="text-center">
        <h3 class="text-sm font-bold">${usuario.nombre}</h3>
        <p class="text-xs italic">${usuario.email}</p>
        <p class="text-xs">${usuario.puesto}</p>
      </div>
      <ul class="text-xs">
        <li><b>Teléfono</b>: ${usuario.telefono}</li>
        <li><b>Dirección</b>: ${usuario.direccion}</li>
        <li><b>Salario</b>: ${usuario.salario}</li>
        <li><b>Contratación</b>: ${usuario.contratacion}</li>
      </ul>
      <div class="flex gap-5 text-xs">
        <a href="editarfarmaceuta.html" class="px-2 py-1 flex items-center gap-2 bg-white border border-black rounded">
          <i class="fa-solid fa-pen-to-square"></i>
          <p>Editar</p>
        </a>
        <button class="px-2 py-1 flex items-center gap-2 bg-white border border-black rounded">
          <i class="fa-solid fa-trash"></i>
          <p>Eliminar</p>
        </button>
      </div>
    </div>
  `;
});
usuariosGrid.innerHTML = usuarioCards;
