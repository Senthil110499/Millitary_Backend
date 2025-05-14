import Purchase from '../models/Purchase.js';
import Asset from '../models/Asset.js';

export const createPurchase = async (req, res) => {
  const { assetId, quantity, date } = req.body;
  try {
    const purchase = await Purchase.create({ assetId, quantity, date });
    res.status(201).json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.findAll({ include: Asset });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};