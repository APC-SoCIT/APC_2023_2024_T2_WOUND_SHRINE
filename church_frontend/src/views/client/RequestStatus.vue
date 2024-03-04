<template>
  <div>
    <q-card class="q-pa-md">
      <q-btn-dropdown label="View" class="bg-white">
        <q-list link>
          <q-item clickable @click="changeStatus('Baptism')">
            <q-item-main>
              <q-item-tile label>Baptism</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item clickable @click="changeStatus('Marriage')">
            <q-item-main>
              <q-item-tile label>Marriage</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item clickable @click="changeStatus('Confession')">
            <q-item-main>
              <q-item-tile label>Confession</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item clickable @click="changeStatus('Confirmation')">
            <q-item-main>
              <q-item-tile label>Confirmation</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item clickable @click="changeStatus('House Blessing')">
            <q-item-main>
              <q-item-tile label>House Blessing</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item clickable @click="changeStatus('Anointing of the Sick')">
            <q-item-main>
              <q-item-tile label>Anointing of the sick</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-table
        table-class="bg-white text-black"
        card-class="bg-white text-black"
        table-header-class="text-black"
        flat
        bordered
        :title="selectedStatus === 'all' ? 'Baptism Requests' : `${selectedStatus} Requests`"
        :rows="filteredRows"
        :columns="columns"
        row-key="memberId"
      >
        <template v-slot:body-cell-details="props">
          <q-td :props="props">
            <ViewFullBaptism v-if="selectedStatus === 'Baptism'" :formData="props.row" />
            <ViewFullMarriage v-if="selectedStatus === 'Marriage'" :formData="props.row" />
            <ViewFullAnointing v-if="selectedStatus === 'Anointing of the Sick'" :formData="props.row" />
            <ViewFullConfession v-if="selectedStatus === 'Confession'" :formData="props.row" />
            <ViewFullConfirmation v-if="selectedStatus === 'Confirmation'" :formData="props.row" />
            <ViewFullHouseBlessing v-if="selectedStatus === 'House Blessing'" :formData="props.row" />
          </q-td>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script setup>
import ViewFullBaptism from '@/views/detailview/ViewFullBaptism.vue';
import ViewFullMarriage from '@/views/detailview/ViewFullMarriage.vue';
import ViewFullConfession from '@/views/detailview/ViewFullConfession.vue';
import ViewFullConfirmation from '@/views/detailview/ViewFullConfirmation.vue';
import ViewFullAnointing from '@/views/detailview/ViewFullAnointing.vue';
import ViewFullHouseBlessing from '@/views/detailview/ViewFullHouseBlessing.vue';

import { useBaptismStore } from "@/stores/baptism";


import { ref, computed, onMounted } from 'vue';

const baptismStore = useBaptismStore();


const columns = [
  { name: 'memberId', label: 'Member ID', align: 'left', field: 'memberId', sortable: true },
  { name: 'name', label: 'Child Name', align: 'left', field: 'name', sortable: true },
  { name: 'dateOfRequest', label: 'Date of Request', align: 'center', field: 'dateOfRequest', sortable: true },
  { name: 'timeOfRequest', label: 'Time of Request', align: 'center', field: 'timeOfRequest', sortable: true },
  { name: 'status', label: 'Services', align: 'center', field: 'status', sortable: true },
  { name: 'details', label: 'Details', align: 'center' },
];

let rows = ref([])
// const rows = [
//   {
//     memberId: 12345,
//     name: 'Jarvis Carpo',
//     dateOfRequest: '2024-02-21',
//     timeOfRequest: '12:30 PM',
//     status: 'Marriage',
//   },
//   {
//     memberId: 67890,
//     name: 'Kim Altea',
//     dateOfRequest: '2024-02-20',
//     timeOfRequest: '03:45 PM',
//     status: 'Baptism',
//   },
//   // Add more rows for different statuses here
// ];


const selectedStatus = ref('Baptism');

onMounted(() => {
  getData()
})

const filteredRows = computed(() => {
  if (selectedStatus.value === 'all') {
    return rows.value; // Accessing the array within the ref
  } else {
    return rows.value.filter((row) => row.status === selectedStatus.value); // Using rows.value.filter
  }
});

async function getData(){
  const response = await baptismStore.getAll();
  console.log(response.data)
  const data = response.data;

  rows.value = [];

  
  // Assuming the data you provided is named `data`
  data.forEach((item) => {
    rows.value.push({
      memberId: item.id,
      name: item.child_name,
      dateOfRequest: item.schedule.substring(0, 10),
      timeOfRequest: new Date(item.schedule).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Baptism', // Assuming the status is always Baptism for this data
    });
  });
}

const changeStatus = (status) => {
  selectedStatus.value = status;
  getData()
};
</script>

<style scoped>
.q-btn-dropdown {
  margin-bottom: 10px;
}
.q-table th {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
