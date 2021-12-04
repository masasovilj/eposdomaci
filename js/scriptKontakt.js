function validirajPorudzbinu(){

    let imePrezime;
    let datum; 
    let email;
    let datumRezervacije;
    let brojTelefona;
    let adresa;
    let danas = new Date(); //danasnji datum
    let cb;

   
    imePrezime = document.getElementById("imeiprezime2").value;
    
     if (imePrezime === "" || !imePrezime.includes(" ") || imePrezime.length<5) {
        alert("Pogrešan unos! Unesi ime i prezime");
        return false;
    } 
    email = document.getElementById("email").value;
    if(email==="" || !email.includes('@')){
        alert("Pogrešan unos! Unesi ispravan email!");
        return false;
    
    }
    brojTelefona = document.getElementById("telefon").value;
    if(brojTelefona==="" || !brojTelefona.startsWith("+381")){
        alert("Pogrešan unos! Unesi ispravan broj telefona!");
        return false;
    }

    adresa =  document.getElementById("adresa").value
  
   if(adresa==="" || !adresa.includes(" ")){
    alert("Pogrešan unos! Unesi ispravnu adresu!");
    return false;
   }
    datum = document.getElementById("datum").value;  //vraca datum u obliku 2020-11-30
     
   
    let elementiDatuma=datum.split("-"); //ovo ce viti niz stringova u ovom obliku "2020","11","30"
   
    datumRezervacije = new Date(parseInt(elementiDatuma[0]),parseInt(elementiDatuma[1]-1),parseInt(elementiDatuma[2]));

    let brojSekundiDoDanaRezervacije = datumRezervacije.getTime(); //vreme u milisekundama
    let preostaloVreme =brojSekundiDoDanaRezervacije- danas.getTime(); 
     
    if(preostaloVreme<0){
        alert("Odaberite neki datum iz budućnosti!")
        return false;
    }

    alert("Zdravo, "+imePrezime + ", Vasa porudzbina je uspesno obavljena. Mozete da ocekujete da ce biti dostavljena dana "+datum + " na adresi "+adresa+" . ");
      
}




function validirajKontaktFormu(){

    let imePrezime;
    let email;
    let poruka ;

    imePrezime = document.getElementById("imeiprezime").value;
  
     if (imePrezime === "" || !imePrezime.includes(" ") || imePrezime.length<5) {
        alert("Pogrešan unos! Unesi ime i prezime");
        return false;
    } 
    email = document.getElementById("email2").value;
    if(email==="" || !email.includes('@')){
        alert("Pogrešan unos! Unesi ispravan email!");
        return false;
    
    }
    poruka = document.getElementById("textBox".value);
    if(poruka===""){
        alert("Pogrešan unos! Unesi poruku!");
        return false;
    }
    alert("Uspesno poslata poruka! Hvala!")
}


