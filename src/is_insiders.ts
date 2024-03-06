
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const isInsiders = (): boolean => {

  return !!vscode.env.appName.match ( /insiders/i );

};

/* EXPORT */

export default isInsiders;
