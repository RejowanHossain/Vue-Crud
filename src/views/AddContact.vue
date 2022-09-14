<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 mt-3 text-success fw-bold"> Add Contact</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam recusandae sapiente deleniti fugit suscipit cumque perspiciatis! Iusto, nam placeat!</p>
            </div>
        </div>
    </div>


    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input v-model="contact.name" type="text" class="form-control" placeholder="name">
                    </div>

                    <div class="mb-2">
                        <input v-model="contact.photo" type="text" class="form-control" placeholder="Photo Url">
                    </div>

                    <div class="mb-2">
                        <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>

                    <div class="mb-2">
                        <input v-model="contact.mobile" type="text" class="form-control" placeholder="Contact">
                    </div>

                    <div class="mb-2">
                        <input v-model="contact.company" type="text" class="form-control" placeholder="Company">
                    </div>

                    <div class="mb-2">
                        <input v-model="contact.title" type="text" class="form-control" placeholder="Title">
                    </div>

                    <div class="mb-3">
                        <select class="form-control" v-model="contact.group" v-if="groups.length > 0">
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
                        </select>
                    </div>

                    <div>
                        <input type="submit" class="btn btn-success" value="Create">
                    </div>
                </form>
            </div>

            <div class="col-md-8">
                <img class="addContactImg" :src="contact.photo" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '../services/ContactService'
    export default {
        name: "AddContact",
        data: function(){
            return{
                contact: {
                    name: '',
                    photo: '',
                    email: '',
                    mobile: '',
                    company: '',
                    title: '',
                    groupID: '',

                },

                groups: [],
            }
        },

        created: async function(){
            try{   
                let response = await ContactService.getAllGroups();
                this.groups = response.data

            }catch(error){
                console.log(error)
            }
        },
        methods: {
            submitCreate: async function(){
                try{
                    let response = await ContactService.createContact(this.contact)

                    if(response){
                        return this.$router.push('/')
                    }else{
                        return this.$router.push('/contacts/add')
                    }

                }catch(error){
                    console.log(error)
                }
            }
        }
    
    }
</script>

<style>
.addContactImg{
    width: 250px;
}
</style>