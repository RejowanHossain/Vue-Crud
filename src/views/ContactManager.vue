<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold mt-3">Contact Manager</p>
                <router-link to="/contacts/add" class="btn btn-sm btn-success">New <i class="fa fa-plus-circle"></i></router-link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem corporis odio soluta ipsam harum necessitatibus, esse animi saepe! Consequatur eligendi facere neque ut mollitia, voluptatem quo quam delectus doloribus.</p>

                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="search name"/>
                                </div>
                    
                    
                                <div class="col">
                                    <input type="submit" class="btn btn-dark"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
           
            </div>
        </div>
    </div>


    <!-- Spinner -->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Spinner/>
                </div>
            </div>
        </div>
    </div>
    <!-- Spinner -->

    <!-- error  -->
    <div v-if="!loading && errorMessage">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <h2 class="text-danger">{{errorMessage}}</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- error -->
    <div class="container mt-3" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-2">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-2">
                                <img :src="contact.photo" alt="image" class="contact-img">
                            </div>

                            <div class="col-sm-8">
                                <ul class="list-group">
                                    <li class="list-group-item">Name: <span class="fw-bold">{{contact.name}}</span></li>
                                    <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                                    <li class="list-group-item">Contact: <span class="fw-bold">{{contact.mobile}}</span></li>
                                </ul>
                            </div>

                            <div class="col-sm-2 d-flex flex-column justify-content-around justify-content-center align-items-center">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-success mb-2"><i class="fas fa-eye"></i></router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary mb-2"><i class="fas fa-pen"></i></router-link>
                                <button class="btn btn-danger" @click="deleteContact(contact.id)"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '../services/ContactService';
import Spinner from '../components/Spinner.vue';

    export default {
    name: "ContactManager",
    components: { Spinner },
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await this.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        getAllContacts: async function () {
            return await ContactService.getAllContacts();
        },

        deleteContact: async function(contactId){
            try{
                this.loading = true;
                let response = await ContactService.deleteContact(contactId);

                if(response){
                    let response = await this.getAllContacts();
                    this.contacts = response.data;
                    this.loading = false;
                }
            }catch(error){
                this.errorMessage = error;
                this.loading = false;
            }
            
    },
    
    }
}
</script>

<style>
.contact-img{
    width: 50px;
    border-radius: 50%;
}
</style>