export abstract class ApiInterface {
  abstract get: <T = unknown>(url: string) => Promise<T | null>;
}
