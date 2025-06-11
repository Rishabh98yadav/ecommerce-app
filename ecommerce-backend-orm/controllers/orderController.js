const { Order, OrderItem, Product, User } = require('../models');

const placeOrder = async (req, res) => {
  const userId = req.user.id;
  const { customer_name, customer_email, customer_address, items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  try {
    const order = await Order.create({
      userId,
      customer_name,
      customer_email,
      customer_address,
    });

    const orderItems = items.map(item => ({
      orderId: order.id,
      productId: item.product_id,
      quantity: item.quantity,
    }));

    await OrderItem.bulkCreate(orderItems);

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ error: 'Failed to place order' });
  }
};

const getOrderHistory = async (req, res) => {
  const userId = req.user.id;
  try {
    const orders = await Order.findAll({
      where: { userId },
      include: [{
        model: OrderItem,
        include: [Product]
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch order history' });
  }
};

module.exports = { placeOrder, getOrderHistory };
