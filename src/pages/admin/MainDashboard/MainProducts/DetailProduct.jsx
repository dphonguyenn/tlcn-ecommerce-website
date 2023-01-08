import React, {useState, useEffect} from 'react'
import { Container, Box, Button, Grid, Modal, Typography } from '@mui/material';
import {fetchDeviceDetail} from '~/apis/index'

export default function DetailProduct(props) {
    let type = localStorage.getItem('selectedTypeProduct');
    const [ data, setData ] = useState([])
    const {idProduct,handleCloseModalDetail} = props;

    const getDetailProduct = async () => {
        console.log('type >>>>>>>> ', idProduct)
        const response = await fetchDeviceDetail(type, idProduct);
        console.log('response', response);
        if(response) {
            setData(response);
        }
    }

    useEffect(() => {
        getDetailProduct();
    },[idProduct, type])

    console.log(data);
  return (
    <div>
    <Container>
        <div className="detailModal">
                <div className="imgDetailProduct">
                    <img className ='imgHolder' src={data?.img?.[0]} alt="anh san pham" />
                </div>

                <div className="infoProduct">
                    <div className ='labelProduct'>Tên Sản Phẩm</div>
                    <input value={data?.name} className= 'fillDetailProduct'/>
                </div>
                <div className="infoProduct">
                    <div className ='labelProduct'>Giá Gốc</div>
                    <input value={data?.original_price} className= 'fillDetailProduct'/>
                </div>
                <div className="infoProduct">
                    <div className ='labelProduct'>Sale</div>
                    <input value={`${data?.sale}%`} className= 'fillDetailProduct'/>
                </div>
                <div className="infoProduct">
                    <div className ='labelProduct'>Số Lượng</div>
                    <input value={data?.quantity} className= 'fillDetailProduct'/>
                </div>

                <div className="infoProduct">
                    <div className ='labelProduct'>Loại</div>
                    <input value={data?.type} className= 'fillDetailProduct'/>
                </div>

              
                <div className="bottomMOdalProduct">
                    <Button  >
                        <Typography>Cập Nhật</Typography>
                    </Button>

                    <Button onClick={handleCloseModalDetail} >
                        <Typography>Hủy</Typography>
                    </Button>
                </div>
        </div>
      </Container>

    </div>
  )
}
