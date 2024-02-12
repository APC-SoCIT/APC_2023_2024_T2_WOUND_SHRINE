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
          <th># of Copies</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in filteredRequests" :key="request.memberId">
          <td>{{ request.memberId }}</td>
          <td>{{ request.name }}</td>
          <td>{{ request.copies }}</td>
          <td>{{ request.status }}</td>
          <td>
            <button class="details-btn" @click="showDetails(request.memberId)">
              View Full Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
export default {
props: {
  title: {
    type: String,
    default: "Baptism Certificate Requests",
  },
  requests: {
    type: Array,
    default: () => [
      {
        memberId: 12345,
        name: 'Jarvis V. Carpo',
        copies: '1',
        status: 'approved',
      },
      {
        memberId: 67890,
        name: 'Kim Altea',
        copies:'10',
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

.roundedCorners tr:last-child > td {
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
margin: 0; /* Add this line to remove margin */
}

.details-btn:hover {
background-color: #f0981e;
}
</style>