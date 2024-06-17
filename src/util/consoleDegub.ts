export class ConsoleDevelopment {
  constructor() {}

  log(message: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }
  logInfo(message: any, ...optionalParams: any[]) {
    console.info(message, ...optionalParams);
  }
  logDebug(message: any, ...optionalParams: any[]) {
    console.debug(message, ...optionalParams);
  }
  logWar(message: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams);
  }
}
/*
*Para el uso poner la siguiente linea antes de la clase de donde se vaya a usar
const msg = new ConsoleDevelopment();
*/
