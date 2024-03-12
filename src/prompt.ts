
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const prompt = {

  /* API */

  boolean: async ( message: string ): Promise<boolean> => {

    return await vscode.window.showInformationMessage ( message, 'Yes', 'No' ) === 'Yes';

  },

  password: async ( message: string, value?: string ): Promise<string | undefined> => {

    return await vscode.window.showInputBox ({ password: true, prompt: message, value } );

  },

  select: async <T extends string | vscode.QuickPickItem> ( message: string, values: T[] ): Promise<T | undefined> => {

    if ( !values.length ) return;

    return await vscode.window.showQuickPick ( values, { placeHolder: message } );

  },

  string: async ( message: string, value?: string ): Promise<string | undefined> => {

    return await vscode.window.showInputBox ({ placeHolder: message, value } );

  }

};

/* EXPORT */

export default prompt;
