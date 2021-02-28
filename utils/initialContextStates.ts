import type { FileSystemContextState } from 'types/contexts/fileSystem';
import type { ProcessContextState } from 'types/contexts/process';
import type { SessionContextState } from 'types/contexts/session';

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};