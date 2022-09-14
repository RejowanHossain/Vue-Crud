<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 mt-3 text-success fw-bold"> View Contact</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam recusandae sapiente deleniti fugit suscipit cumque perspiciatis! Iusto, nam placeat!</p>
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


        <div class="row" v-if="!loading">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Email</th>
                    <th scope="col">Company</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Group</th>
                    </tr>
                </thead>
                <tbody>

                   
                    <tr>
                        <th scope="row">1</th>
                        <td>{{contact.name}}</td>
                        <td>
                            <img :src="contact.photo" alt="photo">
                        </td>
                        <td>{{contact.email}}</td>
                        <td>{{contact.company}}</td>
                        <td>{{contact.mobile}}</td>
                        <td>{{contact.group}}</td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div class="row mt-3">
            <div class="col-md-4">
                <router-link to="/" class="btn  btn-sm btn-success">Back</router-link>
            </div>
        </div>
    </div>

</template>

<script>
import { ContactService } from '../services/ContactService';
import Spinner from '../components/Spinner.vue';
    export default {
    name: "ViewContact",
    components: { Spinner },
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {},
            group: [],
            errorMessage: null,
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            // let groupResponse = await ContactService.getGroup(response.data);
            this.contact = response.data;
            // this.group = groupResponse.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
}

</script>

<style>
td img{
    width: 25px;
}
</style>