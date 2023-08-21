import { defineStore } from 'pinia';
// import { jsonEval } from '@firebase/util';
// import { signUp, signIn, signOut } from '~~/composables/useFirebaseAuth';

export const useUserStore = defineStore("user", () => {
     
    const user = ref(null);
    
    // const isAuthenticated = computed(() => {
    //     return user.value !== null
    //     // return !!user.value;
    // })

    // async function signup(userData) {
    //     user.value = await signUp(userData);
    //     return user;
    // }

    // async function signin(userData) {
    //     user.value = await signIn(userData);
    //     return user;
    // }

    // async function signout() {
    //     user.value = await signOut();
    // }

    // return {user, isAuthenticated, signup, signin, signout}
});