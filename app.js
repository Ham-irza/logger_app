const express = require('express')
const router = express.Router()
const User = require('../models/User');

router.get('/:id', async (req, res) => {

    try {
        const{id} = req.params;

        const user = await User.findById(id);

        if(!user) {
            return res.status(404).json({

                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
);

router.post('/products', async(req, res) => {
    const {name, price} = req.body;

    if(!name || name.length < 3){
        return res.status(400).json({
            message: "name is invalid"
        })
    }

    if(typeof price !== 'number' || price <= 0){
        return res.status(400).json({
            message: "price is invalid"
        })
    }

    try {
        const newProduct = await Product.create({name, price});
        res.status(201).json(newProduct)
    }
    catch(error){
        res.status(500).json({
            message: "failed to save new product"
        })
    }
})


router.patch('/inventory/:itemId', async(req, res)=> {
    try{
        const {itemId} = req.params;
        const {adjustment} = req.body;

        const Item = await Item.findById(itemId);
        if(!item)
            return res.status(404).send("Item not found");

        if(item.stock + adjustment < 0){
            return res.status(400).json({
                message: "insufficient stock"
            })
        };

        item.stock += adjustment;
        await item.save()

        res.status(200).json({
            mesage: "update succesful",
            newTotal: item.stock
        })
    }
    catch(error){
        res.status(500).json({
            message: 'update failed'
        })
    }
})