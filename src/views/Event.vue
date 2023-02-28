<template>
    <div>
        <HeaderNav />
        <div class="eventContent">
            <div style="display: flex">
                <div className='eventT'>Upcoming Event</div>
                <ul @click="drop = !drop" className='eventDrop'>
                    <div class="dropT" v-if="now">예정 전시 안내
                        <img v-if="drop" src="../images/arrow.png" alt="" class="eventArrow2" />
                        <img v-else src="../images/arrow.png" alt="" class="eventArrow" />
                    </div>
                    <div class="dropT" v-else>지난 전시 안내
                        <img v-if="drop" src="../images/arrow.png" alt="" class="eventArrow2" />
                        <img v-else src="../images/arrow.png" alt="" class="eventArrow" />
                    </div>
                    <div v-if="drop" class="eventDropped">
                        <div v-if="now">
                            <li>예정 전시 안내</li>
                            <li @click="changeEvents" className='eventDL'>지난 전시 안내</li>
                        </div>
                        <div v-else>
                            <li @click="changeEvents" className='eventDL'>예정 전시 안내</li>
                            <li>지난 전시 안내</li>
                        </div>
                    </div>
                    <li v-else className='dropT2'></li>
                </ul>
            </div>
            <div className='eventContent2'>
                <div className='noResult' v-if="filtered.length == 0">
                    예정된 전시가 없습니다
                </div>
                <div v-else v-for="(event, index) in filtered" :key="index" class="eventList" @click="$router.push({name: 'Event2', params:event})">
                    <img :src="require(`@/images/${event.poster1N}`)" alt="" class="eventPoster"/>
                    <div className='eventD'>
                    <div className='eventName'>{{event.name}}</div>
                    <div className='eventD2'>{{event.place}}</div>
                    <div className='eventD2' >D{{getDday(event)}}</div>
                    <div className='eventD2' >{{getFull(event.duration[0])}} - {{getFull(event.duration[1])}}</div>
                </div>
            </div>
        </div>
        </div>
        <FooterBar />
    </div>
</template>

<script>
    import HeaderNav from '../components/HeaderNav.vue'
    import FooterBar from '../components/FooterBar.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'FooterBar' : FooterBar
        },
        data() {
            return {
                drop: false,
                now: true,
                today: new Date().getTime(),
                week : ['일', '월', '화', '수', '목', '금', '토'],
                filtered: [],
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
                        poster2N: 'poster4.png',
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
        created() {
                if (this.now){
                    this.filtered = this.events.filter(event => ((this.today - event.duration[0].getTime()) < 0))
                }
                    
                else{
                    this.filtered = this.events.filter(event => ((this.today - event.duration[0].getTime()) > 0))
                }
        },
        methods: {
            getDday(e) {
                return Math.ceil((this.today-e.duration[0].getTime())/(1000*60*60*24))
            },
            getFull(e) {
                return e.getFullYear() + '.' + ('0'+(e.getMonth()+1)).slice(-2) + '.' + ('0'+e.getDate()).slice(-2) + ' (' + this.week[e.getDay()] + ')'
            },
            changeEvents() {
                this.now = !this.now;
                this.now ?
                    this.filtered = this.events.filter(event => (this.today - event.duration[0].getTime() < 0))
                :
                    this.filtered = this.events.filter(event => (this.today - event.duration[0].getTime() > 0))
            }
        }
    }
</script>

<style src="../css/event.css" scoped />