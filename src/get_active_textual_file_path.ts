
/* IMPORT */

import fs from 'node:fs';
import vscode from 'vscode';

/* MAIN */

const getActiveTextualFilePath = (): string | undefined => {

  const document = vscode.window.activeTextEditor?.document;

  if ( !document || document.isUntitled ) return;

  const textualFilePath = document.uri.fsPath;

  if ( !fs.existsSync ( textualFilePath ) ) return;

  return textualFilePath;

};

/* EXPORT */

export default getActiveTextualFilePath;
