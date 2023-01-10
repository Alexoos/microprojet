const zipper = require("zip-local");
const fs = require('fs');


const unzip = (CheminDuFichierADeziper,cheminDestination) =>{
  let maDate1 =  new Date();
  let maDate3 = maDate1.getFullYear()+"/"+maDate1.getMonth()+1+"/"+maDate1.getDate()+" "+maDate1.getHours()+":"+maDate1.getMinutes()+":"+maDate1.getSeconds();
    try {
        zipper.sync.unzip(CheminDuFichierADeziper).save(cheminDestination);
        fs.appendFileSync('Log.txt', maDate3 +'   Dézipage Réussie !\r');
      } catch (err) {
        fs.appendFileSync('Log.txt', maDate3 +'   Erreur : ' + err +'\r');
      }
}

const sauvegarde = (cheminDepart,cheminDestination) =>{
  let maDate1 =  new Date();
  let maDate2 = maDate1.getFullYear()+"-"+maDate1.getDate()+"-"+maDate1.getMonth()+1;
  let maDate3 = maDate1.getFullYear()+"/"+maDate1.getMonth()+1+"/"+maDate1.getDate()+" "+maDate1.getHours()+":"+maDate1.getMinutes()+":"+maDate1.getSeconds();
  try {
      zipper.sync.zip(cheminDepart).compress().save('./'+cheminDestination+'/BUP-'+maDate2+'.tar.gz');
      fs.appendFileSync('Log.txt', maDate3 +'   Sauvegarde Réussite !\r');
    } catch (err) {
      fs.appendFileSync('Log.txt', maDate3 +'   Erreur : ' + err +'\r');
    }
  }

const miniteurSauvegarde = (cheminDepart,cheminDestination) => {
  setInterval(() => {
      sauvegarde(cheminDepart,cheminDestination);
  },10000);
}



miniteurSauvegarde("Depart","Arrive");
//unzip("Arrive/BUP-2023-8-01.tar.gz","Unzip");

module.exports = {unzip,sauvegarde,miniteurSauvegarde};