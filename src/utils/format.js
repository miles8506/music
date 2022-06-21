export function formatCount(count) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '萬'
  } else {
    return Math.floor(count / 10000000) / 10 + '億'
  }
}

export function formatImageSize(url, size) {
  return `${url}?param=${size}x${size}`
}
