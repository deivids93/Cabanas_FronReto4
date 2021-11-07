function traerInformacionCategory() {
  $("#name_cat").prop("disabled", false);
  $("#description_cat").prop("disabled", false);
  $("#BtnConsultCateg").prop("disabled", true);
  $("#BtnGuardarCateg").prop("disabled", true);
  $("#BtnnuevCateg").prop("disabled", true);

  $.ajax({
    url: "http://144.22.58.165:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuesta(respuesta);
    },
  });
}

function pintarRespuesta(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro de las Categorias  </h2> <table  border="1"  align="center">';

  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>Description</td>";
  myTable += "<td>Editar</td>";
  myTable += "<td>Actualizar</td>";
  myTable += "</tr>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += '<td style="width : 100px;">' + respuesta[i].name + "</td>";
    myTable +=
      '<td style="width : 100px;">' + respuesta[i].description + "</td>";
    myTable +=
      "<td style='width : 100px;'> <button onclick=' validarActualiInformacionCategory(" +
      respuesta[i].id +
      ")'>Actualizar</button>";
    myTable +=
      "<td style='width : 100px;'> <button onclick='borrarCategory(" +
      respuesta[i].id +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoCategoria").html(myTable);
}

function validarActualiInformacionCategory(idElemento) {
  var name = document.getElementById("name_cat").value;
  var description = document.getElementById("description_cat").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (description.length == 0) {
    alert("Digite la descripcion de la Categoria");
    return;
  }
  actualizarInformacionCategory(idElemento);
}

function validarGuardarInformacionCategory() {
  var name = document.getElementById("name_cat").value;
  var description = document.getElementById("description_cat").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (description.length == 0) {
    alert("Digite la descripcion de la Categoria");
    return;
  }
  guardarInformacionCategory();
}

function nuevacategoria() {
  $("#name_cat").prop("disabled", false);
  $("#description_cat").prop("disabled", false);
  $("#BtnConsultCateg").prop("disabled", true);
  $("#BtnGuardarCateg").prop("disabled", false);
  $("#BtnnuevCateg").prop("disabled", true);
}

function guardarInformacionCategory() {
  let var2 = {
    name: $("#name_cat").val(),
    description: $("#description_cat").val(),
  };

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var2),

    url: "http://144.22.58.165:8080/api/Category/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

function actualizarInformacionCategory(idElemento) {
  let myData = {
    id: idElemento,
    name: $("#name_cat").val(),
    description: $("#description_cat").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Category/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoCategoria").empty();
      $("#name_cat").val("");
      $("#description_cat").val("");
      traerInformacionCategory();
      alert("se ha Actualizado correctamente la categoria");
      window.location.reload();
    },
  });
}

function borrarCategory(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Category/" + idElemento,
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoCategoria").empty();
      traerInformacionCategory();
      alert("Se ha Eliminado.");
      window.location.reload();
    },
  });
}

///////////////////Cabins//////////////////////////////////////

function nuevacabaña() {
  $("#name_cab").prop("disabled", false);
  $("#brands").prop("disabled", false);
  $("#rooms").prop("disabled", false);
  $("#description_cab").prop("disabled", false);
  $("#selectCateg").prop("disabled", false);
  $("#BtnConsuCab").prop("disabled", true);
  $("#BtnGuardCab").prop("disabled", true);
  $("#BtnnuevCaban").prop("disabled", true);
}

function traerInformacionCabin() {
  $("#name_cab").prop("disabled", false);
  $("#brands").prop("disabled", false);
  $("#rooms").prop("disabled", false);
  $("#description_cab").prop("disabled", false);
  $("#selectCateg").prop("disabled", true);
  $("#BtnConsuCab").prop("disabled", true);
  $("#BtnGuardCab").prop("disabled", true);
  $("#BtnnuevCaban").prop("disabled", true);

  $.ajax({
    url: "http://144.22.58.165:8080/api/Cabin/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaCabins(respuesta);
    },
  });
}

function pintarRespuestaCabins(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro de Cabañas  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>Brand</td>";
  myTable += "<td>Rooms</td>";
  myTable += "<td>Description</td>";
  myTable += "<td>Categoria</td>";
  myTable += "<td>Actualizar</td>";
  myTable += "<td>Borrar</td>";
  myTable += "</tr>";

  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].name + "</td>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].brand + "</td>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].rooms + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].description + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].category.name + "</td>";
    myTable +=
      "<td> <button onclick=' ValidarInformacionCabin(" +
      respuesta[i].id +
      ")'>Actualizar</button>";
    myTable +=
      "<td> <button onclick='borrarCabins(" +
      respuesta[i].id +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadocabana").html(myTable);
}

function ValidarInformacionCabin(id) {
  var name = document.getElementById("name_cab").value;
  var brand = document.getElementById("brands").value;
  var rooms = document.getElementById("rooms").value;
  var description_cab = document.getElementById("description_cab").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (brand.length == 0) {
    alert("Digite la marca de la cabaña ");
    return;
  }

  if (rooms.length == 0) {
    alert("Digite la cantidad de habitaciones d");
    return;
  }
  if (description_cab.length == 0) {
    alert("Digite la descripcion de la Cabaña");
    return;
  }
  actualizarInformacionCabins(id);
}

function guardarInformacionCabin() {
  var name = document.getElementById("name_cab").value;
  var brand = document.getElementById("brands").value;
  var rooms = document.getElementById("rooms").value;
  var description_cab = document.getElementById("description_cab").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (brand.length == 0) {
    alert("Digite la marca de la cabaña ");
    return;
  }

  if (rooms.length == 0) {
    alert("Digite la cantidad de habitaciones ");
    return;
  }
  if (description_cab.length == 0) {
    alert("Digite la descripcion de la Cabaña");
    return;
  }
  guardarInformacionCabin1();
}

function guardarInformacionCabin1() {
  let cat = {
    id: $("#selectCateg").val(),
  };
  console.log(cat);

  let var3 = {
    name: $("#name_cab").val(),
    brand: $("#brands").val(),
    rooms: $("#rooms").val(),
    description: $("#description_cab").val(),
    category: cat,
  };

  console.log(var3);

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var3),

    url: "http://144.22.58.165:8080/api/Cabin/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },
  });
}

function actualizarInformacionCabins(idElemento) {
  let myData = {
    id: idElemento,
    name: $("#name_cab").val(),
    brand: $("#brands").val(),
    rooms: $("#rooms").val(),
    description: $("#description_cab").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Cabin/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadocabana").empty();
      $("#name_cab").val("");
      $("#brands").val("");
      $("#rooms").val("");
      $("#description_cab").val("");
      traerInformacionCabin();
      alert("se ha Actualizado correctamente la categoria");
      window.location.reload();
    },
  });
}

function borrarCabins(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Cabin/" + idElemento,
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadocabana").empty();
      traerInformacionCabin();
      alert("Se ha Eliminado.");
      window.location.reload();
    },
  });
}

function listaCategorias() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      let $select = $("#selectCateg");
      $.each(respuesta, function (id, name) {
        $select.append(
          "<option value=" + name.id + ">" + name.name + "</option"
        );
        console.log("select " + name.id);
      });
    },
  });
}
//////////////////////Clientes//////////////////////////////////

function nuevocliente() {
  $("#name_client").prop("disabled", false);
  $("#email").prop("disabled", false);
  $("#Password").prop("disabled", false);
  $("#age").prop("disabled", false);
  $("#BtnCosulClient").prop("disabled", true);
  $("#BtnGuardClient").prop("disabled", false);
  $("#BtnnuevClient").prop("disabled", true);
}

function traerInformacionClient() {
  $("#name_client").prop("disabled", false);
  $("#email").prop("disabled", true);
  $("#Password").prop("disabled", false);
  $("#age").prop("disabled", false);
  $("#BtnCosulClient").prop("disabled", true);
  $("#BtnGuardClient").prop("disabled", true);
  $("#BtnnuevClient").prop("disabled", true);

  $.ajax({
    url: "http://144.22.58.165:8080/api/Client/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaClientes(respuesta);
    },
  });
}

function pintarRespuestaClientes(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Clientes  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>email</td>";
  myTable += "<td>Age</td>";
  myTable += "<td>Actualizar</td>";
  myTable += "<td>Borrar</td>";
  myTable += "</tr>";

  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].name + "</td>";
    myTable += "<td style='width : 100px;'> " + respuesta[i].email + "</td>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].age + "</td>";
    myTable +=
      "<td style='width : 100px;'> <button onclick=' validarInformacionClient(" +
      respuesta[i].idClient +
      ")'>Actualizar</button>";
    myTable +=
      "<td style='width : 100px;'> <button onclick='borrarClient(" +
      respuesta[i].idClient +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoClient").html(myTable);
}

function validarInformacionClient(id) {
  var name = document.getElementById("name_client").value;

  var password = document.getElementById("Password").value;
  var age = document.getElementById("age").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (password.length == 0) {
    alert("Digite el password");
    return;
  }
  if (age.length == 0) {
    alert("Digite los años ");
    return;
  }
  actualizarInformacionClient(id);
}

function guardarInformacionClient() {
  var name = document.getElementById("name_client").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("Password").value;
  var age = document.getElementById("age").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (email.length == 0) {
    alert("Digite el  correo del usuario ");
    return;
  }

  if (password.length == 0) {
    alert("Digite el password");
    return;
  }
  if (age.length == 0) {
    alert("Digite los años ");
    return;
  }
  actualizarInformacionClient(id);
}

function guardarInformacionClient1() {
  let var4 = {
    name: $("#name_client").val(),
    email: $("#email").val(),
    password: $("#Password").val(),
    age: $("#age").val(),
  };

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var4),

    url: "http://144.22.58.165:8080/api/Client/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

function actualizarInformacionClient(idElemento) {
  let myData = {
    idClient: idElemento,
    name: $("#name_client").val(),
    email: $("#email").val(),
    password: $("#Password").val(),
    age: $("#age").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Client/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoClient").empty();
      $("#name_client").val("");
      $("#email").val("");
      $("#Password").val("");
      $("#age").val("");
      traerInformacionClient();
      alert("se ha Actualizado correctamente el Cliemte");
      window.location.reload();
    },
  });
}

function borrarClient(idElemento) {
  let myData = {
    idClient: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Client/" + idElemento,
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoClient").empty();
      traerInformacionClient();
      alert("Se ha Eliminado.");
      window.location.reload();
    },
  });
}

//////////////////////Messages//////////////////////////////////
function nuevoMessag() {
  $("#Message").prop("disabled", false);
  $("#selectCabin").prop("disabled", false);
  $("#selectClient").prop("disabled", false);
  $("#BtnCosulMessag").prop("disabled", true);
  $("#BtnGuardMessag").prop("disabled", false);
  $("#BtnnuevMessag").prop("disabled", true);
}

function listaCabins() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Cabin/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      let $select = $("#selectCabin");
      let $select1 = $("#selectCabin1");
      $.each(respuesta, function (id, name) {
        $select.append(
          "<option value=" + name.id + ">" + name.name + "</option>"
        );
        $select1.append(
          "<option value=" + name.id + ">" + name.name + "</option>"
        );
        console.log("select  cabin" + name.id);
      });
    },
  });
}

function listaClient() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Client/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log("client" + respuesta);
      let $select = $("#selectClient");
      let $select1 = $("#selectClient1");
      $.each(respuesta, function (idClient, name) {
        $select.append(
          "<option value=" + name.idClient + ">" + name.name + "</option>"
        );
        $select1.append(
          "<option value=" + name.idClient + ">" + name.name + "</option>"
        );
        console.log("select client " + name.idClient);
      });
    },
  });
}

function traerInformacionMessage() {
  $("#Message").prop("disabled", false);
  $("#selectCabin").prop("disabled", true);
  $("#selectClient").prop("disabled", true);
  $("#BtnCosulMessag").prop("disabled", true);
  $("#BtnGuardMessag").prop("disabled", true);
  $("#BtnnuevMessag").prop("disabled", true);

  $.ajax({
    url: "http://144.22.58.165:8080/api/Message/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaMessage(respuesta);
    },
  });
}

function pintarRespuestaMessage(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Mensajes  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Mensaje</td>";
  myTable += "<td>Cabin</td>";
  myTable += "<td>Client</td>";
  myTable += "<td>Actualizar</td>";
  myTable += "<td>Borrar</td>";
  myTable += "</tr>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].messageText + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].cabin.name + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].client.name + "</td>";

    myTable +=
      "<td style='width : 100px;'> <button onclick=' validarActualiInformacionMessag(" +
      respuesta[i].idMessage +
      ")'>Actualizar</button>";
    myTable +=
      "<td style='width : 100px;'> <button onclick='borrarMessage(" +
      respuesta[i].idMessage +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoMesage").html(myTable);
}

function validarActualiInformacionMessag(idElemento) {
  var messageText = document.getElementById("Message").value;

  if (messageText.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  actualizarInformacionMessage(idElemento);
}

function guardarInformacionMessage() {
  var message = document.getElementById("Message").value;

  if (message.length == 0) {
    alert("Por favor ddigite su mensaje");
    return;
  }

  guardarInformacionMessage1();
}

function guardarInformacionMessage1() {
  let cliente = {
    idClient: $("#selectClient").val(),
  };
  let cabins = {
    id: $("#selectCabin").val(),
  };

  let var5 = {
    messageText: $("#Message").val(),
    client: cliente,
    cabin: cabins,
  };
  console.log(var5);

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var5),

    url: "http://144.22.58.165:8080/api/Message/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

function actualizarInformacionMessage(idElemento) {
  let myData = {
    idMessage: idElemento,
    messageText: $("#Message").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Message/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoMesage").empty();
      $("#Message").val("");
      traerInformacionMessage();
      alert("se ha Actualizado correctamente la Message");
      window.location.reload();
    },
  });
}

function borrarMessage(idElemento) {
  let myData = {
    idMessage: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Message/" + idElemento,
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoMesage").empty();
      traerInformacionMessage();
      alert("Se ha Eliminado.");
      window.location.reload();
    },
  });
}

//////////////////////Reservacion//////////////////////////////////

function nuevoReserva() {
  $("#startDate").prop("disabled", true);
  $("#devolutionDate").prop("disabled", false);
  $("#selectClient1").prop("disabled", false);
  $("#selectCabin1").prop("disabled", false);
  $("#BtnConsulReserva").prop("disabled", true);
  $("#BtnGuardReserva").prop("disabled", false);
  $("#BtnnuevReserva").prop("disabled", true);
}

function traerInformacionReservation() {
  $("#startDate").prop("disabled", false);
  $("#devolutionDate").prop("disabled", false);
  $("#selectClient1").prop("disabled", true);
  $("#selectCabin1").prop("disabled", true);
  $("#BtnConsulReserva").prop("disabled", true);
  $("#BtnGuardReserva").prop("disabled", true);
  $("#BtnnuevReserva").prop("disabled", true);

  $.ajax({
    url: "http://144.22.58.165:8080/api/Reservation/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaReservacion(respuesta);
    },
  });
}

function pintarRespuestaReservacion(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Reservas  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Fecha Inicio</td>";
  myTable += "<td>Fecha Final</td>";
  myTable += "<td>Cliente</td>";
  myTable += "<td>Cabaña</td>";
  myTable += "<td>Actualizar</td>";
  myTable += "<td>Borrar</td>";
  myTable += "</tr>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + respuesta[i].startDate + "</td>";
    myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].client.name + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].cabin.name + "</td>";

    myTable +=
      "<td style='width : 100px;'> <button onclick=' validarInformacionReservation(" +
      respuesta[i].idReservation +
      ")'>Actualizar</button>";
    myTable +=
      "<td style='width : 100px;'> <button onclick='borrarReservacion(" +
      respuesta[i].idReservation +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoReserv").html(myTable);
}

function validarInformacionReservation(idElemento) {
  var startDate = document.getElementById("startDate").value;

  var devolutionDate = document.getElementById("devolutionDate").value;

  if (startDate.length == 0) {
    alert("Por favor seleccione la fecha de inicio");
    return;
  }
  if (devolutionDate.length == 0) {
    alert("Por favor seleccione la fecha final");
    return;
  }

  actualizarInformacionReservacion(idElemento);
}

function guardarInformacionReservation() {
  var startDate = document.getElementById("startDate").value;
  var devolutionDate = document.getElementById("devolutionDate").value;

  if (startDate.length == 0) {
    alert("Por favor seleccione la fecha de inicio");
    return;
  }
  if (devolutionDate.length == 0) {
    alert("Por favor seleccione la fecha entrega");
    return;
  }

  guardarInformacionReservation1();
}

function guardarInformacionReservation1() {
  let cliente1 = {
    idClient: $("#selectClient1").val(),
  };
  let cabins1 = {
    id: $("#selectCabin1").val(),
  };

  let var6 = {
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
    client: cliente1,
    cabin: cabins1,
  };
  console.log(var6);

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var6),

    url: "http://144.22.58.165:8080/api/Reservation/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

function actualizarInformacionReservacion(idElemento) {
  let myData = {
    idReservation: idElemento,
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Reservation/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoReserv").empty();
      $("#startDate").val("");
      $("#devolutionDate").val("");
      traerInformacionReservation();
      alert("se ha Actualizado correctamente la Reserva");
      window.location.reload();
    },
  });
}

function borrarReservacion(idElemento) {
  let myData = {
    idReservation: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Reservation/" + idElemento,
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoReserv").empty();
      traerInformacionReservation();
      alert("Se ha Eliminado.");
      window.location.reload();
    },
  });
}

//////////////////////Administrador//////////////////////////////////

function nuevoAdmin() {
  $("#name_adm").prop("disabled", false);
  $("#emailAdm").prop("disabled", false);
  $("#PasswordAdm").prop("disabled", false);
  $("#BtnConsulAdmin").prop("disabled", true);
  $("#BtnGuardAdmin").prop("disabled", false);
  $("#BtnnuevAdmin").prop("disabled", true);
}

function salir() {
  window.location.reload();
}

function traerInformacionAdmin() {
  $("#name_adm").prop("disabled", false);
  $("#emailAdm").prop("disabled", true);
  $("#PasswordAdm").prop("disabled", false);
  $("#BtnConsulAdmin").prop("disabled", true);
  $("#BtnGuardAdmin").prop("disabled", false);
  $("#BtnnuevAdmin").prop("disabled", true);

  $.ajax({
    url: "http://144.22.58.165:8080/api/Admin/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaAdmin(respuesta);
    },
  });
}

function pintarRespuestaAdmin(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Usuarios Administradores  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>email</td>";
  myTable += "<td>Actualizar</td>";
  myTable += "<td>Borrar</td>";
  myTable += "</tr>";

  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].name + "</td>";
    myTable += "<td style='width : 100px;'> " + respuesta[i].email + "</td>";
    myTable +=
      "<td style='width : 100px;'> <button onclick=' validaInformacionAdmin(" +
      respuesta[i].idAdmin +
      ")'>Actualizar</button>";
    myTable +=
      "<td style='width : 100px;'> <button onclick='borrarAdmin(" +
      respuesta[i].idAdmin +
      ")'>Borrar</button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoAdmin").html(myTable);
}

function validaInformacionAdmin(id) {
  var name = document.getElementById("name_adm").value;
  var password = document.getElementById("PasswordAdm").value;

  if (name.length == 0) {
    alert("Por favor digite nombre del administrador");
    return;
  }

  if (password.length == 0) {
    alert("Por favor digite Contraseña");
    return;
  }

  actualizarInformacionAdmin(id);
}

function guardarInformacionAdmin() {
  var name = document.getElementById("name_adm").value;
  var email = document.getElementById("emailAdm").value;
  var password = document.getElementById("PasswordAdm").value;

  if (name.length == 0) {
    alert("Por favor digite nombre del administrador");
    return;
  }
  if (email.length == 0) {
    alert("Por favor digite correo ");
    return;
  }
  if (password.length == 0) {
    alert("Por favor digite Contraseña");
    return;
  }

  guardarInformacionAdmin1();
}

function guardarInformacionAdmin1() {
  let var4 = {
    name: $("#name_adm").val(),
    email: $("#emailAdm").val(),
    password: $("#PasswordAdm").val(),
  };

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var4),

    url: "http://144.22.58.165:8080/api/Admin/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

function actualizarInformacionAdmin(idElemento) {
  let myData = {
    idAdmin: idElemento,
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Admin/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoAdmin").empty();
      $("#name_adm").val("");
      $("#emailAdm").val("");
      $("#PasswordAdm").val("");
      traerInformacionAdmin();
      alert("se ha Actualizado correctamente el administrador");
      window.location.reload();
    },
  });
}

function borrarAdmin(idElemento) {
  let myData = {
    idAdmin: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://144.22.58.165:8080/api/Admin/" + idElemento,
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
      $("#resultadoAdmin").empty();
      traerInformacionAdmin();
      alert("Se ha Eliminado.");
      window.location.reload();
    },
  });
}
