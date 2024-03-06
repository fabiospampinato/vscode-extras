
/* IMPORT */

import findUpPath from 'find-up-path';
import path from 'node:path';
import {isInsidePath} from './utils';
import getActiveFilePath from './get_active_file_path';
import getProjectRootPaths from './get_project_root_paths';

/* MAIN */

const getProjectRootPath = (): string | undefined => {

  const filePath = getActiveFilePath ();
  const folderPaths = getProjectRootPaths ();

  if ( filePath ) {

    /* FIND UP UNTIL WORKSPACE */

    for ( const folderPath of folderPaths ) {

      if ( isInsidePath ( filePath, folderPath ) ) {

        return folderPath;

      }

    }

    /* FIND UP UNTIL .GIT */

    const parentPath = path.dirname ( filePath );
    const gitPath = findUpPath ( '.git', parentPath );

    if ( gitPath ) {

      return path.dirname ( gitPath );

    }

    /* FIND UP UNTIL PACKAGE.JSON */

    const packagePath = findUpPath ( 'package.json', parentPath );

    if ( packagePath ) {

      return path.dirname ( packagePath );

    }

  }

  /* FALLBACK */

  return folderPaths[0];

};

/* EXPORT */

export default getProjectRootPath;
