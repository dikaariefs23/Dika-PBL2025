const db = require('../config/db');

exports.getAllOrders = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM orders');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
