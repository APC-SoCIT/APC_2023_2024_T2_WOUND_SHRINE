<template>
  <div>
    <div v-for="index in 5" :key="index" class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-custom text-white"> <!-- Changed color to #ffaa2b -->
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
  
        <q-separator />
  
        <q-card-actions class="action-container" align="right">
          <div class="action-word">Word {{ index }}</div>
          <div>
            <q-btn flat>edit</q-btn>
            <q-btn flat>cancel</q-btn>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 1000%
  max-width: 1000px
  margin: auto
  margin-top: 20px

.action-container
  display: flex
  justify-content: space-between
  align-items: center

.action-word
  margin-right: 10px

.bg-custom
  background-color: #ffaa2b
</style>
