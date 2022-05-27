interface IMenuOption {
  label: any;
  path: string;
  key: string | undefined;
  children?: IMenuOption[];
}

export type { IMenuOption };
