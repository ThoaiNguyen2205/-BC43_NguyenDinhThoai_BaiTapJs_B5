// Bài tập 1:
function tinhDiemThi(){
    //input: diemChuan(number),khuVuc(number),doiTuong(number),diemMon1(Number),diemMon2(number),diemMon3(number)
    var diemChuan =Number(document.getElementById('diemChuan').value) ;
    var khuVuc=Number(document.getElementById('khuVuc').value);
    var doiTuong=Number(document.getElementById('doiTuong').value) ;
    var diemMon1 =Number(document.getElementById('diemMon1').value) ;     
    var diemMon2 =Number(document.getElementById('diemMon2').value);     
    var diemMon3 =Number(document.getElementById('diemMon3').value);
    //output:tongSoDiem(number),ketQua(string)
    var tongSoDiem = 0;
    var ketQua='';
    //process:
    tongSoDiem=diemMon1+diemMon2+diemMon3+khuVuc+doiTuong;
    if(diemMon1<=0 || diemMon2<=0 || diemMon3<=0)(
        ketQua= 'Bạn đã RỚT !!!  Do có môn 0 điểm '
    )
    else if(diemChuan<=tongSoDiem){
        ketQua='Chúc mừng Bạn đã ĐẬU !!!'
    }
    else{
        ketQua='Bạn đã RỚT !!! Do thấp hơn điểm chuẩn'
    }
document.getElementById('tongSoDiem').innerHTML=tongSoDiem + ' Điểm';
document.getElementById('ketQua').innerHTML=ketQua;
}


// Bài tập 2: 
function tinhTienDien(){
    //input:hoTen(string),soKwDien(number)
    var hoTen=document.getElementById('hoTen').value;
    var soKwDien=Number(document.getElementById('soKwDien').value);
    //output: tongTienDien(number),hoTen(string)
    var tongTienDien= 0; 
    //process:
     if(soKwDien<=50){
        tongTienDien= soKwDien*500;
     }
    else if(soKwDien>50 && soKwDien<=100){
        tongTienDien= 50*500 + (soKwDien-50)*650;
    }
    else if(soKwDien>100 && soKwDien<=200){
        tongTienDien= 50*500 + 50*650 +(soKwDien-100)*850 ;
    }
    else if(soKwDien>200 && soKwDien<=350){
        tongTienDien= 50*500 + 50*650 + 100*850 + (soKwDien-200)*1100 ;
    }
    else{
        tongTienDien= 50*500 + 50*650 + 100*850 + 150*1100 + (soKwDien-350)*1300 ;
    }
     document.getElementById('hoVaTen').innerHTML=hoTen;
     document.getElementById('tongTienDien').innerHTML=tongTienDien.toLocaleString() + ' VNĐ';
}

// Bài tập 3:
function tinhThueThuNhap(){
    //input: hotenThue(string),tongThuNhap(number),soNguoiPhuThuoc(number),
    var hoTenThue= document.getElementById('hoTenThue').value;
    var tongThuNhap=Number(document.getElementById('tongThuNhap').value) ;
    var soNguoiPhuThuoc=Number(document.getElementById('soNguoiPhuThuoc').value) ;
    var thuNhapChiuThue =tongThuNhap-4000000-soNguoiPhuThuoc*1600000;
    var hoVaTenThue='';
    //output:tongThue(number),hoVaTenThue(string)
    var tongThue=0;
    //process:
    if(thuNhapChiuThue<=60000000){
        tongThue= thuNhapChiuThue*5/100
    }
    else if(thuNhapChiuThue>60000000 && thuNhapChiuThue <=120000000){
        tongThue= thuNhapChiuThue*10/100 
    }
    else if(thuNhapChiuThue>120000000 && thuNhapChiuThue <=210000000){
        tongThue= thuNhapChiuThue*15/100 
    }
    else if(thuNhapChiuThue>210000000 && thuNhapChiuThue <=384000000){
        tongThue= thuNhapChiuThue*20/100 
    }
    else if(thuNhapChiuThue>384000000 && thuNhapChiuThue <=624000000){
        tongThue= thuNhapChiuThue*25/100 
    }
    else if(thuNhapChiuThue>624000000 && thuNhapChiuThue <=960000000){
        tongThue= thuNhapChiuThue*30/100 
    }
    else{
        tongThue= thuNhapChiuThue*35/100  
    }
   
    document.getElementById('hoVaTenThue').innerHTML=hoTenThue;
    document.getElementById('tongThue').innerHTML=tongThue.toLocaleString() + ' VNĐ';
}

// Bài tập 4:
 // onchange Event:
 function myEvent(){
    var x=document.getElementById('chonDoiTuong').value;
    if(x==1){
        document.getElementById('input-doanh-nghiep').innerHTML='';
    }
    if(x==2){
        document.getElementById('input-doanh-nghiep').innerHTML='<input type="number" id="soKetNoi" placeholder="Số kết nối" class="form-control" />';
    }
 }
 // 
 document.getElementById('btnTinhTienCap').onclick=function(){
    // input: phiHoaDon(number),phiDichVu(number),soKenhCaoCap(number);soKetNoi(number),doiTuong(string);maKhachHang(string)
    
    var phiHoaDon=1;
    var phiDichVu=1;
    var soKenhCaoCap=Number(document.getElementById('soKenhCaoCap').value) ;
    var doiTuong=document.getElementById('chonDoiTuong').value;
    var maKhachHang=document.getElementById('maKhachHang').value;
    //output: tongTien
    var tongTien= 0;
    // process:
    if(doiTuong==1){
        tongTien= phiHoaDon*4.5 + phiDichVu*20.5 + soKenhCaoCap*7.5;
    }
    if(doiTuong==2){
        var soKetNoi=Number(document.getElementById('soKetNoi').value);
        if(soKetNoi<=10){
            tongTien= phiHoaDon*15 + phiDichVu*75 + soKenhCaoCap*50;
        }
        else
        {
            tongTien= phiHoaDon*15 + phiDichVu*75 +(soKetNoi-10)*5 + soKenhCaoCap*50;
        }
    }
    document.getElementById('hoTenKhachHang').innerHTML=maKhachHang;
    document.getElementById('tongTienCap').innerHTML=tongTien + ' $';
 }

 //BACK TO TOP
 var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



