//calculates CPC (CLICKS / IMPRESSIONS) & EPC (COST / CLICKS) & CONVERSION RATIO
export const divide = (dividend, divisor) => {
  return dividend / divisor
}

export const calculateRoi = (rev, cost) => {
  return rev - cost * 100
}
