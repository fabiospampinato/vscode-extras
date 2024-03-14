
/* IMPORT */

import vscode from 'vscode';
import type {File} from './types';

/* MAIN */

const getOpenUntitledFiles = (): File[] => {

  const files: File[] = [];
  const filesIdsSet = new Set<string> ();

  for ( const document of vscode.workspace.textDocuments ) {

    if ( !document.isUntitled ) continue;

    const id = document.uri.toString ();
    const path = document.uri.fsPath;
    const content = document.getText ();
    const file: File = { path, content };

    if ( filesIdsSet.has ( id ) ) continue;

    files.push ( file );
    filesIdsSet.add ( id );

  }

  return files;

};

/* EXPORT */

export default getOpenUntitledFiles;
