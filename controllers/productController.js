const Product = require ('../models/product');

async function createProduct(req,res){
    try {
        const {name, price, description} = req.body;
        if (!name || !price || !description ){
            return res.status(400).json({message: 'faltan los campos requeridos'});
        }
        const product = new Product({name, price, description});
        await product.save();
        res.status(201).json(product);
    }catch (error){
        console.error(error);
        res.status(500).json({message: ' error interno del servidor'})
    }
    
};
async function getProducts(req, res){
    try{
        const products= await Product.find();
        res.json(products)
    }
    catch(error){
        console.error(error);
        res.status(500).json({ messsage: 'error de servidor interno'})
    }
};
async function getProduct(req, res){
    try{
        const product = await Product.findById(req.params.id);
        if (!product){
            return res.status(404).json({ message: 'producto no encontrado'})
        }
        res.json(product);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'error interno del servidor'});
    }
};
async function updateProduct(req, res){
    try{
        const { name, price, description } = req.body;
        if(!name || !price || !description ){
            return res.status(400).json({ message: 'campos requeridos faltantes'});
        }
        const product = await Product.findById(req.params.id);
        if (!product){
            return res.status(404).json({ message: 'producto no encontrado'});
        }
        product.name = name;
        product.price = price;
        product.description = description;
        await product.save();
        res.json(product);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'error interno del servidor'});
    }
}
//funcion para eliminar un producto
async function deleteProduct(req,res){
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({ message: 'producto no encontrado'})
        }
        await Product.deleteOne({_id: req.params.id});
        res.json({ message: 'Producto eliminado'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'error interno del servidor'});

    }
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};