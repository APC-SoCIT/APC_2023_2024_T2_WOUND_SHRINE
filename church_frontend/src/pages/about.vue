<template>
  <div>
    <h2>ABOUT</h2>
  </div>

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

  <!-- Vision and Mission Section -->
  <div class="vision-mission-container">
    <div class="vision-mission-item">
      <h4 style="text-align: left;">VISION</h4>
      <h5 style="text-align: left;">English:</h5>
      <p style="text-align: justify; color: white;">
        ... (English content) ...
      </p>
      <h5 style="text-align: left; margin-top: 20px;">Tagalog:</h5>
      <p style="text-align: justify; color: white;">
        ... (Tagalog content) ...
      </p>
    </div>
    <div class="vision-mission-item">
      <h4 style="text-align: left;">MISSION</h4>
      <h5 style="text-align: left;">English:</h5>
      <p style="text-align: justify; color: white;">
        ... (English content) ...
      </p>
      <h5 style="text-align: left; margin-top: 20px;">Tagalog:</h5>
      <p style="text-align: justify; color: white;">
        ... (Tagalog content) ...
      </p>
    </div>
  </div>
  <!-- End of Vision and Mission Section -->

  <!-- Contact Section -->
  <div class="contact-container">
    <h2>CONTACT</h2>
    <div class="contact-details">
      <p><strong>Name:</strong> Shrine of the Five Wounds of Our Lord Jesus Christ</p>
      <p><strong>Address:</strong> 364 Real Street, Talon I, Las Pinas, 1747 Metro Manila</p>
      <p><strong>Tel Num:</strong> (Your Telephone Number)</p>
      <p><strong>FB Page:</strong> <a href="https://www.facebook.com/yourpage">Your Facebook Page</a></p>
    </div>
  </div>
  <!-- End of Contact Section -->

  <!-- MAP Section -->
  <div class="map-container">
    <h2>MAP</h2>
    <img src="/path-to-your-map-image.jpg" alt="Map of the location" style="width: 100%; max-width: 800px;">
  </div>
  <!-- End of MAP Section -->
</template>

<script>
export default {
  // Add any component options if needed
};
</script>

<style scoped>
/* Styles for all components */

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

h2 {
  margin: auto;
  margin-top: 30px;
  text-align: center;
  color: #ffaa2b;
}

.vision-mission-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  color: #ffaa2b;
}

.vision-mission-item {
  flex: 1;
  border-radius: 5px;
  padding: 15px;
}

.vision-mission-item h4, .vision-mission-item p {
  margin: 0;
}

.vision-mission-item p {
  text-align: justify;
}

.contact-container, .map-container {
  text-align: center;
  margin-top: 50px;
}

.contact-details {
  margin-top: 20px;
  color: white;
  text-decoration: white;
  
}
.contact-details a:hover {
  text-decoration: underline; /* Add underline on hover for better UX */
}

</style>
