
/* IMPORT */

import getActiveBinaryFilePath from './get_active_binary_file_path';
import getActiveTextualFilePath from './get_active_textual_file_path';

/* MAIN */

const getActiveFilePath = (): string | undefined => {

  return getActiveBinaryFilePath () || getActiveTextualFilePath ();

};

/* EXPORT */

export default getActiveFilePath;
