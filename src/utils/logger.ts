export const logger = (message: string, type: "info" | "error" = "info") => {
  console[type](message);
};
