//used for CPC (CLICKS / IMPRESSIONS) & EPC (COST / CLICKS) & CONVERSION RATIO
export const divide = (dividend, divisor) => {
    return dividend / divisor
}

//used for ROI
export const calculateROI = (rev, cost) => {
    return (rev - cost) * 100
}