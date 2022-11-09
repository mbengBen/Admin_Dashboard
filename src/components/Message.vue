<template>
  <div v-if="getError" class="message">
    <div class="message-contentent">
        <span @click="closed" class="message-icon">X</span>
        <h3>{{getMessage}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
 computed: {
    ...mapGetters([
        "getMessage",
        "getError"
    ])
 },
 methods: {
    ...mapMutations([
        "displayError"
    ]),
    closed(){
        this.displayError(false);
    }
 }
}
</script>

<style>
.message{
    z-index: 200;
    display: flex;
    justify-content: space-between !important;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    background: rgb(241, 113, 113);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%);
    border-radius: .4rem;
    max-width: 25rem;
    padding: 1rem;
}
.message-icon{
    cursor: pointer;
}
</style>