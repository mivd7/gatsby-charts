//calculates CPC (CLICKS / IMPRESSIONS) & EPC (COST / CLICKS) & CONVERSION RATIO
export const divide = (dividend, divisor) => {
  return dividend / divisor
}

export const calculateROI = (rev, cost) => {
  return rev - cost * 100
}
