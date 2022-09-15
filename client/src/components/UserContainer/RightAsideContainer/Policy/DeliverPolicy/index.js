import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { Typography } from '@mui/material';
import { BiHeadphone } from 'react-icons/bi';

function Deliver() {
  return (
    <div style={{ padding: '24px 16px' }}>
      <div>
        <BsTruck
          style={{
            width: '60px',
            height: '60px',
            color: '#0065EE'
          }}
        />
        <h1>Chính sách vận chuyển</h1>
      </div>
      <h2>I. Chính sách vận chuyển và giao nhận</h2>
      <Typography>Lapdarker hỗ trợ vận chuyển toàn quốc dưới 2 hình thức:</Typography>
      <ul style={{ listStyleType: 'decimal', marginBottom: '12px' }}>
        <li style={{ marginBottom: '12px' }}>
          Giao hàng tận nơi, thanh toán khi nhận hàng (COD)
          <ul style={{ listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px', marginTop: '12px' }}>
              Đối với hình thức này bạn sẽ cần thanh toán 100% phí vận chuyển phát sinh trong quá trình vận chuyển (Sẽ
              có thông báo trước khi gửi hàng).
              <ul style={{ listStyleType: 'circle', marginTop: '12px' }}>
                <li>LapDarker sẽ hỗ trợ bạn phí thu hộ và bảo hiểm đơn hàng</li>
              </ul>
            </li>
            <li style={{ marginBottom: '12px' }}>
              Lapdarker có trách nhiệm hỗ trợ khách hàng trong toàn bộ quá trình vận chuyển cho tới khi khách hàng nhận
              sản phẩm.
            </li>
            <li style={{ marginBottom: '12px' }}>
              Đặt cọc
              <ul style={{ listStyleType: 'circle' }}>
                <li style={{ marginBottom: '12px' }}>Đối với đơn hàng dưới 10.000.000đ, bạn không cần đặt cọc</li>
                <li style={{ marginBottom: '12px' }}>
                  Đối với đơn hàng từ 10.000.000đ trở lên, bạn sẽ cần đặt cọc theo hướng dẫn ở bước Thanh toán nếu đặt
                  trên website hoặc theo hướng dẫn của chuyên viên bán hàng nếu mua trực tiếp.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '12px' }}>
          Giao hàng tận nơi, thanh toán trước 100%
          <ul style={{ listStyleType: 'disc' }}>
            <li style={{ marginTop: '12px' }}>
              Đối với hình thức này Quý khách sẽ được <strong>miễn phí vận chuyển</strong> phát sinh trong quá trình
              giao hàng.
            </li>
            <li style={{ marginTop: '12px' }}>
              Lapdarker có trách nhiệm hỗ trợ khách hàng trong toàn bộ quá trình vận chuyển cho tới khi khách hàng nhận
              sản phẩm.
            </li>
            <li style={{ marginTop: '12px' }}>
              Đối với hình thức này quý khách hàng vui lòng thanh toán trước 100% giá trị đơn hàng.
            </li>
          </ul>
        </li>
      </ul>
      <h2>II. Đối tác vận chuyển</h2>
      <ul style={{ listStyleType: 'decimal' }}>
        <li style={{ marginBottom: '12px' }}>
          <Typography style={{ marginBottom: '6px' }}>
            Qua đơn vị chuyển phát: ThinkPro hỗ trợ gửi hàng qua các đơn vị chuyển phát uy tín hàng đầu như: vnpost,
            viettelpost, nhattin logitics… Lapdarker chịu trách nhiệm tới khi sản phẩm tới tay khách hàng (Khách hàng
            vui lòng kiểm tra sản phẩm khi nhận hàng).
          </Typography>
          <Typography>
            Trong trường hợp sản phẩm bị rơi vỡ, móp méo, trầy xước hoặc sản phẩm không đúng như thông tin ban đầu mà
            cửa hàng cung cấp tới Quý khách, Quý khách vui lòng không nhận hàng và thông báo lại với cửa hàng. Cửa hàng
            sẽ có trách nhiệm tự xử lý với bên vận chuyển để không ảnh hưởng tới quyền lợi của Khách hàng. Trường hợp
            sau khi đã nhận hàng mà sản phẩm có phát sinh những vấn đề trên (rơi vỡ, móp méo, trầy xước… hoặc tác động
            vật lý từ môi trường) cửa hàng sẽ không thể hỗ trợ Quý khách xử lý.
          </Typography>
        </li>
        <li style={{ marginBottom: '12px' }}>
          Nhà xe: Lapdarker không hỗ trợ vận chuyển qua nhà xe, trong trường hợp KH yêu cầu vận chuyển qua nhà xe thì
          nhà xe phải do khách hàng chỉ định và trong trường hợp phát sinh vấn đề trong quá trình vận chuyển cửa hàng
          không hỗ trợ xử lý.
        </li>
        <li style={{ marginBottom: '12px' }}>
          Ship nội thành HN,HCM: Lapdarker hỗ trợ vận chuyển nội thành HN và TPHCM hoàn toàn miễn phí.
        </li>
        <li>
          Ship ngoại thành HN, HCM: Nếu khách hàng thanh toán trước 100% sẽ được hỗ trợ miễn phí toàn bộ chi phí vận
          chuyển, Đối với các đơn hàng ở khu vực ngoại thành HN và TPHCM, cửa hàng hỗ trợ khách hàng giao hàng tại nhà
          có tính phí (5.000đ/1km).
        </li>
      </ul>
      <h2>III. Thời gian vận chuyển</h2>
      <ul style={{ listStyleType: 'decimal' }}>
        <li style={{ marginBottom: '12px' }}>
          Đối với các đơn hàng nội thành Hà Nội và TPHCM: Lapdarker hỗ trợ giao hàng trong vòng 1h với những sản phẩm
          đang có sẵn hàng tại cửa hàng. Đối với những sản phẩm không sẵn hàng/không sẵn tại khu vực khách hàng cần giao
          hàng Lapdarker sẽ có thông báo tới khách hàng về thời gian cụ thể giao hàng.
        </li>
        <li style={{ marginBottom: '12px' }}>
          Đối với các đơn hàng ở các tỉnh: Lapdarker giao hàng thông qua các đơn vị vận chuyển trên toàn quốc, thời gian
          giao hàng thông thường từ 1-3 ngày tùy theo khu vực, trong dịp lễ/tết có thể thời gian vận chuyển có thể
          delay, Lapdarker sẽ thông báo cụ thể tới khách hàng sau khi gửi hàng.
        </li>
        <li style={{ marginBottom: '12px' }}>
          Đối với các đơn hàng ngoại thành HN và TPHCM: Với những đơn hàng nằm ngoài khu vực nội thành , Lapdarker hỗ
          trợ giao hàng trong ngày nếu khách hàng đặt trước 12h00 sáng, đối với những đơn hàng đặt sau thời gian này
          Lapdarker sẽ chủ động liên hệ và hẹn lịch giao hàng cụ thể tới Quý khách hàng.
        </li>
      </ul>
      <div
        style={{ display: 'flex', backgroundColor: '#f8fafc', borderRadius: '12px', padding: '25px', margin: '12px 0' }}
      >
        <BiHeadphone
          style={{
            width: '25px',
            height: '25px',
            paddingRight: '12px '
          }}
        />
        <Typography>
          Nếu cần hỗ trợ thêm, đừng ngần ngại{' '}
          <a href="#" style={{ textDecoration: 'none' }}>
            Liên hệ bộ phận CSKH
          </a>{' '}
          bạn nhé!
        </Typography>
      </div>
    </div>
  );
}

export default Deliver;
