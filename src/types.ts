
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

type File = {
  path: string,
  content: string
};

type TabKTypeConstructorOf<T> = {
  new ( uri: vscode.Uri ): T
};

type TabType = (
  TabKTypeConstructorOf<vscode.TabInputCustom> |
  TabKTypeConstructorOf<vscode.TabInputNotebook> |
  TabKTypeConstructorOf<vscode.TabInputNotebookDiff> |
  TabKTypeConstructorOf<vscode.TabInputTerminal> |
  TabKTypeConstructorOf<vscode.TabInputText> |
  TabKTypeConstructorOf<vscode.TabInputTextDiff> |
  TabKTypeConstructorOf<vscode.TabInputWebview>
);

/* EXPORT */

export type {File, TabType};
