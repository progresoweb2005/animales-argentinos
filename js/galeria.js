var NroFoto = 1;
function Cambia(AvanzaORetrocede,CantFotos) 
{
	NroFoto = NroFoto + AvanzaORetrocede;

	if (NroFoto > CantFotos) 
		{
			NroFoto = 1;
		} 
	if (NroFoto < 1) 
		{
			NroFoto = CantFotos;

		}
	document.VerFoto.src="imagenes/Yacare/Yacare"+NroFoto+".jpg";

}