<template>
    <v-container>
        <v-layout align-center row wrap>
            <v-flex>
                <h3>Sign In</h3>
                <input placeholder="email" type="text"><br>
                <input placeholder="password" type="password"><br>
                <v-btn>Connection</v-btn>
                <p>Don't have an account? Create One</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		name: "Login",

		data() {
			return {}
		},
		methods: {}
	}
</script>

<style scoped>

</style>