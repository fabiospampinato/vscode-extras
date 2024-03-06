
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const isInsiders = (): boolean => {

  return /insiders/i.test ( vscode.env.appName );

};

/* EXPORT */

export default isInsiders;
