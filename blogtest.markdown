---
layout: page
permalink: /blogtest/
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My CV</title>
  <style>
    /* Global styles */
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        color: #111;
        line-height: 1.3;
        margin: 0;
        padding: 0;
        font-size: 11pt;
    }

    .cv-container {
        width: 21cm;
        min-height: 29.7cm; /* A4 height */
        padding: 2cm;
        box-sizing: border-box;
    }

    /* Headings */
    h1 {
        font-size: 20pt;
        margin-bottom: 0.2em;
    }

    h2 {
        font-size: 14pt;
        margin-top: 1em;
        margin-bottom: 0.3em;
        border-bottom: 1px solid #000;
        padding-bottom: 0.1em;
    }

    h3 {
        font-size: 12pt;
        margin: 0.2em 0;
    }

    /* Paragraphs & Lists */
    p, ul, li {
        margin: 0.2em 0;
    }

    ul {
        padding-left: 1em;
    }

    /* Inline links */
    a {
        text-decoration: none;
        color: #111;
    }

    /* Print/PDF settings */
    @media print {
        body {
            margin: 0;
            font-size: 11pt;
        }
        .cv-container {
            padding: 1.5cm;
            width: auto;
            min-height: auto;
        }
        a[href]:after {
            content: " (" attr(href) ")";
            font-size: 90%;
        }
    }
  </style>
</head>
<body>
  <main class="cv-container">

    <h1>Your Name</h1>
    <p>
      <strong>Email:</strong> your.email@example.com | 
      <strong>Phone:</strong> +12 345 678 910 | 
      <strong>LinkedIn:</strong> linkedin.com/in/yourname | 
      <strong>GitHub:</strong> github.com/yourusername
    </p>

    <h2>Profile</h2>
    <p>Concise one or two lines about your background, key skills, and career focus.</p>

    <h2>Experience</h2>
    <h3>Job Title – Company Name <em>(Month Year – Month Year)</em></h3>
    <ul>
      <li>Achievement or responsibility 1</li>
      <li>Achievement or responsibility 2</li>
    </ul>
    <h3>Job Title – Company Name <em>(Month Year – Month Year)</em></h3>
    <ul>
      <li>Achievement or responsibility 1</li>
      <li>Achievement or responsibility 2</li>
    </ul>

    <h2>Education</h2>
    <p><strong>Degree – University Name</strong> <em>(Year – Year)</em></p>

    <h2>Skills</h2>
    <p>Skill 1 • Skill 2 • Skill 3 • Skill 4 • Skill 5</p>

    <h2>Projects</h2>
    <p><strong>Project Name</strong> – Short description or link to project.</p>
    <p><strong>Project Name</strong> – Short description or link to project.</p>

  </main>
</body>
</html>
