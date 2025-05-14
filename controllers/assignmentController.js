import Assignment from '../models/Assignment.js';
import Asset from '../models/Asset.js';

export const createAssignment = async (req, res) => {
  const { assetId, assignedTo, quantity, status } = req.body;
  try {
    const assignment = await Assignment.create({ assetId, assignedTo, quantity, status });
    res.status(201).json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll({ include: Asset });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
