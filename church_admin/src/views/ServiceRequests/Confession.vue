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
      title="Confession Requests"
      :rows="rows"
      :columns="columns"
      row-key="memberId"
    >
      <template v-slot:body-cell-details="props">
        <q-td :props="props">
          <ViewFullDetails :row="props.row" @updated="getData()" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import ViewFullDetails from '@/components/layouts/ViewFullConfession.vue';
import { ref, computed, onMounted } from 'vue';
import { useConfessionStore } from "@/stores/confession";

const confessionStore = useConfessionStore();


export default {
  setup() {
    const columns = [
      { name: 'user_id', label: 'Member ID', align: 'left', field: 'user_id', sortable: true },
      { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
      { name: 'preferred_date', label: 'Date of Request', align: 'center', field: 'preferred_date', sortable: true },
      { name: 'preferred_time', label: 'Time of Request', align: 'center', field: 'preferred_time', sortable: true },
      { name: 'status', label: 'Status', align: 'center', field: 'status', sortable: true },
      { name: 'details', label: 'Details', align: 'center' },
    ];

    let loading = ref(false)
    let rows = ref([])


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

    async function getData(){
  loading.value = true
  const statusToStoreMap = {
    "all": confessionStore.getAll(),
    "Pending": confessionStore.getAllPending(),
    "Approved": confessionStore.getAllApproved(),
    "Rejected": confessionStore.getAllRejected(),
  };

  const response = await statusToStoreMap[selectedStatus.value];
  console.log(response.data);
  const data = response.data;

  rows.value = [];

  // Assuming the data you provided is named `data`
  data.forEach((item) => {
    rows.value.push({
      user_id: item.user_id,
      item_id: item.id,
      contact_number: item.contact_number,
      email: item.email,
      preferred_date: item.preferred_date.substring(0, 10),
      preferred_time: item.preferred_time,
      child_name: item.child_name,
      status: item.status, // Assuming the status is always Baptism for this data
    });
  });
  loading.value = false
}

onMounted(() => {
  getData()
})

    const changeStatus = (status) => {
      selectedStatus.value = status;
      getData()
    };

    return {
      columns,
      rows,
      viewFullDetails,
      selectedStatus,
      changeStatus,
      filteredRows,
      getData
    };
  },
  components: {
    ViewFullDetails,
  },
};
</script>

<style>
.q-btn-dropdown {
  margin-bottom: 10px;
}
.q-table th {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
