import type { RouteMeta } from "vue-router";

interface IRouteRecord {
  path: string;
  name?: string;
  component: any;
  redirect?: string;
  children?: IRouteRecord[];
  meta?: RouteMeta;
  hidden?: boolean;
}

export type { IRouteRecord };
