<template>
    <div class="q-pa-md">
      <q-btn-dropdown label="View" class="bg-white">
        <q-list link>
          <q-item clickable @click="changeStatus('all')">
            <q-item-main>
              <q-item-tile label>All Requests</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item clickable @click="changeStatus('Approved')">
            <q-item-main>
              <q-item-tile label>Approved Requests</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item clickable @click="changeStatus('Pending')">
            <q-item-main>
              <q-item-tile label>Pending Requests</q-item-tile>
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
        title="Mass Cards Requests"
        :rows="filteredRows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body-cell-details="props">
          <q-td :props="props">
            <ViewFullDocuDetails :formData="props.row" />
          </q-td>
        </template>
      </q-table>
    </div>
  </template>
  
  <script>
  import ViewFullDocuDetails from '@/components/layouts/ViewFullDocuDetails.vue';
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const columns = [
        { name: 'user_id', label: 'Member ID', align: 'left', field: 'user_id', sortable: true },
        { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
        { name: 'copies', label: '# of Copies', align: 'center', field: 'copies', sortable: true },
        { name: 'status', label: 'Status', align: 'center', field: 'status', sortable: true },
        { name: 'details', label: 'Details', align: 'center' },
      ];
  
  
      const rows = [
        {
          memberId: 12345,
          name: 'Jarvis Carpo',
          copies: 5,
          status: 'Approved',
        },
        {
          memberId: 67890,
          name: 'Kim Altea',
          copies: 10,
          status: 'Pending',
        },
        {
          memberId: 13579,
          name: 'Reiner John',
          copies: 3,
          status: 'Approved',
        },
        {
          memberId: 24680,
          name: 'Bon Daggao',
          copies: 8,
          status: 'Pending',
        },
        {
          memberId: 11223,
          name: 'Vince Tan',
          copies: 6,
          status: 'Approved',
        },
        {
          memberId: 33445,
          name: 'Carlo Santos',
          copies: 12,
          status: 'Pending',
        },
        {
          memberId: 55667,
          name: 'John Slay',
          copies: 7,
          status: 'Approved',
        },
        {
          memberId: 77889,
          name: 'Eme Eme',
          copies: 9,
          status: 'Pending',
        },
        {
          memberId: 99000,
          name: 'Rina Sawayama',
          copies: 4,
          status: 'Approved',
        },
        {
          memberId: 11234,
          name: 'Slay',
          copies: 11,
          status: 'Pending',
        },
      ];
      const viewFullDetails = (row) => {
        console.log('View Full Details:', row);
      };
  
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
  
      return {
        columns,
        rows,
        viewFullDetails,
        selectedStatus,
        changeStatus,
        filteredRows,
      };
    },
    components: {
      ViewFullDocuDetails,
    },
  };
  </script>
  
  <style>
  .q-btn-dropdown{
    margin-bottom: 10px;
  }
  .q-table th {
    font-weight: bold;
    font-size: 1.2em;
  }
  </style>
  