<template>
  <div class='faq-container'>
    <h1 class="title display-3"> Frequently Asked Questions</h1>
    <div  class='panel-container'>
      <v-expansion-panels focusable class='panels'>
        <v-expansion-panel
          v-for="(faq,i) in faqs"
          :key="i"
        >
          <v-expansion-panel-header>{{ faq.question }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'faq',
    data() { 
      return {
        faqs:[
          {'question': 'how do I do this', 'answer': 'like this'},
          {'question': 'How do I contact you', 'answer': 'like this'},
          {'question': 'Are you taken', 'answer': 'yes by my lovely gf who made this site'}
        ]
      }
    }

    // components: {
    //   HelloWorld,
    // },
  }
</script>

<style scoped>
  .panel-container {
    display: flex;
    padding-bottom: 3rem;
    justify-content: center;

  }
  .panels {
    max-width: 60%;
  }

  .title.display-3{
    text-align: center;

}
</style>