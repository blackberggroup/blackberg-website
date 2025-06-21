export const formatCategory = cat =>
  cat
    .replace(/_/g, " ")                 // underscores → spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Title-case words
