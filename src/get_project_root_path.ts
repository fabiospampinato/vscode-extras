
/* IMPORT */

import findUpPath from 'find-up-path';
import path from 'node:path';
import vscode from 'vscode';
import {isInsidePath} from './utils';

/* MAIN */

const getProjectRootPath = (): string | undefined => {

  const {activeTextEditor} = vscode.window;
  const {workspaceFolders} = vscode.workspace;

  const activeTextEditorPath = activeTextEditor?.document.uri.fsPath;

  if ( activeTextEditorPath && !activeTextEditor.document.isUntitled ) {

    /* FIND UP UNTIL WORKSPACE */

    if ( workspaceFolders ) {

      for ( const workspaceFolder of workspaceFolders ) {

        const workspaceFolderPath = workspaceFolder.uri.fsPath;

        if ( !isInsidePath ( activeTextEditorPath, workspaceFolderPath ) ) continue;

        return workspaceFolderPath;

      }

    }

    /* FIND UP UNTIL GIT */

    const gitPath = findUpPath ( '.git' );

    if ( gitPath ) {

      return path.dirname ( gitPath );

    }

  }

  /* FALLBACK */

  return workspaceFolders?.[0].uri.fsPath;

};

/* EXPORT */

export default getProjectRootPath;
