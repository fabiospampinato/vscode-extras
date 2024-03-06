
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const getActiveTextFilePath = (): string | undefined => {

  const document = vscode.window.activeTextEditor?.document;

  if ( !document || document.isUntitled ) return;

  const filePath = document.uri.fsPath;

  return filePath;

};

/* EXPORT */

export default getActiveTextFilePath;
