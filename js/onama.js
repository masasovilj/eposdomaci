$(document).ready(function () {
    $("#p1, #p2").hide();
  });
  
  //show me dugme prikriva i skida tekst
$(document).ready(function () {
    //kad se ucita stranica
    $("#btnPrikaziVise").click(function () {
      //kad kliknes na dugme sa klasom btn
      $("#p1").toggle(3000); //sakrij(otkri) tekst sa klasom togglepls u trajanju od 3000ms=3s
      $("#p2").toggle(3000);
    });
  });