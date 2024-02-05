<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <q-list>
      <template v-for="link in links" :key="link.title">
        <Link id="sidebar-label" v-if="!link.items" v-bind="link" />
        <ExpandedLink id="sidebar-label" v-if="link.items" v-bind="link" />
      </template>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import Link from './Link.vue'
import ExpandedLink from './ExpandedLink.vue'

const emitter = inject('emitter')

const leftDrawerOpen = ref(false)
const router = useRouter()
const links = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/home'
  },
  {
    title: 'Service Requests',
    icon: 'dashboard',
    link: '/home',
    items: [
      {
        title: 'Baptism',
        link: '/dropdown-item-1'
      },
      {
        title: 'Marriage',
        link: '/dropdown-item-2'
      },
      {
        title: 'Confirmation',
        link: '/dropdown-item-2'
      },
      {
        title: 'House Blessing',
        link: '/dropdown-item-2'
      },
      {
        title: 'Confession',
        link: '/dropdown-item-2'
      },
      {title: 'Annointing of the Sick',
        link: '/dropdown-item-2'
      }
    ]
  },
  {
    title: 'Dcoument Requests',
    icon: 'dashboard',
    link: '/home',
    items: [
      {
        title: 'Marriage Certificate',
        link: '/dropdown-item-1'
      },
      {
        title: 'Baptism Certificate',
        link: '/dropdown-item-2'
      },
      {
        title: 'Good Moral',
        link: '/dropdown-item-2'
      },
      {
        title: 'Mass Cards',
        link: '/dropdown-item-2'
      },
    ]
  },
]

function toggleDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
emitter.on('toggleDrawer', () => toggleDrawer())

function webapps() {
  const path = 'webapps'
  router.push(path)
}
</script>

<style lang="scss">
#button-apps {
  background-color: #00B85D !important;
  color: white;
}

#sidebar-label {
  color: black;
  font-weight: 400;
}

#sidebar-label:active {
  color: black;
  font-weight: 800;
}

#sidebar-label:hover {
  color: black;
  font-weight: 500;
  background-color: #ffaa2b !important;
}

.q-drawer {
  background-color: #ffaa2b !important; /* Set the desired background color */
}
</style>
