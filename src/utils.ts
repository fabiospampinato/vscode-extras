
/* IMPORT */

import path from 'node:path';

/* MAIN */

const isInsidePath = ( targetPath: string, basePath: string ): boolean => {

  const relativePath = path.relative ( basePath, targetPath );

  return !relativePath.startsWith ( '..' ) && !path.isAbsolute ( relativePath );

};

/* EXPORT */

export {isInsidePath};
