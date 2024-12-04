---
layout: page
permalink: /blogtest/
---

<div class="container">
        <div class="box left-box">
            <p>Left Container</p>
        </div>
        <div class="box right-box">
            <p>Right Container</p>
        </div>
    </div>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.container {
    display: flex;
    width: 90%;
    max-width: 1200px;
    gap: 2%; /* Space between containers */
}

.box {
    flex: 1; /* Equal flex size to start with */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.left-box {
    background-color: #e0f7fa; /* Customize left container color */
}

.right-box {
    background-color: #ffecb3; /* Customize right container color */
}

.box:hover {
    transform: scale(1.001);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>