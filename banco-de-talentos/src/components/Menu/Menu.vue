<template>
    <h1 class="title">Banco de talentos</h1>
        <ul class="navbar">
            <RouterLink to="/">
                <li class="item-nav">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/home.png" alt="home"/>
                <h3>Home</h3>
            </li>
            </RouterLink>
            <RouterLink to="/about">
                <li class="item-nav">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/info.png" alt="info"/>
                <h3>Sobre</h3>
            </li>                
            </RouterLink>
            <RouterLink to="/talent/new">
                <li class="item-nav">
                    <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/000000/task.png" alt="task"/>
                <h3>Cadastro</h3>
            </li>
            </RouterLink>
        </ul>
</template>

<style>
:root {
    font-family: sans-serif;
}

.title {
    font-size: 32px;
    font-weight: bold;
    color: rgb(6, 121, 73);
    text-align: center;
    margin-left: 50px;
}

.navbar {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 20px;
}

.item-nav {
    display: flex;
    padding: 5px;
    gap: 8px;
    align-items: center;

    color: rgb(36, 201, 44);

    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>