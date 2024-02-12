<template>
  <div class="container">
    <h1 class="page-header">{{ title }}</h1>

    <q-btn-dropdown label="View">
      <q-list link>
        <q-item clickable @click="changeStatus('all')">
          <q-item-main>
            <q-item-tile label>All Requests</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item clickable @click="changeStatus('approved')">
          <q-item-main>
            <q-item-tile label>Approved Requests</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item clickable @click="changeStatus('pending')">
          <q-item-main>
            <q-item-tile label>Pending Requests</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-btn-dropdown>

    <table class="table">
      <thead>
        <tr>
          <th>Member ID</th>
          <th>Name</th>
          <th>Date of Request</th>
          <th>Time of Request</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in filteredRequests" :key="request.memberId">
          <td>{{ request.memberId }}</td>
          <td>{{ request.name }}</td>
          <td>{{ request.dateOfRequest }}</td>
          <td>{{ request.timeOfRequest }}</td>
          <td>{{ request.status }}</td>
          <td>
            <ViewFullDetails :formData="request" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ViewFullDetails from '@/components/layouts/ViewFullDetails.vue';

export default {
  components: {
    ViewFullDetails,
  },
  props: {
    title: {
      type: String,
      default: "Baptism Requests",
    },
    requests: {
      type: Array,
      default: () => [
        {
          memberId: 12345,
          name: 'Jarvis V. Carpo',
          dateOfRequest: '2024-02-08',
          timeOfRequest: '14:30:00',
          status: 'approved',
        },
        {
          memberId: 67890,
          name: 'Kim Altea',
          dateOfRequest: '2024-02-09',
          timeOfRequest: '10:45:00',
          status: 'pending',
        },
      ],
    },
  },
  data() {
    return {
      requestStatus: "all",
    };
  },
  computed: {
    filteredRequests() {
      if (this.requestStatus === "all") {
        return this.requests;
      } else {
        return this.requests.filter((request) => request.status === this.requestStatus);
      }
    },
  },
  methods: {
    showDetails(memberId) {
      alert("View full details for Member ID: " + memberId);
    },
    updateStatus(request) {
      // Handle status update, e.g., send an API request
      console.log(`Status of request ${request.memberId} updated to ${request.status}`);
    },
    changeStatus(status) {
      // Handle the click event for each status in the dropdown
      this.requestStatus = status;
      console.log(`Changed status to: ${status}`);
      // You can perform additional logic based on the selected status
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 10px;
}

.page-header {
  text-align: left;
  color: black;
  margin-bottom: 0px;
  font-size: 45px;
  font-weight: bold;
}

.table {
  border: 1px solid DarkOrange;
  border-radius: 8px;
  border-spacing: 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 10px; 
}

.table th {
  background-color: #f2af5e;
}

.table td,
.table th {
  border-bottom: 1px solid DarkOrange;
  padding: 8px;
  text-align: left;
}

.table tr:last-child > td {
  border-bottom: none;
}

select {
  padding: 6px;
}

.details-btn {
  padding: 6px 12px;
  background-color: #af5e4c;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 0;
}

.details-btn:hover {
  background-color: #f0981e;
}
</style>
