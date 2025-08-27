export function driveToDirectMp4(url: string) {
  const byPath = url.match(/\/file\/d\/([^/]+)/);
  const byQuery = url.match(/[?&]id=([^&]+)/);
  const id = byPath?.[1] || byQuery?.[1];
  return id ? `https://drive.google.com/uc?export=download&id=${id}` : url;
}
