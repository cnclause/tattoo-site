<template>
    <v-app-bar elevate-on-scroll app fixed max-height=5rem short color='white'>
      <v-toolbar-items right class="hidden-sm-and-down nav-bar">
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            to='/'
            v-on="on"
            text
          >
          Home
          </v-btn>
        </template>
      </v-menu>
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            to='/about'
            v-on="on"
            text
          >
          About
          </v-btn>
        </template>
      </v-menu>
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            to='/faq'
            v-on="on"
            text
          >
          FAQ
          </v-btn>
        </template>
      </v-menu>
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            to='/booking'
            v-on="on"
            text
          >
          Booking
          </v-btn>
        </template>
      </v-menu>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <template v-slot:activator="{ on }" >
        <v-app-bar-nav-icon class="hidden-md-and-up" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item to='/' exact>
              Home
            </v-list-item>
            <v-list-item to='/about'>
              Tattoos
            </v-list-item>
            <v-list-item to='/faq'>
              Art
            </v-list-item>
            <v-list-item to='/booking'>
              Contact Me
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
 </v-app-bar>
</template>

<style lang="scss">
@import '@/styles/global.scss';

.nav-bar.hidden-sm-and-down{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.nav-icon{
  margin-left: 0.5rem;
}

.k-btn{
  font-size: 16pt !important;
}

</style>