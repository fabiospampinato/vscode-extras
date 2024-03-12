
/* IMPORT */

import findUp from 'find-up-json';
import getPackageRootPath from './get_package_root_path';
import type {Result} from 'find-up-json';

/* MAIN */

const getPackage = (): Result | undefined => {

  const rootPath = getPackageRootPath ();

  if ( !rootPath ) return;

  const pkg = findUp ( 'package.json', rootPath );

  return pkg;

};

/* EXPORT */

export default getPackage;
