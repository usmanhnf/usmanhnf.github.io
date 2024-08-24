---
layout: page
permalink: /research_test/
---
<h2> Projects </h2>
<div class="projects">
    <div class="project">
        <img src="/assets/images/project3.jpg" alt="Project 3">
        <h2>Acoustic Emission monitoring of CFRP concrete composites</h2>
        <progress value="50" max="100"></progress>
        <p>An online store selling various products with payment integration.</p>
        <div class="project-details">
            <p>Additional details about Project 3...</p>
        </div>
    </div>
    <div class="project">
        <img src="/assets/images/project3.jpg" alt="Project 3">
        <h2>Acoustic Emission monitoring of CFRP concrete composites</h2>
        <progress value="50" max="100"></progress>
        <p>An online store selling various products with payment integration.</p>
        <div class="project-details">
            <p>Additional details about Project 3...</p>
        </div>
    </div>
    <div class="project">
        <img src="/assets/images/project3.jpg" alt="Project 3">
        <h2>Acoustic Emission monitoring of CFRP concrete composites</h2>
        <progress value="50" max="100"></progress>
        <p>An online store selling various products with payment integration.</p>
        <div class="project-details">
            <p>Additional details about Project 3...</p>
        </div>
    </div>
</div>

<h2 class="sub-title">Research Dissertations</h2>

<h3 class="sub-title">Graduate Research</h3>

<div class="project-summary-container">
  <div class="project-summary">
  <details class="project-border">
    <summary><span class="badge">2021</span> Development of Rapid Runway Repair Strategies Using Gene Expression Programming</summary>
    <ul>
                    <p>Authors: <i>Muhammad Mubeen, Hamza Naveed, Qudees Tariq Kayani</i></p>
                    <p><b>Abstract:</b> The Airport infrastructure including approach runways, taxiways, and aprons is the most important and extremely sensitive target to be attacked by the enemy during warfare. Damage to airfield pavements from sophisticated enemy munitions threatens sustained aircraft sorties until the airfield is repaired. Bombing infuses large craters into the airfield infrastructures approaching 20 feet in width. Timely repair to immediately resume the flight operations is the topmost concern of the scenario. Numerous research in terms of materials, equipment, and techniques are globally practiced in the backfill of craters followed by the placement of crown as prefabricated modular elements or in-situ repair with rapid setting and rapid hardening grout. However, there are multiple associated parameters with local conditions that enforce an optimized solution for a particular site. The project aims to analyze all the available alternatives to extract an optimal solution for the restoration of airfields back on operational status following an enemy attack. In this study, Gene Expression Programming (GEP) was used to derive a predictive model of One-Day Compressive Strength of Rapid Hardening Concrete (RHC) mixes. The first objective of developing a database was achieved by doing an extensive literature review of the internationally published research studies. The database contains 115 different data points of 13 numerical variables. Randomly shuffled, 74% of the data was used for the training of the GEP model while the remaining 26% of data was utilized for the validation of the model. GeneXproTools 5.0 were used in our analysis. GEP Regression Analysis was used with function finding analysis in GeneXPro tools. Various quantitative and qualitative were observed during the analysis i.e., R-Squared Value, Mean Absolute Error (MAE), regression plot, residual plot, variable importance, etc. GEP was observed to be an excellent tool in evaluating and constructing statistical models for the compressive strength of RHC. The derived models can be used in the practical pre-planning phase and pre-design phase in terms of a wide range of cementitious materials, admixtures, and additives.  </p>
                    <p style="text-align:center;"><img src="/assets/images/research/rapid.png" alt="Gene expression programming" width="500"></p>
    </ul>
    </details>
  </div>



<script>
// JavaScript to toggle active class for project details and full width
document.querySelectorAll('.project').forEach(item => {
  item.addEventListener('click', event => {
    // If the clicked project is already active, remove the active and full-width classes
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      item.classList.remove('full-width');
    } else {
      // Remove active class from all projects
      document.querySelectorAll('.project').forEach(project => {
        project.classList.remove('active');
        project.classList.remove('full-width');
      });
      
      // Add active class to clicked project
      item.classList.add('active');
      item.classList.add('full-width');
    }
  });
});

// JavaScript to toggle active class for project summary
document.querySelectorAll('.project-summary').forEach(item => {
  item.addEventListener('click', event => {
    // Close all other summaries
    document.querySelectorAll('.project-summary').forEach(summary => {
      if (summary !== item) {
        summary.removeAttribute('open');
      }
    });
  });
}); 
</script>
