
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const getActiveFileLanguage = (): string | undefined => {

  return vscode.window.activeTextEditor?.document.languageId;

};

/* EXPORT */

export default getActiveFileLanguage;
