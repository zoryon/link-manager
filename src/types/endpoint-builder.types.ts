export type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type QueryFn<Path extends string> = (params: Record<string, string | number | undefined>) => string;

export type Endpoint<Path extends string, Method extends HTTPMethod> = {
  path: Path;
  method: Method;
  query: QueryFn<Path>;
};