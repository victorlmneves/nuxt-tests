<template>
  <span>
    <div :class="[{ 'menu-is-open': showMenu }]"></div>
    <div
      :class="[
        'container',
        {
          'container--full': activeRoute === 'work'
        }
      ]"
    >
      <NavMain />
      <Header />
      <Nuxt />
      <Copyright />
    </div>
  </span>
</template>