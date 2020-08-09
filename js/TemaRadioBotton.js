function EligioTipoRadio() 
{
	var Tema = document.getElementById('RadioBottom').value;

	switch (Tema)
	{
		case "1":
		{	
			document.getElementById("Titulo").innerHTML="Clasificación:";
			document.getElementById("SubTitulo").innerHTML="Clase: Mammalia";
			document.getElementById("SubTitulo").innerHTML="Orden: Artiodactyla";
			document.getElementById("SubTitulo").innerHTML="Familia: Camelidae";
			document.getElementById("SubTitulo").innerHTML="Se omiten los taxa con rango de sub o supercategoría.";
			document.getElementById("SubTitulo").innerHTML="Nombre científico: Lama guanicoe";
			document.getElementById("SubTitulo").innerHTML="Subespecies en la Argentina: L. Guanicoe guanicoe y L. Guanicoe voglii";
			break;
		}
		case "2":
		{
			document.getElementById("Titulo").innerHTML="Estatus Nacional:";
			document.getElementById("SubTitulo").innerHTML="RB (riego bajo) según SAREM (2000).";
			document.getElementById("SubTitulo").innerHTML="Estatus Internacional: LR.lc (UICN, 1996).";
			break;
		}
		case "3":
		{
			document.getElementById("Titulo").innerHTML="Otros nombres comunes:";
			document.getElementById("SubTitulo").innerHTML="huanaco ( quechua), yoohn (en ona), relincho ( en el Noroeste argentino), teke (guanaco joven en el Noroeste argentino), chulengo (guanaco joven en la Patagonia), luan (en araucano), nau (en tehuelche), amere (en yámana)";
			break;
		}
		case "4":
		{
			document.getElementById("Titulo").innerHTML="Caracteres externos";
			document.getElementById("SubTitulo").innerHTML="El camélido presenta la cabeza pequeña, orejas largas terminadas en punta y fácilmente móviles. Los ojos son grandes y están rodeados de largas pestañas; la dentición está compuesta por 34 piezas, entre la que se encuentran: un incisivo, un canino, tres premolares y tres molares en cada mitad del maxilar superior y tres incisivos, un canino, dos premolares y tres molares en cada mitad del maxilar inferior. Posee premolares de leche que no son reemplazados por piezas permanentes. Los dos incisivos superiores tienen forma de caninos y los seis incisivos inferiores tienen forma de pala y están muy inclinados hacia adelante de manera tal que cuando el animal cierra la boca estos seis incisivos superiores y quedan contra una parte hueca, sin dientes. Los caninos son curvos y puntiagudos, comprimidos lateralmente. Los incisivos están cincelados y recubiertos por una gruesa capa de esmalte (CEAL, 1984).";
			document.getElementById("SubTitulo").innerHTML="Son animales de cuello y patas muy largos; presentan la particularidad de caminar apoyando, no sólo la última falange de los dedos, sino también la segunda falange, resultando así digitígrados en vez de ungulígrados. En relación con este carácter, detrás de las pezuñas, que son pequeñas y alargadas, casi como si fueran uñas, tienen bajo dicha segunda falange una especie de almohadilla o suela callosa que se apoya de plano en el suelo (Cabrera, 1940). Su altura a la cruz fluctúa entre los 900 a 1100 mm, la longitud desde el hocico a la base de la cola varía entre 1020 a 1850 mm, midiendo la cola unos 270 mm. El peso oscila entre los 70 y 100 kg. (Mares, et al., 1989).";
			document.getElementById("SubTitulo").innerHTML="El pelaje es lanoso, largo, grueso y espeso, aunque no largo en todo el cuerpo, de color pardo oscuro a rojizo, con tonos blancos en las flancos, vientre, y parte inferior del cuello. En la cabeza y las patas es corto y liso. La garganta, la parte inferior o ventral del cuello, el vientre, la parte interna y posterior de los miembros y los cuatro pies, son blancos.";
			document.getElementById("SubTitulo").innerHTML="Es un herbívoro rumiante; el estómago se divide en varias partes y, tras una primera descomposición, los alimentos vuelven a la boca y se mastican para la digestión definitiva (CEAL, 1984). Casi no presentan dimorfismo sexual, sólo las hembras tienen los caninos pequeños que los machos.";
			break;
		}	
		case "5":
		{
			document.getElementById("Titulo").innerHTML="Comportamiento";
			document.getElementById("SubTitulo").innerHTML="El guanaco tiene, entre otros hábitos, el ser gregario y diurno. Su estructura social se basa en tres unidades:";
			document.getElementById("SubTitulo").innerHTML="1) tropillas lideradas por un macho adulto que reúne un número variable de hembras en condición reproductiva -5,5 en promedio en la Patagonia, pero puede llegar hasta veinte- normalmente acompañadas de sus crías;";
			document.getElementById("SubTitulo").innerHTML="2) grupos de machos juveniles que esperan la maduración plena para lograr su propio rebaño (“solteros”)";
			document.getElementById("SubTitulo").innerHTML="3) machos solitarios, normalmente en procura de hembras (Parera, 2002).";
			document.getElementById("SubTitulo").innerHTML="Una típica característica de su comportamiento es la costumbre de los machos de defecar siempre en el mismo sitio formando un cúmulo de excrementos – conocidos como bosteaderos- y con ello marcan su territorio. Los ñandúes se benefician con los "bosteaderos" porque entre las deposiciones abundan los insectos coprófagos y de esos insectos se alimentan las crías del ñandú. Se desarrolla así una provechosa relación de cooperación, ya que los ñandúes, que son más ariscos aún que los camélidos, se encargan de dar la alarma corriendo cuando se avecina algún peligro (CEAL, 1984). ";
			break;
		}	
		case "6":
		{
			document.getElementById("Titulo").innerHTML="Grupo Familiar";
			document.getElementById("SubTitulo").innerHTML="El grupo familiar principal lo forma el macho más antiguo y varias hembras -entre seis y quince- con sus crías. A veces un macho ajeno o un juvenil roban a una hembra y se constituye así un grupo familiar secundario, integrado por el relincho o macho adulto y la hembra o hembras, que pueden ser hasta cinco. Este segundo grupo suele seguir al primero a cierta distancia, bajo la atenta vigilancia del macho del grupo principal. Si se establece independientemente, el grupo familiar secundario pasa a ser principal (CEAL, 1984). También se forman nuevos grupos –generalmente numerosos- integrados por juveniles que, al quedar nuevamente sus madres preñadas, son apartados y se unen a animales seniles. Cuando tienen una oportunidad de unirse a una hembra, los juveniles se apartan y forman un grupo nuevo. El relincho, expresión con el cual se lo conoce principalmente en el noroeste, consiste en una voz de alarma muy característica, y es el medio usado por los machos para hacerse oír y dar la señal de huida ante un eminente peligro.";
			document.getElementById("SubTitulo").innerHTML="Cuando el grupo se establece en un territorio, lo adopta como su área exclusiva y el macho la defiende activamente contra guanacos intrusos, salvo que se trate de hembras solteras. Esta defensa no requiere, por lo general, una lucha franca; en la mayoría de los casos, se limita a manifestaciones agresivas, como embestidas amenazantes o persecuciones (CEAL, 1984). La manifestación de su gregarismo es notable al verse tropillas de guanacos junto a otras especies como la vicuña o el ñandú.";
			break;
		}			
		case "7":
		{
			document.getElementById("Titulo").innerHTML="Por qué está en peligro";
			document.getElementById("SubTitulo").innerHTML="Sus casi exclusivos predadores son el hombre y el puma. Si bien en la actualidad el guanaco casi no comparte territorios con el yaguareté, en épocas pasadas, cuando éste felino llegaba a las inmediaciones del río Negro, era un importante predador. Hay algunos observadores aseguran que el zorro colorado ataca a los animales jóvenes.";
			break;
		}
		case "8":
		{
			document.getElementById("Titulo").innerHTML="Reproducción";
			document.getElementById("SubTitulo").innerHTML="La reproducción de los guanacos se inicia a hacia fines de la primavera - cuando entran en celo- en la Patagonia, y a comienzos de verano en el norte. Este momento es cuando los juveniles tienen la oportunidad de buscar a las hembras de otros grupos y los adultos deben defender su posición u optar por apartarse de la tropilla. La disputa por las hembras, como ocurre en muchos otros grupos de animales, trae aparejada violentas luchas entre los machos. Cuando el rival es puesto fuera de combate, el macho se dedica al cortejo de la hembra, a la que persigue y muerde hasta agotarla. Se realiza entonces el apareamiento, bastante violento, con la hembra echada sobre el vientre y el macho forzándola.";
			document.getElementById("SubTitulo").innerHTML="Tras once meses de gestación , nace la cría –una por parto- con un peso que varía de ocho a quince kilos, y la lactancia se extiende unos tres meses. El recién nacido es muy friolento, su madre, con ayuda muchas veces del macho, hace una excavación cóncava donde cobija a su hijo y luego se hecha sobre él para darle calor. Es de destacar que, contrariamente a la mayoría de las especies, la madre no lame a su cría. Los chulengos nacen cubiertos de un pelo canela claro mucho mas sedoso y blando que de los padres, el cual cambian hacia a las tres semanas de edad (Cabrera, 1940). Hacia los seis meses o algo más, los guanacos manifiestan los cambios más importantes de su crecimiento, el se completa a los tres años.";
			break;
		}
		case "9":
		{
			document.getElementById("Titulo").innerHTML="Alimentación";
			document.getElementById("SubTitulo").innerHTML="En relación a la alimentación se debe señalar que esta es exclusivamente herbívora e incluye una gran variedad de especies de vegetales. Es de destacar que sus dientes incisivos están cincelados y recubiertos en su parte labial con una gran capa de esmalte que les otorga especial fuerza y dureza. Los dos incisivos superiores tienen apariencia de caninos y los seis incisivos inferiores tienen forma de pala y están muy inclinados hacia adelante, de manera que cuando se cierra la boca pasan entre los dientes de arriba y quedan contra una parte hueca, sin dientes. Esta estructura de al boca resulta peculiarmente útil para cortar los pastos duros y hojas con que se alimenta el guanaco (CEAL, 1984), y contribuye a conservar la cobertura vegetal al no arrancar los pastos como lo hacen algunos ganados, como el caprino por ejemplo.";
			document.getElementById("SubTitulo").innerHTML="Estudios realizados en la región de la Payunia - provincia de Mendoza- mostraron que consume treinta y dos géneros diferentes (57% de los existentes) de vegetales, con una preponderancia de gramíneas (81%) y arbustos bajos (17%), y una menor participación de arbustos altos y hierbas (1% cada uno), aunque las últimas -muy escasas- son seleccionadas por los guanacos (Parera, 2002). Similar resultado arrojó otra investigación concretada en Tierra del Fuego donde se constató una ingesta del 90% de gramíneas, especialmente de los géneros Festuca y Poa para la zona esteparia, mientras en la transición de esta hacia el bosque, su dieta fue incorporando ramoneo de arbustos y árboles. En cambio en la Puna, las herbáceos y leñosas fueran la principal dieta. Para un ambiente altoandino, el estudio mostró que las especies más consumidas fueron Festuca orthophylla, F. eriostoma, Deyeuxia colorata, Oxychloe andina y Astragalus sp.,- una leguminosa que tóxica para el ganado- (Parera, 2002). Es significativo señalar la aptitud de guanaco para ingerir aguas salobres, incluso agua marina.";
			document.getElementById("SubTitulo").innerHTML="Su gran competidor alimenticio en la Patagonia, uno de los principales espacios que ocupa la especie tratada, es el ganado ovino. Pero el guanaco puede acceder a espacios que no son accesibles a los ovinos, como los lugares alejados de las aguadas, y de esta manera se produce una disminución en la competencia por el alimento con el abundante ganado lanar de la Patagonia.";
			break;
		}
		case "10":
		{
			document.getElementById("Titulo").innerHTML="Hábitat";
			document.getElementById("SubTitulo").innerHTML="El guanaco es un animal que se adapta con gran facilidad a distintos climas y terrenos. Habita en las llanuras áridas y pedregosas y en las grandes alturas cercanas a las nieves eternas, en terrenos situados en el nivel del mar y a 4.000 metros de altitud, y se lo encuentra en regiones de temperaturas muy disímiles. Pero en todos los casos -zonas altas o bajas, frías o cálidas-, busca los sitios secos, frescos y abiertos (CEAL, 1984). La región por la que más se expande en la actualidad es por la estepa patagónica, lo que muestra claramente uno de los tipos de hábitat elegido por este camélido. En esta zona esteparia abundan los pastos duros – coirones, por ejemplo- y algunos arbustos. No se lo ve en zonas boscosas. Está perfectamente adaptado para vivir a grandes alturas, mejor que la vicuña (Parera. 2002), donde además de los factores climáticos adversos como la poca proporción de oxígeno que contiene el aire, se desempeña muy bien en terrenos quebrados y de grandes pendientes. En las costas de mar aprovecha la bajamar para pasar a las islas adyacentes que, por estar deshabitadas, son ricas en pastizales.";
			break;
		}
		case "11":
		{
			document.getElementById("Titulo").innerHTML="Distribución";
			document.getElementById("SubTitulo").innerHTML="El guanaco es un camélido exclusivo de Sudamérica, y por este subcontinente se extiende desde el Perú hasta Tierra del Fuego, ocupando sólo el sur de Bolivia y en Chile la mayor concentración se produce en la región de Magallanes (Islas de Tierra del Fuego y Ambarino). En la Argentina se expande por una franja que se extiende de norte a sur, en el sector oeste y hacia el sur de Mendoza, aproximadamente, se expande al este hasta llegar a la costa del mar. O sea, en forma algo más precisa, en la actualidad se lo encuentra en una angosta franja –sentido norte sur- que atraviesa la provincia de Jujuy en su parte media; los mismo ocurre en Salta y Catamarca, pero esa lonja es mucho más ancha; una significativa porción del oeste riojano; los mismo ocurre en Mendoza; toda la mitad sur de La Pampa, y prácticamente en todo el territorio a excepción de un margen occidental de las provincias de Neuquen, Río Negro, Chubut, Santa Cruz y Tierra del Fuego. Esta distribución fue tomada del Mapa de Distribución del Guanaco (fig.4), que figura en el trabajo “Estado actual de las investigaciones sobre camélidos en la Argentina” (Cajal y Amaya) y de la obra de Parera (op.cit.). También hay poblaciones relictuales en algunos sectores fuera de la distribución señalada como en el sur de la provincia de Buenos Aires, noroeste de San Luis, centro de Córdoba y al oeste de Santiago del Estero, entre algunas otras poco significativas.";
			break;
		}
		case "12":
		{
			document.getElementById("Titulo").innerHTML="Situación de sus poblaciones";
			document.getElementById("SubTitulo").innerHTML="La distribución señala en el ítem precedente fue mucho mayor – se expandía más hacia el este- hasta los primeros tiempos de la conquista española. En esta etapa se intensificó notablemente la caza respecto a la que practicaban los pueblos aborígenes, para aprovechar su carne y su piel. Especialmente eran víctimas los chulengos –como se llama a los ejemplares jóvenes- con cuya piel se confeccionaban prendas de vestir como el conocido quillango. También tuvo una incidencia notoria en la merma de sus poblaciones la introducción de ganado, especialmente el ovino que se lo crió en grandes cantidades en la Patagonia. En la Argentina se estima la población actual en unos 550.000 ejemplares, lo que constituye estimativamente el 90% de la población total de la especie, estimada en 580.000 de los cuales algunos centenares viven en el sur boliviano y unos 1.400 ejemplares en Perú y el resto en Chile (Parera, 2002). En la actualidad se desarrollan varios proyectos de cría en cautiverio o semicautiverio para aprovechar su lana. La caza comercial disminuyó drásticamente y algunas leyes provinciales lo protegen e integra el Apéndice II de la CITES.";
			document.getElementById("SubTitulo").innerHTML="Se encuentra protegido en los siguientes Parques Nacionales: El Leoncito, Sierra de las Quijadas, Lihué Calel, Tierra del Fuego, Nahuel Huapi, Laguna Blanca, Perito Moreno, Los Glaciares y Bosque Petrificados (Heinonen y Chebez, 1997).";
			break;
		}
		case "13":
		{
			document.getElementById("Titulo").innerHTML="Aspectos culturales";
			document.getElementById("SubTitulo").innerHTML="Desde tiempos muy remotos nuestros aborígenes tuvieron un estrecho vínculo con el guanaco. En los siglos XI y XII, con el apogeo de la cultura incaica en el área de influencia peruana, la ganadería basada en los camélidos alcanzó su máximo desarrollo y estos animales adquirieron una gran importancia no sólo económica, sino también religiosa (CEAL, 1984). Le atribuían propiedades curativas al bezoar o cálculo gástrico que se forma en el estómago del guanaco. Entre las principales se encuentran poder cicatrizante de heridas, cura de enfermedades de la vista y, pulverizada, la ingerían para aliviar el dolor de estómago. Hasta no hace demasiado tiempo – algo menos de un siglo- en algunas farmacias del norte de Argentina y de Chile se vendían las piedras del guanaco. Y , en este último país, integraba la “pítima”, un medicamento en el cual también se incluía clavo de olor, toronjil y hierva mate, utilizado para calmar enfermedades de corazón, entre otras males (Cabrera, 1940). En Catamarca hay quienes dicen que la tierra donde ha orinado, cernida, puede curar a una persona apunada.";
			document.getElementById("SubTitulo").innerHTML="Además algunas culturas indígenas se lo utilizó como animal de carga, siéndoles de gran utilidad para el transporte de carga en lugares de altura, aunque este rol lo acaparó su congénere, la llama.";
			break;
		}

		default:
		{
			document.getElementById("Titulo").innerHTML="No Eligio Nada";
			
		}
	}

}