
//////////////////////////////// variaveis ////////////////////////////////////////////////////
var exibir ;
var lista1 = [];
var Aluno = 
[{nome: 'Joao',nota: 5.0,idade: 45},
{nome: 'Alfredo',nota: 8.0,idade: 17},
{nome: 'Rafael',nota: 6.0,idade: 20},
{nome: 'Leonardo',nota: 9.9,idade: 22},
{nome: 'Jean',nota: 4.0,idade: 26},
{nome: 'Beto',nota: 7.0,idade: 55},
{nome: 'Luciana',nota: 9.0,idade: 56},
{nome: 'Victor',nota: 2.0,idade: 33},
{nome: 'Maria',nota: 4.0,idade: 18},
{nome: 'Otavio',nota: 9.6,idade: 47},
{nome: 'Priscila',nota: 2.0,idade: 23},
{nome: 'Steves',nota: 6.9,idade: 89},
{nome: 'Victorina',nota: 8.1,idade: 37},
{nome: 'Gumerlinda',nota: 1.9,idade: 10},
{nome: 'Samuel',nota: 7.1,idade: 56}];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var array1 = [];
var array2 = [];
var Anterior;

////////////////////////////////////Funções/////////////////////////////////////////////////////
function CalMM(){
	var mediana =(array1[(Aluno.length-1)/2]); 
	var media = (array1.reduce(reducer)/Aluno.length);
	Aluno.push({media: media});	
	Aluno.push({mediana: mediana});
}

function CalModa(){
	var Moda;
	var Anterior;
	var Atual 
	for (var cont = 0; cont < array1.length; cont++){
		Atual  = array1[cont];
		if(cont === 0)
		Anterior = Atual;		
		else 
		if((cont != 0) && (Anterior == Atual)){
			Moda = Atual;
		}
		Anterior = Atual;
	}
	Aluno.push({moda: Moda});
}




for (var cont = 0; cont < Aluno.length; cont++){
	array1.push(Aluno[cont].nota);
}
array1.sort();

CalMM();
CalModa();
console.log(Object.entries(Aluno));


function com(a, b) {
	if (a > b ) {
		return a.nota - b.nota;
	}else
	if (a < b) {
		return b.nota - a.nota;
	}  
}




