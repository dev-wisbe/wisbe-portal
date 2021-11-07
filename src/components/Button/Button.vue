<template>
  <v-btn
    color="#6E38F7"
    :depressed="variation === 'primary'"
    :text="variation === 'secondary'"
    :class="`button-${variation}`"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <span class="button-name">{{ title }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    variation: {
      type: String,
      required: false,
      default: 'primary'
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.button-primary
  color: #fff

.button-secondary
  color: #6E38F7
</style>