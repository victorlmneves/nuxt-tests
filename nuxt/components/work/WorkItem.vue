<template>
  <div class="work-list">
    <div v-for="item in workList" :key="item.id" class="work-list__item">
      <div class="work-list__content-wrapper">
        <div class="work-list__content">
          <h2 class="work-list__title">
            <NuxtLink
              :to="`works/${item.id}`"
            >
              {{item.client}}
            </NuxtLink>
          </h2>
          <p class="work-list__info">
            {{item.project}}
          </p>
          <nuxt-link
            class="work-list__link"
            :to="{
              name: 'works',
              params: {
                id: item.id 
              }
            }"
          >
            View Project
          </nuxt-link>
        </div>
      </div>
      <div class="work-list__wrapper-img">
        <div
          class="work-list__image"
          :data-src="`${item.image}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkItem',

  props: {
    workList: Array
  }
}
</script>

