const fse = require('fs-extra');
const zlib = require('zlib') ;

function  sauvegarde (cheminDepart, cheminDestination){
    let laDate =  new Date(); 
    try {
        fse.copySync(cheminDepart, cheminDestination+'BUP-'+laDate.now()+'.tgz', { overwrite: true|false })
        console.log('Réussite !')
      } catch (err) {
        console.error(err)
      }
}

sauvegarde("TEST","Arrive");
