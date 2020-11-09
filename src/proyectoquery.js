/* Filtra las plantas con cbd bajo o sin cbd y de tipo sativa.*/
db.cultivo.find({$and:[{cbd:{$in:["none","bajo"]},"genetica.tipo":{$eq:"sativa"}}]});
/* Filtra las plantas indicas con genetica semi-indica (Hibrida) o las Plantas indicas que tengan mas de 29% de thc*/
db.cultivo.find({'genetica.tipo':{$eq:"indica"},$or:[{"genetica.Predominancia":{$eq:"semi"}},{thc:{$gt:29}}]});
/*Filtra las plantas con thc mayor o igual a 20 y que su precio sea menor a 17*/
db.cultivo.find({$and:[{precio:{$lt:17}},{thc:{$gte:23}}]})