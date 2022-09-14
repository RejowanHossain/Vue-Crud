<template>
    <nav class="navbar navbar-dark bg-success navbar-expand-sm ">
        <div class="container">
            <router-link to="/" class="navbar-brand">Vue Contact Manager</router-link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/contacts">All Contacts</router-link>
                </li>
                </ul>

            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>