import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { AiOutlineSafety } from 'react-icons/ai';
import { BiHeadphone } from 'react-icons/bi';
function Insurance() {
  return (
    <div style={{ padding: '24px 16px' }}>
      <div>
        <AiOutlineSafety
          style={{
            width: '60px',
            height: '60px',
            color: '#0065EE'
          }}
        />
        <h1>Chính sách bảo hành và đổi trả</h1>
      </div>
      <h2>I. Chính sách đổi trả laptop chính hãng</h2>
      <h3>Tháng đầu tiên kể từ thời điểm nhận máy thành công</h3>

      <h4>
        Sản phẩm lỗi do nhà sản xuất:
        <span style={{ fontWeight: 'normal' }}> 1 ĐỔI 1</span>
      </h4>

      <Typography>Sản phẩm cùng model, cùng màu, cùng dung lượng.</Typography>
      <ul>
        <li>
          Trong tình huống sản phẩm đổi hết hàng, khách hàng có thể đổi sang một sản phẩm khác tương đương hoặc cao hơn
          về giá trị so với sản phẩm lỗi.
        </li>
      </ul>
      <i>Hoặc</i>
      <Typography>
        Khách hàng muốn trả sản phẩm: ThinkPro sẽ kiểm tra tình trạng máy và thông báo đến Khách hàng về giá trị thu lại
        sản phẩm ngay tại cửa hàng.
      </Typography>
      <ul>
        <li>
          Chú ý
          <ul>
            <li>
              Sản phẩm đổi trả phải giữ nguyên 100% ngoại hình ban đầu, nguyên vỏ hộp, giấy tờ liên quan và đủ điều kiện
              bảo hành của hãng
            </li>
            <li>Thân máy và màn hình máy không bị trầy xước</li>
          </ul>
        </li>
      </ul>
      <h4>Sản phẩm không lỗi (đổi trả theo nhu cầu của khách hàng)</h4>
      <Typography>
        Khách hàng muốn đổi sang sản phẩm khác hoặc trả sản phẩm: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến
        Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
      </Typography>
      <h4>Sản phẩm lỗi do người sử dụng</h4>
      <Typography>Không áp dụng đổi trả với sản phẩm:</Typography>
      <ul>
        <li>
          Máy không còn giữ nguyên 100% hình dạng ban đầu, bao gồm: có dấu hiệu va chạm mạnh, cấn móp, bị vào nước...
        </li>
        <li>Không đủ điều kiện bảo hành theo chính sách của hãng.</li>
      </ul>
      <Typography>
        Trong trường hợp này, LapDarker hỗ trợ chuyển sang trung tâm bảo hành và khách hàng chịu phí sửa chữa.
      </Typography>
      <h4>Lưu ý</h4>
      <ul>
        <li>
          Phí đổi trả khác nếu có: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến khách hàng về mức phí phải thu
          ngay tại cửa hàng.
        </li>
        <li>Trong thời gian đợi bảo hành - sửa chữa, khách hàng sẽ được hỗ trợ miễn phí laptop khác để sử dụng.</li>
        <li>
          Thời điểm bắt đầu tính bảo hành:{' '}
          <ul>
            <li>Nhận máy tại cửa hàng: Thời điểm bàn giao máy thành công</li>
            <li>Vận chuyển tận nơi: Thời điểm nhận máy thành công từ đơn vị vận chuyển</li>
          </ul>
        </li>
      </ul>
      <h3>Tháng 2 - 12 kể từ thời điểm nhận máy thành công</h3>
      <h4>Sản phẩm lỗi do nhà sản xuất</h4>
      <Typography>GỬI MÁY ĐI BẢO HÀNH THEO QUI ĐỊNH CỦA HÃNG</Typography>
      <Typography>Hoặc</Typography>
      <Typography>
        Khách hàng muốn đổi sang sản phẩm khác hoặc trả sản phẩm: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến
        Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
      </Typography>
      <ul>
        <li>
          Chú ý
          <ul>
            <li>
              Sản phẩm đổi trả phải giữ nguyên 100% ngoại hình ban đầu, nguyên vỏ hộp, giấy tờ liên quan và đủ điều kiện
              bảo hành của hãng
            </li>
            <li>Thân máy và màn hình máy không bị trầy xước</li>
          </ul>
        </li>
      </ul>
      <h3>Sản phẩm không lỗi (đổi trả theo nhu cầu của khách hàng)</h3>
      <Typography>
        Khách hàng muốn đổi sang sản phẩm khác hoặc trả sản phẩm: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến
        Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
      </Typography>
      <ul>
        <li>
          Chú ý
          <ul>
            <li>
              Sản phẩm đổi trả phải giữ nguyên 100% ngoại hình ban đầu, nguyên vỏ hộp, giấy tờ liên quan và đủ điều kiện
              bảo hành của hãng
            </li>
            <li>Thân máy và màn hình máy không bị trầy xước</li>
          </ul>
        </li>
      </ul>
      <h4>Sản phẩm lỗi do người sử dụng</h4>
      <Typography>Không áp dụng đổi trả với sản phẩm:</Typography>
      <ul>
        <li>
          Máy không còn giữ nguyên 100% hình dạng ban đầu, bao gồm: có dấu hiệu va chạm mạnh, cấn móp, bị vào nước...
        </li>
        <li>Không đủ điều kiện bảo hành theo chính sách của hãng.</li>
      </ul>
      <Typography>
        Trong trường hợp này, LapDarker hỗ trợ chuyển sang trung tâm bảo hành và khách hàng chịu phí sửa chữa.
      </Typography>
      <h4>Lưu ý</h4>
      <ul>
        <li>
          Phí đổi trả khác nếu có: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến khách hàng về mức phí phải thu
          ngay tại cửa hàng.
        </li>
        <li>Trong thời gian đợi bảo hành - sửa chữa, khách hàng sẽ được hỗ trợ miễn phí laptop khác để sử dụng.</li>
        <li>
          Thời điểm bắt đầu tính bảo hành:{' '}
          <ul>
            <li>Nhận máy tại cửa hàng: Thời điểm bàn giao máy thành công</li>
            <li>Vận chuyển tận nơi: Thời điểm nhận máy thành công từ đơn vị vận chuyển</li>
          </ul>
        </li>
      </ul>

      <h2>II. Chính sách đổi trả laptop nhập khẩu hoặc đã qua sử dụng</h2>
      <h3>15 ngày đầu kể từ ngày mua</h3>
      <h4>
        Sản phẩm lỗi do nhà sản xuất:
        <span style={{ fontWeight: 'normal' }}> 1 ĐỔI 1</span>
      </h4>

      <Typography>
        Miễn phí đổi sản phẩm tương đương: cùng model, cùng dung lượng, cùng thời gian bảo hành… Trường hợp không có sản
        phẩm tương đương, LapDarker hoàn lại tiền 100%
      </Typography>
      <ul>
        <li>
          Chú ý
          <ul>
            <li>
              Sản phẩm đổi trả phải giữ nguyên 100% ngoại hình ban đầu, nguyên vỏ hộp, giấy tờ liên quan và đủ điều kiện
              bảo hành của hãng
            </li>
            <li>Thân máy và màn hình máy không bị trầy xước</li>
          </ul>
        </li>
      </ul>
      <h4>Sản phẩm không lỗi</h4>
      <Typography>Không áp dụng đổi trả</Typography>
      <h4>Sản phẩm lỗi do người sử dụng</h4>
      <Typography>Không áp dụng đổi trả với sản phẩm:</Typography>
      <ul>
        <li>
          Máy không còn giữ nguyên 100% hình dạng ban đầu, bao gồm: có dấu hiệu va chạm mạnh, cấn móp, bị vào nước...
        </li>
        <li>Không đủ điều kiện bảo hành theo chính sách của hãng.</li>
      </ul>
      <Typography>
        Trong trường hợp này, LapDarker hỗ trợ chuyển sang trung tâm bảo hành và khách hàng chịu phí sửa chữa.
      </Typography>
      <h4>Lưu ý</h4>
      <ul>
        <li>
          Phí đổi trả khác nếu có: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến khách hàng về mức phí phải thu
          ngay tại cửa hàng.
        </li>
        <li>Trong thời gian đợi bảo hành - sửa chữa, khách hàng sẽ được hỗ trợ miễn phí laptop khác để sử dụng.</li>
        <li>
          Thời điểm bắt đầu tính bảo hành:{' '}
          <ul>
            <li>Nhận máy tại cửa hàng: Thời điểm bàn giao máy thành công</li>
            <li>Vận chuyển tận nơi: Thời điểm nhận máy thành công từ đơn vị vận chuyển</li>
          </ul>
        </li>
      </ul>
      <h3>Từ ngày 16 tới tháng 12 kể từ ngày mua</h3>
      <h4>Sản phẩm lỗi do nhà sản xuất</h4>
      <Typography>GỬI MÁY ĐI BẢO HÀNH THEO QUI ĐỊNH CỦA HÃNG</Typography>
      <Typography>Hoặc</Typography>
      <Typography>
        Khách hàng muốn đổi sang sản phẩm khác hoặc trả sản phẩm: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến
        Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
      </Typography>
      <ul>
        <li>
          Chú ý
          <ul>
            <li>
              Sản phẩm đổi trả phải giữ nguyên 100% ngoại hình ban đầu, nguyên vỏ hộp, giấy tờ liên quan và đủ điều kiện
              bảo hành của hãng
            </li>
            <li>Thân máy và màn hình máy không bị trầy xước</li>
          </ul>
        </li>
      </ul>
      <h4>Sản phẩm không lỗi </h4>
      <Typography>Không áp dụng đổi trả</Typography>

      <h4>Sản phẩm lỗi do người sử dụng</h4>
      <Typography>Không áp dụng đổi trả với sản phẩm:</Typography>
      <ul>
        <li>
          Máy không còn giữ nguyên 100% hình dạng ban đầu, bao gồm: có dấu hiệu va chạm mạnh, cấn móp, bị vào nước...
        </li>
        <li>Không đủ điều kiện bảo hành theo chính sách của hãng.</li>
      </ul>
      <Typography>
        Trong trường hợp này, LapDarker hỗ trợ chuyển sang trung tâm bảo hành và khách hàng chịu phí sửa chữa.
      </Typography>
      <h4>Lưu ý</h4>
      <ul>
        <li>
          Phí đổi trả khác nếu có: LapDarker sẽ kiểm tra tình trạng máy và thông báo đến khách hàng về mức phí phải thu
          ngay tại cửa hàng.
        </li>
        <li>Trong thời gian đợi bảo hành - sửa chữa, khách hàng sẽ được hỗ trợ miễn phí laptop khác để sử dụng.</li>
        <li>
          Thời điểm bắt đầu tính bảo hành:{' '}
          <ul>
            <li>Nhận máy tại cửa hàng: Thời điểm bàn giao máy thành công</li>
            <li>Vận chuyển tận nơi: Thời điểm nhận máy thành công từ đơn vị vận chuyển</li>
          </ul>
        </li>
      </ul>

      <h2>III. Chính sách bảo hành phụ kiện</h2>

      <Grid container spacing={2}>
        <Grid
          item
          xs={8}
          style={{
            backgroundColor: '#f8fafc',
            padding: '14px'
            // lineHeight: '16px'
          }}
        >
          <strong>Nội dung chính sách</strong>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: '#f8fafc',
            padding: '14px'
          }}
        >
          <strong>Điều kiện áp dụng</strong>
        </Grid>
        <Grid item xs={8}>
          <div>
            <strong style={{ display: 'block', marginBottom: '16px' }}>1. BẢO HÀNH CÓ CAM KẾT TRONG 12 THÁNG</strong>
            <Typography>- Chỉ áp dụng cho sản phẩm chính, KHÔNG áp dụng cho phụ kiện đi kèm sản phẩm chính</Typography>
            <Typography>
              + Đổi mới trong 15 ngày đầu tiên nếu có lỗi NSX + Bảo hành trong vòng 15 ngày (tính từ ngày ThinkPro nhận
              sản phẩm ở trạng thái lỗi và đến ngày gọi khách hàng ra lấy lại sản phẩm đã bảo hành){' '}
            </Typography>
            <Typography>
              + Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy được bảo hành xong.{' '}
            </Typography>
            <Typography>
              + Nếu LapDarker vi phạm cam kết (bảo hành quá 15 ngày hoặc phải bảo hành lại sản phẩm lần nữa trong 30
              ngày kể từ lần bảo hành trước), Khách hàng được áp dụng phương thức Đổi mới tức thì hoặc Hoàn tiền với mức
              phí giảm 50%.{' '}
            </Typography>
            <Typography>
              *Từ tháng thứ 13 trở đi không áp dụng bảo hành cam kết, chỉ áp dụng bảo hành hãng (nếu có)
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Typography>Sản phẩm đủ điều kiện bảo hành của hãng</Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            backgroundColor: '#f8fafc',
            padding: '14px'
          }}
        >
          <div>
            <strong style={{ display: 'block', margin: '12px 0' }}>2. ĐỔI MỚI TỨC THÌ</strong>
            <Typography>
              Sản phẩm hư gì thì đổi đó (cùng model, cùng dung lượng, cùng màu sắc...) đối với sản phẩm chính và đổi
              tương đương đối với phụ kiện đi kèm, cụ thể:
            </Typography>
            <Typography>
              <strong style={{ display: 'block', margin: '6px 0' }}>
                2.1 Hư sản phẩm chính thì đổi sản phẩm chính mới:{' '}
              </strong>{' '}
              Tháng đầu tiên kể từ ngày mua: miễn phí. Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.(VD:
              tháng thứ 2 phí 10%, tháng thứ 3 phí 20%...) Lưu ý: Nếu không có sản phẩm chính đổi cho Khách hàng thì áp
              dụng chính sách <strong>Bảo hành có cam kết</strong> hoặc <strong>Hoàn tiền với mức phí giảm 50%.</strong>
            </Typography>
            <Typography>
              <strong style={{ display: 'block', margin: '6px 0' }}>
                2.2 Hư phụ kiện đi kèm thì đổi phụ kiện có cùng công năng mà ThinkPro đang kinh doanh:{' '}
              </strong>
              Phụ kiện đi kèm được đổi miễn phí trong vòng 12 tháng kể từ ngày mua sản phẩm chính bằng hàng phụ kiện
              ThinkPro đang kinh doanh mới với công năng tương đương. Lưu ý: Nếu không có phụ kiện tương đương hoặc
              Khách hàng không thích thì áp dụng bảo hành hãng
            </Typography>
            <Typography>
              <strong style={{ display: 'block', margin: '6px 0' }}>2.3 Lỗi phần mềm</strong> không áp dụng, mà chỉ khắc
              phục lỗi phần mềm
            </Typography>
            <Typography>
              <strong style={{ display: 'block', margin: '6px 0' }}>2.4 Trường hợp Khách hàng muốn đổi full box</strong>
              (nguyên thùng, nguyên hộp): ngoài việc áp dụng mức phí đổi trả tại Mục 2.1 thì Khách hàng sẽ trả thêm phí
              lấy full box tương đương 20% giá trị hóa đơn.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: '#f8fafc',
            padding: '14px'
          }}
        >
          <div>
            <Typography style={{ display: 'block', margin: '6px 0' }}>
              Sản phẩm đổi trả phải giữ nguyên 100% hình dạng ban đầu và đủ điều kiện bảo hành của hãng.
            </Typography>
            <Typography>
              Sản phẩm chỉ dùng cho mục đích sử dụng cá nhân, không áp dụng việc sử dụng sản phẩm cho mục đích thương
              mại.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div>
            <strong style={{ display: 'block', margin: '12px 0' }}>3. HOÀN TIỀN</strong>
            <Typography>Áp dụng cho sản phẩm lỗi và không lỗi.</Typography>
            <Typography>- Tháng đầu tiên kể từ ngày mua: phí 20% giá trị hóa đơn</Typography>
            <Typography>- Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Typography style={{ display: 'block', marginTop: '6px' }}>
              Sản phẩm đổi trả phải giữ nguyên 100% hình dạng ban đầu và đủ điều kiện bảo hành của hãng.
            </Typography>
            <Typography>
              Sản phẩm chỉ dùng cho mục đích sử dụng cá nhân, không áp dụng việc sử dụng sản phẩm cho mục đích thương
              mại.
            </Typography>
            <Typography>Hoàn trả lại đầy đủ hộp, sạc, phụ kiện đi kèm.</Typography>
            <Typography>
              Hoàn trả toàn bộ hàng khuyến mãi. Nếu mất hàng khuyến mãi sẽ thu phí theo mức giá đã được công bố.
            </Typography>
          </div>
        </Grid>
      </Grid>
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

export default Insurance;
