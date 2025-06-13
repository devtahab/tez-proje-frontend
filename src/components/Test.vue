<template>
    
</template>

<script>
    import axios from 'axios';
    import { jwtDecode } from 'jwt-decode';

    export default{
        data(){
            return{

            }
        },
        methods: {
            async getSeats(){
                let response = await axios.get("http://35.158.197.224/api/seat/get-seat-list");
                console.log(response.data.data);
            }
        },
        mounted(){
            this.getSeats();
        }
    }
</script>

<style scoped>

</style>