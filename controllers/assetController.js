import Base from '../models/Base.js';
import Asset from '../models/Asset.js';

export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll({ include: Base });
    res.json(assets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createAsset = async (req, res) => {
  const { name, type, quantity, baseId } = req.body;
  try {
    const asset = await Asset.create({ name, type, quantity, baseId });
    res.status(201).json(asset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};