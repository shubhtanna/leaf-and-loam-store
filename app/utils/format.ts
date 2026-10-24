export const inr = (n: number) => '₹' + Number(n).toLocaleString('en-IN')
export const pctOff = (price: number, mrp: number) => (mrp > price ? Math.round((1 - price / mrp) * 100) : 0)
