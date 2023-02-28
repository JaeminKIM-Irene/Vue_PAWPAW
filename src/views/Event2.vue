<template>
    <div>
        <HeaderNav />
        <div className='eventDContent'>
            <div style="display:flex">
                <div className='eventDT'>Let us introduce</div>
                <div className='eventDLine'></div>
            </div>
            <div className='eventDName'>{{$route.params.name}}</div>
            <div style=display:flex>
                <div className='eventDContent2'>
                    <div className='eventDInfo'>
                        <div className='eventDT2'>행사명<div>{{$route.params.name}}</div></div>
                        <div className='eventDT2'>홈페이지<div style="cursor:pointer; textDecoration:underline" @click="window.location.href=$route.params.url">{{$route.params.url}}</div></div>
                        <div className='eventDT2'>장소<div>{{$route.params.place}}</div></div>
                        <div className='eventDT2'>기간<div>{{getFull($route.params.duration[0])}} - {{getFull($route.params.duration[1])}}</div></div>
                        <div className='eventDT2'>시간<div>{{$route.params.time}}</div></div>
                        <div className='eventDT2'>규모<div>{{$route.params.size}}</div></div>
                        <div className='eventDT2'>주관<div>{{$route.params.company1}}</div></div>
                        <div className='eventDT2' style="marginBottom:1vw">주최<div>{{$route.params.company2}}</div></div>
                        
                    </div>
                    <div className='eventDT3'>Detail information</div>
                    <div className='eventDInfo2'>
                        {{$route.params.detail}}
                    </div>
                </div>
                <div className='eventDPoster'>
                    <img :src="require(`@/images/${$route.params.poster2N}`)" alt="" className='eventDPoster2' />
                
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
            return{
               week: ['일', '월', '화', '수', '목', '금', '토'] 
            }
        },
        methods: {
            getFull(e) {
                e = new Date(e)
                return e.getFullYear() + '.' + ('0'+(e.getMonth()+1)).slice(-2) + '.' + ('0'+e.getDate()).slice(-2) + ' (' + this.week[e.getDay()] + ')'
            },
        }
    }
</script>

<style src="../css/event2.css" scoped>

</style>