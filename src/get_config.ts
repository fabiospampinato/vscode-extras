
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const getConfig = <T = Record<string, any>> ( extension: string ): T | undefined => {

  return vscode.workspace.getConfiguration ().get<T> ( extension );

};

/* EXPORT */

export default getConfig;
