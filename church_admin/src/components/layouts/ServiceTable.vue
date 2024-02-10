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
              <button class="details-btn" @click="showDetails(request.memberId)">
                View Full Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
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