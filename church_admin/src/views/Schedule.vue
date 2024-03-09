<template>
  <div class="subcontent">
    <div class="button-container">
      <q-btn @click="openDialog" text-color="white" label="Add New Schedule" />
      <q-btn-dropdown label="View"  class="dropdown">
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Scheduled Requests</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Fr. Maglines</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Fr. Jerson</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn class="nav-button" @click="onPrev" label="Prev" />
      <q-btn class="nav-button" @click="onToday" label="Today" />
      <q-btn class="nav-button" @click="onNext" label="Next" />
    </div>

    <q-card class="container">
      <q-calendar-month
        ref="calendar"
        class="calendar"
        v-model="selectedDate"
        no-outside-days
        :day-min-height="110"
        animated
        bordered
        @change="onChange"
        @moved="onMoved"
        @click-date="onClickDate"
        @click-day="onClickDay"
        @click-workweek="onClickWorkweek"
        @click-head-workweek="onClickHeadWorkweek"
        @click-head-day="onClickHeadDay"
      />
    </q-card>

    <q-dialog v-model="dialogVisible">
      <q-card class="dialog">
        <q-card-section class="q-dialog-title">
          <q-card-title class="text-h6">Add New Schedule</q-card-title>
        </q-card-section>
        <q-card-section>
          <q-input v-model="schedule.title" label="Title" />
  
            <div class="input-wrapper">
              <div class="label">Start Date</div>
              <div class="date-picker">
                <q-input v-model="schedule.startDate" mask="date" outlined dense type="date">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="input-wrapper">
              <div class="label">Start Time</div>
              <div class="time-picker">
                <q-input v-model="schedule.startTime" mask="time" outlined dense type="time">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer" />
                  </template>
                </q-input>
              </div>
            </div>
  
            <div class="input-wrapper">
              <div class="label">End Date</div>
              <div class="date-picker">
                <q-input v-model="schedule.endDate" mask="date" outlined dense type="date">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="input-wrapper">
              <div class="label">End Time</div>
              <div class="time-picker">
                <q-input v-model="schedule.endTime" mask="time" outlined dense type="time">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn label="Cancel" color="white" text-color = "black" @click="closeDialog" />
            <q-btn label="Add" text-color = "white" @click="saveSchedule" />
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
import { QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MonthNoOutsideDays',
  components: {
    QCalendarMonth
  },
  data() {
    return {
      selectedDate: today(),
      dialogVisible: false,
    }
  },
  methods: {
    onToday() {
      this.$refs.calendar.moveToToday()
    },
    onPrev() {
      this.$refs.calendar.prev()
    },
    onNext() {
      this.$refs.calendar.next()
    },
    onMoved(data) {
      console.log('onMoved', data)
    },
    onChange(data) {
      console.log('onChange', data)
    },
    onClickDate(data) {
      console.log('onClickDate', data)
    },
    onClickDay(data) {
      console.log('onClickDay', data)
    },
    onClickWorkweek(data) {
      console.log('onClickWorkweek', data)
    },
    onClickHeadDay(data) {
      console.log('onClickHeadDay', data)
    },
    onClickHeadWorkweek(data) {
      console.log('onClickHeadWorkweek', data)
    },
    openDialog() {
        this.dialogVisible = true;
    },
    closeDialog() {
        this.dialogVisible = false;
    },
    saveSchedule() {
        this.closeDialog();
    },
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.button-container {
  display:inline-flex;
  margin-right: 10px;
}

.nav-button {
  background-color: white;
  margin-right: 10px;
  margin-left:10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.calendar-wrapper {
  flex: 1;
}

.q-btn {
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    background-color: #ffaa2b;
    color: black;
  }

  .dialog {
    width: 500px;
  }
  
</style>