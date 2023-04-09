const Sale = require('../models/sales');
exports.createSale = async (req, res) => { 
    const { products, user } = req.body;
    try{
        const sale = new Sale({ products, user });
        await sale.save();
        res.status(201).json(sale);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'})
    }
};
exports.getSales = async (req, res) => {
    try{
        const sales = await Sale.find().populate('user').populate('products');
        res.status(200).json({sales});
    }catch (error){
        console.error(error);
        res.status(500).json({message: ' error interno del servidor'})
    }
};
exports.getSale = async (req, res) => {
    const { id } = req.params;
    try{
        const sale = await Sale.findById(id).populate('user').populate('products');
        if (!sale){
            return res.status(404).json({ message: 'venta no encontrada'})
        }
        res.status(200).json({sale});
    }catch (error){
        console.error(error);
        res.status(500).json({message: ' error interno del servidor'})
    }
};
exports.updateSale = async (req, res) => {
    const {id} = req.params;
    const { products, user } = req.body;
    try{
        const sale = await Sale.findByIdAndUpdate(id, { products, user, quantity }, { new: true });
        if (!sale){
            return res.status(404).json({ message: 'venta no encontrada'})
        }
        res.status(200).json({sale});
    }catch (error){
        console.error(error);
        res.status(500).json({message: ' error interno del servidor'})
    }
};
exports.deleteSale = async (req, res) => {
    const { id } = req.params;
    try{
        const sale = await Sale.findByIdAndDelete(id);
        if (!sale){
            return res.status(404).json({ message: 'venta no encontrada'})
        }
        res.status(200).json({ message : 'venta eliminada'});
    }catch (error){
        console.error(error);
        res.status(500).json({message : ' error borrando venta'});
    }
};