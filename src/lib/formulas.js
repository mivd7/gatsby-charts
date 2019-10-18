//calculates CPC (CLICKS / IMPRESSIONS) & EPC (COST / CLICKS) & CONVERSION RATIO
export const divide = (dividend, divisor) => {
  return dividend / divisor
}

export const calculateRoi = (epc, cpc) => {
  const roi = (epc - cpc) / cpc
  return +roi.toFixed(2)
}
