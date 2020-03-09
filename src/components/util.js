export function max(list) {
  return Math.max.apply(null, list.filter(item => !isNaN(item)))
}

export function map(list, fn) {
  return Array.prototype.map.call(list, fn)
}

export function isEmpty(item) {
  return item.length === 0
}