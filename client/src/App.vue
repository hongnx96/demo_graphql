<template>
<div class="container">
    <div class="row">
        <div class="col-9">
            <table class="table table-bordered mt-3 mb-5">
                <thead>
                    <tr style="border-bottom-width: revert">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Books</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(author, index) in authors' :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ author.name }}</td>
                        <td>{{ author.age }}</td>
                        <td>
                            <ul v-for="(book, index) in author.books" :key="index">
                                <li>{{ book.name }}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-3">
            <form class="pt-5">
                <div class="form-group pb-2">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control mt-1" aria-describedby="emailHelp" placeholder="Enter name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="text" class="form-control mt-1" placeholder="Enter age" v-model="age">
                </div>
                <button type="button" class="btn btn-primary mt-2" @click="createAuthor(name, age)">Add</button>
            </form>
        </div>
    </div>    
</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'App',
    data() {
        return {
            name: '',
            age: '',
        }
    },
    apollo: {
        authors: gql `query {
            authors {
                name,
                age,
                books {
                    name
                }
            }
        }`,
    },
    methods: {
        createAuthor(name, _age) {
            //console.log(this.$apollo.queries.authors);

            const age = parseInt(_age)
            this.$apollo.mutate({
                mutation: gql `mutation createAuthor($name: String!, $age: Int!) {
                    createAuthor(name: $name, age: $age) {
                        name,
                        age
                    }
                }`,
                variables: {
                    name: name,
                    age: age
                }
            })
            location.reload()
        }
    }
}
</script>

<style scoped>
    /* table {
        border-collapse: inherit;
    } */
</style>
