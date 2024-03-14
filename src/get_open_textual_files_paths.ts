
/* IMPORT */

import fs from 'node:fs';
import vscode from 'vscode';

/* MAIN */

const getOpenTextualFilesPaths = (): string[] => {

  const filesPaths: string[] = [];
  const filesPathsSet = new Set<string> ();

  for ( const {document} of vscode.window.visibleTextEditors ) {

    if ( document.isUntitled ) continue;

    const textualFilePath = document.uri.fsPath;

    if ( filesPathsSet.has ( textualFilePath ) ) continue;
    if ( !fs.existsSync ( textualFilePath ) ) continue;

    filesPaths.push ( textualFilePath );
    filesPathsSet.add ( textualFilePath );

  }

  return filesPaths;

};

/* EXPORT */

export default getOpenTextualFilesPaths;
