
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const getProjectRootPaths = (): string[] => {

  return vscode.workspace.workspaceFolders?.map ( folder => folder.uri.fsPath ) || [];

};

/* EXPORT */

export default getProjectRootPaths;
