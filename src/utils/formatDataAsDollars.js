export const formatAsDollars = (price) => {
    const dollarsAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(price));
    return dollarsAmount;
};
