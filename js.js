function sprawdz_rok()
{   var pole_rok = document.forms['ddd'].rok;
    var rok = pole_rok.value;
     if (rok != '')
    {
       var a;
	   a= rok - 1911; 
           alert( a  + ' rok kaledarza Juche'  );
    }
    else
    {
        alert('Nie wpisano żadnej poprawnej wartości!');
    }
    return false;
}
  