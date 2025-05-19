import { API_CONFIG, API_BASE } from "@/constants";
import { ApiTree } from "@/types";

const queryBuilder = <Path extends string>(path: Path) => (params: Record<string, string | number | undefined>) => {
  const search = new URLSearchParams();
  for (const [k, v] of Object.entries(params || {})) {
    if (v !== undefined && v !== null) search.append(k, String(v));
  }
  return search.toString() ? `${path}?${search.toString()}` : path;
};

function buildApi<T>(config: T, parentPath: string = API_BASE): ApiTree<T> {
  const node = {} as any;
  for (const key in config) {
    const value = (config as any)[key];
    if (typeof value === "function") {
      node[key] = (...args: any[]) => buildApi(value(...args), parentPath);
    } else if (typeof value === "object" && value && "path" in value && "method" in value) {
      const fullPath = `${parentPath}${value.path}`;
      node[key] = {
        path: fullPath,
        method: value.method,
        query: queryBuilder(fullPath)
      };
    } else if (typeof value === "object") {
      node[key] = buildApi(value, parentPath);
    }
  }
  return node;
}

// Type-safe API tree!
export const api = buildApi(API_CONFIG) as ApiTree<typeof API_CONFIG>;