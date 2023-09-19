<template>
  <div>
    <v-card class="mx-auto mt-8" color="#26c6da" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-comment-quote-outline </v-icon>
        <span class="text-h6 font-weight-light">Quote of the day</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
        "We cannot solve problems with the kind of thinking we employed when we
        came up with them."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="white">
            <v-img
              class="elevation-6"
              alt=""
              src="https://img.icons8.com/glyph-neue/64/einstein.png"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Albert Einstein</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1" @click="increaseCounterOne()"> mdi-heart </v-icon>
            <span class="subheading mr-2">{{counterOne}}</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
            <span class="subheading">95</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <v-spacer></v-spacer>
  <v-card
    class="mx-auto mt-8"
    color="pink lighten-3"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
      mdi-comment-quote-outline
      </v-icon>
      <span class="text-h6 font-weight-light">Quote of the day</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold">
      "Learn as if you will live forever, live like you will die tomorrow."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="white">
          <v-img
            class="elevation-6"
            alt=""
            src="https://img.icons8.com/wired/64/mahatma-gandhi.png"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Gandhi</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1" @click="increaseCounterTwo()">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">{{counterTwo}}</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </div>
  
</template>

<script>
export default {
  name: "members",
  data() {
    return {
      counterOne: 256,
      counterTwo: 512,
    }
  },
  computed: {
    increaseCounterOne() {
      return this.counterOne++; 
    },
    increaseCounterTwo() {
      return this.counterTwo++ 
    },
  },
};
</script>

<style>
.text {
  justify-content: center;
  display: flex;
  margin-top: 17px;
}
</style>
