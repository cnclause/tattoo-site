<template>
  <div class="home-container">
    <h1 class="title display-4"> Veronica Musser Tattoo </h1>
    <div class='home-img-container'>
      <v-img class='home-image' src="https://veeh-tattoo-site.s3-us-west-1.amazonaws.com/head_shot.jpg" contain> </v-img>
    </div>
    <p class="home paragraph large">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Nec dui nunc mattis enim ut tellus. In fermentum et sollicitudin ac orci phasellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Enim neque volutpat ac tincidunt vitae semper. Ante metus dictum at tempor. Nullam vehicula ipsum a arcu cursus vitae. Neque sodales ut etiam sit amet nisl purus in. Vitae auctor eu augue ut lectus arcu bibendum. Sollicitudin ac orci phasellus egestas tellus rutrum. Velit ut tortor pretium viverra. Sed enim ut sem viverra aliquet. Auctor elit sed vulputate mi.
    </p>
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    // components: {
    //   HelloWorld,
    // },
  }
</script>

<style lang="scss">
@import '../styles/global.scss';

.home-container{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.home-img-container{
  width: 100%;
}
.title.display-4{
  text-align: center;

}

.home-image{
  max-height: 35rem;
  justify-self: center;
}
.home-paragraph{
  text-align: center;
  width: 75%
}


// .title.display-4{
//   padding-top: 100px;
//   text-align: center;
//   z-index: -1;
  
// }

// .title.display-2{
//   padding: 30px;
//   text-align: center;
// }


// .title-header-container h3{
//     padding-bottom: 75px;
//     z-index: 2;
// }

// .slogan.display-3 {
//   font-size: 30pt;
//   text-align: center;
//   line-height: 5rem !important;
// }

// .title.slogan.display-1 {
//   font-size: 25pt !important;
//   text-align: center;
// }

</style>
