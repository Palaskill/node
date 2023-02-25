let lastOrderId = 0;

function generateId(prefix) {
  const today = new Date();
  const year = today.getFullYear().toString().substr(-2);
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  if (lastOrderId === 999) {
    lastOrderId = 0;
  }
  lastOrderId++;
  const orderId = lastOrderId.toString().padStart(3, '0');
  return prefix.toUpperCase() + month + day + year + orderId;
}


console.log(generateId('AB'));
