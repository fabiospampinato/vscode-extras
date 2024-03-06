
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const getActiveTextualFilePath = (): string | undefined => {

  const document = vscode.window.activeTextEditor?.document;

  if ( !document || document.isUntitled ) return;

  const filePath = document.uri.fsPath;

  return filePath;

};

/* EXPORT */

export default getActiveTextualFilePath;
