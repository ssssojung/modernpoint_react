import React from 'react';
import '../css/brandstory.scss';

function Brandstory(props) {
    return (
        <section id={props.section[3].id} className='fullImg' style={{backgroundImage:"url(../../img/lookbook-2.jpg)",backgroundPosition:"center center"}}>
            <div>
                <h4>
                    "그래도 직접 손으로 만들어야죠"
                </h4>
                <p>
                    새롭고 화려한 것 보다는 그저 평범한 나무에 매료가 되어<br/>
                    원목 소재의 선택으로 '기본에 충실한 디자인'을 추구하며<br/>
                    핸드크래프트에 한 발자국 다가가게 되었습니다.
                </p>
                <p>
                    저희는 사계절 내내 모든 사람들이 즐겁고 행복하기는 어렵겠지만,<br/>
                    사랑하는 사람과 함께하고 있는 지금, 아쉬웠던 그때 그 시절을 회상하고 지나간 이들을 추억하며<br/>
                    언제나 '희노애락'을 느낄 수 있는 온기 가득한 당신의 공간을 채워드리고자 합니다.
                </p>
            </div>
        </section>
    );
}

export default Brandstory;