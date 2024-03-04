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
            <ViewFullBaptism :formData="props.row" />
          </q-td>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script setup>
import ViewFullBaptism from '@/views/detailview/ViewFullBaptism.vue';
import { ref, computed } from 'vue';

const columns = [
  { name: 'memberId', label: 'Member ID', align: 'left', field: 'memberId', sortable: true },
  { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
  { name: 'dateOfRequest', label: 'Date of Request', align: 'center', field: 'dateOfRequest', sortable: true },
  { name: 'timeOfRequest', label: 'Time of Request', align: 'center', field: 'timeOfRequest', sortable: true },
  { name: 'status', label: 'Services', align: 'center', field: 'status', sortable: true },
  { name: 'details', label: 'Details', align: 'center' },
];

const rows = [
  {
    memberId: 12345,
    name: 'Jarvis Carpo',
    dateOfRequest: '2024-02-21',
    timeOfRequest: '12:30 PM',
    status: 'Baptism',
  },
  {
    memberId: 67890,
    name: 'Kim Altea',
    dateOfRequest: '2024-02-20',
    timeOfRequest: '03:45 PM',
    status: 'Baptism',
  },
  // Add more rows for different statuses here
];

const selectedStatus = ref('all');

const filteredRows = computed(() => {
  if (selectedStatus.value === 'all') {
    return rows;
  } else {
    return rows.filter((row) => row.status === selectedStatus.value);
  }
});

const changeStatus = (status) => {
  selectedStatus.value = status;
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
