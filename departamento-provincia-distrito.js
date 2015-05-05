//**** departamento>provincia>distrito ****
	//departamento -> provincia 
$(function() {
  $("#departamento").on("change", function() {
  var value = $(this).val();
    switch(value){
    // 1. provincias de Amazonas 
    	case "Amazonas":
				$("#provincia").html('<option value="Bagua">Bagua</option><option value="Bongara">Bongara</option><option value="Chachapoyas">Chachapoyas</option><option value="Condorcanqui">Condorcanqui</option><option value="Luya">Luya</option><option value="Rodriguez de Mendoza">Rodriguez de Mendoza</option><option value="Utcubamba">Utcubamba</option>');
    		break;
    // 2. provincias de Amazonas 
    	case "Ancash":
      	$("#provincia").html('<option value="Aija">Aija</option><option value="Antonio Raymondi">Antonio Raymondi</option><option value="Asuncion">Asuncion</option><option value="Bolognesi">Bolognesi</option><option value="Carhuaz">Carhuaz</option><option value="Carlos Fermin Fitzcarrald">Carlos Fermin Fitzcarrald</option><option value="Casma">Casma</option><option value="Corongo">Corongo</option><option value="Huaraz">Huaraz</option><option value="Huari">Huari</option><option value="Huarmey">Huarmey</option><option value="Huaylas">Huaylas</option><option value="Mariscal Luzuriaga">Mariscal Luzuriaga</option><option value="Ocros">Ocros</option><option value="Pallasca">Pallasca</option><option value="Pomabamba">Pomabamba</option><option value="Recuay">Recuay</option><option value="Santa">Santa</option><option value="Sihuas">Sihuas</option><option value="Yungay">Yungay</option>');
      	break;
    // 3. provincias de Apurimac          	
    	case "Apurimac":
      	$("#provincia").html('<option value="Abancay">Abancay</option><option value="Andahuaylas">Andahuaylas</option><option value="Antabamba">Antabamba</option><option value="Aymaraes">Aymaraes</option><option value="Chincheros">Chincheros</option><option value="Cotabambas">Cotabambas</option><option value="Grau">Grau</option>');          	
      	break;
    // 4. provincias de Arequipa          	
    	case "Arequipa":
      	$("#provincia").html('<option value="Arequipa">Arequipa</option><option value="Camana">Camana</option><option value="Caraveli">Caraveli</option><option value="Castilla">Castilla</option><option value="Caylloma">Caylloma</option><option value="Condesuyos">Condesuyos</option><option value="Islay">Islay</option><option value="La Union">La Union</option>');          	
      	break;
    // 5. provincias de Ayacucho         	
     	case "Ayacucho":
				$("#provincia").html('<option value="Cangallo">Cangallo</option><option value="Huamanga">Huamanga</option><option value="Huanca Sancos">Huanca Sancos</option><option value="Huanta">Huanta</option><option value="La Mar">La Mar</option><option value="Lucanas">Lucanas</option><option value="Parinacochas">Parinacochas</option><option value="Paucar del Sara">Paucar del Sara</option><option value="Sucre">Sucre</option><option value="Victor Fajardo">Victor Fajardo</option><option value="Vilcas Huaman">Vilcas Huaman</option>');
      	break;
    // 6. provincias de Cajamarca          	
    	case "Cajamarca":
				$("#provincia").html('<option value="Cajabamba">Cajabamba</option><option value="Cajamarca">Cajamarca</option><option value="Celendin">Celendin</option><option value="Chota">Chota</option><option value="Contumaza">Contumaza</option><option value="Cutervo">Cutervo</option><option value="Hualgayoc">Hualgayoc</option><option value="Jaen">Jaen</option><option value="San Ignacio">San Ignacio</option><option value="San Marcos">San Marcos</option><option value="San Miguel">San Miguel</option><option value="San Pablo">San Pablo</option><option value="Santa Cruz">Santa Cruz</option>');          	
      	break;
    // 7. provincias de Cusco         
    	case "Cusco":
				$("#provincia").html('<option value="Acomayo">Acomayo</option><option value="Anta">Anta</option><option value="Calca">Calca</option><option value="Canas">Canas</option><option value="Canchis">Canchis</option><option value="Chumbivilcas">Chumbivilcas</option><option value="Cusco">Cusco</option><option value="Espinar">Espinar</option><option value="La Convencion">La Convencion</option><option value="Paruro">Paruro</option><option value="Paucartambo">Paucartambo</option><option value="Quispicanchi">Quispicanchi</option><option value="Urubamba">Urubamba</option>');           	
      	break;
    // 8. provincias de Huancavelica      
    	case "Huancavelica":
				$("#provincia").html('<option value="Acobamba">Acobamba</option><option value="Angaraes">Angaraes</option><option value="Castrovirreyna">Castrovirreyna</option><option value="Churcampa">Churcampa</option><option value="Huancavelica">Huancavelica</option><option value="Huaytara">Huaytara</option><option value="Tayacaja">Tayacaja</option>');           	
      	break;
    // 9. provincias de Huanuco      
    	case "Huanuco":
				$("#provincia").html('<option value="Ambo">Ambo</option><option value="Dos de Mayo">Dos de Mayo</option><option value="Huacaybamba">Huacaybamba</option><option value="Huamalies">Huamalies</option><option value="Huanuco">Huanuco</option><option value="Lauricocha">Lauricocha</option><option value="Leoncio Prado">Leoncio Prado</option><option value="Marañon">Marañon</option><option value="Pachitea">Pachitea</option><option value="Puerto Inca">Puerto Inca</option><option value="Yarowilca">Yarowilca</option>');           	
      	break;
    // 10. provincias de Ica       
    	case "Ica":
				$("#provincia").html('<option value="Chincha">Chincha</option><option value="Ica">Ica</option><option value="Nazca">Nazca</option><option value="Palpa">Palpa</option><option value="Pisco">Pisco</option>');           	
      	break;
    // 11. provincias de Junin        
    	case "Junin":
				$("#provincia").html('<option value="Chanchamayo">Chanchamayo</option><option value="Chupaca">Chupaca</option><option value="Concepcion">Concepcion</option><option value="Huancayo">Huancayo</option><option value="Jauja">Jauja</option><option value="Junin">Junin</option><option value="Satipo">Satipo</option><option value="Tarma">Tarma</option><option value="Yauli">Yauli</option>');           	
      	break;
    // 12. provincias de La Libertad                	
    	case "La Libertad":
				$("#provincia").html('<option value="Ascope">Ascope</option><option value="Bolivar">Bolivar</option><option value="Chepen">Chepen</option><option value="Gran Chimu">Gran Chimu</option><option value="Julcan">Julcan</option><option value="Otuzco">Otuzco</option><option value="Pacasmayo">Pacasmayo</option><option value="Pataz">Pataz</option><option value="Sanchez Carrion">Sanchez Carrion</option><option value="Santiago de Chuco">Santiago de Chuco</option><option value="Trujillo">Trujillo</option><option value="Viru">Viru</option>');           	
      	break;
    // 13. provincias de Lambayeque                 	
    	case "Lambayeque":
				$("#provincia").html('<option value="Chiclayo">Chiclayo</option><option value="Ferreñafe">Ferreñafe</option><option value="Lambayeque">Lambayeque</option>');           	
      	break;
    // 14. provincias de Lima                 	
    	case "Lima":
      	$("#provincia").html('<option value="Barranca">Barranca</option><option value="Cajatambo">Cajatambo</option><option value="Callao">Callao</option><option value="Canta">Canta</option><option value="Cañete">Cañete</option><option value="Huaral">Huaral</option><option value="Huarochiri">Huarochiri</option><option value="Huaura">Huaura</option><option value="Lima">Lima</option><option value="Oyon">Oyon</option><option value="Yauyos">Yauyos</option>');
      	break;
    // 15. provincias de Loreto       	          	
     	case "Loreto":
				$("#provincia").html('<option value="Alto Amazonas">Alto Amazonas</option><option value="Datem del Marañon">Datem del Marañon</option><option value="Loreto">Loreto</option><option value="Mariscal Ramon Castilla">Mariscal Ramon Castilla</option><option value="Maynas">Maynas</option><option value="Requena">Requena</option><option value="Ucayali">Ucayali</option>');           	
      	break;
    // 16. provincias de Madre de Dios                	
    	case "Madre de Dios":
				$("#provincia").html('<option value="Manu">Manu</option><option value="Tahuamanu">Tahuamanu</option><option value="Tambopata">Tambopata</option>');           	
      	break;
    // 17. provincias de Moquegua     	
    	case "Moquegua":
				$("#provincia").html('<option value="General Sanchez Cerro">General Sanchez Cerro</option><option value="Ilo">Ilo</option><option value="Mariscal Nieto">Mariscal Nieto</option>');          	
      	break;
    // 18. provincias de Pasco                   	
    	case "Pasco":
				$("#provincia").html('<option value="Daniel Alcides Carrion">Daniel Alcides Carrion</option><option value="Oxapampa">Oxapampa</option><option value="Pasco">Pasco</option>');           	
      	break;
    // 19. provincias de Piura         
    	case "Piura":
				$("#provincia").html('<option value="Ayabaca">Ayabaca</option><option value="Huancabamba">Huancabamba</option><option value="Morropon">Morropon</option><option value="Paita">Paita</option><option value="Piura">Piura</option><option value="Sechura">Sechura</option><option value="Sullana">Sullana</option><option value="Talara">Talara</option>');           	
      	break;
    // 20. provincias de Puno         
    	case "Puno":
				$("#provincia").html('<option value="Azangaro">Azangaro</option><option value="Carabaya">Carabaya</option><option value="Chucuito">Chucuito</option><option value="El Collao">El Collao</option><option value="Huancane">Huancane</option><option value="Lampa">Lampa</option><option value="Melgar">Melgar</option><option value="Moho">Moho</option><option value="Puno">Puno</option><option value="San Antonio de Putina">San Antonio de Putina</option><option value="San Roman">San Roman</option><option value="Sandia">Sandia</option><option value="Yunguyo">Yunguyo</option>');           	
      	break;
    // 21. provincias de San Martin         
    	case "San Martin":
				$("#provincia").html('<option value="Bellavista">Bellavista</option><option value="El Dorado">El Dorado</option><option value="Huallaga">Huallaga</option><option value="Lamas">Lamas</option><option value="Mariscal Caceres">Mariscal Caceres</option><option value="Moyobamba">Moyobamba</option><option value="Picota">Picota</option><option value="Rioja">Rioja</option><option value="San Martin">San Martin</option><option value="Tocache">Tocache</option>');           	
      	break;
    // 22. provincias de Tacna      
    	case "Tacna":
				$("#provincia").html('<option value="Candarave">Candarave</option><option value="Jorge Basadre">Jorge Basadre</option><option value="Tacna">Tacna</option><option value="Tarata">Tarata</option>');           	
      	break;
    // 23. provincias de Tumbes   
    	case "Tumbes":
				$("#provincia").html('<option value="Contralmirante Villar">Contralmirante Villar</option><option value="Tumbes">Tumbes</option><option value="Zarumilla">Zarumilla</option>');           	
      	break;
    // 24. provincias de Ucayali  
    	case "Ucayali":
				$("#provincia").html('<option value="Atalaya">Atalaya</option><option value="Coronel Portillo">Coronel Portillo</option><option value="Padre Abad">Padre Abad</option><option value="Purus">Purus</option>');           	
      	break;
    }
  });
});






	//provincia -> distrito
$(function() {
  $("#provincia").on("change", function() {
    var value = $(this).val();
    switch(value){
    // 1. distritos de Amazonas 
    	case "Bagua":
    	 	$('#distrito').html('<option value="Aramango">Aramango</option><option value="Copallin">Copallin</option><option value="El Parco">El Parco</option><option value="Imaza">Imaza</option><option value="Lla Peca">Lla Peca</option>');
    		break;
    	case "Bongara":
    	 	$('#distrito').html('<option value="Chisquilla">Chisquilla</option><option value="Churuja">Churuja</option><option value="Corosha">Corosha</option><option value="Cuispes">Cuispes</option><option value="Florida">Florida</option><option value="Jazan">Jazan</option><option value="Jumbilla">Jumbilla</option><option value="Recta">Recta</option><option value="San Carlos">San Carlos</option><option value="Shipasbamba">Shipasbamba</option><option value="Valera">Valera</option><option value="Yambrasbamba">Yambrasbamba</option>');
    		break;
    	case "Chachapoyas":
    	 	$('#distrito').html('<option value="Asuncion">Asuncion</option><option value="Balsas">Balsas</option><option value="Chachapoyas">Chachapoyas</option><option value="Cheto">Cheto</option><option value="Chiliquin">Chiliquin</option><option value="Chuquibamba">Chuquibamba</option><option value="Granada">Granada</option><option value="Huancas">Huancas</option><option value="La Jalca">La Jalca</option><option value="Leimebamba">Leimebamba</option><option value="Levanto">Levanto</option><option value="Magdalena">Magdalena</option><option value="Mariscal Castilla">Mariscal Castilla</option><option value="Molinopampa">Molinopampa</option><option value="Montevideo">Montevideo</option><option value="Olleros">Olleros</option><option value="Quinjalca">Quinjalca</option><option value="San Francisco de Daguas">San Francisco de Daguas</option><option value="San Isidro de Maino">San Isidro de Maino</option><option value="Soloco">Soloco</option><option value="Sonche">Sonche</option>');
    		break;
    	case "Condorcanqui":
    	 	$('#distrito').html('<option value="El Cenepa">El Cenepa</option><option value="Nieva">Nieva</option><option value="Rio Santiago">Rio Santiago</option>');
    		break;
    	case "Luya":
    	 	$('#distrito').html('<option value="Camporredondo">Camporredondo</option><option value="Cocabamba">Cocabamba</option><option value="Colcamar">Colcamar</option><option value="Conila">Conila</option><option value="Inguilpata">Inguilpata</option><option value="Lamud">Lamud</option><option value="Longuita">Longuita</option><option value="Lonya Chico">Lonya Chico</option><option value="Luya">Luya</option><option value="Luya Viejo">Luya Viejo</option><option value="Maria">Maria</option><option value="Ocalli">Ocalli</option><option value="Ocumal">Ocumal</option><option value="Pisuquia">Pisuquia</option><option value="Providencia">Providencia</option><option value="San Cristobal">San Cristobal</option><option value="San Francisco Del Yeso">San Francisco Del Yeso</option><option value="San Jeronimo">San Jeronimo</option><option value="San Juan De Lopecancha">San Juan De Lopecancha</option><option value="Santa Catalina">Santa Catalina</option><option value="Santo Tomas">Santo Tomas</option><option value="Tingo">Tingo</option><option value="Trita">Trita</option>');
    		break;
    	case "Rodriguez de Mendoza":
    	 	$('#distrito').html('<option value="Chirimoto">Chirimoto</option><option value="Cochamal">Cochamal</option><option value="Huambo">Huambo</option><option value="Limabamba">Limabamba</option><option value="Longar">Longar</option><option value="Mariscal Benavides">Mariscal Benavides</option><option value="Milpuc">Milpuc</option><option value="Omia">Omia</option><option value="San Nicolas">San Nicolas</option><option value="Santa Rosa">Santa Rosa</option><option value="Totora">Totora</option><option value="Vista Alegre">Vista Alegre</option>');
    		break;
    	case "Utcubamba":
    	 	$('#distrito').html('<option value="Bagua Grande">Bagua Grande</option><option value="Cajaruro">Cajaruro</option><option value="Cumba">Cumba</option><option value="El Milagro">El Milagro</option><option value="Jamalca">Jamalca</option><option value="Lonya Grande">Lonya Grande</option><option value="Yamon">Yamon</option>');
    		break;
    // 2. distritos de Amazonas 
    	case "Aija":
    	 	$('#distrito').html('<option value="Aija">Aija</option><option value="Coris">Coris</option><option value="Huacllan">Huacllan</option><option value="La Merced">La Merced</option><option value="Succha">Succha</option>');
      	break;
    	case "Antonio Raymondi":
    	 	$('#distrito').html('<option value="Aczo">Aczo</option><option value="Chaccho">Chaccho</option><option value="Chingas">Chingas</option><option value="Llamellin">Llamellin</option><option value="Mirgas">Mirgas</option><option value="San Juan De Rontoy">San Juan De Rontoy</option>');
    		break;
    	case "Asuncion":
    	 	$('#distrito').html('<option value="Acochaca">Acochaca</option><option value="Chacas">Chacas</option>');
    		break;
    	case "Bolognesi":
    	 	$('#distrito').html('<option value="Abelardo Pardo Lezameta">Abelardo Pardo Lezameta</option><option value="Antonio Raymondi">Antonio Raymondi</option><option value="Aquia">Aquia</option><option value="Cajacay">Cajacay</option><option value="Canis">Canis</option><option value="Chiquian">Chiquian</option><option value="Colquioc">Colquioc</option><option value="Huallanca">Huallanca</option><option value="Huasta">Huasta</option><option value="Huayllacayan">Huayllacayan</option><option value="La Primavera">La Primavera</option><option value="Mangas">Mangas</option><option value="Pacllon">Pacllon</option><option value="S. Mgel De Corpanqui">S. Mgel De Corpanqui</option><option value="Ticllos">Ticllos</option>');
    		break;
    	case "Carhuaz":
    	 	$('#distrito').html('<option value="Acopampa">Acopampa</option><option value="Amashca">Amashca</option><option value="Anta">Anta</option><option value="Ataquero">Ataquero</option><option value="Carhuaz">Carhuaz</option><option value="Marcara">Marcara</option><option value="Pariahuanca">Pariahuanca</option><option value="San Miguel De Aco">San Miguel De Aco</option><option value="Shilla">Shilla</option><option value="Tinco">Tinco</option><option value="Yungar">Yungar</option>');
    		break;
    	case "Carlos Fermin Fitzcarrald":
    	 	$('#distrito').html('<option value="San Luis">San Luis</option><option value="San Nicolas">San Nicolas</option><option value="Yauya">Yauya</option>');
    		break;
    	case "Casma":
    	 	$('#distrito').html('<option value="Buena Vista Alta">Buena Vista Alta</option><option value="Casma">Casma</option><option value="Comandante Noel">Comandante Noel</option><option value="Yautan">Yautan</option>');
    		break;
    	case "Corongo":
    	 	$('#distrito').html('<option value="Aco">Aco</option><option value="Bambas">Bambas</option><option value="Corongo">Corongo</option><option value="Cusca">Cusca</option><option value="La Pampa">La Pampa</option><option value="Yanac">Yanac</option><option value="Yupan">Yupan</option>');
    		break;
    	case "Huaraz":
    	 	$('#distrito').html('<option value="Cochabamba">Cochabamba</option><option value="Colcabamba">Colcabamba</option><option value="Huanchay">Huanchay</option><option value="Huaraz">Huaraz</option><option value="Independencia">Independencia</option><option value="Jangas">Jangas</option><option value="La Libertad">La Libertad</option><option value="Olleros">Olleros</option><option value="Pampas">Pampas</option><option value="Pariacoto">Pariacoto</option><option value="Pira">Pira</option><option value="Tarica">Tarica</option>');
    		break;
    	case "Huari":
    	 	$('#distrito').html('<option value="Anra">Anra</option><option value="Cajay">Cajay</option><option value="Chavin De Huantar">Chavin De Huantar</option><option value="Huacachi">Huacachi</option><option value="Huacchis">Huacchis</option><option value="Huachis">Huachis</option><option value="Huantar">Huantar</option><option value="Huari">Huari</option><option value="Masin">Masin</option><option value="Paucas">Paucas</option><option value="Ponto">Ponto</option><option value="Rahuapampa">Rahuapampa</option><option value="Rapayan">Rapayan</option><option value="San Marcos">San Marcos</option><option value="San Pedro De Chana">San Pedro De Chana</option><option value="Uco">Uco</option>');
    		break;
    	case "Huarmey":
    	 	$('#distrito').html('<option value="Cochapeti">Cochapeti</option><option value="Culebras">Culebras</option><option value="Huarmey">Huarmey</option><option value="Huayan">Huayan</option><option value="Malvas">Malvas</option>');
    		break;
    	case "Huaylas":
    	 	$('#distrito').html('<option value="Caraz">Caraz</option><option value="Huallanca">Huallanca</option><option value="Huata">Huata</option><option value="Huaylas">Huaylas</option><option value="Mato">Mato</option><option value="Pamparomas">Pamparomas</option><option value="Pueblo Libre">Pueblo Libre</option><option value="Santa Cruz">Santa Cruz</option><option value="Santo Toribio">Santo Toribio</option><option value="Yuracmarca">Yuracmarca</option>');
    		break;
    	case "Mariscal Luzuriaga":
    	 	$('#distrito').html('<option value="Casca">Casca</option><option value="Eleazar Guzman Barron">Eleazar Guzman Barron</option><option value="Fidel Olivas Escudero">Fidel Olivas Escudero</option><option value="Llama">Llama</option><option value="Llumpa">Llumpa</option><option value="Lucma">Lucma</option><option value="Musga">Musga</option><option value="Piscobamba">Piscobamba</option>');
    		break;
    	case "Ocros":
    	 	$('#distrito').html('<option value="Acas">Acas</option><option value="Cajamarquilla">Cajamarquilla</option><option value="Carhuapampa">Carhuapampa</option><option value="Cochas">Cochas</option><option value="Congas">Congas</option><option value="Llipa">Llipa</option><option value="Ocros">Ocros</option><option value="San Cristobal De Rajan">San Cristobal De Rajan</option><option value="San Pedro">San Pedro</option><option value="Santiago De Chilcas">Santiago De Chilcas</option>');
    		break;
    	case "Pallasca":
    	 	$('#distrito').html('<option value="Acas">Acas</option><option value="Cajamarquilla">Cajamarquilla</option><option value="Carhuapampa">Carhuapampa</option><option value="Cochas">Cochas</option><option value="Congas">Congas</option><option value="Llipa">Llipa</option><option value="Ocros">Ocros</option><option value="San Cristobal De Rajan">San Cristobal De Rajan</option><option value="San Pedro">San Pedro</option><option value="Santiago De Chilcas">Santiago De Chilcas</option>');
    		break;
    	case "Pomabamba":
    	 	$('#distrito').html('<option value="Huayllan">Huayllan</option><option value="Parobamba">Parobamba</option><option value="Pomabamba">Pomabamba</option><option value="Quinuabamba">Quinuabamba</option>');
    		break;
    	case "Recuay":
    	 	$('#distrito').html('<option value="Catac">Catac</option><option value="Cotaparaco">Cotaparaco</option><option value="Huayllapampa">Huayllapampa</option><option value="Llacllin">Llacllin</option><option value="Marca">Marca</option><option value="Pampas Chico">Pampas Chico</option><option value="Pararin">Pararin</option><option value="Recuay">Recuay</option><option value="Tapacocha">Tapacocha</option><option value="Ticapampa">Ticapampa</option>');
    		break;
    	case "Santa":
    	 	$('#distrito').html('<option value="Caceres Del Peru">Caceres Del Peru</option><option value="Chimbote">Chimbote</option><option value="Coishco">Coishco</option><option value="Macate">Macate</option><option value="Moro">Moro</option><option value="Nepeña">Nepeña</option><option value="Nuevo Chimbote">Nuevo Chimbote</option><option value="Samanco">Samanco</option><option value="Santa">Santa</option>');
    		break;
    	case "Sihuas":
    	 	$('#distrito').html('<option value="Acobamba">Acobamba</option><option value="Alfonso Ugarte">Alfonso Ugarte</option><option value="Cashapampa">Cashapampa</option><option value="Chingalpo">Chingalpo</option><option value="Huayllabamba">Huayllabamba</option><option value="Quiches">Quiches</option><option value="Ragash">Ragash</option><option value="San Juan">San Juan</option><option value="Sicsibamba">Sicsibamba</option><option value="Sihuas">Sihuas</option>');
    		break;
    	case "Yungay":
    	 	$('#distrito').html('<option value="Cascapara">Cascapara</option><option value="Mancos">Mancos</option><option value="Matacoto">Matacoto</option><option value="Quillo">Quillo</option><option value="Ranrahirca">Ranrahirca</option><option value="Shupluy">Shupluy</option><option value="Yanama">Yanama</option><option value="Yungay">Yungay</option>');
    		break;
    // 3. distritos de Apurimac          	
    	case "Abancay":
    	 	$('#distrito').html('<option value="Abancay">Abancay</option><option value="Chacoche">Chacoche</option><option value="Circa">Circa</option><option value="Curahuasi">Curahuasi</option><option value="Huanipaca">Huanipaca</option><option value="Lambrama">Lambrama</option><option value="Pichirhua">Pichirhua</option><option value="San Pedro De Cachora">San Pedro De Cachora</option><option value="Tamburco">Tamburco</option>');
    		break;
    	case "Andahuaylas":
    	 	$('#distrito').html('<option value="Andahuaylas">Andahuaylas</option><option value="Andarapa">Andarapa</option><option value="Chiara">Chiara</option><option value="Huancarama">Huancarama</option><option value="Huancaray">Huancaray</option><option value="Huayana">Huayana</option><option value="Kaquiabamba">Kaquiabamba</option><option value="Kishuara">Kishuara</option><option value="Pacobamba">Pacobamba</option><option value="Pacucha">Pacucha</option><option value="Pampachiri">Pampachiri</option><option value="Pomacocha">Pomacocha</option><option value="San Antonio De Cachi">San Antonio De Cachi</option><option value="San Jeronimo">San Jeronimo</option><option value="San Miguel De Chaccrampa">San Miguel De Chaccrampa</option><option value="Santa Maria De Chicmo">Santa Maria De Chicmo</option><option value="Talavera">Talavera</option><option value="Tumay Huaraca">Tumay Huaraca</option><option value="Turpo">Turpo</option>');
    		break;
    	case "Antabamba":
    	 	$('#distrito').html('<option value="Antabamba">Antabamba</option><option value="El Oro">El Oro</option><option value="Huaquirca">Huaquirca</option><option value="Juan Espinoza Medrano">Juan Espinoza Medrano</option><option value="Oropesa">Oropesa</option><option value="Pachaconas">Pachaconas</option><option value="Sabaino">Sabaino</option>');
    		break;
    	case "Aymaraes":
    	 	$('#distrito').html('<option value="Capaya">Capaya</option><option value="Caraybamba">Caraybamba</option><option value="Chalhuanca">Chalhuanca</option><option value="Chapimarca">Chapimarca</option><option value="Colcabamba">Colcabamba</option><option value="Cotaruse">Cotaruse</option><option value="Huayllo">Huayllo</option><option value="Justo Apu Sahuaraura">Justo Apu Sahuaraura</option><option value="Lucre">Lucre</option><option value="Pocohuanca">Pocohuanca</option><option value="San Juan De Chacña">San Juan De Chacña</option><option value="Sañayca">Sañayca</option><option value="Soraya">Soraya</option><option value="Tapairihua">Tapairihua</option><option value="Tintay">Tintay</option><option value="Toraya">Toraya</option><option value="Yanaca">Yanaca</option>');
    		break;
    	case "Chincheros":
    	 	$('#distrito').html('<option value="Anco-huallo">Anco-huallo</option><option value="Chincheros">Chincheros</option><option value="Cocharcas">Cocharcas</option><option value="Huaccana">Huaccana</option><option value="Ocobamba">Ocobamba</option><option value="Ongoy">Ongoy</option><option value="Ranracancha">Ranracancha</option><option value="Uranmarca">Uranmarca</option>');
    		break;
    	case "Cotabambas":
    	 	$('#distrito').html('<option value="Challhuahuacho">Challhuahuacho</option><option value="Cotabambas">Cotabambas</option><option value="Coyllurqui">Coyllurqui</option><option value="Haquira">Haquira</option><option value="Mara">Mara</option><option value="Tambobamba">Tambobamba</option>');
    		break;
    	case "Grau":
    	 	$('#distrito').html('<option value="Chuquibambilla">Chuquibambilla</option><option value="Curasco">Curasco</option><option value="Curpahuasi">Curpahuasi</option><option value="Gamarra">Gamarra</option><option value="Huayllati">Huayllati</option><option value="Mamara">Mamara</option><option value="Micaela Bastidas">Micaela Bastidas</option><option value="Pataypampa">Pataypampa</option><option value="Progreso">Progreso</option><option value="San Antonio">San Antonio</option><option value="Santa Rosa">Santa Rosa</option><option value="Turpay">Turpay</option><option value="Vilcabamba">Vilcabamba</option><option value="Virundo">Virundo</option>');
    		break;
    // 4. distritos de Arequipa
    	case "Arequipa":
    	 	$('#distrito').html('<option value="Alto Selva Alegre">Alto Selva Alegre</option><option value="Arequipa">Arequipa</option><option value="Cayma">Cayma</option><option value="Cerro Colorado">Cerro Colorado</option><option value="Characato">Characato</option><option value="Chiguata">Chiguata</option><option value="Jacobo Hunter">Jacobo Hunter</option><option value="Jose Luis Bustamante Y Rivero">Jose Luis Bustamante Y Rivero</option><option value="La Joya">La Joya</option><option value="Mariano Melgar">Mariano Melgar</option><option value="Miraflores">Miraflores</option><option value="Mollebaya">Mollebaya</option><option value="Paucarpata">Paucarpata</option><option value="Pocsi">Pocsi</option><option value="Polobaya">Polobaya</option><option value="Quequeña">Quequeña</option><option value="Sabandia">Sabandia</option><option value="Sachaca">Sachaca</option><option value="San Juan De Siguas">San Juan De Siguas</option><option value="San Juan De Tarucani">San Juan De Tarucani</option><option value="Santa Isabel De Siguas">Santa Isabel De Siguas</option><option value="Santa Rita De Siguas">Santa Rita De Siguas</option><option value="Socabaya">Socabaya</option><option value="Tiabaya">Tiabaya</option><option value="Uchumayo">Uchumayo</option><option value="Vitor">Vitor</option><option value="Yanahuara">Yanahuara</option><option value="Yarabamba">Yarabamba</option><option value="Yura">Yura</option>');
    		break;
    	case "Camana":
    	 	$('#distrito').html('<option value="Camana">Camana</option><option value="Jose Maria Quimper">Jose Maria Quimper</option><option value="Mariano Nicolas Valcarcel">Mariano Nicolas Valcarcel</option><option value="Mariscal Caceres">Mariscal Caceres</option><option value="Nicolas De Pierola">Nicolas De Pierola</option><option value="Ocoña">Ocoña</option><option value="Quilca">Quilca</option><option value="Samuel Pastor">Samuel Pastor</option>');
    		break;
    	case "Caraveli":
    	 	$('#distrito').html('<option value="Acari">Acari</option><option value="Atico">Atico</option><option value="Atiquipa">Atiquipa</option><option value="Bella Union">Bella Union</option><option value="Cahuacho">Cahuacho</option><option value="Caraveli">Caraveli</option><option value="Chala">Chala</option><option value="Chaparra">Chaparra</option><option value="Huanuhuanu">Huanuhuanu</option><option value="Jaqui">Jaqui</option><option value="Lomas">Lomas</option><option value="Quicacha">Quicacha</option><option value="Yauca">Yauca</option>');
    		break;
    	case "Castilla":
    	 	$('#distrito').html('<option value="Andagua">Andagua</option><option value="Aplao">Aplao</option><option value="Ayo">Ayo</option><option value="Chachas">Chachas</option><option value="Chilcaymarca">Chilcaymarca</option><option value="Choco">Choco</option><option value="Huancarqui">Huancarqui</option><option value="Machaguay">Machaguay</option><option value="Orcopampa">Orcopampa</option><option value="Pampacolca">Pampacolca</option><option value="Tipan">Tipan</option><option value="Uñon">Uñon</option><option value="Uraca">Uraca</option><option value="Viraco">Viraco</option>');
    		break;
    	case "Caylloma":
    	 	$('#distrito').html('<option value="Achoma">Achoma</option><option value="Cabanaconde">Cabanaconde</option><option value="Callalli">Callalli</option><option value="Caylloma">Caylloma</option><option value="Chivay">Chivay</option><option value="Coporaque">Coporaque</option><option value="Huambo">Huambo</option><option value="Huanca">Huanca</option><option value="Ichupampa">Ichupampa</option><option value="Lari">Lari</option><option value="Lluta">Lluta</option><option value="Maca">Maca</option><option value="Madrigal">Madrigal</option><option value="San Antonio De Chuca">San Antonio De Chuca</option><option value="Sibayo">Sibayo</option><option value="Tapay">Tapay</option><option value="Tisco">Tisco</option><option value="Tuti">Tuti</option><option value="Yanque">Yanque</option>');
    		break;
    	case "Condesuyos":
    	 	$('#distrito').html('<option value="Andaray">Andaray</option><option value="Cayarani">Cayarani</option><option value="Chichas">Chichas</option><option value="Chuquibamba">Chuquibamba</option><option value="Iray">Iray</option><option value="Rio Grande">Rio Grande</option><option value="Salamanca">Salamanca</option><option value="Yanaquihua">Yanaquihua</option>');
    		break;          	
    	case "Islay":
    	 	$('#distrito').html('<option value="Cocachacra">Cocachacra</option><option value="Dean Valdivia">Dean Valdivia</option><option value="Islay">Islay</option><option value="Mejia">Mejia</option><option value="Mollendo">Mollendo</option><option value="Punta De Bombon">Punta De Bombon</option>');
      	break;
     	case "La Union":
    	 	$('#distrito').html('<option value="Alca">Alca</option><option value="Charcana">Charcana</option><option value="Cotahuasi">Cotahuasi</option><option value="Huaynacotas">Huaynacotas</option><option value="Pampamarca">Pampamarca</option><option value="Puyca">Puyca</option><option value="Quechualla">Quechualla</option><option value="Sayla">Sayla</option><option value="Tauria">Tauria</option><option value="Tomepampa">Tomepampa</option><option value="Toro">Toro</option>');
      	break;
    // 5. distritos de Ayacucho  
     	case "Cangallo":
    	 	$('#distrito').html('<option value="Cangallo">Cangallo</option><option value="Chuschi">Chuschi</option><option value="Los Morochucos">Los Morochucos</option><option value="Maria Parado De Bellido">Maria Parado De Bellido</option><option value="Paras">Paras</option><option value="Totos">Totos</option>');
      	break;
     	case "Huamanga":
    	 	$('#distrito').html('<option value="Acocro">Acocro</option><option value="Acos Vinchos">Acos Vinchos</option><option value="Ayacucho">Ayacucho</option><option value="Carmen Alto">Carmen Alto</option><option value="Chiara">Chiara</option><option value="Jesus Nazareno">Jesus Nazareno</option><option value="Ocros">Ocros</option><option value="Pacaycasa">Pacaycasa</option><option value="Quinua">Quinua</option><option value="San Jose De Ticllas">San Jose De Ticllas</option><option value="San Juan Bautista">San Juan Bautista</option><option value="Santiago De Pischa">Santiago De Pischa</option><option value="Socos">Socos</option><option value="Tambillo">Tambillo</option><option value="Vinchos">Vinchos</option>');
      	break;
     	case "Huanca Sancos":
    	 	$('#distrito').html('<option value="Carapo">Carapo</option><option value="Sacsamarca">Sacsamarca</option><option value="Sancos">Sancos</option><option value="Santiago De Lucanamarca">Santiago De Lucanamarca</option>');
      	break;
     	case "Huanta":
    	 	$('#distrito').html('<option value="Hayahuanco">Hayahuanco</option><option value="Huamanguilla">Huamanguilla</option><option value="Huanta">Huanta</option><option value="Iguain">Iguain</option><option value="Luricocha">Luricocha</option><option value="Santillana">Santillana</option><option value="Sivia">Sivia</option>');
      	break;
     	case "La Mar":
    	 	$('#distrito').html('<option value="Anco">Anco</option><option value="Ayna">Ayna</option><option value="Chilcas">Chilcas</option><option value="Chungui">Chungui</option><option value="Luis Carranza">Luis Carranza</option><option value="San Miguel">San Miguel</option><option value="Santa Rosa">Santa Rosa</option><option value="Tambo">Tambo</option>');
      	break;
     	case "Lucanas":
    	 	$('#distrito').html('<option value="Aucara">Aucara</option><option value="Cabana">Cabana</option><option value="Carmen Salcedo">Carmen Salcedo</option><option value="Chaviña">Chaviña</option><option value="Chipao">Chipao</option><option value="Huac-huas">Huac-huas</option><option value="Laramate">Laramate</option><option value="Leoncio Prado">Leoncio Prado</option><option value="Llauta">Llauta</option><option value="Lucanas">Lucanas</option><option value="Ocaña">Ocaña</option><option value="Otoca">Otoca</option><option value="Puquio">Puquio</option><option value="Saisa">Saisa</option><option value="San Cristobal">San Cristobal</option><option value="San Juan">San Juan</option><option value="San Pedro">San Pedro</option><option value="San Pedro De Palco">San Pedro De Palco</option><option value="Sancos">Sancos</option><option value="Santa Ana De Huaycahuacho">Santa Ana De Huaycahuacho</option><option value="Santa Lucia">Santa Lucia</option>');
      	break;
     	case "Parinacochas":
    	 	$('#distrito').html('<option value="Chumpi">Chumpi</option><option value="Coracora">Coracora</option><option value="Coronel Castañeda">Coronel Castañeda</option><option value="Pacapausa">Pacapausa</option><option value="Pullo">Pullo</option><option value="Puyusca">Puyusca</option><option value="San Francisco De Ravacayco">San Francisco De Ravacayco</option><option value="Upahuacho">Upahuacho</option>');
      	break;
     	case "Paucar del Sara":
    	 	$('#distrito').html('<option value="Colta">Colta</option><option value="Corculla">Corculla</option><option value="Lampa">Lampa</option><option value="Marcabamba">Marcabamba</option><option value="Oyolo">Oyolo</option><option value="Pararca">Pararca</option><option value="Pausa">Pausa</option><option value="San Javier Del Alpabamba">San Javier Del Alpabamba</option><option value="San Jose De Ushua">San Jose De Ushua</option><option value="Sara Sara">Sara Sara</option>');
      	break;
     	case "Sucre":
    	 	$('#distrito').html('<option value="Belen">Belen</option><option value="Chalcos">Chalcos</option><option value="Chilcayoc">Chilcayoc</option><option value="Huacaña">Huacaña</option><option value="Morcolla">Morcolla</option><option value="Paico">Paico</option><option value="Querobamba">Querobamba</option><option value="San Pedro De Larcay">San Pedro De Larcay</option><option value="San Salvador De Quije">San Salvador De Quije</option><option value="Santiago De Paucaray">Santiago De Paucaray</option><option value="Soras">Soras</option>');
      	break;
     	case "Victor Fajardo":
    	 	$('#distrito').html('<option value="Alcamenca">Alcamenca</option><option value="Apongo">Apongo</option><option value="Asquipata">Asquipata</option><option value="Canaria">Canaria</option><option value="Cayara">Cayara</option><option value="Colca">Colca</option><option value="Huamanquiquia">Huamanquiquia</option><option value="Huancapi">Huancapi</option><option value="Huancaraylla">Huancaraylla</option><option value="Huaya">Huaya</option><option value="Sarhua">Sarhua</option><option value="Vilcanchos">Vilcanchos</option>');
      	break;
     	case "Vilcas Huaman":
    	 	$('#distrito').html('<option value="Accomarca">Accomarca</option><option value="Carhuanca">Carhuanca</option><option value="Concepcion">Concepcion</option><option value="Huambalpa">Huambalpa</option><option value="Independencia">Independencia</option><option value="Saurama">Saurama</option><option value="Vilcas Huaman">Vilcas Huaman</option><option value="Vischongo">Vischongo</option>');
      	break;
    // 6. distritos de Cajamarca          	
     	case "Cajabamba":
    	 	$('#distrito').html('<option value="Cachachi">Cachachi</option><option value="Cajabamba">Cajabamba</option><option value="Condebamba">Condebamba</option><option value="Sitacocha">Sitacocha</option>');
      	break;
     	case "Cajamarca":
    	 	$('#distrito').html('<option value="Asuncion">Asuncion</option><option value="Cajamarca">Cajamarca</option><option value="Chetilla">Chetilla</option><option value="Cospan">Cospan</option><option value="Encañada">Encañada</option><option value="Jesus">Jesus</option><option value="Llacanora">Llacanora</option><option value="Los Baños Del Inca">Los Baños Del Inca</option><option value="Magdalena">Magdalena</option><option value="Matara">Matara</option><option value="Namora">Namora</option><option value="San Juan">San Juan</option>');
      	break;
     	case "Celendin":
    	 	$('#distrito').html('<option value="Celendin">Celendin</option><option value="Chumuch">Chumuch</option><option value="Cortegana">Cortegana</option><option value="Huasmin">Huasmin</option><option value="Jorge Chavez">Jorge Chavez</option><option value="Jose Galvez">Jose Galvez</option><option value="La Libertad De Pallan">La Libertad De Pallan</option><option value="Miguel Iglesias">Miguel Iglesias</option><option value="Oxamarca">Oxamarca</option><option value="Sorochuco">Sorochuco</option><option value="Sucre">Sucre</option><option value="Utco">Utco</option>');
      	break;
     	case "Chota":
    	 	$('#distrito').html('<option value="Anguia">Anguia</option><option value="Chadin">Chadin</option><option value="Chalamarca">Chalamarca</option><option value="Chiguirip">Chiguirip</option><option value="Chimban">Chimban</option><option value="Choropampa">Choropampa</option><option value="Chota">Chota</option><option value="Cochabamba">Cochabamba</option><option value="Conchan">Conchan</option><option value="Huambos">Huambos</option><option value="Lajas">Lajas</option><option value="Llama">Llama</option><option value="Miracosta">Miracosta</option><option value="Paccha">Paccha</option><option value="Pion">Pion</option><option value="Querocoto">Querocoto</option><option value="San Juan De Licupis">San Juan De Licupis</option><option value="Tacabamba">Tacabamba</option><option value="Tocmoche">Tocmoche</option>');
      	break;
     	case "Contumaza":
    	 	$('#distrito').html('<option value="Chilete">Chilete</option><option value="Contumaza">Contumaza</option><option value="Cupisnique">Cupisnique</option><option value="Guzmango">Guzmango</option><option value="San Benito">San Benito</option><option value="Santa Cruz De Toled">Santa Cruz De Toled</option><option value="Tantarica">Tantarica</option><option value="Yonan">Yonan</option>');
      	break;
     	case "Cutervo":
    	 	$('#distrito').html('<option value="Callayuc">Callayuc</option><option value="Choros">Choros</option><option value="Cujillo">Cujillo</option><option value="Cutervo">Cutervo</option><option value="La Ramada">La Ramada</option><option value="Pimpingos">Pimpingos</option><option value="Querocotillo">Querocotillo</option><option value="San Andres De Cutervo">San Andres De Cutervo</option><option value="San Juan De Cutervo">San Juan De Cutervo</option><option value="San Luis De Lucma">San Luis De Lucma</option><option value="Santa Cruz">Santa Cruz</option><option value="Santo Domingo De La Capilla">Santo Domingo De La Capilla</option><option value="Santo Tomas">Santo Tomas</option><option value="Socota">Socota</option><option value="Toribio Casanova">Toribio Casanova</option>');
      	break;
     	case "Hualgayoc":
    	 	$('#distrito').html('<option value="Bambamarca">Bambamarca</option><option value="Chugur">Chugur</option><option value="Hualgayoc">Hualgayoc</option>');
      	break;
     	case "Jaen":
    	 	$('#distrito').html('<option value="Bellavista">Bellavista</option><option value="Chontali">Chontali</option><option value="Colasay">Colasay</option><option value="Huabal">Huabal</option><option value="Jaen">Jaen</option><option value="Las Pirias">Las Pirias</option><option value="Pomahuaca">Pomahuaca</option><option value="Pucara">Pucara</option><option value="Sallique">Sallique</option><option value="San Felipe">San Felipe</option><option value="San Jose Del Alto">San Jose Del Alto</option><option value="Santa Rosa">Santa Rosa</option>');
      	break;
     	case "San Ignacio":
    	 	$('#distrito').html('<option value="Bellavista">Bellavista</option><option value="Chontali">Chontali</option><option value="Colasay">Colasay</option><option value="Huabal">Huabal</option><option value="Jaen">Jaen</option><option value="Las Pirias">Las Pirias</option><option value="Pomahuaca">Pomahuaca</option><option value="Pucara">Pucara</option><option value="Sallique">Sallique</option><option value="San Felipe">San Felipe</option><option value="San Jose Del Alto">San Jose Del Alto</option><option value="Santa Rosa">Santa Rosa</option>');
      	break;
     	case "San Marcos":
    	 	$('#distrito').html('<option value="Chancay">Chancay</option><option value="Eduardo Villanueva">Eduardo Villanueva</option><option value="Gregorio Pita">Gregorio Pita</option><option value="Ichocan">Ichocan</option><option value="Jose Manuel Quiroz">Jose Manuel Quiroz</option><option value="Jose Sabogal">Jose Sabogal</option><option value="Pedro Galvez">Pedro Galvez</option>');
      	break;
     	case "San Miguel":
    	 	$('#distrito').html('<option value="Bolivar">Bolivar</option><option value="Calquis">Calquis</option><option value="Catilluc">Catilluc</option><option value="El Prado">El Prado</option><option value="La Florida">La Florida</option><option value="Llapa">Llapa</option><option value="Nanchoc">Nanchoc</option><option value="Niepos">Niepos</option><option value="San Gregorio">San Gregorio</option><option value="San Miguel">San Miguel</option><option value="San Silvestre De Cochan">San Silvestre De Cochan</option><option value="Tongod">Tongod</option><option value="Union Agua Blanca">Union Agua Blanca</option>');
      	break;
    	case "San Pablo":
    	 	$('#distrito').html('<option value="San Bernardino">San Bernardino</option><option value="San Luis">San Luis</option><option value="San Pablo">San Pablo</option><option value="Tumbaden">Tumbaden</option>');
      	break;
    	case "Santa Cruz":
    	 	$('#distrito').html('<option value="Andabamba">Andabamba</option><option value="Catache">Catache</option><option value="Chancaybaños">Chancaybaños</option><option value="La Esperanza">La Esperanza</option><option value="Ninabamba">Ninabamba</option><option value="Pulan">Pulan</option><option value="Santa Cruz">Santa Cruz</option><option value="Saucepampa">Saucepampa</option><option value="Sexi">Sexi</option><option value="Uticyacu">Uticyacu</option><option value="Yauyucan">Yauyucan</option>');
      	break;
    // 7. distritos de Cusco         
    	case "Acomayo":
    	 	$('#distrito').html('<option value="Acomayo">Acomayo</option><option value="Acopia">Acopia</option><option value="Acos">Acos</option><option value="Mosoc Llacta">Mosoc Llacta</option><option value="Pomacanchi">Pomacanchi</option><option value="Rondocan">Rondocan</option><option value="Sangarara">Sangarara</option>');
      	break;
    	case "Anta":
    	 	$('#distrito').html('<option value="Ancahuasi">Ancahuasi</option><option value="Anta">Anta</option><option value="Cachimayo">Cachimayo</option><option value="Chinchaypujio">Chinchaypujio</option><option value="Huarocondo">Huarocondo</option><option value="Limatambo">Limatambo</option><option value="Mollepata">Mollepata</option><option value="Pucyura">Pucyura</option><option value="Zurite">Zurite</option>');
      	break;
    	case "Calca":
    	 	$('#distrito').html('<option value="Calca">Calca</option><option value="Coya">Coya</option><option value="Lamay">Lamay</option><option value="Lares">Lares</option><option value="Pisac">Pisac</option><option value="San Salvador">San Salvador</option><option value="Taray">Taray</option><option value="Yanatile">Yanatile</option>');
      	break;
    	case "Canas":
    	 	$('#distrito').html('<option value="Checca">Checca</option><option value="Kunturkanki">Kunturkanki</option><option value="Langui">Langui</option><option value="Layo">Layo</option><option value="Pampamarca">Pampamarca</option><option value="Quehue">Quehue</option><option value="Tupac Amaru">Tupac Amaru</option><option value="Yanaoca">Yanaoca</option>');
      	break;
    	case "Canchis":
    	 	$('#distrito').html('<option value="Checacupe">Checacupe</option><option value="Combapata">Combapata</option><option value="Marangani">Marangani</option><option value="Pitumarca">Pitumarca</option><option value="San Pablo">San Pablo</option><option value="San Pedro">San Pedro</option><option value="Sicuani">Sicuani</option><option value="Tinta">Tinta</option>');
      	break;
    	case "Chumbivilcas":
    	 	$('#distrito').html('<option value="Capacmarca">Capacmarca</option><option value="Chamaca">Chamaca</option><option value="Colquemarca">Colquemarca</option><option value="Livitaca">Livitaca</option><option value="Llusco">Llusco</option><option value="Quiñota">Quiñota</option><option value="Santo Tomas">Santo Tomas</option><option value="Velille">Velille</option>');
      	break;
    	case "Cusco":
    	 	$('#distrito').html('<option value="Ccorca">Ccorca</option><option value="Cusco">Cusco</option><option value="Poroy">Poroy</option><option value="San Jeronimo">San Jeronimo</option><option value="San Sebastian">San Sebastian</option><option value="Santiago">Santiago</option><option value="Saylla">Saylla</option><option value="Wanchaq">Wanchaq</option>');
      	break;
    	case "Espinar":
    	 	$('#distrito').html('<option value="Alto Pichigua">Alto Pichigua</option><option value="Condoroma">Condoroma</option><option value="Coporaque">Coporaque</option><option value="Espinar">Espinar</option><option value="Ocoruro">Ocoruro</option><option value="Pallpata">Pallpata</option><option value="Pichigua">Pichigua</option><option value="Suyckutambo">Suyckutambo</option>');
      	break;
    	case "La Convencion":
    	 	$('#distrito').html('<option value="Echarate">Echarate</option><option value="Huayopata">Huayopata</option><option value="Maranura">Maranura</option><option value="Ocobamba">Ocobamba</option><option value="Pichari">Pichari</option><option value="Quellouno">Quellouno</option><option value="Quimbiri">Quimbiri</option><option value="Santa Ana">Santa Ana</option><option value="Santa Teresa">Santa Teresa</option><option value="Vilcabamba">Vilcabamba</option>');
      	break;
    	case "Paruro":
    	 	$('#distrito').html('<option value="Accha">Accha</option><option value="Ccapi">Ccapi</option><option value="Colcha">Colcha</option><option value="Huanoquite">Huanoquite</option><option value="Omacha">Omacha</option><option value="Paccaritambo">Paccaritambo</option><option value="Paruro">Paruro</option><option value="Pillpinto">Pillpinto</option><option value="Yaurisque">Yaurisque</option>');
      	break;
    	case "Paucartambo":
    	 	$('#distrito').html('<option value="Caicay">Caicay</option><option value="Challabamba">Challabamba</option><option value="Colquepata">Colquepata</option><option value="Huancarani">Huancarani</option><option value="Kosñipata">Kosñipata</option><option value="Paucartambo">Paucartambo</option>');
      	break;
    	case "Quispicanchi":
    	 	$('#distrito').html('<option value="Andahuaylillas">Andahuaylillas</option><option value="Camanti">Camanti</option><option value="Ccarhuayo">Ccarhuayo</option><option value="Ccatca">Ccatca</option><option value="Cusipata">Cusipata</option><option value="Huaro">Huaro</option><option value="Lucre">Lucre</option><option value="Marcapata">Marcapata</option><option value="Ocongate">Ocongate</option><option value="Oropesa">Oropesa</option><option value="Quiquijana">Quiquijana</option><option value="Urcos">Urcos</option>');
      	break;
      case "Urubamba":
    	 	$('#distrito').html('<option value="Chinchero">Chinchero</option><option value="Huayllabamba">Huayllabamba</option><option value="Machupicchu">Machupicchu</option><option value="Maras">Maras</option><option value="Ollantaytambo">Ollantaytambo</option><option value="Urubamba">Urubamba</option><option value="Yucay">Yucay</option>');
      	break;
    // 8. distritos de Huancavelica      
    	case "Acobamba":
    	 	$('#distrito').html('><option value="Acobamba">Acobamba</option><option value="Andabamba">Andabamba</option><option value="Anta">Anta</option><option value="Caja">Caja</option><option value="Marcas">Marcas</option><option value="Paucara">Paucara</option><option value="Pomacocha">Pomacocha</option><option value="Rosario">Rosario</option>');
      	break;
      case "Angaraes":
    	 	$('#distrito').html('<option value="Anchonga">Anchonga</option><option value="Callanmarca">Callanmarca</option><option value="Ccochaccasa">Ccochaccasa</option><option value="Chincho">Chincho</option><option value="Congalla">Congalla</option><option value="Huanca-huanca">Huanca-huanca</option><option value="Huayllay Grande">Huayllay Grande</option><option value="Julcamarca">Julcamarca</option><option value="Lircay">Lircay</option><option value="San Antonio De Antaparco">San Antonio De Antaparco</option><option value="Santo Tomas De Pata">Santo Tomas De Pata</option><option value="Secclla">Secclla</option>');
      	break;
      case "Castrovirreyna":
    	 	$('#distrito').html('<option value="Arma">Arma</option><option value="Aurahua">Aurahua</option><option value="Capillas">Capillas</option><option value="Castrovirreyna">Castrovirreyna</option><option value="Chupamarca">Chupamarca</option><option value="Cocas">Cocas</option><option value="Huachos">Huachos</option><option value="Huamatambo">Huamatambo</option><option value="Mollepampa">Mollepampa</option><option value="San Juan">San Juan</option><option value="Santa Ana">Santa Ana</option><option value="Tantara">Tantara</option><option value="Ticrapo">Ticrapo</option>');
      	break;
      case "Churcampa":
    	 	$('#distrito').html('<option value="Anco">Anco</option><option value="Chinchihuasi">Chinchihuasi</option><option value="Churcampa">Churcampa</option><option value="El Carmen">El Carmen</option><option value="La Merced">La Merced</option><option value="Locroja">Locroja</option><option value="Pachamarca">Pachamarca</option><option value="Paucarbamba">Paucarbamba</option><option value="San Miguel De Mayocc">San Miguel De Mayocc</option><option value="San Pedro De Coris">San Pedro De Coris</option>');
      	break;
      case "Huancavelica":
    	 	$('#distrito').html('<option value="Acobambilla">Acobambilla</option><option value="Acoria">Acoria</option><option value="Ascencion">Ascencion</option><option value="Conayca">Conayca</option><option value="Cuenca">Cuenca</option><option value="Huachocolpa">Huachocolpa</option><option value="Huancavelica">Huancavelica</option><option value="Huayllahuara">Huayllahuara</option><option value="Izcuchaca">Izcuchaca</option><option value="Laria">Laria</option><option value="Manta">Manta</option><option value="Mariscal Caceres">Mariscal Caceres</option><option value="Moya">Moya</option><option value="Nuevo Occoro">Nuevo Occoro</option><option value="Palca">Palca</option><option value="Pilchaca">Pilchaca</option><option value="Vilca">Vilca</option><option value="Yauli">Yauli</option>');
      	break;
      case "Huaytara":
    	 	$('#distrito').html('<option value="Ayavi">Ayavi</option><option value="Cordova">Cordova</option><option value="Huayacundo Arma">Huayacundo Arma</option><option value="Huaytara">Huaytara</option><option value="Laramarca">Laramarca</option><option value="Ocoyo">Ocoyo</option><option value="Pilpichaca">Pilpichaca</option><option value="Querco">Querco</option><option value="Quito-arma">Quito-arma</option><option value="San Antonio De Cusicancha">San Antonio De Cusicancha</option><option value="San Francisco De Sangayaico">San Francisco De Sangayaico</option><option value="San Isidro">San Isidro</option><option value="Santiago De Chocorvos">Santiago De Chocorvos</option><option value="Santiago De Quirahuara">Santiago De Quirahuara</option><option value="Santo Domingo De Capillas">Santo Domingo De Capillas</option><option value="Tambo">Tambo</option>');
      	break;
      case "Tayacaja":
    	 	$('#distrito').html('<option value="Ñahuimpuquio">Ñahuimpuquio</option><option value="Acostambo">Acostambo</option><option value="Acraquia">Acraquia</option><option value="Ahuaycha">Ahuaycha</option><option value="Colcabamba">Colcabamba</option><option value="Daniel Hernandez">Daniel Hernandez</option><option value="Huachocolpa">Huachocolpa</option><option value="Huando">Huando</option><option value="Huaribamba">Huaribamba</option><option value="Pampas">Pampas</option><option value="Pazos">Pazos</option><option value="Quishuar">Quishuar</option><option value="Salcabamba">Salcabamba</option><option value="Salcahuasi">Salcahuasi</option><option value="San Marcos De Rocchac">San Marcos De Rocchac</option><option value="Surcubamba">Surcubamba</option><option value="Tintay Puncu">Tintay Puncu</option>');
      	break;
    // 9. distritos de Huanuco   
      case "Ambo":
    	 	$('#distrito').html('<option value="Ambo">Ambo</option><option value="Cayna">Cayna</option><option value="Colpas">Colpas</option><option value="Conchamarca">Conchamarca</option><option value="Huacar">Huacar</option><option value="San Francisco">San Francisco</option><option value="San Rafael">San Rafael</option><option value="Tomay Kichwa">Tomay Kichwa</option>');
      	break;
      case "Dos de Mayo":
    	 	$('#distrito').html('<option value="Chuquis">Chuquis</option><option value="La Union">La Union</option><option value="Marias">Marias</option><option value="Pachas">Pachas</option><option value="Quivilla">Quivilla</option><option value="Ripan">Ripan</option><option value="Shunqui">Shunqui</option><option value="Sillapata">Sillapata</option><option value="Yanas">Yanas</option>');
      	break;
      	case "Huacaybamba":
    	 	$('#distrito').html('<option value="Canchabamba">Canchabamba</option><option value="Cochabamba">Cochabamba</option><option value="Huacaybamba">Huacaybamba</option><option value="Pinra">Pinra</option>');
      	break;
      case "Huamalies":
    	 	$('#distrito').html('<option value="Arancay">Arancay</option><option value="Chavin De Pariarca">Chavin De Pariarca</option><option value="Jacas Grande">Jacas Grande</option><option value="Jircan">Jircan</option><option value="Llata">Llata</option><option value="Miraflores">Miraflores</option><option value="Monzon">Monzon</option><option value="Punchao">Punchao</option><option value="Puños">Puños</option><option value="Singa">Singa</option><option value="Tantamayo">Tantamayo</option>');
      	break;
      case "Huanuco":
    	 	$('#distrito').html('<option value="Amarilis">Amarilis</option><option value="Chinchao">Chinchao</option><option value="Churubamba">Churubamba</option><option value="Huanuco">Huanuco</option><option value="Margos">Margos</option><option value="Pillco Marca">Pillco Marca</option><option value="Quisqui">Quisqui</option><option value="San Francisco De Cayran">San Francisco De Cayran</option><option value="San Pedro De Chaulan">San Pedro De Chaulan</option><option value="Santa Maria Del Valle">Santa Maria Del Valle</option><option value="Yarumayo">Yarumayo</option>');
      	break;
      case "Lauricocha":
    	 	$('#distrito').html('<option value="Baños">Baños</option><option value="Jesus">Jesus</option><option value="Jivia">Jivia</option><option value="Queropalca">Queropalca</option><option value="Rondos">Rondos</option><option value="San Francisco De Asis">San Francisco De Asis</option><option value="San Miguel De Cauri">San Miguel De Cauri</option>');
      	break;
      case "Leoncio Prado":
    	 	$('#distrito').html('<option value="Daniel Alomia Robles">Daniel Alomia Robles</option><option value="Hermilio Valdizan">Hermilio Valdizan</option><option value="Jose Crespo Y Castillo">Jose Crespo Y Castillo</option><option value="Luyando">Luyando</option><option value="Mariano Damaso Beraun">Mariano Damaso Beraun</option><option value="Rupa-rupa">Rupa-rupa</option>');
      	break;
      	case "Marañon":
    	 	$('#distrito').html('<option value="Cholon">Cholon</option><option value="Huacrachuco">Huacrachuco</option><option value="San Buenaventura">San Buenaventura</option>');
      	break;
      case "Pachitea":
    	 	$('#distrito').html('<option value="Chaglla">Chaglla</option><option value="Molino">Molino</option><option value="Panao">Panao</option><option value="Umari">Umari</option>');
      	break;
      case "Puerto Inca":
    	 	$('#distrito').html('<option value="Codo Del Pozuzo">Codo Del Pozuzo</option><option value="Honoria">Honoria</option><option value="Puerto Inca">Puerto Inca</option><option value="Tournavista">Tournavista</option><option value="Yuyapichis">Yuyapichis</option>');
      	break;
      case "Yarowilca":
    	 	$('#distrito').html('<option value="Cahuac">Cahuac</option><option value="Chacabamba">Chacabamba</option><option value="Chavinillo">Chavinillo</option><option value="Chupan">Chupan</option><option value="Jacas Chico">Jacas Chico</option><option value="Obas">Obas</option><option value="Pampamarca">Pampamarca</option>');
      	break;
    // 10. distritos de Ica       
    	case "Chincha":
    	 	$('#distrito').html('<option value="Alto Laran">Alto Laran</option><option value="Chavin">Chavin</option><option value="Chincha Alta">Chincha Alta</option><option value="Chincha Baja">Chincha Baja</option><option value="El Carmen">El Carmen</option><option value="Grocio Prado">Grocio Prado</option><option value="Pueblo Nuevo">Pueblo Nuevo</option><option value="San Juan De Yanac">San Juan De Yanac</option><option value="San Pedro De Huacarpana">San Pedro De Huacarpana</option><option value="Sunampe">Sunampe</option><option value="Tambo De Mora">Tambo De Mora</option>');
      	break;
      case "Ica":
    	 	$('#distrito').html('<option value="Ica">Ica</option><option value="La Tinguiña">La Tinguiña</option><option value="Los Aquijes">Los Aquijes</option><option value="Ocucaje">Ocucaje</option><option value="Pachacutec">Pachacutec</option><option value="Parcona">Parcona</option><option value="Pueblo Nuevo">Pueblo Nuevo</option><option value="Salas">Salas</option><option value="San Jose De Los Molinos">San Jose De Los Molinos</option><option value="San Juan Bautista">San Juan Bautista</option><option value="Santiago">Santiago</option><option value="Subtanjalla">Subtanjalla</option><option value="Tate">Tate</option><option value="Yauca Del Rosario">Yauca Del Rosario</option>');
      	break;
      case "Nazca":
    	 	$('#distrito').html('<option value="Changuillo">Changuillo</option><option value="El Ingenio">El Ingenio</option><option value="Marcona">Marcona</option><option value="Nazca">Nazca</option><option value="Vista Alegre">Vista Alegre</option>');
      	break;
      case "Palpa":
    	 	$('#distrito').html('<option value="Llipata">Llipata</option><option value="Palpa">Palpa</option><option value="Rio Grande">Rio Grande</option><option value="Santa Cruz">Santa Cruz</option><option value="Tibillo">Tibillo</option>');
      	break;
      case "Pisco":
    	 	$('#distrito').html('<option value="Huancano">Huancano</option><option value="Humay">Humay</option><option value="Independencia">Independencia</option><option value="Paracas">Paracas</option><option value="Pisco">Pisco</option><option value="San Andres">San Andres</option><option value="San Clemente">San Clemente</option><option value="Tupac Amaru Inca">Tupac Amaru Inca</option>');
      	break;
    // 11. distritos de Junin
      case "Chanchamayo":
    	 	$('#distrito').html('<option value="Chanchamayo">Chanchamayo</option><option value="Perene">Perene</option><option value="Pichanaqui">Pichanaqui</option><option value="San Luis De Shuaro">San Luis De Shuaro</option><option value="San Ramon">San Ramon</option><option value="Vitoc">Vitoc</option>');
      	break;
      case "Chupaca":
    	 	$('#distrito').html('<option value="Ahuac">Ahuac</option><option value="Chongos Bajo">Chongos Bajo</option><option value="Chupaca">Chupaca</option><option value="Huachac">Huachac</option><option value="Huamancaca Chico">Huamancaca Chico</option><option value="San Juan De Jarpa">San Juan De Jarpa</option><option value="San Juan De Yscos">San Juan De Yscos</option><option value="Tres De Diciembre">Tres De Diciembre</option><option value="Yanacancha">Yanacancha</option>');
      	break;
      case "Concepcion":
    	 	$('#distrito').html('<option value="Aco">Aco</option><option value="Andamarca">Andamarca</option><option value="Chambara">Chambara</option><option value="Cochas">Cochas</option><option value="Comas">Comas</option><option value="Concepcion">Concepcion</option><option value="Heroinas Toledo">Heroinas Toledo</option><option value="Manzanares">Manzanares</option><option value="Mariscal Castilla">Mariscal Castilla</option><option value="Matahuasi">Matahuasi</option><option value="Mito">Mito</option><option value="Nueve De Julio">Nueve De Julio</option><option value="Orcotuna">Orcotuna</option><option value="San Jose De Quero">San Jose De Quero</option><option value="Santa Rosa De Ocopa">Santa Rosa De Ocopa</option>');
      	break;
      case "Huancayo":
    	 	$('#distrito').html('<option value="Carhuacallanga">Carhuacallanga</option><option value="Chacapampa">Chacapampa</option><option value="Chicche">Chicche</option><option value="Chilca">Chilca</option><option value="Chongos Alto">Chongos Alto</option><option value="Chupuro">Chupuro</option><option value="Colca">Colca</option><option value="Cullhuas">Cullhuas</option><option value="El Tambo">El Tambo</option><option value="Huacrapuquio">Huacrapuquio</option><option value="Hualhuas">Hualhuas</option><option value="Huancan">Huancan</option><option value="Huancayo">Huancayo</option><option value="Huasicancha">Huasicancha</option><option value="Huayucachi">Huayucachi</option><option value="Ingenio">Ingenio</option><option value="Pariahuanca">Pariahuanca</option><option value="Pilcomayo">Pilcomayo</option><option value="Pucara">Pucara</option><option value="Quichuay">Quichuay</option><option value="Quilcas">Quilcas</option><option value="San Agustin">San Agustin</option><option value="San Jeronimo De Tunan">San Jeronimo De Tunan</option><option value="Santo Domingo De Acobamba">Santo Domingo De Acobamba</option><option value="Saño">Saño</option><option value="Sapallanga">Sapallanga</option><option value="Sicaya">Sicaya</option><option value="Viques">Viques</option>');
      	break;
      case "Jauja":
    	 	$('#distrito').html('<option value="Acolla">Acolla</option><option value="Apata">Apata</option><option value="Ataura">Ataura</option><option value="Canchayllo">Canchayllo</option><option value="Curicaca">Curicaca</option><option value="El Mantaro">El Mantaro</option><option value="Huamali">Huamali</option><option value="Huaripampa">Huaripampa</option><option value="Huertas">Huertas</option><option value="Janjaillo">Janjaillo</option><option value="Jauja">Jauja</option><option value="Julcan">Julcan</option><option value="Leonor Ordoñez">Leonor Ordoñez</option><option value="Llocllapampa">Llocllapampa</option><option value="Marco">Marco</option><option value="Masma">Masma</option><option value="Masma Chicche">Masma Chicche</option><option value="Molinos">Molinos</option><option value="Monobamba">Monobamba</option><option value="Muqui">Muqui</option><option value="Muquiyauyo">Muquiyauyo</option><option value="Paca">Paca</option><option value="Paccha">Paccha</option><option value="Pancan">Pancan</option><option value="Parco">Parco</option><option value="Pomacancha">Pomacancha</option><option value="Ricran">Ricran</option><option value="San Lorenzo">San Lorenzo</option><option value="San Pedro De Chunan">San Pedro De Chunan</option><option value="Sausa">Sausa</option><option value="Sincos">Sincos</option><option value="Tunan Marca">Tunan Marca</option><option value="Yauli">Yauli</option><option value="Yauyos">Yauyos</option>');
      	break;
      case "Junin":
    	 	$('#distrito').html('<option value="Carhuamayo">Carhuamayo</option><option value="Junin">Junin</option><option value="Ondores">Ondores</option><option value="Ulcumayo">Ulcumayo</option>');
      	break;		
      case "Satipo":
    	 	$('#distrito').html('<option value="Coviriali">Coviriali</option><option value="Llaylla">Llaylla</option><option value="Mazamari">Mazamari</option><option value="Pampa Hermosa">Pampa Hermosa</option><option value="Pangoa">Pangoa</option><option value="Rio Negro">Rio Negro</option><option value="Rio Tambo">Rio Tambo</option><option value="Satipo">Satipo</option>');
      	break;
      case "Tarma":
    	 	$('#distrito').html('<option value="Acobamba">Acobamba</option><option value="Huaricolca">Huaricolca</option><option value="Huasahuasi">Huasahuasi</option><option value="La Union">La Union</option><option value="Palca">Palca</option><option value="Palcamayo">Palcamayo</option><option value="San Pedro De Cajas">San Pedro De Cajas</option><option value="Tapo">Tapo</option><option value="Tarma">Tarma</option>');
      	break;
      case "Yauli":
    	 	$('#distrito').html('<option value="Chacapalpa">Chacapalpa</option><option value="Huay-huay">Huay-huay</option><option value="La Oroya">La Oroya</option><option value="Marcapomacocha">Marcapomacocha</option><option value="Morococha">Morococha</option><option value="Paccha">Paccha</option><option value="Santa Barbara De Carhuacayan">Santa Barbara De Carhuacayan</option><option value="Santa Rosa De Sacco">Santa Rosa De Sacco</option><option value="Suitucancha">Suitucancha</option><option value="Yauli">Yauli</option>');
      	break;
    // 12. distritos de La Libertad                	
      case "Ascope":
    	 	$('#distrito').html('<option value="Ascope">Ascope</option><option value="Casa Grande">Casa Grande</option><option value="Chicama">Chicama</option><option value="Chocope">Chocope</option><option value="Magdalena De Cao">Magdalena De Cao</option><option value="Paijan">Paijan</option><option value="Razuri">Razuri</option><option value="Santiago De Cao">Santiago De Cao</option>');
      	break;
      case "Bolivar":
    	 	$('#distrito').html('<option value="Bambamarca">Bambamarca</option><option value="Bolivar">Bolivar</option><option value="Condormarca">Condormarca</option><option value="Longotea">Longotea</option><option value="Uchumarca">Uchumarca</option><option value="Ucuncha">Ucuncha</option>');
      	break;
      case "Chepen":
    	 	$('#distrito').html('<option value="Chepen">Chepen</option><option value="Pacanga">Pacanga</option><option value="Pueblo Nuevo">Pueblo Nuevo</option>');
      	break;
      case "Gran Chimu":
    	 	$('#distrito').html('<option value="Cascas">Cascas</option><option value="Lucma">Lucma</option><option value="Marmot">Marmot</option><option value="Sayapullo">Sayapullo</option>');
      	break;
      case "Julcan":
    	 	$('#distrito').html('<option value="Calamarca">Calamarca</option><option value="Carabamba">Carabamba</option><option value="Huaso">Huaso</option><option value="Julcan">Julcan</option>');
      	break;
      case "Otuzco":
    	 	$('#distrito').html('<option value="Agallpampa">Agallpampa</option><option value="Charat">Charat</option><option value="Huaranchal">Huaranchal</option><option value="La Cuesta">La Cuesta</option><option value="Mache">Mache</option><option value="Otuzco">Otuzco</option><option value="Paranday">Paranday</option><option value="Salpo">Salpo</option><option value="Sinsicap">Sinsicap</option><option value="Usquil">Usquil</option>');
      	break;	
      case "Pacasmayo":
    	 	$('#distrito').html('<option value="Guadalupe">Guadalupe</option><option value="Jequetepeque">Jequetepeque</option><option value="Pacasmayo">Pacasmayo</option><option value="San Jose">San Jose</option><option value="San Pedro De Lloc">San Pedro De Lloc</option>');
      	break;
      case "Pataz":
    	 	$('#distrito').html('<option value="Buldibuyo">Buldibuyo</option><option value="Chillia">Chillia</option><option value="Huancaspata">Huancaspata</option><option value="Huaylillas">Huaylillas</option><option value="Huayo">Huayo</option><option value="Ongon">Ongon</option><option value="Parcoy">Parcoy</option><option value="Pataz">Pataz</option><option value="Pias">Pias</option><option value="Santiago De Challas">Santiago De Challas</option><option value="Taurija">Taurija</option><option value="Tayabamba">Tayabamba</option><option value="Urpay">Urpay</option>');
      	break;
      case "Sanchez Carrion":
    	 	$('#distrito').html('<option value="Chugay">Chugay</option><option value="Cochorco">Cochorco</option><option value="Curgos">Curgos</option><option value="Huamachuco">Huamachuco</option><option value="Marcabal">Marcabal</option><option value="Sanagoran">Sanagoran</option><option value="Sarin">Sarin</option><option value="Sartimbamba">Sartimbamba</option>');
      	break;
      case "Santiago de Chuco":
    	 	$('#distrito').html('<option value="Angasmarca">Angasmarca</option><option value="Cachicadan">Cachicadan</option><option value="Mollebamba">Mollebamba</option><option value="Mollepata">Mollepata</option><option value="Quiruvilca">Quiruvilca</option><option value="Santa Cruz De Chuca">Santa Cruz De Chuca</option><option value="Santiago De Chuco">Santiago De Chuco</option><option value="Sitabamba">Sitabamba</option>');
      	break;
      case "Trujillo":
    	 	$('#distrito').html('<option value="El Porvenir">El Porvenir</option><option value="Florencia De Mora">Florencia De Mora</option><option value="Huanchaco">Huanchaco</option><option value="La Esperanza">La Esperanza</option><option value="Laredo">Laredo</option><option value="Moche">Moche</option><option value="Poroto">Poroto</option><option value="Salaverry">Salaverry</option><option value="Simbal">Simbal</option><option value="Trujillo">Trujillo</option><option value="Victor Larco Herrera">Victor Larco Herrera</option>');
      	break;
      case "Viru":
    	 	$('#distrito').html('<option value="Chao">Chao</option><option value="Guadalupito">Guadalupito</option><option value="Viru">Viru</option>');
      	break;	
    // 13. distritos de Lambayeque                 	
    	case "Chiclayo":
    		$('#distrito').html('<option value="Cayalti">Cayalti</option><option value="Chiclayo">Chiclayo</option><option value="Chongoyape">Chongoyape</option><option value="Eten">Eten</option><option value="Eten Puerto">Eten Puerto</option><option value="Jose Leonardo Ortiz">Jose Leonardo Ortiz</option><option value="La Victoria">La Victoria</option><option value="Lagunas">Lagunas</option><option value="Monsefu">Monsefu</option><option value="Nueva Arica">Nueva Arica</option><option value="Oyotun">Oyotun</option><option value="Patapo">Patapo</option><option value="Picsi">Picsi</option><option value="Pimentel">Pimentel</option><option value="Pomalca">Pomalca</option><option value="Pucala">Pucala</option><option value="Reque">Reque</option><option value="Santa Rosa">Santa Rosa</option><option value="Santa Rosa">Santa Rosa</option><option value="Saña">Saña</option><option value="Tuman">Tuman</option>');
    		break;
    	case "Ferreñafe":
    		$('#distrito').html('<option value="Cañaris">Cañaris</option><option value="Ferreñafe">Ferreñafe</option><option value="Incahuasi">Incahuasi</option><option value="Manuel Atonio Mesones Muro">Manuel Atonio Mesones Muro</option><option value="Pitipo">Pitipo</option><option value="Pueblo Nuevo">Pueblo Nuevo</option>');
    		break;
    	case "Lambayeque":
    		$('#distrito').html('<option value="Chochope">Chochope</option><option value="Illimo">Illimo</option><option value="Jayanca">Jayanca</option><option value="Lambayeque">Lambayeque</option><option value="Mochumi">Mochumi</option><option value="Morrope">Morrope</option><option value="Motupe">Motupe</option><option value="Olmos">Olmos</option><option value="Pacora">Pacora</option><option value="Salas">Salas</option><option value="San Jose">San Jose</option><option value="Tucume">Tucume</option>');
    		break;
    // 14. distritos de Lima                 	
    	case "Barranca":
    		$('#distrito').html('<option value="Barranca">Barranca</option><option value="Paramonga">Paramonga</option><option value="Pativilca">Pativilca</option><option value="Supe">Supe</option><option value="Supe Puerto">Supe Puerto</option>');
    		break;
    	case "Cajatambo":
    		$('#distrito').html('<option value="Cajatambo">Cajatambo</option><option value="Copa">Copa</option><option value="Gorgor">Gorgor</option><option value="Huancapon">Huancapon</option><option value="Manas">Manas</option>');
    		break;
    	case "Callao":
    		$('#distrito').html('<option value="Bellavista">Bellavista</option><option value="Callao">Callao</option><option value="Carmen De La Legua Reynoso">Carmen De La Legua Reynoso</option><option value="La Perla">La Perla</option><option value="La Punta">La Punta</option><option value="Ventanilla">Ventanilla</option>');
    		break;
    	case "Canta":
    		$('#distrito').html('<option value="Arahuay">Arahuay</option><option value="Canta">Canta</option><option value="Huamantanga">Huamantanga</option><option value="Huaros">Huaros</option><option value="Lachaqui">Lachaqui</option><option value="San Buenaventura">San Buenaventura</option><option value="Santa Rosa De Quives">Santa Rosa De Quives</option>');
    		break;
    	case "Cañete":
    		$('#distrito').html('<option value="Asia">Asia</option><option value="Calango">Calango</option><option value="Cerro Azul">Cerro Azul</option><option value="Chilca">Chilca</option><option value="Coayllo">Coayllo</option><option value="Imperial">Imperial</option><option value="Lunahuana">Lunahuana</option><option value="Mala">Mala</option><option value="Nuevo Imperial">Nuevo Imperial</option><option value="Pacaran">Pacaran</option><option value="Quilmana">Quilmana</option><option value="San Antonio">San Antonio</option><option value="San Luis">San Luis</option><option value="San Vicente De Cañete">San Vicente De Cañete</option><option value="Santa Cruz De Flores">Santa Cruz De Flores</option><option value="Zuñiga">Zuñiga</option>');
    		break;
    	case "Huaral":
    		$('#distrito').html('<option value="Atavillos Alto">Atavillos Alto</option><option value="Atavillos Bajo">Atavillos Bajo</option><option value="Aucallama">Aucallama</option><option value="Chancay">Chancay</option><option value="Huaral">Huaral</option><option value="Ihuari">Ihuari</option><option value="Lampian">Lampian</option><option value="Pacaraos">Pacaraos</option><option value="San Miguel De Acos">San Miguel De Acos</option><option value="Santa Cruz De Andamarca">Santa Cruz De Andamarca</option><option value="Sumbilca">Sumbilca</option><option value="Veintisiete De Noviembre">Veintisiete De Noviembre</option>');
    		break;
    	case "Huarochiri":
    		$('#distrito').html('<option value="Antioquia">Antioquia</option><option value="Callahuanca">Callahuanca</option><option value="Carampoma">Carampoma</option><option value="Chicla">Chicla</option><option value="Cuenca">Cuenca</option><option value="Huachupampa">Huachupampa</option><option value="Huanza">Huanza</option><option value="Huarochiri">Huarochiri</option><option value="Lahuaytambo">Lahuaytambo</option><option value="Langa">Langa</option><option value="Laraos">Laraos</option><option value="Mariatana">Mariatana</option><option value="Matucana">Matucana</option><option value="Ricardo Palma">Ricardo Palma</option><option value="San Andres De Tupicocha">San Andres De Tupicocha</option><option value="San Antonio">San Antonio</option><option value="San Bartolome">San Bartolome</option><option value="San Damian">San Damian</option><option value="San Juan De Iris">San Juan De Iris</option><option value="San Juan De Tantaranche">San Juan De Tantaranche</option><option value="San Lorenzo De Quinti">San Lorenzo De Quinti</option><option value="San Mateo">San Mateo</option><option value="San Mateo De Otao">San Mateo De Otao</option><option value="San Pedro De Casta">San Pedro De Casta</option><option value="San Pedro De Huancayre">San Pedro De Huancayre</option><option value="Sangallaya">Sangallaya</option><option value="Santa Cruz De Cocachacra">Santa Cruz De Cocachacra</option><option value="Santa Eulalia">Santa Eulalia</option><option value="Santiago De Anchucaya">Santiago De Anchucaya</option><option value="Santiago De Tuna">Santiago De Tuna</option><option value="Santo Domingo De Los Olleros">Santo Domingo De Los Olleros</option><option value="Surco">Surco</option>');
    		break; 
    	case "Huaura":
    		$('#distrito').html('<option value="Ambar">Ambar</option><option value="Caleta De Carquin">Caleta De Carquin</option><option value="Checras">Checras</option><option value="Huacho">Huacho</option><option value="Hualmay">Hualmay</option><option value="Huaura">Huaura</option><option value="Leoncio Prado">Leoncio Prado</option><option value="Paccho">Paccho</option><option value="Santa Leonor">Santa Leonor</option><option value="Santa Maria">Santa Maria</option><option value="Sayan">Sayan</option><option value="Vegueta">Vegueta</option>');
    		break; 
    	case "Lima":
    		$('#distrito').html('<option value="Ancon">Ancon</option><option value="Ate">Ate</option><option value="Barranco">Barranco</option><option value="Breña">Breña</option><option value="Carabayllo">Carabayllo</option><option value="Chaclacayo">Chaclacayo</option><option value="Chorrillos">Chorrillos</option><option value="Cieneguilla">Cieneguilla</option><option value="Comas">Comas</option><option value="El Agustino">El Agustino</option><option value="Independencia">Independencia</option><option value="Jesus Maria">Jesus Maria</option><option value="La Molina">La Molina</option><option value="La Victoria">La Victoria</option><option value="Lima">Lima</option><option value="Lince">Lince</option><option value="Los Olivos">Los Olivos</option><option value="Lurigancho">Lurigancho</option><option value="Lurin">Lurin</option><option value="Magdalena Del Mar">Magdalena Del Mar</option><option value="Magdalena Vieja">Magdalena Vieja</option><option value="Miraflores">Miraflores</option><option value="Pachacamac">Pachacamac</option><option value="Pucusana">Pucusana</option><option value="Puente Piedra">Puente Piedra</option><option value="Punta Hermosa">Punta Hermosa</option><option value="Punta Negra">Punta Negra</option><option value="Rimac">Rimac</option><option value="San Bartolo">San Bartolo</option><option value="San Borja">San Borja</option><option value="San Isidro">San Isidro</option><option value="San Juan De Lurigancho">San Juan De Lurigancho</option><option value="San Juan De Miraflores">San Juan De Miraflores</option><option value="San Luis">San Luis</option><option value="San Martin De Porres">San Martin De Porres</option><option value="San Miguel">San Miguel</option><option value="Santa Anita">Santa Anita</option><option value="Santa Maria Del Mar">Santa Maria Del Mar</option><option value="Santa Rosa">Santa Rosa</option><option value="Santiago De Surco">Santiago De Surco</option><option value="Surquillo">Surquillo</option><option value="Villa El Salvador">Villa El Salvador</option><option value="Villa Maria Del Triunfo">Villa Maria Del Triunfo</option>');
    		break; 
    	case "Oyon":
    		$('#distrito').html('<option value="Andajes">Andajes</option><option value="Caujul">Caujul</option><option value="Cochamarca">Cochamarca</option><option value="Navan">Navan</option><option value="Oyon">Oyon</option><option value="Pachangara">Pachangara</option>');
    		break; 
    	case "Yauyos":
    		$('#distrito').html('<option value="Alis">Alis</option><option value="Ayauca">Ayauca</option><option value="Ayaviri">Ayaviri</option><option value="Azangaro">Azangaro</option><option value="Cacra">Cacra</option><option value="Carania">Carania</option><option value="Catahuasi">Catahuasi</option><option value="Chocos">Chocos</option><option value="Cochas">Cochas</option><option value="Colonia">Colonia</option><option value="Hongos">Hongos</option><option value="Huampara">Huampara</option><option value="Huancaya">Huancaya</option><option value="Huangascar">Huangascar</option><option value="Huantan">Huantan</option><option value="Huañec">Huañec</option><option value="Laraos">Laraos</option><option value="Lincha">Lincha</option><option value="Madean">Madean</option><option value="Miraflores">Miraflores</option><option value="Omas">Omas</option><option value="Putinza">Putinza</option><option value="Quinches">Quinches</option><option value="Quinocay">Quinocay</option><option value="San Joaquin">San Joaquin</option><option value="San Pedro De Pilas">San Pedro De Pilas</option><option value="Tanta">Tanta</option><option value="Tauripampa">Tauripampa</option><option value="Tomas">Tomas</option><option value="Tupe">Tupe</option><option value="Viñac">Viñac</option><option value="Vitis">Vitis</option><option value="Yauyos">Yauyos</option>');
    		break;           	
    // 15. distritos de Loreto       	          	
     	case "Alto Amazonas":
    		$('#distrito').html('<option value="Balsapuerto">Balsapuerto</option><option value="Barranca">Barranca</option><option value="Cahuapanas">Cahuapanas</option><option value="Jeberos">Jeberos</option><option value="Lagunas">Lagunas</option><option value="Manseriche">Manseriche</option><option value="Morona">Morona</option><option value="Pastaza">Pastaza</option><option value="Santa Cruz">Santa Cruz</option><option value="Teniente Cesar Lopez Rojas">Teniente Cesar Lopez Rojas</option><option value="Yurimaguas">Yurimaguas</option>');
    		break;    
    	case "Datem del Marañon":
    		$('#distrito').html('<option value=""></option>');
    		break;   
    	case "Loreto":
    		$('#distrito').html('<option value="Nauta">Nauta</option><option value="Parinari">Parinari</option><option value="Tigre">Tigre</option><option value="Trompeteros">Trompeteros</option><option value="Urarinas">Urarinas</option>');
    		break;   
    	case "Mariscal Ramon Castilla":
    		$('#distrito').html('<option value="Pebas">Pebas</option><option value="Ramon Castilla">Ramon Castilla</option><option value="San Pablo">San Pablo</option><option value="Yavari">Yavari</option>');
    		break;   
    	case "Maynas":
    		$('#distrito').html('<option value="Alto Nanay">Alto Nanay</option><option value="Belen">Belen</option><option value="Fernando Lores">Fernando Lores</option><option value="Indiana">Indiana</option><option value="Iquitos">Iquitos</option><option value="Las Amazonas">Las Amazonas</option><option value="Mazan">Mazan</option><option value="Napo">Napo</option><option value="Punchana">Punchana</option><option value="Putumayo">Putumayo</option><option value="San Juan Bautista">San Juan Bautista</option><option value="Torres Causana">Torres Causana</option>');
    		break;   
    	case "Requena":
    		$('#distrito').html('<option value="Alto Tapiche">Alto Tapiche</option><option value="Capelo">Capelo</option><option value="Emilio San Martin">Emilio San Martin</option><option value="Jenaro Herrera">Jenaro Herrera</option><option value="Maquia">Maquia</option><option value="Puinahua">Puinahua</option><option value="Requena">Requena</option><option value="Saquena">Saquena</option><option value="Soplin">Soplin</option><option value="Tapiche">Tapiche</option><option value="Yaquerana">Yaquerana</option>');
    		break;   
    	case "Ucayali":
    		$('#distrito').html('<option value="Contamana">Contamana</option><option value="Inahuaya">Inahuaya</option><option value="Padre Marquez">Padre Marquez</option><option value="Pampa Hermosa">Pampa Hermosa</option><option value="Sarayacu">Sarayacu</option><option value="Vargas Guerra">Vargas Guerra</option>');
    		break;    
    // 16. distritos de Madre de Dios  
    case "Manu":
    		$('#distrito').html('<option value="Fitzcarrald">Fitzcarrald</option><option value="Heupetuhe">Heupetuhe</option><option value="Madre De Dios">Madre De Dios</option><option value="Manu">Manu</option>');
    		break;   
    	case "Tahuamanu":
    		$('#distrito').html('<option value="Iberia">Iberia</option><option value="Iñapari">Iñapari</option><option value="Tahuamanu">Tahuamanu</option>');
    		break;
    case "Tambopata":
    		$('#distrito').html('<option value="Inambari">Inambari</option><option value="Laberinto">Laberinto</option><option value="Las Piedras">Las Piedras</option><option value="Tambopata">Tambopata</option>');
    		break;   
    // 17. distritos de Moquegua     	
    	case "General Sanchez Cerro":
    		$('#distrito').html('<option value="Chojata">Chojata</option><option value="Coalaque">Coalaque</option><option value="Ichuña">Ichuña</option><option value="La Capilla">La Capilla</option><option value="Lloque">Lloque</option><option value="Matalaque">Matalaque</option><option value="Omate">Omate</option><option value="Puquina">Puquina</option><option value="Quinistaquillas">Quinistaquillas</option><option value="Ubinas">Ubinas</option><option value="Yunga">Yunga</option>');
    		break; 
    case "Ilo":
    		$('#distrito').html('<option value="El Algarrobal">El Algarrobal</option><option value="Ilo">Ilo</option><option value="Pacocha">Pacocha</option>');
    		break;   
    	case "Mariscal Nieto":
    		$('#distrito').html('<option value="Carumas">Carumas</option><option value="Cuchumbaya">Cuchumbaya</option><option value="Moquegua">Moquegua</option><option value="Samegua">Samegua</option><option value="San Cristobal">San Cristobal</option><option value="Torata">Torata</option>');
    		break; 
    // 18. distritos de Pasco  
    case "Daniel Alcides Carrion":
    		$('#distrito').html('<option value="Chacayan">Chacayan</option><option value="Goyllarisquizga">Goyllarisquizga</option><option value="Paucar">Paucar</option><option value="San Pedro De Pillao">San Pedro De Pillao</option><option value="Santa Ana De Tusi">Santa Ana De Tusi</option><option value="Tapuc">Tapuc</option><option value="Vilcabamba">Vilcabamba</option><option value="Yanahuanca">Yanahuanca</option>');
    		break;   
    	case "Oxapampa":
    		$('#distrito').html('<option value="Chontabamba">Chontabamba</option><option value="Huancabamba">Huancabamba</option><option value="Oxapampa">Oxapampa</option><option value="Palcazu">Palcazu</option><option value="Pozuzo">Pozuzo</option><option value="Puerto Bermudez">Puerto Bermudez</option><option value="Villa Rica">Villa Rica</option>');
    		break; 
    case "Pasco":
    		$('#distrito').html('<option value="Chaupimarca">Chaupimarca</option><option value="Huachon">Huachon</option><option value="Huariaca">Huariaca</option><option value="Huayllay">Huayllay</option><option value="Ninacaca">Ninacaca</option><option value="Pallanchacra">Pallanchacra</option><option value="Paucartambo">Paucartambo</option><option value="San Fco.de Asis De Yarusyacan">San Fco.de Asis De Yarusyacan</option><option value="Simon Bolivar">Simon Bolivar</option><option value="Ticlacayan">Ticlacayan</option><option value="Tinyahuarco">Tinyahuarco</option><option value="Vicco">Vicco</option><option value="Yanacancha">Yanacancha</option>');
    		break;   
    // 19. distritos de Piura
    	case "Ayabaca":
    		$('#distrito').html('<option value="Ayabaca">Ayabaca</option><option value="Frias">Frias</option><option value="Jilili">Jilili</option><option value="Lagunas">Lagunas</option><option value="Montero">Montero</option><option value="Pacaipampa">Pacaipampa</option><option value="Paimas">Paimas</option><option value="Sapillica">Sapillica</option><option value="Sicchez">Sicchez</option><option value="Suyo">Suyo</option>');
    		break;
    	case "Huancabamba":
    		$('#distrito').html('<option value="Canchaque">Canchaque</option><option value="El Carmen De La Frontera">El Carmen De La Frontera</option><option value="Huancabamba">Huancabamba</option><option value="Huarmaca">Huarmaca</option><option value="Lalaquiz">Lalaquiz</option><option value="San Miguel De El Faique">San Miguel De El Faique</option><option value="Sondor">Sondor</option><option value="Sondorillo">Sondorillo</option>');
    		break;   
    	case "Morropon":
    		$('#distrito').html('<option value="Buenos Aires">Buenos Aires</option><option value="Chalaco">Chalaco</option><option value="Chulucanas">Chulucanas</option><option value="La Matanza">La Matanza</option><option value="Morropon">Morropon</option><option value="Salitral">Salitral</option><option value="San Juan De Bigote">San Juan De Bigote</option><option value="Santa Catalina De Mossa">Santa Catalina De Mossa</option><option value="Santo Domingo">Santo Domingo</option><option value="Yamango">Yamango</option>');
    		break;         	
    	case "Paita":
    		$('#distrito').html('<option value="Amotape">Amotape</option><option value="Arenal">Arenal</option><option value="Colan">Colan</option><option value="La Huaca">La Huaca</option><option value="Paita">Paita</option><option value="Tamarindo">Tamarindo</option><option value="Vichayal">Vichayal</option>');
    		break;   
    	case "Piura":
    		$('#distrito').html('<option value="Castilla">Castilla</option><option value="Catacaos">Catacaos</option><option value="Cura Mori">Cura Mori</option><option value="El Tallan">El Tallan</option><option value="La Arena">La Arena</option><option value="La Union">La Union</option><option value="Las Lomas">Las Lomas</option><option value="Piura">Piura</option><option value="Tambo Grande">Tambo Grande</option>');
    		break;   
    	case "Sechura":
    		$('#distrito').html('<option value="Bellavista La Union">Bellavista La Union</option><option value="Bernal">Bernal</option><option value="Cristo Nos Valga">Cristo Nos Valga</option><option value="Rinconada Llicuar">Rinconada Llicuar</option><option value="Sechura">Sechura</option><option value="Vice">Vice</option>');
    		break;   
    	case "Sullana":
    		$('#distrito').html('<option value="Bellavista">Bellavista</option><option value="Ignacio Escudero">Ignacio Escudero</option><option value="Lancones">Lancones</option><option value="Marcavelica">Marcavelica</option><option value="Miguel Checa">Miguel Checa</option><option value="Querecotillo">Querecotillo</option><option value="Salitral">Salitral</option><option value="Sullana">Sullana</option>');
    		break;   
    	case "Talara":
    		$('#distrito').html('<option value="El Alto">El Alto</option><option value="La Brea">La Brea</option><option value="Lobitos">Lobitos</option><option value="Los Organos">Los Organos</option><option value="Mancora">Mancora</option><option value="Pariñas">Pariñas</option>');
    		break;    
    // 20. distritos de Puno         
    	case "Azangaro":
    		$('#distrito').html('<option value="Achaya">Achaya</option><option value="Arapa">Arapa</option><option value="Asillo">Asillo</option><option value="Azangaro">Azangaro</option><option value="Caminaca">Caminaca</option><option value="Chupa">Chupa</option><option value="Jose Domingo Choquehuanca">Jose Domingo Choquehuanca</option><option value="Muñani">Muñani</option><option value="Potoni">Potoni</option><option value="Saman">Saman</option><option value="San Anton">San Anton</option><option value="San Jose">San Jose</option><option value="San Juan De Salinas">San Juan De Salinas</option><option value="Santiago De Pupuja">Santiago De Pupuja</option><option value="Tirapata">Tirapata</option>');
    		break;   
    	case "Carabaya":
    		$('#distrito').html('<option value="Ajoyani">Ajoyani</option><option value="Ayapata">Ayapata</option><option value="Coasa">Coasa</option><option value="Corani">Corani</option><option value="Crucero">Crucero</option><option value="Ituata">Ituata</option><option value="Macusani">Macusani</option><option value="Ollachea">Ollachea</option><option value="San Gaban">San Gaban</option><option value="Usicayos">Usicayos</option>');
    		break;   
    	case "Chucuito":
    		$('#distrito').html('<option value="Desaguadero">Desaguadero</option><option value="Huacullani">Huacullani</option><option value="Juli">Juli</option><option value="Kelluyo">Kelluyo</option><option value="Pisacoma">Pisacoma</option><option value="Pomata">Pomata</option><option value="Zepita">Zepita</option>');
    		break;   
    	case "El Collao":
    		$('#distrito').html('<option value="Capazo">Capazo</option><option value="Conduriri">Conduriri</option><option value="Ilave">Ilave</option><option value="Pilcuyo">Pilcuyo</option><option value="Santa Rosa">Santa Rosa</option>');
    		break;   
    	case "Huancane":
    		$('#distrito').html('<option value="Cojata">Cojata</option><option value="Huancane">Huancane</option><option value="Huatasani">Huatasani</option><option value="Inchupalla">Inchupalla</option><option value="Pusi">Pusi</option><option value="Rosaspata">Rosaspata</option><option value="Taraco">Taraco</option><option value="Vilque Chico">Vilque Chico</option>');
    		break;   
    	case "Lampa":
    		$('#distrito').html('<option value="Cabanilla">Cabanilla</option><option value="Calapuja">Calapuja</option><option value="Lampa">Lampa</option><option value="Nicasio">Nicasio</option><option value="Ocuviri">Ocuviri</option><option value="Palca">Palca</option><option value="Paratia">Paratia</option><option value="Pucara">Pucara</option><option value="Santa Lucia">Santa Lucia</option><option value="Vilavila">Vilavila</option>');
    		break;   
    	case "Melgar":
    		$('#distrito').html('<option value="Antauta">Antauta</option><option value="Ayaviri">Ayaviri</option><option value="Cupi">Cupi</option><option value="Llalli">Llalli</option><option value="Macari">Macari</option><option value="Nuñoa">Nuñoa</option><option value="Orurillo">Orurillo</option><option value="Santa Rosa">Santa Rosa</option><option value="Umachiri">Umachiri</option>');
    		break;
    	case "Moho":
    		$('#distrito').html('<option value="Conima">Conima</option><option value="Huayrapata">Huayrapata</option><option value="Moho">Moho</option><option value="Tilali">Tilali</option>');
    		break;   
    	case "Puno":
    		$('#distrito').html('<option value="Acora">Acora</option><option value="Amantani">Amantani</option><option value="Atuncolla">Atuncolla</option><option value="Capachica">Capachica</option><option value="Chucuito">Chucuito</option><option value="Coata">Coata</option><option value="Huata">Huata</option><option value="Mañazo">Mañazo</option><option value="Paucarcolla">Paucarcolla</option><option value="Pichacani">Pichacani</option><option value="Plateria">Plateria</option><option value="Puno">Puno</option><option value="San Antonio">San Antonio</option><option value="Tiquillaca">Tiquillaca</option><option value="Vilque">Vilque</option>');
    		break;   
    	case "San Antonio de Putina":
    		$('#distrito').html('<option value="Ananea">Ananea</option><option value="Pedro Vilca Apaza">Pedro Vilca Apaza</option><option value="Putina">Putina</option><option value="Quilcapuncu">Quilcapuncu</option><option value="Sina">Sina</option>');
    		break;   
    	case "San Roman":
    		$('#distrito').html('<option value="Cabana">Cabana</option><option value="Cabanillas">Cabanillas</option><option value="Caracoto">Caracoto</option><option value="Juliaca">Juliaca</option>');
    		break;   
    	case "Sandia":
    		$('#distrito').html('<option value="Alto Inambari">Alto Inambari</option><option value="Cuyocuyo">Cuyocuyo</option><option value="Limbani">Limbani</option><option value="Patambuco">Patambuco</option><option value="Phara">Phara</option><option value="Quiaca">Quiaca</option><option value="San Juan Del Oro">San Juan Del Oro</option><option value="Sandia">Sandia</option><option value="Yanahuaya">Yanahuaya</option>');
    		break;   
    	case "Yunguyo":
    		$('#distrito').html('<option value="Anapia">Anapia</option><option value="Copani">Copani</option><option value="Cuturapi">Cuturapi</option><option value="Ollaraya">Ollaraya</option><option value="Tinicachi">Tinicachi</option><option value="Unicachi">Unicachi</option><option value="Yunguyo">Yunguyo</option>');
    		break;    
    // 21. distritos de San Martin         
    	case "Bellavista":
    		$('#distrito').html('<option value="Alto Biavo">Alto Biavo</option><option value="Bajo Biavo">Bajo Biavo</option><option value="Bellavista">Bellavista</option><option value="Huallaga">Huallaga</option><option value="San Pablo">San Pablo</option><option value="San Rafael">San Rafael</option>');
    		break;   
    	case "El Dorado":
    		$('#distrito').html('<option value="Agua Blanca">Agua Blanca</option><option value="San Jose De Sisa">San Jose De Sisa</option><option value="San Martin">San Martin</option><option value="Santa Rosa">Santa Rosa</option><option value="Shatoja">Shatoja</option>');
    		break;   
    	case "Huallaga":
    		$('#distrito').html('<option value="Alto Saposoa">Alto Saposoa</option><option value="El Eslabon">El Eslabon</option><option value="Piscoyacu">Piscoyacu</option><option value="Sacanche">Sacanche</option><option value="Saposoa">Saposoa</option><option value="Tingo De Sapoa">Tingo De Sapoa</option>');
    		break;   
    	case "Lamas":
    		$('#distrito').html('<option value="Alonso De Alvara">Alonso De Alvara</option><option value="Barranquita">Barranquita</option><option value="Caynarachi">Caynarachi</option><option value="Cuñumbuqui">Cuñumbuqui</option><option value="Lamas">Lamas</option><option value="Pinto Recodo">Pinto Recodo</option><option value="Rumisapa">Rumisapa</option><option value="San Roque De Cumbaza">San Roque De Cumbaza</option><option value="Shanao">Shanao</option><option value="Tabalosos">Tabalosos</option><option value="Zapatero">Zapatero</option>');
    		break;   
    	case "Mariscal Caceres":
    		$('#distrito').html('<option value="Campanilla">Campanilla</option><option value="Huicungo">Huicungo</option><option value="Juanjui">Juanjui</option><option value="Pachiza">Pachiza</option><option value="Pajarillo">Pajarillo</option>');
    		break;   
    	case "Moyobamba":
    		$('#distrito').html('<option value="Calzadda">Calzadda</option><option value="Habana">Habana</option><option value="Jepelacio">Jepelacio</option><option value="Moyobamba">Moyobamba</option><option value="Soritor">Soritor</option><option value="Yantalo">Yantalo</option>');
    		break;   
    	case "Picota":
    		$('#distrito').html('<option value="Buenos Aires">Buenos Aires</option><option value="Caspisapa">Caspisapa</option><option value="Picota">Picota</option><option value="Pilluana">Pilluana</option><option value="Pucacaca">Pucacaca</option><option value="San Cristobal">San Cristobal</option><option value="San Hilarion">San Hilarion</option><option value="Shamboyacu">Shamboyacu</option><option value="Tingo De Ponasa">Tingo De Ponasa</option><option value="Tres Unidos">Tres Unidos</option>');
    		break; 
    	case "Rioja":
    		$('#distrito').html('<option value="Awajun">Awajun</option><option value="Elias Soplin Vargas">Elias Soplin Vargas</option><option value="Nueva Cajamarca">Nueva Cajamarca</option><option value="Pardo Miguel">Pardo Miguel</option><option value="Posic">Posic</option><option value="Rioja">Rioja</option><option value="San Fernando">San Fernando</option><option value="Yorongos">Yorongos</option><option value="Yuracyacu">Yuracyacu</option>');
    		break;   
    	case "San Martin":
    		$('#distrito').html('<option value="Alberto Leveau">Alberto Leveau</option><option value="Cacatachi">Cacatachi</option><option value="Chazuta">Chazuta</option><option value="Chipurana">Chipurana</option><option value="El Porvenir">El Porvenir</option><option value="Humbayoc">Humbayoc</option><option value="Juan Guerra">Juan Guerra</option><option value="La Banda De Shilcayo">La Banda De Shilcayo</option><option value="Morales">Morales</option><option value="Papaplaya">Papaplaya</option><option value="San Antonio">San Antonio</option><option value="Sauce">Sauce</option><option value="Shapaja">Shapaja</option><option value="Tarapoto">Tarapoto</option>');
    		break;   
    	case "Tocache":
    		$('#distrito').html('<option value="Nuevo Progreso">Nuevo Progreso</option><option value="Polvora">Polvora</option><option value="Shunte">Shunte</option><option value="Tocache">Tocache</option><option value="Uchiza">Uchiza</option>');
    		break;   
    // 22. distritos de Tacna      
    	case "Candarave":
    		$('#distrito').html('<option value="Cairani">Cairani</option><option value="Camilaca">Camilaca</option><option value="Candarave">Candarave</option><option value="Curibaya">Curibaya</option><option value="Huanuara">Huanuara</option><option value="Quilahuani">Quilahuani</option>');
    		break;   
    	case "Jorge Basadre":
    		$('#distrito').html('<option value="Ilabaya">Ilabaya</option><option value="Ite">Ite</option><option value="Locumba">Locumba</option>');
    		break;   
    	case "Tacna":
    		$('#distrito').html('<option value="Alto De La Alianza">Alto De La Alianza</option><option value="Calana">Calana</option><option value="Ciudad Nueva">Ciudad Nueva</option><option value="Inclan">Inclan</option><option value="Pachia">Pachia</option><option value="Palca">Palca</option><option value="Pocollay">Pocollay</option><option value="Sama">Sama</option><option value="Tacna">Tacna</option>');
    		break;   
    	case "Tarata":
    		$('#distrito').html('<option value="Chucatamani">Chucatamani</option><option value="Estique">Estique</option><option value="Estique-pampa">Estique-pampa</option><option value="Sitajara">Sitajara</option><option value="Susapaya">Susapaya</option><option value="Tarata">Tarata</option><option value="Tarucachi">Tarucachi</option><option value="Ticaco">Ticaco</option>');
    		break;   
    // 23. distritos de Tumbes   
    	case "Contralmirante Villar":
    		$('#distrito').html('<option value="Casitas">Casitas</option><option value="Zorritos">Zorritos</option>');
    		break;   
    	case "Tumbes":
    		$('#distrito').html('<option value="Corrales">Corrales</option><option value="La Cruz">La Cruz</option><option value="Pampas De Hospital">Pampas De Hospital</option><option value="San Jacinto">San Jacinto</option><option value="San Juan De La Virgen">San Juan De La Virgen</option><option value="Tumbes">Tumbes</option>');
    		break;   
    	case "Zarumilla":
    		$('#distrito').html('<option value="Aguas Verdes">Aguas Verdes</option><option value="Matapalo">Matapalo</option><option value="Papayal">Papayal</option><option value="Zarumilla">Zarumilla</option>');
    		break; 
    // 24. distritos de Ucayali  
    	case "Atalaya":
    		$('#distrito').html('<option value="Raymondi">Raymondi</option><option value="Sepahua">Sepahua</option><option value="Tahuania">Tahuania</option><option value="Yurua">Yurua</option>');
    		break;   
    	case "Coronel Portillo":
    		$('#distrito').html('<option value="Callaria">Callaria</option><option value="Campoverde">Campoverde</option><option value="Iparia">Iparia</option><option value="Masisea">Masisea</option><option value="Nueva Requena">Nueva Requena</option><option value="Yarinacocha">Yarinacocha</option>');
    		break;   
    	case "Padre Abad":
    		$('#distrito').html('<option value="Curimana">Curimana</option><option value="Irazola">Irazola</option><option value="Padre Abad">Padre Abad</option>');
    		break;   
    	case "Purus":
    		$('#distrito').html('<option value="Purus">Purus</option>');
    		break;   
    }
  });
});
