
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const alert = {

  /* API */

  error: ( message: string ): void => {

    vscode.window.showErrorMessage ( message );

  },

  info: ( message: string ): void => {

    vscode.window.showInformationMessage ( message );

  },

  warn: ( message: string ): void => {

    vscode.window.showWarningMessage ( message );

  }

};

/* EXPORT */

export default alert;
