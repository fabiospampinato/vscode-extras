
/* IMPORT */

import path from 'node:path';
import vscode from 'vscode';

/* MAIN */

const isInsidePath = ( targetPath: string, basePath: string ): boolean => {

  const relativePath = path.relative ( basePath, targetPath );

  return !relativePath.startsWith ( '..' ) && !path.isAbsolute ( relativePath );

};

const isObject = ( value: unknown ): value is object => {

  return ( typeof value === 'object' && value !== null );

};

const isUri = ( value: unknown ): value is vscode.Uri => {

  return ( value instanceof vscode.Uri );

};

/* EXPORT */

export {isInsidePath, isObject, isUri};
