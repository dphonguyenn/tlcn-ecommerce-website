import React, {useState, useEffect} from 'react'
import { Container, Box, Button, Grid, Modal, Typography } from '@mui/material';
import {fetchDeviceDetail} from '~/apis/index'
import {updateProduct,deleteProduct} from '~/apis/admin/index'

export default function DetailProduct(props) {
    let type = localStorage.getItem('selectedTypeProduct');
    const [ state, setState ] = useState({
        data: [],
        name: '',
        quantity: 0,
        sale: 0,
        img: [],
        color: '',
        original_price: 0,
        sku: '',
    });
    const {idProduct="",handleCloseModalDetail, refetchData} = props;

    const getDetailProduct = async () => {
        console.log('type >>>>>>>> ', idProduct)
        const response = await fetchDeviceDetail(type, idProduct);
        console.log('response', response);
        if(response) {
            setState({...state,data:response});
        }
    }

    useEffect(() => {
        getDetailProduct();
    },[idProduct, type])

    const handleProduct = async () => {
        if(idProduct) {
            const body = {
                _id: state?.data?._id,
                name: state?.name === "" ? state?.data?.name : state?.name ,
                quantity: state?.quantity == 0 ? state?.data?.quantity : state?.quantity,
                sale: state?.sale == 0 ? state?.data?.sale : state?.sale,
                type: state?.type,
                original_price: state?.original_price == 0 ? state?.data?.original_price : state?.original_price,
                sale_price: Number(state?.original_price - (state?.original_price * (state?.sale/100))),
                sku: state?.sku === '' ? state?.data?.sku : state?.sku,
                type_product: type
            }
            const response = await updateProduct(body);
            if (response) {
                refetchData()
                handleCloseModalDetail()
            }

        } else {

        }
    }

    const handleDeleteProduct = async () => {
        const response = await deleteProduct({
            type_product:type,
            _id:state?.data?._id
        })
        if (response?.statusCode == 200) {
            refetchData()
            handleCloseModalDetail()
        }
    }

  return (
    <div>
    <Container>
        <div className="detailModal">
               
                <div className="infoProduct">
                    <div className ='labelProduct'>Tên Sản Phẩm</div>
                    <input defaultValue={state?.data?.name} className= 'fillDetailProduct' onChange={(e)=>setState({...state,name:e.target.value})}/>
                </div>

                <div className="infoProduct">
                    <div className ='labelProduct'>Tên Viết Tắt</div>
                    <input defaultValue={state?.data?.sku} className= 'fillDetailProduct' onChange={(e)=>setState({...state,sku:e.target.value})}/>
                </div>

                <div className="infoProduct">
                    <div className ='labelProduct'>Giá Gốc</div>
                    <input defaultValue={state?.data?.original_price} className= 'fillDetailProduct'  onChange={(e)=>setState({...state,original_price:Number(e.target.value)})}/>
                </div>
                <div className="infoProduct">
                    <div className ='labelProduct'>Sale</div>
                    <input defaultValue={`${state?.data?.sale}%`} className= 'fillDetailProduct'  onChange={(e)=>setState({...state,sale:Number(e.target.value)})}/>
                </div>
                <div className="infoProduct">
                    <div className ='labelProduct'>Số Lượng</div>
                    <input defaultValue={state?.data?.quantity} className= 'fillDetailProduct'  onChange={(e)=>setState({...state,quantity:Number(e.target.value)})}/>
                </div>

                <div className="infoProduct">
                    <div className ='labelProduct'>Loại</div>
                    <input value={state?.data?.type} className= 'fillDetailProduct'/>
                </div>

              
                <div className="bottomMOdalProduct">
                    <Button onClick={handleProduct}  >
                        <Typography>Cập Nhật</Typography>
                    </Button>

                    <Button onClick={handleCloseModalDetail} >
                        <Typography>Hủy</Typography>
                    </Button>

                    <Button onClick={handleDeleteProduct} >
                        <Typography>Xóa </Typography>
                    </Button>
                </div>
                <div className="imgDetailProduct">
                    {state?.data?.img?.map((p, index) => {
                        return <img className ='imgHolder' key={index} src={p} alt="anh san pham" />
                    })}
                </div>
        </div>
      </Container>

    </div>
  )
}
