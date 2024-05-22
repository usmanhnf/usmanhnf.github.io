---
layout: page
permalink: /testbook/
---
<style>
    /* Style for the container */
    .container {
         border: 1px solid #ddd;
        background-color: #f9f9f9;
        display: flex;
        justify-content: space-between;
        font-family: Arial, sans-serif;
    }
    h1 {
  text-shadow: 0 0 2px #140000;
}

    /* Style for the columns */
    .column {
        padding: 20px; /* Add some padding for spacing */
    }

    /* Style for the left container */
    .left-container {
        width: 20%; /* 20% width for the left container */
        position: sticky;
        top: 20px; /* Adjust top offset as needed */
        overflow-y: auto;
        height: calc(100vh - 40px); /* Subtract top and bottom padding */
        
    }

    /* Style for the right container */
    .right-container {
        width: 80%; /* 80% width for the right container */
    }
    

    /* Style for the sidebar */
    .sidebar {
        margin-top: 20px;
        background-color: #f2f2f2;
        padding: 10px;
        border-radius: 5px;
        font-size: 12px;
        border: 1px solid #ddd;
    }

    .sidebar ul {
        list-style-type: none;
        padding: 0;
    }

    .sidebar li {
        margin-bottom: 10px;
    }

    .sidebar a {
        text-decoration: none;
        color: #333;
    }

    .sidebar a:hover {
        color: #000;
    }

    /* Style for the headings */
    .sidebar h2 {
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    /* Style for CV content */
    .book-content {
        margin-bottom: 20px;
    }

    .book-content h2 {
        font-size: 14px;
        border-bottom: 2px solid #333;
        padding-bottom: 5px;
    }

    .book-content h3 {
        font-size: 12px;
    }

    .book-content ul {
        margin-top: 10px;
        padding-left: 20px;
        font-size: 12px;
    }

    .book-content li {
        margin-bottom: 5px;
    }
.badge-container {
    display: inline-block;
    font-family: "Times New Roman", Times, serif; /* Change font to Times New Roman */
    font-size: 12px;
    font-weight: normal;
    border-radius: 4px; /* Adjust border-radius as needed for roundness */
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect to the text */
}
.content {
    display: inline-block;
    padding: 1px 5px;
    margin-right: 0; /* Remove margin between elements */
}
.doi {
    background-color: #5C5C5C;
    color: #fff;
}
.badgepub {
    background-color: #0F81C1;
    color: #fff;
}
.yearbadge {
    font-family: "Times New Roman", Times, serif; /* Change font to Times New Roman */
    font-size: 12px;
    background-color: #93E893;
    color: #333333;
    display: inline-block;
    padding: 1px 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect to the text */
    border-radius: 4px; /* Adjust border-radius as needed for roundness */
}
    .badge {
    background-color: #007bff; /* Blue color */
    color: #fff; /* White text color */
    padding: 4px 4px; /* Padding around the text */
    border-radius: 3px; /* Rounded corners */
    font-size: 11px; /* Font size */
}
</style>
<h1 align="center">Book Template</h1>
<div class="container">
    <div class="column left-container">
        <!-- Left Container (Sidebar) -->
        <div class="sidebar">
            <ul>
                <li><a href="#chapter1">Chapter 1</a></li>
                <li><a href="#chapter2">Chapter 2</a></li>
                <li><a href="#chapter3">Chapter 3</a></li>
                <li><a href="#chapter4">Chapter 4</a></li>
                <li><a href="#chapter5">Chapter 5</a></li>
                <li><a href="#chapter6">Chapter 6</a></li>
                <li><a href="#chapter7">Chapter 7</a></li>
                <li><a href="#chapter8">Chapter 8</a></li>
                <li><a href="#chapter9">Chapter 9</a></li>
            </ul>
        </div>
    </div>
    <div class="column right-container">
        <!-- Right Container (Book Content) -->        
        <div class="book-content" id="chapter1">
            <h2>Chapter 1</h2>
            <ul>
            </ul>
        </div>
        <div class="book-content" id="chapter2">
            <h2>Chapter 2</h2>
            <ul>
            <li><span class="badge">This is badge 1</span> <strong>Reviewer</strong>:  Measurement, Elsevier</li>
            <li><span class="yearbadge">This is badge 2</span> <strong>Reviewer</strong>:  Measurement, Elsevier</li>
            </ul>
        </div>
        <div class="book-content" id="chapter3">
            <h2>Chapter 3</h2>
            <ul>
            </ul>
        </div>
        <div class="book-content" id="chapter4">
            <h2>Chapter 4</h2>
            <ul>
            </ul>
        </div>
        <div class="book-content" id="chapter5">
            <h2>Chapter 5</h2>
            <ul>
            </ul>
        </div>
        <div class="book-content" id="chapter6">
            <h2>Chapter 6</h2>
            <ul>
            </ul>
        </div>
        <div class="book-content" id="chapter7">
            <h2>Chapter 7</h2>
            <ul>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            </ul> 
        </div>
        <div class="book-content" id="chapter8">
            <h2>Chapter 8</h2>
            <ul>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            </ul> 
        </div>
        <div class="book-content" id="chapter9">
            <h2>Chapter 9</h2>
            <ul>
            </ul> 
        </div>
      </div>


