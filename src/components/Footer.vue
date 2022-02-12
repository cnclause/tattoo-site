<template>
    <v-footer padless class="footer">
        <v-card
            flat
            tile
            class="footer-card text-center"
        >
        <v-card-text class="footer-card-top">
            <v-btn
                v-for="icon in icons"
                :key="icon"
                :href="icon.link"
                class="mx-4 footer-btn"
                icon
                color='grey darken-4'
            >
                <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text class="footer-card-bottom">
            <v-btn text to="/" color="black"> Home </v-btn>
            <v-btn text to="/about" color="black"> About </v-btn>
            <v-btn text to="/faq"> FAQ </v-btn>
            <v-btn text to="/book"> Book </v-btn>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    data(){
        return {
        icons: [
          {
              icon: 'fa fa-instagram',
              link: 'https://www.instagram.com/timounkontan/'
          }
        ]
        }
    }
}
</script>

<style lang="scss">

.footer{
    margin-top: 1rem;
    display: flex;
    flex-flow: column;
    justify-items: flex-start;
}

.footer-card-top{
    padding-bottom: 0px !important;
    padding-top: 0px !important
}

.footer-card-bottom{
    padding-bottom: 14rem !important;
}

.footer-card-slogan{
    text-align: left;
}

.footer-card{
    width: 100%;
}


</style>