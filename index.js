const zipper = require("zip-local");
const fs = require('fs');


const dezip = (CheminDuFichierADeziper,cheminDestination) =>{
    try {
        zipper.sync.unzip(CheminDuFichierADeziper).save(cheminDestination);
        console.log('Dezipage Réussi !')
      } catch (err) {
        console.error(err)
      }
}

const sauvegarde = (cheminDepart,cheminDestination) =>{
  let maDate1 =  new Date();
  let maDate2 = maDate1.getFullYear()+"-"+maDate1.getDate()+"-"+maDate1.getMonth()+1;
  try {
      zipper.sync.zip(cheminDepart).compress().save('./'+cheminDestination+'/BUP-'+maDate2+'.tar.gz');
      console.log('Sauvegarde Réussite !')
    } catch (err) {
      console.error(err)
    }
  }

const miniteurSauvegarde = (cheminDepart,cheminDestination) => {
  setInterval(() => {
    try {
      sauvegarde(cheminDepart,cheminDestination);
      console.log('Sauvegarde Réussite !');
  } catch (err) {
      console.error(err)
  }
  },5000);
}



miniteurSauvegarde("Depart","Arrive");
//dezip("Arrive/BUP-2023-8-01.tar.gz","Unzip");
