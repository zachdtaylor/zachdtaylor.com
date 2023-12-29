export function convertToMetaTags(metadata: { [key: string]: string }) {
  return Object.entries(metadata).map(([key, value]) => {
    if (key === "title") {
      return { title: value };
    }
    return { name: key, content: value };
  });
}
