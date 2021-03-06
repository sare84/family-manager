import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'content_copy'
  },
  {
    state: 'todo',
    name: 'Todos',
    type: 'link',
    icon: 'check_box'
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
