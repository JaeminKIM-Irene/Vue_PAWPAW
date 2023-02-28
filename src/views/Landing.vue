<template>
    <div>
        <div class='landingContent'>
            <div class="landingNav">
                <router-link class="landinglinks" to="/">Home</router-link>
                <router-link class="landinglinks" to="/about">About</router-link>
                <router-link class="landinglinks" to="/notice">Notice</router-link>
                <router-link class="landinglinks" to="/event">Event</router-link>
                <router-link class="landinglinks" to="/contact">Contact</router-link>
            </div>
        </div>
        <main>
            <div className='landing_content1'>
                <div className='Lcol'>
                    <img className='landing_logo' src="../images/landing_logo.png" alt="로고"/>
                    <div className='landingT1'>
                        만나서 반가워요! 저희는 반려동물과 함께하는 일상의 가치를 소중하게 여기는 파우파우 입니다. 파우파우는 반려동물을 사랑하는 당신을 위해 펫 용품 관련 이벤트 및 페어를 소개하는 공간입니다.
                    </div>
                    <div className='nav_btns'>
                        <router-link to='/about'>
                            <div className='aboutARW' />
                            <div className='aboutCW' />
                        </router-link>
                    </div>
                </div>
                <div className='Rcol'>
                    <div className='TBox'><div className='landingT2-1'>We are a one-stop</div></div>
                    <div className='TBox'><div className='landingT2-2'>solution to all your</div></div>
                    <div className='TBox'><div className='landingT2-3'>pet's needs</div></div>
                    <div className='foots'>
                        <img src='../images/landing_foot1.png' className="foot1" alt="발자국"/>
                        <img src='../images/landing_foot2.png' className="foot2" alt="발자국"/>
                        <img src='../images/landing_foot3.png' className="foot3" alt="발자국"/>
                        <img src='../images/landing_foot4.png' className="foot4" alt="발자국"/>
                    </div>
                </div>
            </div>
                <div className="landingT3">Events you are looking for</div>
                <div className='landing_eventLists'>
                    <div className='landing_event' v-for="(event, index) in events.slice(0,4)" :key="index" @click="$router.push({name: 'Event2', params:event})">
                        <img :src="require(`@/images/${event.poster1N}`)" alt="" className='landingEPoster' />
                        <div className='landingEName'>{{event.name}}</div>
                        <div className='landingET'>{{event.place}}</div>
                        <div className='landingET'>D{{getDday(event) >=0?'+' : ''}}{{getDday(event)}}</div>
                        <div className='landingET'>{{getFull(event.duration[0])}} - {{getFull(event.duration[1])}}</div>
                    </div>
                </div>
                <div className='nav_btns4'>
                    <router-link to='/event'>
                        <div className='eventCW' />
                        <div className='eventARW' />
                    </router-link>
                </div>
                <div className='landing_content3'>
                    <div className='Lcol2'>
                        <div className='landingT4'>Stay tuned</div>
                        <div className='landingT4'>for more updates</div>
                        <div className='nav_btns2'>
                            <router-link to='/notice'>
                                <div className='newsARW' />
                                <div className='newsCW' />
                            </router-link>
                        </div>
                    </div>
                    <img src='../images/landing_icons.png' className="landing_icons1" alt='아이콘' />
                </div>
                <div className='slideBox'>
                    <div className='slideT'>pawpaw is the one-stop solution to all your pets' needs and pawpaw aims to share exciting events to all kinds of animal equipments for animal lovers like you</div>
                    <div className='slideT'>pawpaw is the one-stop solution to all your pets' needs and pawpaw aims to share exciting events to all kinds of animal equipments for animal lovers like you</div>
                </div>
                <div className='landing_content3'>
                    <img src='../images/landing_icons2.png' className="landing_icons2" alt='아이콘' />
                    <div className='Lcol2'>
                        <div className='landingT5'>Feel free to</div>
                        <div className='landingT5'>send feedbacks</div>
                        <div className='nav_btns3'>
                            <router-link to='/contact'>
                                <div className='contactCW' />
                                <div className='contactARW' />
                            </router-link>
                        </div>
                    </div>
                </div>
            </main>
        <FooterBar />
    </div>
</template>

<script>
    import FooterBar from '../components/FooterBar.vue';
    export default {
        components: {
            'FooterBar' : FooterBar,
        },
        data() {
            return {
                today: new Date().getTime(),
                week : ['일', '월', '화', '수', '목', '금', '토'],
                events: [
                    {
                        id: 1,
                        name: '2022 MEGA ZOO (메가주)',
                        url: 'https://k-pet.co.kr/22pet_k2/',
                        place: '킨텍스 제 1 전시장 2, 3홀',
                        search: '경기 고양시 일산서구 킨텍스로 217-60',
                        duration: [new Date(2022,10,18), new Date(2022,10,20)],
                        time: '10AM - 6PM (입장마감 5:30PM)',
                        size: '',
                        company1: '한국펫사료협회',
                        company2: '메쎄이상',
                        detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
                        poster1: 'images/poster1.png',
                        poster1N: 'poster1.png',
                        poster2: 'images/poster1L.png',
                        poster2N: 'poster1L.png',
                    },
                    {
                        id: 2,
                        name: '2022 케이펫페어 일산',
                        url: 'https://k-pet.co.kr/22pet_k2/',
                        place: '킨텍스 제 1 전시장 2, 3홀',
                        search: '경기 고양시 일산서구 킨텍스로 217-60',
                        duration: [new Date(2022,10,18), new Date(2022,10,20)],
                        time: '10AM - 6PM (입장마감 5:30PM)',
                        size: '',
                        company1: '한국펫사료협회',
                        company2: '메쎄이상',
                        detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
                        poster1: 'images/poster2.png',
                        poster1N: 'poster2.png',
                        poster2: 'images/poster2L.png',
                        poster2N: 'poster2L.png',
                    },
                    {
                        id: 3,
                        name: '2022 궁디팡팡 캣페스타',
                        url: 'https://k-pet.co.kr/22pet_k2/',
                        place: '킨텍스 제 1 전시장 2, 3홀',
                        search: '경기 고양시 일산서구 킨텍스로 217-60',
                        duration: [new Date(2022,11,2), new Date(2022,11,4)],
                        time: '10AM - 6PM (입장마감 5:30PM)',
                        size: '',
                        company1: '한국펫사료협회',
                        company2: '메쎄이상',
                        detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
                        poster1: 'images/poster3.png',
                        poster1N: 'poster3.png',
                        poster2: 'images/poster3L.png',
                        poster2N: 'poster3L.png',
                    },
                    {
                        id: 4,
                        name: '2022 크리스마스 서울 펫 쇼',
                        url: 'https://k-pet.co.kr/22pet_k2/',
                        place: '킨텍스 제 1 전시장 2, 3홀',
                        search: '경기 고양시 일산서구 킨텍스로 217-60',
                        duration: [new Date(2022,11,9), new Date(2022,11,11)],
                        time: '10AM - 6PM (입장마감 5:30PM)',
                        size: '',
                        company1: '한국펫사료협회',
                        company2: '메쎄이상',
                        detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
                        poster1: 'images/poster4.png',
                        poster1N: 'poster4.png',
                        poster2: 'images/imageUpload2.png',
                        poster2N: '첨부파일명',
                    },
                    {
                        id: 5,
                        name: '2021 서울 펫 쇼',
                        url: 'https://k-pet.co.kr/22pet_k2/',
                        place: '킨텍스 제 1 전시장 2, 3홀',
                        search: '경기 고양시 일산서구 킨텍스로 217-60',
                        duration: [new Date(2021,8,3), new Date(2022,8,5)],
                        time: '10AM - 6PM (입장마감 5:30PM)',
                        size: '',
                        company1: '한국펫사료협회',
                        company2: '메쎄이상',
                        detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
                        poster1: 'images/poster5.png',
                        poster1N: 'poster5.png',
                        poster2: 'images/poster5L.png',
                        poster2N: 'poster5L.png',
                    },
                ]
            }
        },
        methods: {
            getDday(e) {
                return Math.ceil((this.today-e.duration[0].getTime())/(1000*60*60*24))
            },
            getFull(e) {
                return e.getFullYear() + '.' + ('0'+(e.getMonth()+1)).slice(-2) + '.' + ('0'+e.getDate()).slice(-2) + ' (' + this.week[e.getDay()] + ')'
            },
        }
    }
</script>

<style src="../css/landing.css" scpoed />