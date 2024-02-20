import copy from "copy-to-clipboard";

export function shareToX(title: string, desc: string, url: string) {
  console.log(title, desc, url);
  const text = `${encodeURIComponent(title)}%0a${encodeURIComponent(desc)}%0a`;
  const intentUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(intentUrl, "_blank");
}

// 将指定文本复制到剪贴板
// 使用剪贴板 api
export function copyToClipboard(text: string) {
  copy(text);
}

// 格式化 Github stars
export function formatStars(stars: number) {
  if (stars > 1000) {
    return (stars / 1000).toFixed(1) + "k";
  }
  return stars;
}
