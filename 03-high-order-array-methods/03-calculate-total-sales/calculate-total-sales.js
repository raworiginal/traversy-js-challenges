function calculateTotalSalesWithTax(products, taxRate) {
  let totalSale = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  totalSale += (totalSale * taxRate) / 100;
  return totalSale;
}

module.exports = calculateTotalSalesWithTax;
