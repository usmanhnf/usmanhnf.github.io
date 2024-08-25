---
layout: page
permalink: /research_test/
---
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Progress Bar</title>
    <style>
        /* Basic body styling */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
        /* Container for the progress bar */
        .progress-container {
            width: 80%;
            max-width: 400px;
            margin: 0 auto;
        }
        /* Styling the progress bar */
        progress {
            width: 100%;
            height: 25px;
            border-radius: 10px;
            overflow: hidden;
            background-color: #e0e0e0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            appearance: none;
        }
        /* Customizing the progress value for different browsers */
        progress::-webkit-progress-bar {
            background-color: #e0e0e0;
        }
        progress::-webkit-progress-value {
            background-color: #4caf50;
            border-radius: 10px 0 0 10px;
        }
        progress::-moz-progress-bar {
            background-color: #4caf50;
            border-radius: 10px 0 0 10px;
        }
    </style>
</head>
<body>

    <div class="progress-container">
                <progress value="{{ task.progress }}" max="100"></progress>
    </div>

</body>
</html>
