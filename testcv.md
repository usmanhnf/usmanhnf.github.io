---
layout: default
Title: Testcv
permalink: /testcv/
published: true
---


<style>
/* CSS styles for projects page */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  font-family: Arial, sans-serif;
}

  .sub-title {
    margin-bottom: 10px;
    text-shadow: 0 0 2px #140000;
  }

.project {
  border-style: ridge;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease;
  cursor: pointer;
}

.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.project.full-width {
  width: calc(100% - 40px); /* Subtracting padding */
  grid-column: span 3;
}

.project h2 {
  margin-top: 0;
  font-size: 16px;
}

.project p {
  margin-bottom: 10px;
  font-size: 12px;
}

.project img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.project a {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 15px;
  text-decoration: none;
  border-radius: 3px;
}

/* CSS styles for expanded project details */
.project-details {
  display: none;
}

.project.active .project-details {
  display: block;
}

/* CSS styles for project summary section */
.project-summary-container {
  margin-top: 0px;
}

.project-summary {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2px;
  margin-bottom: 5px;
}

.project-border {
  border: none;
  border-radius: 0px;
  padding: 0px;
  margin-bottom: 0px;
}

.project-summary summary {
  cursor: pointer;
  padding: 0px;
  background-color: #f5f5f5;
  transition: background-color 0.3s ease;
}

.project-summary summary:hover {
  background-color: #e0e0e0;
}

.project-summary ul {
  list-style-type: none;
    font-family: Arial, sans-serif;
  font-size: 12px;
  padding: 0;
  margin: 0;
}

.project-summary li {
  margin-bottom: 0px;
  padding-left: 20px; /* Adjust the indent here */  
}

/* CSS styles for expanded project summary */
.project-summary[open] details {
  border-color: #007bff;
}

      h1 {
  text-shadow: 0 0 2px #140000;
      }



      
.badge {
    background-color: #555555; /* Blue color */
    color: #f7f7f7; /* White text color */
    padding: 2px 2px; /* Padding around the text */
    border-radius: 2px; /* Rounded corners */
    font-size: 12px; /* Font size */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Adding shadow effect */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add shadow effect to the text */
    
}

</style>

<h1 align="center">Research (Under Construction)</h1>

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
    <img src="/assets/images/project2.jpg" alt="Project 2">
    <h2>Prototype Bridge - A testbed for structural health monitoring systems</h2>
    <progress value="65" max="100"></progress>
    <p>A portfolio website showcasing my work, skills, and experiences.</p>
    <div class="project-details">
      <p>Additional details about Project 2...</p>
    </div>
  </div>
  
  <div class="project">
    <h1 align="center"><img src="/assets/images/Projects/p1.jpg" alt="Project 1"></h1>
    <h2>Numerical Modeling of Horizontal Joints</h2>
    <progress value="100" max="100"></progress>
    <p>This is my personal blog where I share my thoughts on various topics.</p>
    <div class="project-details">
    <h2>Further details of the project</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <p style="text-align:center;"><img src="/assets/images/research/rapid.png" alt="Gene expression programming" width="500"></p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
  </div>

 

  
</div>

<ul></ul>

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

  <div class="project-summary">
  <details class="project-border">
    <summary><span class="badge">2021</span> Damage assessment of reinforced concrete beams based on plasticity approach</summary>
    <ul>
                    <p>Author: <i>Farooq Ahmed Athar</i></p>
                    <p><b>Abstract:</b> Utilizing a large numbers of specimens in full-scaled experimental testing to study the behaviour of precast concrete connections can be expensive. An alternative is to cast and carry out a minimal number of experimental tests and then model the connection/structure in a finite element software. The FE model can be validated using the few experimental tests carried out, and FEA can be used to analyze and study the behaviour of the structure. Once validated, further parametric study can be carried out on the FE model. However, the modelling of precast concrete column-to-beam connection has not been explored widely by researchers. One of the main challenges is that modelling precast concrete connection involves complex surface to surface interaction and there is a lack of efficient ways on the modelling of the precast and in-situ concrete surface to surface interaction in finite element software. Hence, the main objective of this research is to model a hidden corbel precast beam-to-column connection in a finite element software, ABAQUS, which is then validated using the proposed precast connection and experimental works by Mokhtar (2017). Initially, the FE model was develop based on the technical drawings of the components and assembly of the precast connection. The FE model is validated when it can simulate similar structural behavior as the experimental tests. The behavior that were used for comparison with the experimental work is the moment–rotation, load–displacement, and the failure cracks patterns’ behavior. In general, the FE model results show similar behaviour with the experimental results, particularly on the load-displacement curve and failure cracks patterns. In addition, using the fixity factor, the connections were also classified as semirigid joint.</p>
                    <p style="text-align:center;"><img src="/assets/images/research/Corbel.png" alt="Corbel computational model picture" width="600"></p>
    </ul>
    </details>
  </div>  
</div>

<ul></ul>

<h3 class="sub-title">Undergraduate Research</h3>

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

  <div class="project-summary">
  <details class="project-border">
    <summary><span class="badge">2021</span> Damage assessment of reinforced concrete beams based on plasticity approach</summary>
    <ul>
                    <p>Author: <i>Farooq Ahmed Athar</i></p>
                    <p><b>Abstract:</b> Utilizing a large numbers of specimens in full-scaled experimental testing to study the behaviour of precast concrete connections can be expensive. An alternative is to cast and carry out a minimal number of experimental tests and then model the connection/structure in a finite element software. The FE model can be validated using the few experimental tests carried out, and FEA can be used to analyze and study the behaviour of the structure. Once validated, further parametric study can be carried out on the FE model. However, the modelling of precast concrete column-to-beam connection has not been explored widely by researchers. One of the main challenges is that modelling precast concrete connection involves complex surface to surface interaction and there is a lack of efficient ways on the modelling of the precast and in-situ concrete surface to surface interaction in finite element software. Hence, the main objective of this research is to model a hidden corbel precast beam-to-column connection in a finite element software, ABAQUS, which is then validated using the proposed precast connection and experimental works by Mokhtar (2017). Initially, the FE model was develop based on the technical drawings of the components and assembly of the precast connection. The FE model is validated when it can simulate similar structural behavior as the experimental tests. The behavior that were used for comparison with the experimental work is the moment–rotation, load–displacement, and the failure cracks patterns’ behavior. In general, the FE model results show similar behaviour with the experimental results, particularly on the load-displacement curve and failure cracks patterns. In addition, using the fixity factor, the connections were also classified as semirigid joint.</p>
                    <p style="text-align:center;"><img src="/assets/images/research/Corbel.png" alt="Corbel computational model picture" width="600"></p>
    </ul>
    </details>
  </div>  
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


