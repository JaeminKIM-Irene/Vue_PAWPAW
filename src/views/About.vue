<template>
    <div>
        <HeaderNav />
        <div>
            <div class="aboutContent">
                <img src='../images/footprint1.png' alt="" class="aboutFoot1" />
                <div>
                    <div className='aboutTBox'><div className='aboutT1'>We are a community</div></div>
                    <div className='aboutTBox'><div className='aboutT2'>that consolidates and</div></div>
                    <div className='aboutTBox'><div className='aboutT3'>shares exciting events</div></div>
                    <div className='aboutTBox'><div className='aboutT4'>for all kinds of animal toys &</div></div>
                    <div className='aboutTBox'><div className='aboutT5'>equipments for animal lovers</div></div>
                    <div className='aboutTBox'><div className='aboutT6'>like you!</div></div>
                </div>
                <img src='../images/footprint2.png' alt="" class="aboutFoot2" />
            </div>
            <div class="aboutContent2">
                <div>
                    
                </div>
                    <img src="../images/q1.png" alt="" class="aboutBubble1" />                    
                    <img src="../images/a1.png" alt="" class="aboutBubble2" />
                    <img src="../images/q2.png" alt="" class="aboutBubble3" />
                    <img src="../images/a2.png" alt="" class="aboutBubble4" />
                    <img src="../images/q3.png" alt="" class="aboutBubble5" />
                    <img src="../images/a3.png" alt="" class="aboutBubble6" />
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
            'FooterBar' : FooterBar
        }
        
    }
</script>

<style src="../css/about.css" scpoed />