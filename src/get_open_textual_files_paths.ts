
/* IMPORT */

import fs from 'node:fs';
import vscode from 'vscode';

/* MAIN */

const getOpenTextualFilesPaths = (): string[] => {

  const filesPaths: string[] = [];

  for ( const {document} of vscode.window.visibleTextEditors ) {

    if ( document.isUntitled ) continue;

    const textualFilePath = document.uri.fsPath;

    if ( !fs.existsSync ( textualFilePath ) ) continue;

    filesPaths.push ( textualFilePath );

  }

  return filesPaths;

};

/* EXPORT */

export default getOpenTextualFilesPaths;
