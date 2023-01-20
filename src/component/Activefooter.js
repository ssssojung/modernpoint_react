import React from 'react';
import snsImg from '../json/footer.json';

function Activefooter(props) {
    const instarImg = snsImg[props.snsI]
    // console.log(instarImg);
    return (
        <div className='activeF px-3  ' style={{backgroundColor:"#3D3A41"}}>
            <div className=' Cinfo ps-5'>
                <p>@modernpoint_</p>
                <div className='pt-3 d-flex'>

                    {
                        instarImg.map((item, index)=>{
                            return(
                                 <div className='img_box me-3' key={'f'+index}>
                                    <img className='scale' src={item.snsImg} alt="인스타그램사진" />
                                </div>
                            )
                            
                        })
                        

                    }
                    
                </div>
                <ul className='d-flex justify-content-start py-3'>
                    <li><a href="#none">@INSTARGRAM</a></li>
                    <li><a href="#none">@FACEBOOK</a></li>
                    <li><a href="#none">@KAKAO</a></li>
                    <li><a href="#none">@BLOG</a></li>
                </ul>
                <p className='copy_p'>Company. 모던포인트 Owner. 엄지수 Tel. 070-4866-5662 Privacy Manager. 엄지수(modernpoint@naver.com)<br/>
                                        Address. 35401 대전광역시 서구 도마동 174-1 2동<br/>  
                                        Business License. 812-02-00601 Mail Order License.<br/>
                                        Copyright ⓒ 모던포인트 All Rights Reserved
                </p>
                
            </div>
            
        </div>
    );
}

export default Activefooter;