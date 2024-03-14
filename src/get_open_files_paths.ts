
/* IMPORT */

import fs from 'node:fs';
import vscode from 'vscode';
import {isObject, isUri} from './utils';

/* MAIN */

const getOpenFilesPaths = (): string[] => {

  const filesPaths: string[] = [];

  for ( const tabGroup of vscode.window.tabGroups.all ) {

    for ( const tab of tabGroup.tabs ) {

      const input = tab.input;

      if ( !isObject ( input ) || !( 'uri' in input ) ) continue;

      const uri = input.uri;

      if ( !isUri ( uri ) ) continue;

      const filePath = uri.fsPath;

      if ( !fs.existsSync ( filePath ) ) continue;

      filesPaths.push ( filePath );

    }

  }

  return filesPaths;

};

/* EXPORT */

export default getOpenFilesPaths;
