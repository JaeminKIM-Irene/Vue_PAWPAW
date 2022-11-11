<template>
    <div>
        <HeaderNav />
        <div className='submitD'>
            <div className='submitTs'>
                <div className='submitT'>Submit !</div>
                <p className='submitT2'>문의하신 내용이 성공적으로 등록되었습니다!</p>
                <p className='submitT2'>담당자가 확인하여 최대한 빠르게 답변드리도록 하겠습니다</p>
            </div>
            
            <div className='submitDirect'>
                <router-link to='/'>
                    <div className='submitALW' />
                    <div className='submitGW' />
                </router-link>
            </div>
            <div className='submitDirect'>
                <router-link to='/event'>
                    <div className='submitARW' />
                    <div className='submitCW' />
                </router-link>
            </div>
        </div>
        <FooterBar />
    </div>
</template>

<script>
    import HeaderNav from '../components/HeaderNav.vue';
    import FooterBar from '../components/FooterBar.vue';
    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'FooterBar' : FooterBar,
        },
    }
</script>

<style src="../css/contact2.css" scoped />
