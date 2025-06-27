export function formatCategory(slug = "") {
  return slug
    .split("_")
    .map(word => {
      const lower = word.toLowerCase();

      if (lower === "and") return "&";

      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}
