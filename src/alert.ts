
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const alert = {

  /* API */

  error: ( message: string ): undefined => {

    vscode.window.showErrorMessage ( message );

  },

  info: ( message: string ): undefined => {

    vscode.window.showInformationMessage ( message );

  },

  warn: ( message: string ): undefined => {

    vscode.window.showWarningMessage ( message );

  }

};

/* EXPORT */

export default alert;
