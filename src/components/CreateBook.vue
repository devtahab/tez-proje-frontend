<template>
    <div class="add-product">

        <div class="form">

            <h1>Kitap Ekle</h1>

            <form class="row g-3">
                <div class="col-md-6">
                    <label for="product_brand" class="form-label">İsim</label>
                    <input type="text" class="form-control" id="product_brand" v-model="book.name">
                </div>
                <div class="col-md-6">
                    <label for="product_model" class="form-label">ISBN</label>
                    <input type="text" class="form-control" id="product_model" v-model="book.isbn">
                </div>
                <div class="col-md-6">
                    <label for="product_case_color" class="form-label">Publisher</label>
                    <input type="text" class="form-control" id="product_case_color" v-model="book.publisher">
                </div>
                <div class="col-md-6">
                    <label for="product_case_shape" class="form-label">Published Year</label>
                    <input type="number" class="form-control" id="product_case_shape" v-model="book.publishedYear">
                </div>
                <div class="col-md-6">
                    <label for="product_color" class="form-label">Genre</label>
                    <input type="text" class="form-control" id="product_color" v-model="book.genre">
                </div>
                <div class="col-md-6">
                    <label for="product_cord" class="form-label">Description</label>
                    <input type="text" class="form-control" id="product_cord" v-model="book.description">
                </div>

                <div class="col-md-6">
                    <label for="product_cord_color" class="form-label">Author Name</label>
                    <input type="text" class="form-control" id="product_cord_color" v-model="book.authorName">
                </div>
                <div class="col-md-6">
                    <label for="product_images" class="form-label">Ürün Resimleri</label>
                    <input type="file" class="form-control" id="product_images" accept="image/*"  @change="handleFileUpload">
                    <div class="image-preview">
                        <img v-if="previewImages.length" :src="previewImages[0]" class="preview-image" />
                    </div>
                </div>
            </form>

            <button type="submit" @click="addBook">Kitabı Ekle</button>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { jwtDecode } from 'jwt-decode';

    export default {
        data() {
            return {
                previewImages: [],
                book: {
                    name: 'Ürün İsmi',
                    isbn: 'abc',
                    isAvailable: true,
                    publisher: 'ben',
                    publishedYear: 1234,
                    authorName: 'ben',
                    imageUrl: null,
                    genre: 'Roman',
                    description: ''
                }
            };
        },
        methods: {
            handleFileUpload(event) {
                this.previewImages = [];
                const file = event.target.files[0];

                if (file) {
                    const path = "/images/";
                    this.book.imageUrl = path + file.name;

                    const reader = new FileReader();
                    reader.onload = e => {
                        this.previewImages.push(e.target.result); // Show image preview
                    };
                    reader.readAsDataURL(file);
                }
            },
            logProduct(){
                console.log(this.book);
            },
            async addBook(){
                try {
                    // let token = jwtDecode(this.$store.state.token);
                    // this.book.userId = token.Id;

                    this.logProduct();

                    let response = await axios.post('http://35.158.197.224/api/book/createbook', this.book,
                        // {
                        //     headers: {
                        //         Authorization: `Bearer ${this.$store.state.token}`
                        //     }
                        // }
                    );

                    console.log(response.data);
                    alert("Ürününüz başarıyla eklendi!")
                } catch (error) {
                    console.error(error);
                    alert("Bir hata oluştu");
                }
            }
        },
        // beforeMount(){
        //     if(!this.$store.state.token){
        //         this.$router.push('/login');
        //     }
        // }
    };
</script>

<style scoped>
    .add-product{
        width: 100%;
        display: flex;
        color: black;
        background-color: whitesmoke;
    }

    /* Form */

    .add-product > .form{
        width: 100%;
        padding: 0 250px 60px;
        /* background-color: yellow; */
    }

    .add-product > .form > h1{
        text-align: center;
        font-weight: 400;
        padding: 40px;
    }

    .add-product > .form > button{
        width: 180px;
        height: 50px;
        margin-top: 50px;
        font-size: 20px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-self: center;
        border: 1px solid #DE6449;
        border-radius: 5px;
        color: white;
        background-color: #DE6449;
        transition: 0.2s;
    }

    .add-product > .form > button:hover{
        border: 1px solid #DE6449;
        color: #DE6449;
        background-color: white;
    }

    .add-product > .form > form{
        padding: 20px 20px 40px;
        background-color: #e5e5e5;
    }

    .add-product > .form > form > div > label{
        font-size: 20px;
    }

    .image-preview {
        padding: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        row-gap: 10px;
        flex-wrap: wrap;
        /* background-color: yellow; */
    }

    .preview-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border: 2px solid white;
    }

    #product_gender{
        font-size: 18px;
    }
</style>