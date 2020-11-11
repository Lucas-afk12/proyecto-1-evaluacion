db.cultivo.insertMany([
    {planta:"Chem Berry D", precio: 25.5 , thc: 32 , genetica:{ tipo:"sativa",Predominancia:"dominante"},cbd:"none",cosecha: new Date("2020,8,10"),etiquetas:["s","d","n"]},
    {planta:"Bruce Banner BX 2.0", precio: 23 , thc: 30 , genetica:{ tipo:"sativa",Predominancia:"dominante"},cbd:"none",cosecha: new Date("2020,10,11"),etiquetas:["s","d","n"]},
    {planta:"HulkBerry", precio: 18.5 , thc: 27 , genetica:{ tipo:"sativa",Predominancia:"semi"},cbd:"bajo",cosecha: new Date("2020,8,10"),etiquetas:["s","se","b"]},
    {planta:"Original Glue", precio: 17  , thc: 30  , genetica:{ tipo:"indica",Predominancia:"dominante"},cbd:"none",cosecha: new Date("2020,4,13"),etiquetas:["i","d","n"]},
    {planta:"Girl Scout Cookies", precio: 16.5 , thc: 28 , genetica:{ tipo:"indica",Predominancia:"semi"},cbd:"none",cosecha: new Date("2020,1,1"),etiquetas:["i","se","n"]},
    {planta:"Green Gelato", precio: 15 , thc: 27 , genetica:{ tipo:"indica",Predominancia:"semi"},cbd:"bajo",cosecha: new Date("2020,5,27"),etiquetas:["i","se","b"]},
    {planta:"Romulan Haze", precio: 13 , thc: 20 , genetica:{ tipo:"sativa",Predominancia:"dominante"},cbd:"bajo",cosecha: new Date("2020,6,24"),etiquetas:["s","d","b"]},
    {planta:"Where's My Bike", precio: 10 , thc: 17 , genetica:{ tipo:"sativa",Predominancia:"semi"},cbd:"bajo",cosecha: new Date("2020,2,28"),etiquetas:["s","se","b"]},
    {planta:"Island Sweet Skunk", precio: 13 , thc: 23 , genetica:{ tipo:"sativa",Predominancia:"semi"},cbd:"alto",cosecha: new Date("2020,3,8"),etiquetas:["s","se","a"]},
    {planta:"Gorilla Zkittlez", precio: 8 , thc: 29 , genetica:{ tipo:"indica",Predominancia:"dominante"},cbd:"none",cosecha: new Date("2020,7,20"),etiquetas:["i","d","n"]},
]);
/*Plantas altas en cbd*/
db.cultivo.insertMany([
    {planta:"Cannatonic", precio: 38 , thc: 16 , genetica:{ tipo:"sativa",Predominancia:"semi"},cbd:"alto",cosecha: new Date("2020,5,15"),etiquetas:["s","se","a"],stock:false},
    {planta:"CBD Therapy", precio: 5 , thc: 5 , genetica:{ tipo:"indica",Predominancia:"semi"},cbd:"alto",cosecha: new Date("2020,7,16"),etiquetas:["i","se","a"],stock:true},
    {planta:"Candida (CD-1)", precio: 7 , thc: 5 , genetica:{ tipo:"sativa",Predominancia:"dominante"},cbd:"muy_alto",cosecha: new Date("2020,4,7"),etiquetas:["s","do","ma"],stock:true},
    {planta:"Juanita La Lagrimosa", precio: 8.5  , thc: 7  , genetica:{ tipo:"indica",Predominancia:"dominante"},cbd:"muy alto",cosecha: new Date("2020,1,20"),etiquetas:["i","d","ma"],stock:true},
    {planta:"OG Kush CBD", precio: 11.5 , thc: 10 , genetica:{ tipo:"sativa",Predominancia:"dominante"},cbd:"alto",cosecha: new Date("2020,8,21"),etiquetas:["s","d","a"],stock:true},
    {planta:"CBD ComPassion", precio: 8.7 , thc: 8 , genetica:{ tipo:"indica",Predominancia:"semi"},cbd:"alto",cosecha: new Date("2020,6,17"),etiquetas:["i","se","a"],stock:false},
    {planta:"Royal Medic", precio: 18.3 , thc: 12 , genetica:{ tipo:"sativa",Predominancia:"dominante"},cbd:"muy alto",cosecha: new Date("2020,2,12"),etiquetas:["s","d","ma"],stock:true},
    {planta:"CBD Critical Mass", precio: 4.5 , thc: 4 , genetica:{ tipo:"indica",Predominancia:"dominante"},cbd:"alto",cosecha: new Date("2020,3,24"),etiquetas:["i","d","a"],stock:false},
    {planta:"S.A.G.E. CBD", precio: 12 , thc: 9.5 , genetica:{ tipo:"sativa",Predominancia:"semi"},cbd:"alto",cosecha: new Date("2020,4,1"),etiquetas:["s","se","a"],stock:false},
    {planta:"CBD-Chronic", precio: 3 , thc: 5 , genetica:{ tipo:"indica",Predominancia:"semi"},cbd:"bajo",cosecha: new Date("2020,7,12"),etiquetas:["i","se","b"],stock:true},
]);
