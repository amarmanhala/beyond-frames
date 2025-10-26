export const slugify = (text: string): string => {
  return text
    .toLowerCase()                  // "Dancing Girl" → "dancing girl"
    .trim()                          // Remove extra spaces
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')       // Remove special characters
    .replace(/\-\-+/g, '-');        // Replace multiple hyphens with single
};