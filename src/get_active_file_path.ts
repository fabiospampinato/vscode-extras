
/* IMPORT */

import getActiveBinaryFilePath from './get_active_binary_file_path';
import getActiveTextualFilePath from './get_active_textual_file_path';

/* MAIN */

const getActiveFilePath = (): string | undefined => {

  return getActiveTextualFilePath () || getActiveBinaryFilePath ();

};

/* EXPORT */

export default getActiveFilePath;
