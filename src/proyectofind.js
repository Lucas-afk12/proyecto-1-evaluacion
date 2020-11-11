/* Filtra las plantas con cbd bajo o sin cbd y de tipo sativa.*/
db.cultivo.find({$and:[{cbd:{$in:["none","bajo"]},"genetica.tipo":{$eq:"sativa"}}]});
/* Filtra las plantas indicas con genetica semi-indica (Hibrida) o las Plantas indicas que tengan mas de 29% de thc*/
db.cultivo.find({'genetica.tipo':{$eq:"indica"},$or:[{"genetica.Predominancia":{$eq:"semi"}},{thc:{$gt:29}}]});
/*Filtra las plantas con thc mayor o igual a 20% y que su precio sea menor a 17*/
db.cultivo.find({$and:[{precio:{$lt:17}},{thc:{$gte:23}}]});
/*Filtra las plantas de genetica tipo sativa negandolo($ne) y las plantas sin cbd o con cbd alto($nin)*/
db.cultivo.find({$and:[{"genetica.tipo":{$ne:"indica"}},{cbd:{$nin:["bajo"]}}]});
/*Filtra las plantas que no empiezen por la letra "G" y que no tengan un precio menor o igual a 15 y que no sean de predominancia semi(hibrida)*/
 db.cultivo.find({$and:[{planta:{$not:{$regex:"^G.*"}}},{$nor:[{precio:{$lte:15}},{"genetica.Predominancia":{$eq:"semi"}}]}]});
/*Filtra las plantas por las etiquetas implementadas para que sea mas facil la busqueda s:(Sativa) d:(Dominante) n:(cbd:none)*/
 db.cultivo.find({etiquetas:["s","d","n"]});
/*Filtra las plantas de genetica tipo indica y cosechadas a partir de mayo*/
 db.cultivo.find({$and:[{"genetica.tipo":{$eq:"indica"}},{cosecha:{$gt: new Date("2020,5,0")}}]});
/*Filtra las plantas de mas barata a mas cara*/
db.cultivo.find({precio:{$gt:0}}).sort({precio:1});
/*Filtra las plantas sativas con thc mayor al 15% con cbd none cosechadas antes de mayo y ordenadas por fecha*/
 db.cultivo.find({$and:[{"genetica.tipo":{$eq:"sativa"}},{thc:{$gt:15}},{cosecha:{$lt: new Date("2020,5,0")}}]}).sort({cosecha:1});
/*Filtra las plantas en stock por orden alfabetico*/
db.cultivo.find({stock:true}).sort({planta:1});
/*filtra las plantas en stock de mas cara a mas barata*/
db.cultivo.find({stock:true}).sort({precio:-1});
/*filtra las plantas con cbd alto o bajo cosechadas en agosto*/
db.cultivo.find({$and:[{cbd:{$in:["alto","bajo"]}},{cosecha:{$lt:new Date("2020,9,0")}},{cosecha:{$gt:new Date("2020,8,0")}}]});