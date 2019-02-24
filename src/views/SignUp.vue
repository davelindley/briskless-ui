<template>
    <v-container>
        <v-layout>
            <v-flex>
                <p>Create an account!</p>
                <input placeholder="email" type="text">
                <input placeholder="password" type="password">
                <v-btn>Sign Up</v-btn>
                <span>or go back to Login</span>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		name: "SignUp"
	}
</script>

<style scoped>

</style>