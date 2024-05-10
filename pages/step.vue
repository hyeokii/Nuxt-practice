<template>
  <div>
    <!-- <v-card class="mb-4">
      <v-card-text>
        <v-select
          v-model="steps"
          :items="[2, 3, 4, 5, 6]"
          label="# of steps"
        ></v-select>
      </v-card-text>
    </v-card> -->
    <v-stepper v-model="e1" alt-labels>
      <v-stepper-header>
        <template v-for="(item, idx) in list">
          <v-stepper-step
            :key="`${idx}-step`"
            :complete="e1 > idx + 1"
            :step="idx + 1"
            editable
          >
            {{item}}
          </v-stepper-step>

          <v-divider
            v-if="idx + 1 !== steps"
            :key="idx + 1"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="(item, idx) in list"
          :key="`${idx + 1}-content`"
          :step="idx + 1"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >{{item}}</v-card>

          <v-btn
            color="primary"
            @click="nextStep(idx + 1)"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  layout: 'DefaultLayout',
  data () {
    return {
      e1: 1,
      steps: null,
      list: [
       '교환 선택','주소 입력', '신청완료'
      ]
    }
  },
  watch: {
    // steps (val) {
    //   if (this.e1 > val) {
    //     this.e1 = val
    //   }
    //   console.log('e1:' + this.e1)
    //   console.log('val:' + val)
    // },
  },
  created () {
    this.steps = this.list.length
  },

  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
  },
}
</script>