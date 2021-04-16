/*
1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte
le icone disponibili come da layout
2 Coloriamo le icone per tipo
3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

const colors = [
    'blue',
    'orange',
    'purple'
];

main();

//creo una copia dell'array originale che contiene anche i colori per non modificare quello di partenza
function colorify (arrayColor, array){
    let iconsCopy = [];
    for (const obj of array) {
        if (obj.type == "animal") {
            iconsCopy.push({...obj, color: arrayColor[0]});
        }
        else if (obj.type == "vegetable") {
            iconsCopy.push({ ...obj, color: arrayColor[1]});
        }
        else{
            iconsCopy.push({ ...obj, color: arrayColor[2]});
        }
    }
    return iconsCopy;
}
//itero sul nuovo array
function populateHtml (array){
    //prendo il div che devo popolare
    const cardsContainer = $(".cards-container");
    cardsContainer.html('');
    //itero sull'array degli oggetti (che contiene anche i colori)
    for (const icon of array) {
        //estrapolo le informazioni che mi servono per creare le mie cards
        let {name, prefix, family, color} = icon;
        //definisco tramite i backticks e i valori degli oggetti che aspetto avranno le cards nella pagina html
        const iconaHtml = `
            <div class="card">
                <i class='${family} ${prefix}${name} ${color}'></i>
                <h5>${name}</h5>
            </div>`;

        //aggiungo a cardsContainer
        cardsContainer.append(iconaHtml);
    }
}
//funzione che filtra l'array di colori in base alla scelta dell'utente
function filtrify(array, currentChoice) {
    if (currentChoice == "all") {
        console.log(array);
        return array;
    }
    const filteredArray = array.filter((obj) => {
        return obj.type == currentChoice;
    });
    console.log(filteredArray);
    return filteredArray;
}
//main
function main() {
    const coolorArray = colorify(colors, icons);
    populateHtml(coolorArray);
    //le option del select
    const valoreSelect = $("#valore");
    //quando cambia
    valoreSelect.change(function () {
        const currentChoice = this.value;
        //filtra gli elementi nell array di partenza in base al select
        const pickedArray = filtrify(coolorArray, currentChoice);
        //funzione che popola la pagina HTML
        populateHtml(pickedArray);
    });
}


