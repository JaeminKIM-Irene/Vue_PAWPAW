<template>
    <div>
        <HeaderNav />
            <div style="display:flex; paddingTop:8.5vw">
            
                <img src="../images/contactArrow.png" alt='' class='contactArrow'/>
                <div class='contactD'>
                    <div class='contactT1'>Get in touch</div>
                    <p class='contactT2'>파우파우에 대해 궁금하거나 혹은 피드백이 있다면</p>
                    <p class='contactT2'>정확한 이메일 정보를 작성해주시면 빠른시간 안에 답변해 드리겠습니다!</p>
                    <div class='contactBox'>
                        <form ref="form">
                            <p class='contactT3'>이름과 답변 받으실 이메일 주소를 꼭 정확하게 작성해주세요</p>
                            <input type='text' placeholder='이름' class='contactInput' name="name" v-model="info.name"/>
                            <input type='text' placeholder='이메일 주소' class='contactInput' name="email" v-model="info.email"/>
                            <p className='contactT3'>문의하실 내용을 입력해주세요</p>
                            <input type='text' placeholder='제목' class='contactInput' name="title" v-model="info.title"/>
                            <textarea placeholder='내용' class='contactInput2' name="detail" v-model="info.detail"/>
                            <div class='contactCheckB'>
                                <input type='checkbox' class='contactCheck' id='agree'/>
                                <label for='agree' class='contactCL'>개인정보 및 수집이용에 동의합니다</label>
                            </div>
                            <img src="../images/submit.png" alt="" class='contactSub' @click="sendEmail"/>
                        </form>
                    </div>
                </div>
            </div>
        <FooterBar />
    </div>
</template>

<script>
    import HeaderNav from '../components/HeaderNav.vue';
    import FooterBar from '../components/FooterBar.vue';
    import emailjs from '@emailjs/browser';

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'FooterBar' : FooterBar,
        },
        data() {
            return {
                info: {
                    name: '',
                    email: '',
                    title: '',
                    detail: '',
                }
            }
        },
        methods: {
            sendEmail() {
                if (this.info.name.length > 0 && this.info.email.length > 0 && this.info.title.length > 0 && this.info.detail.length > 0){
                    emailjs.sendForm('service_b2rxhcl', 'template_33z55kj', this.$refs.form, 'ZHP6hLoBsyIGThzBY')
                    .then (() => {
                        window.location.pathname='/contact/submit'
                    })
                }
                else {
                    alert('모든 항목을 작성해주세요.')
                }
            }
        }
    }
</script>

<style src="../css/contact.css" scoped />