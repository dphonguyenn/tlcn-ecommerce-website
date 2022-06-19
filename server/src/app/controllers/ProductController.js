import { LaptopModel } from "../models/LaptopModel.js";
import { MonitorModel } from "../models/MonitorModel.js";
import { KeyboardModel } from "../models/KeyboardModel.js";
var use_inside = false;
const collections = [
    {
        name: LaptopModel.collection.collectionName,
        model: LaptopModel
    },
    {
        name: MonitorModel.collection.collectionName,
        model: MonitorModel
    },
    {
        name: KeyboardModel.collection.collectionName,
        model: KeyboardModel
    }
];

// * [GET] "/"
export const getLaptops = async (req, res, next) => {
    try {
        const laptops = await LaptopModel.find();
        const convert_laptops = laptops.map(laptop => {
            return {
                ...JSON.parse(JSON.stringify(laptop)),
                original_price: parseFloat(laptop.original_price),
                sale: parseFloat(laptop.sale),
                sale_price: parseFloat(laptop.original_price) * (1 - parseFloat(laptop.sale) / 100)
            }
        });
        res.status(200).json(convert_laptops);
    } catch (error) {
        res.status(500).json({ error: error });    
    }
}

// * [GET] product/:type_product
export const getProductsFollowType = async (req, res, next) => {
    let _index;
    collections.map((collection, index) => {
        if (collection.name === req.params.type_product) {
            _index = index
        }
    });
    
    try {
        const devices = await collections[_index].model.find();
        const convert_devices = devices.map(device => {
            return {
                ...JSON.parse(JSON.stringify(device)),
                original_price: parseFloat(device.original_price),
                sale: parseFloat(device.sale),
                sale_price: parseFloat(device.original_price)*(1-parseFloat(device.sale)/100)
            } 
        })
        if (use_inside === true) {
            return convert_devices;
        }
        else {
            res.status(200).json(convert_devices);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

// * [GET] product/:type_product/:id_product
export const getDetailedProduct = async (req, res, next) => {
    try {
        use_inside = true;
        const devices = await getProductsFollowType(req, res, next, true);
        if (devices) {
            use_inside = false;
            const respond_device = devices.find(device => device._id === req.params.id_product);
            res.status(200).json(respond_device);
        }
        // output: _ { type_product: laptop, name_product: acer }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}