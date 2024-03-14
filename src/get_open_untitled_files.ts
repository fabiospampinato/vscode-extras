
/* IMPORT */

import vscode from 'vscode';
import type {File} from './types';

/* MAIN */

const getOpenUntitledFiles = (): File[] => {

  const files: File[] = [];

  for ( const {document} of vscode.window.visibleTextEditors ) {

    if ( !document.isUntitled ) continue;

    const path = document.uri.fsPath;
    const content = document.getText ();
    const file: File = { path, content };

    files.push ( file );

  }

  return files;

};

/* EXPORT */

export default getOpenUntitledFiles;
