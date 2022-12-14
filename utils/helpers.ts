export const groupBy = function (xs: any, key: string): {[index: string]: any[]} {
  return xs.reduce(function (rv: any, x: any) {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
