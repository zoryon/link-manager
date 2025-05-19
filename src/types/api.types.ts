import { Endpoint, HTTPMethod } from "@/types/endpoint-builder.types";

export type ApiResponse<T = any> = {
  success: boolean;
  message: string;
  data: T;
};

export interface HandlerConfig {
  exposeErrors: boolean;
}

export type ApiTree<T> = {
  [K in keyof T]:
  T[K] extends (...args: infer Args) => infer R
  ? (...args: Args) => ApiTree<R>
  : T[K] extends { path: infer P extends string, method: infer M extends HTTPMethod }
  ? Endpoint<P, M>
  : ApiTree<T[K]>
};