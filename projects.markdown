---
layout: page
permalink: /projects/
---
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>{{ page.title }}</title>
  <style>
    /* Styles for the grid layout */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* 2 columns grid */
      gap: 10px;
    }

    /* Adjust for smaller screens */
    @media (max-width: 768px) {
      .grid-container {
        grid-template-columns: 1fr; /* 1 column grid for very small screens */
      }
    }

    .project-box {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;
      max-height: 175px; /* Allow room for the image and some padding */
      overflow: hidden;
      background-color: #f9f9f9;
      text-align: center;
      position: relative;
      grid-column: span 1; /* Default span 1 column */
    }

    .project-box:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .project-box.expanded {
      max-height: none; /* Remove max-height when expanded */
      grid-column: span 2; /* Expand to full width */
    }

    .project-image {
      width: 100%;
      height: auto;
      max-height: 125px; /* Controlled height in collapsed state */
      object-fit: cover; /* Maintain aspect ratio */
      filter: grayscale(100%); /* Apply black-and-white effect */
      transition: all 0.3s ease;
    }

    .project-box:hover .project-image {
      filter: grayscale(0%); /* Remove black-and-white effect on hover */
    }

    .project-box.expanded .project-image {
      max-height: 500px; /* Maximum height when expanded */
      width: 60%; /* Center image */
      margin: 0 auto; /* Center the image */
    }

    .project-title {
      margin: 10px 0; /* Add space around the title */
      font-size: 1.2em; /* Adjust font size as needed */
    }

    .project-details {
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity 0.5s ease, transform 0.5s ease;
      margin-top: 10px;
      display: none;
      text-align: left; /* Align text to left */
    }

    .project-box.expanded .project-details {
      opacity: 1;
      transform: translateY(0);
      display: block;
    }
  </style>
</head>
<body>
  <h1>{{ page.title }}</h1>
  <div class="grid-container">
    {% for project in site.data.projects %}
      <div class="project-box" onclick="toggleProjectDetails(this)">
        <img src="{{ '/assets/images/projects/' | append: project.image }}" alt="{{ project.title }}" class="project-image">
        <h2 class="project-title">{{ project.title }}</h2>
        <div class="project-details">
          <p><strong>Introduction:</strong> {{ project.introduction }}</p>
          <p><strong>Objectives:</strong> {{ project.objectives }}</p>
          <p><strong>Start Date:</strong> {{ project.start_date }}</p>
          <p><strong>Duration:</strong> {{ project.duration }}</p>
        </div>
      </div>
    {% endfor %}
  </div>

  <script>
    function toggleProjectDetails(element) {
      const isExpanded = element.classList.contains('expanded');
      document.querySelectorAll('.project-box').forEach(box => {
        box.classList.remove('expanded');
      });

      if (!isExpanded) {
        element.classList.add('expanded');
      }
    }
  </script>
</body>
</html>
