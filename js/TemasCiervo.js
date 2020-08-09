function Eligio() 
{
	var Tema = document.getElementById('Ciervo').value;

	switch (Tema)
	{
		case "1":
		{	
			document.getElementById("Titulo").innerHTML="Características";
			document.getElementById("SubTitulo").innerHTML="Entre los ciervos de América del sur es el de mayor tamaño: su altura, del lomo al suelo, oscila entre 1,10 y 1,20 metro. Su pelaje es de color rojo leonado. En época invernal cambia a un tono más pardo. Tiene círculos característicos de pelaje blanco alrededor de los ojos. Presenta una cornamenta que suele desarrollarse ampliamente, con un ancho de unos 60 centímetros. La longitud de la cabeza y el cuerpo varía entre 1,80 y 1,90 metro y la de la cola entre los 10 y 15 centímetros, mientras que su peso varía entre los 100 y los 150 kilos en los ejemplares adultos.";
			break;
		}
		case "2":
		{
			document.getElementById("Titulo").innerHTML="Nombre";
			document.getElementById("SubTitulo").innerHTML="Suele llamárselo 'guazú-pucú' en guaraní, 'epelve' en mocoví, 'calimgo' en toba o 'huasé' en mataco; también 'ciervo isleño' o 'ciervo del Delta'. Su nombre científico es 'Blastocerus dichotomus' (Illiger). Pertenece a la clase de los mamíferos, orden artiodactyla y familia cervidae.";
			break;
		}
		case "3":
		{
			document.getElementById("Titulo").innerHTML="Hábitat";
			document.getElementById("SubTitulo").innerHTML="Es un animal que se encuentra en Brasil, Perú, Bolivia, Paraguay, Uruguay y la Argentina. Dentro de nuestro país se lo ubica en las provincias de Misiones, Salta, Formosa, Chaco, Santa Fe, Corrientes, Entre Ríos y tal vez, en Jujuy. En la provincia de Buenos Aires sobrevive un grupo reducido en la Reserva Natural Otamendi y en el Delta. En todos los casos, se trata de lugares que tienen lagunas y esteros, rodeados de vegetación, o en las orillas de ríos o riachos correntosos. En el Delta del Paraná, el ciervo de los pantanos ha sido visto en lagunas internas de las islas donde hay juncales, totorales y en terrenos anegadizos.";
			break;
		}
		case "4":
		{
			document.getElementById("Titulo").innerHTML="Alimentación";
			document.getElementById("SubTitulo").innerHTML="Aunque los datos que se poseen son muy pocos, se cree que consume los vegetales propios de los ambientes acuáticos donde habita. En el Delta bonaerense, se sabe que mordisquea ocasionalmente naranjas y otros frutos.";
			break;
		}	
		case "5":
		{
			document.getElementById("Titulo").innerHTML="Sus crías";
			document.getElementById("SubTitulo").innerHTML="Después de un período de gestación de 200 días las hembras suelen tener una o dos crías, aunque esto último es excepcional, en primavera, entre octubre y noviembre. Los ciervitos presentan manchas blancas en el pelaje, que pierden rápidamente para presentar el mismo color de los ejemplares adultos.";
			break;
		}	
		case "6":
		{
			document.getElementById("Titulo").innerHTML="Por qué está en peligro";
			document.getElementById("SubTitulo").innerHTML="Su mayor enemigo no es natural; se trata de los cazadores que, por Ilevarse su cornamenta como trofeo, no vacilan en introducirse furtivamente o en pagar a los dueños de los campos para cazar esta especie.";
			break;
		}			
		default:
		{
			document.getElementById("Titulo").innerHTML="No Eligio Nada";
			
		}
	}

}