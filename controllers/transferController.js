import Transfer from '../models/Transfer.js';
import Asset from '../models/Asset.js';
import Base from '../models/Base.js';

export const createTransfer = async (req, res) => {
  const { assetId, fromBaseId, toBaseId, quantity, date } = req.body;
  try {
    const transfer = await Transfer.create({ assetId, fromBaseId, toBaseId, quantity, date });
    res.status(201).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.findAll({
      include: [
        { model: Asset },
        { model: Base, as: 'fromBase' },
        { model: Base, as: 'toBase' }
      ]
    });
    res.json(transfers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};