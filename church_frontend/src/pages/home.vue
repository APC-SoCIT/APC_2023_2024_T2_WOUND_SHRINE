<template>
  <div>
    <!-- Existing content above -->
    <div class="menu">
      <main>
        <div class="logo-info-container">
          <!-- Logo placed beside the name -->
          <q-img 
            src="/img/logo.png" 
            lazy-src="/img/logo.png"
            height="255px"  
            style="max-width: 290px; margin-right: 20px; border-radius: 50%;"
          />
          <div class="info">
            <h3>SHRINE OF THE FIVE WOUNDS OF OUR LORD JESUS CHRIST</h3>
            <h4>364 Real Street, Talon I, Las Pinas, 1747 Metro Manila</h4>
          </div>
        </div>
      </main>
    </div>

    <!-- New Content Section -->
    <div class="image-message-section">
      <!-- Centering the content vertically -->
      <div class="centered-content">
        <!-- Image on the left -->
        <div class="image-container">
          <q-img 
            src="/img/logo.png" 
            lazy-src="/img/logo.png"
            height="400px"
            style="max-width: 300px; border-radius: 8px;"
          />
        </div>
        
        <!-- Message on the right -->
        <div class="message">
          <h3>Title of the Message</h3>
          <p  style="text-align: justify;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
    </div>

    <!-- Existing content below -->
    <p>Welcome to our website!</p>
  </div>
</template>

<style>
/* Existing styles ... */

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 20em;
  width: 90%;
  background-color: #ffaa2b;
  margin: auto;
  margin-top: 30px;
}

.logo-info-container {
  display: flex;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  display: inline;
  color: black;
}

/* Styles for the new content section */
.image-message-section {
  display: flex;
  justify-content: center;
  align-items: center; /* Center content vertically */
  margin-top: 40px;
}

.centered-content {
  display: flex;
  align-items: center; /* Center content vertically */
}

.image-container {
  margin-right: 20px; /* Space between image and message */
}

.message {
  flex: 1;
  color: black;
}

.message h3 {
  margin-top: 0;
}

.message p {
  text-align: justify;
}
</style>
